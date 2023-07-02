import TreeNode from './TreeNode'

function insertNode(tree: TreeNode, val: number) {
  if (!tree.val) {
    tree.val = val
    return tree
  }
  if (val < tree.val) {
    if (!tree.left) {
      tree.left = new TreeNode(val)
    } else {
      insertNode(tree.left, val)
    }
  } else {
    if (!tree.right) {
      tree.right = new TreeNode(val)
    } else {
      insertNode(tree.right, val)
    }
  }
}

export default function createBST(arr: (number|null)[]) {
  const tree = new TreeNode()
  
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (el) {
      insertNode(tree, el)
    }
  }

  return tree
}