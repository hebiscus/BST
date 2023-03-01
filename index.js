class Node {
    constructor(d) {
        this.data = d;
        this.left = null;
        this.right = null;
    }
}

class Tree {
  constructor() {
    this.root = root;
  }
}


function buildTree(array, start, end) {
  if (start > end) {
        return null;
    }
    /* Get the middle element and make it root */
    let mid = parseInt((start + end) / 2);
    let node = new Node(array[mid]);
    /* Recursively construct the left subtree and make it
     left child of root */
    node.left = buildTree(array, start, mid - 1);
    /* Recursively construct the right subtree and make it
     right child of root */
    node.right = buildTree(array, mid + 1, end);
    return node;
}

//insert
function insert(root, key) {
    let node = new Node(key);
    if (!root) {
        root = node;
        return;
    }
    let prev = null;
    let temp = root;
    while (temp) {
        if (temp.data > key) {
            prev = temp;
            temp = temp.left;
        }
        else if (temp.data < key) {
            prev = temp;
            temp = temp.right;
        }
    }
    if (prev.data > key)
        prev.left = node;
    else
        prev.right = node;
}