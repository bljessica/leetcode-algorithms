/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 */
var CBTInserter = function(root) {
    this.layers = []
    const queue = [root]
    while (queue.length) {
      const len = queue.length
      const arr = []
      for (let i = 0; i < len; i++) {
        const node = queue.shift()
        arr.push(node)
        node.left && queue.push(node.left)
        node.right && queue.push(node.right)
      }
      this.layers.push(arr)
    }
  };
  
  /** 
   * @param {number} val
   * @return {number}
   */
  CBTInserter.prototype.insert = function(val) {
    const len = this.layers.length
    const newNode = new TreeNode(val)
    if (len === 1) {
      this.layers[0][0].left = newNode
      this.layers.push([newNode])
      return this.layers[0][0].val
    }
    const lastLayerNodeNum = this.layers[len - 1].length, prevLayerNodeNum = this.layers[len - 2].length
    if (lastLayerNodeNum < prevLayerNodeNum * 2) { // 最后一层未满
      const parent = this.layers[len - 2][Math.floor(lastLayerNodeNum / 2)]
      if (lastLayerNodeNum & 1) {
        parent.right = newNode
      } else {
        parent.left = newNode
      }
      this.layers[len - 1].push(newNode)
      return parent.val
    } else { // 最后一层满了
      this.layers[len - 1][0].left = newNode
      this.layers.push([newNode])
      return this.layers[len - 1][0].val
    }
  };
  
  /**
   * @return {TreeNode}
   */
  CBTInserter.prototype.get_root = function() {
    return this.layers[0][0]
  };
  
  /**
   * Your CBTInserter object will be instantiated and called as such:
   * var obj = new CBTInserter(root)
   * var param_1 = obj.insert(val)
   * var param_2 = obj.get_root()
   */