/**
 * 图的基本数据结构类
 */
module.exports = class Digraph {

    constructor(v) {
        // 定点个数
        this.V = v; 
        // 边的个数
        this.E = 0;
        // 每个节点指出的边的二维数据表示
        this.adj = [];
    }

    /**
     * 向图中添加边
     * @param {int} v 
     * @param {int} w 
     */
    addEdge(v, w) {
        if (!this.adj[v]) {
            this.adj[v] = [];
        }
        if(parseInt(w) === parseInt(w)) {
            this.adj[v].push(parseInt(w));
        }
        this.E ++;
    }
}