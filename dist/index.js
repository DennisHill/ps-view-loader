const server = require("ps-request"),
  log = require("proudsmart-log")(),
  { tree, random } = require("ps-ultility"),
  workpath = process.cwd(),
  pathLib = require("path"),
  psfile = require("ps-file");
let req = server("http://36.110.36.118:11780/api/rest/post/"),
  userLoginUIService = req.service("userLoginUIService"),
  resourceUIService = req.service("resourceUIService"),
  viewFlexService = req.service("viewFlexService");
userLoginUIService.post("login", ["baowu_steel", "abc123"]).then( d => {
  let views = [], foler = psfile(pathLib.resolve(workpath)), inx = 0;
  return ( foler.exist("./app-views")
    ? error("error") : foler.mkdir("app-views")).then( folder => {
    return viewFlexService.post("getAllMyViews").then( d => {
      function load( queue ){
        let item = queue.shift();
        if( item ){
          log.info( `start ${ inx++ } to load dashboard view : [ ${item.viewTitle} ] - ${item.viewId}` );
          return viewFlexService.post("getViewById", item.viewId).then( d => {
            let json = JSON.parse( d.content ),
              groups = ( json ? json.groups : [] ) || [{ path : "index", layout :json.layout }];
            return folder.mkdir( d.viewId ).then( folder => {
              return Promise.all(groups.map( ({ path, layout }) => {
                return ( folder.exist( path ) ? folder.mkdir( path + "_" ) : folder.mkdir( path ) ).then( folder => {
                  let arr = [], map = [];
                  tree("children").forEach(layout, (n,i,p,pl) => {
                    let exp = n.advance && n.advance.expression || "", name = `./${n.type}_${arr.length}`, hash = random(), match;
                    if( exp.length > 300){
                      match = new RegExp("^([^{]*)\\{", "g").exec(exp);
                      if( match ){
                        exp = exp.slice(match[1].length);
                      } else {
                        console.log( exp )
                      }
                      arr.push( [name, `module.exports = ${ exp }`] );
                      map.push({
                        name : hash,
                        exp : "require(\"" + name + ".js\")"
                      })
                      n.advance.expression = `__${hash}__`;
                    }
                  });
                  function replaceExp( str ){
                    let item = map.shift();
                    if( item ) {
                      return replaceExp(str.replace(new RegExp(`\\"__${item.name}__\\"`, "g"), item.exp));
                    } else {
                      return str;
                    }
                  }
                  return Promise.all(arr.map( d => {
                    return folder.write( d[0] + ".js", `/** 仪表板 : [ ${item.viewTitle} ] - ${item.viewId} **/\n${d[1]}`);
                  })).then( d => {
                    return folder.write("json.js", `/** 仪表板 : [ ${item.viewTitle} ] - ${item.viewId} **/
psdefine(${replaceExp(JSON.stringify(layout, null, 2))})`)
                  })

                })
              }))
            })
          }).then( d => {
            log.success(`success : [ ${item.viewTitle} ] - ${item.viewId}`);
            return load( queue );
          });
        }
      }
      return load( d.filter( n => n.viewType == "dashboard")).then( views => {
        return success(views);
      });
    })
  })
}).then( d => {
  log.success(" ---- all view loaded ----");
}).catch( e => {
  console.log( e );
});
function success( d ){
  return new Promise((res,rej) => {
    res( d );
  })
}
function error( d ){
  return new Promise((res,rej) => {
    rej( d );
  })
}