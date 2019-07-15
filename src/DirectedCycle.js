/**
 * 查找图中是否包含环
 */
module.exports = class DirectedCycle {
    constructor(G) {
        // 深度优先遍历标志位
        this.marked = [];
        // 深度优先遍历绳子数组
        this.edgeTo = [];
        // 有向环包含的节点
        this.cycle = [];
        //  
        this.onStack = [];

        for(let v = 0; v < G.V; v ++) {
            if (!this.marked[v]) {
                this.dfs(G, v);
            }
        }
    }

    /**
     * 
     * @param {Digraph} G 
     * @param {int} v 
     */
    dfs(G, v) {
        this.onStack[v] = true;
        this.marked[v] = true;
        G.adj[v].map((item) => {
            if (this.hasCycle()) {
                return;
            } else if (!this.marked[item]){
                this.edgeTo[item] = v;
                this.dfs(G, item);
            } else if (this.onStack[item]) {
                for (let x = v; x !== item; x = this.edgeTo[x]) {
                    this.cycle.push(x);
                }
                this.cycle.push(item);
                this.cycle.push(v);
            }
        });
        this.onStack[v] = false;
    }

    /**
     * 检测是否已经存在环
     */
    hasCycle() {
        return this.cycle.length !== 0;
    }
    /**
     * 返回环
     */
    getCycle() {
        return this.cycle;
    }
}