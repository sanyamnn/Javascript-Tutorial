
var i=0;
var j=0;


while(j != 5 ){
  i++;
  j++;
  console.log(i);
  console.log(j); 
}
/*
Exception: SyntaxError: expected expression, got keyword 'var'
evalWithDebugger@resource://devtools/shared/base-loader.js -> resource://devtools/server/actors/webconsole.js:1401:16
onEvaluateJS@resource://devtools/shared/base-loader.js -> resource://devtools/server/actors/webconsole.js:917:20
onEvaluateJSAsync@resource://devtools/shared/base-loader.js -> resource://devtools/server/actors/webconsole.js:888:20
onPacket@resource://devtools/shared/base-loader.js -> resource://devtools/server/main.js:1791:15
receiveMessage@resource://devtools/shared/base-loader.js -> resource://devtools/shared/transport/transport.js:761:7
*/