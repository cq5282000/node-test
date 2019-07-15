module.exports = class ReverseDepthFirstOrder {
    constructor(G) {
        this.marked = [];
        // 深度优先检索的逆后序，拓扑排序的输出序列
        this.reversePost = [];
        
        for (let v = 0; v < G.V; v ++) {
            if (!this.marked[v]) {
                //
                this.dfs(G, v)
            }
        }
    }

    /**
     * 逆后续的深度优先检索
     * @param {Digraph} G 
     * @param {int} v 
     */
    dfs(G, v) {
        this.marked[v] = true;
        G.adj[v].map((item) => {
            if (!this.marked[item]) {
                this.dfs(G, item);
            }
        })
        this.reversePost.push(v);
    }

    getReversePost() {
        return this.reversePost;
    }
}