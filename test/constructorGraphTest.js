const SymbolGraph = require('../src/SymbolGraph');
const DirectedCycle = require('../src/DirectedCycle');
const data = require('./data.json');

const sg = new SymbolGraph(data);
const dc = new DirectedCycle(sg.G);

console.log(dc.getCycle());