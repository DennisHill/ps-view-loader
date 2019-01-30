#!/usr/bin/env node
const { write, build, saveview, save2role } = require(`./index`);
let arguments = process.argv.slice(2),
  command = arguments.shift(),
  fns = {
    import( ){
      write.apply( null, arguments );
    },
    build( ){
      build.apply( null, arguments );
    },
    save( ){
      saveview.apply( null, arguments );
    },
    save2role( ){
      save2role.apply( null, arguments );
    }
  },
  fn = fns[command];
typeof fn === "function" ? fn.apply( null, arguments ) : null;