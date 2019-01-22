#!/usr/bin/env node
const { write, build } = require(`./index`);
let arguments = process.argv.slice(2),
  command = arguments.shift(),
  fns = {
    import( ){
      write.apply( null, arguments );
    },
    init( ){
      build.apply( null, arguments )
    }
  },
  fn = fns[command];
typeof fn === "function" ? fn.apply( null, arguments ) : null;