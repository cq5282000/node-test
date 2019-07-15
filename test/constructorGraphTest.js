const SymbolGraph = require('../src/SymbolGraph');
const Topological = require('../src/Topological');

// 含有环的数据
const data1 = require('./data1.json');

// 不含有环的数据
const data2 = require('./data2.json');

const sg = new SymbolGraph(data2);

// 不含有环的数据
const tl = new Topological(sg.G);

console.log(tl.getReversePost());