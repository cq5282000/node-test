/**
 * 读取文件构造符号图
 */
const Digraph = require('./Digraph');

module.exports = class SymbolGraph {
    constructor(data) {
        let v = Object.keys(data).length;
        this.G = new Digraph(v);
        for (let i = 0; i < this.G.V; i ++) {
            data[`${i}`].split(',').map((item) => {
                this.G.addEdge(i, item);
            });
        }
    }
}