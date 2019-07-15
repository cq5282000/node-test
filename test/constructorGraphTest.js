const SymbolGraph = require('../src/SymbolGraph');
const data = require('./data.json');
const sg = new SymbolGraph(data);

console.log(sg.G.adj);