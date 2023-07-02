import TreeNode from './TreeNode'
import createBST from './createBST'

// https://leetcode.com/problems/increasing-order-search-tree/
function increasingBST(root: TreeNode | null): TreeNode | null {
  let sortedNodes: TreeNode[] = []
  function getSortedNodes(node: TreeNode | null) {
    if (node) {
      sortedNodes.push(new TreeNode(node.val))
      if (node.left) {
        getSortedNodes(node.left)
      }
      if (node.right) {
        getSortedNodes(node.right)
      }
    }
  }
  getSortedNodes(root)
  sortedNodes = sortedNodes.sort((a, b) => a.val < b.val ? -1 : 1)

  const result = sortedNodes[0]
  let currentNode = result
  for (let i = 1; i < sortedNodes.length; i++) {
    const el = sortedNodes[i];
    currentNode.right = el
    currentNode = currentNode.right
  }
  return result
};

const root = createBST([5,3,6,2,4,null,8,1,null,null,null,7,9])

console.log(increasingBST(root))