const DirectedCycle = require('./DirectedCycle');
const ReverseDepthFirstOrder = require('./ReverseDepthFirstOrder');

module.exports = class Topological {
    constructor(G) {
        this.order = [];
        this.dc = new DirectedCycle(G);
        this.rdfs = null;
        if (!this.dc.hasCycle()) {
            this.rdfs = new ReverseDepthFirstOrder(G);
            this.order = this.rdfs.getReversePost();
        } else {
            throw new Error(`含有环，环为${this.dc.getCycle()}`);
        }
    }

    /**
     * 获取拓扑排序
     */
    getReversePost() {
        return this.rdfs.getReversePost().reverse();
    }
}