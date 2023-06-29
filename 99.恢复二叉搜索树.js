/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const inorder = (root,  nums) => {
    if (!root) return
    inorder(root.left, nums)
    nums.push(root.val)
    inorder(root.right, nums)
  }
  
  const findSwapNodes = (nums) => {
    let firstIdx = -1, secondIdx = -1
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] >= nums[i + 1]) {
        secondIdx = i + 1
        if (firstIdx === -1) {
          firstIdx = i
        } else {
          break
        }
      }
    }
    return [nums[firstIdx], nums[secondIdx]]
  }
  
  const recover = (root, count, firstNum, secondNum) => {
    if (!root) return
    if (root.val === firstNum || root.val === secondNum) {
      root.val = root.val === firstNum ? secondNum : firstNum
      if (--count === 0) {
        return
      }
    }
    recover(root.left, 2, firstNum, secondNum)
    recover(root.right, 2, firstNum, secondNum)
  }
  
  /**
   * @param {TreeNode} root
   * @return {void} Do not return anything, modify root in-place instead.
   */
  var recoverTree = function(root) {
    const inorderNodes = []
    inorder(root, inorderNodes)
    const [firstNode, secondNode] = findSwapNodes(inorderNodes)
    recover(root, 2, firstNode, secondNode)
  };