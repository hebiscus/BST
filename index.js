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

//delete
function deleteNode(root, key) {
    if (root == null)
        return root;

    // Recursive calls for ancestors of node to be deleted
    if (root.data > key) {
        root.left = deleteNode(root.left, key);
        return root;
    } else if (root.data < key) {
        root.right = deleteNode(root.right, key);
        return root;
    }

    // If one of the children is empty
    if (root.left == null) {
        let temp = root.right;
        return temp;
    } else if (root.right == null) {
        let temp = root.left;
        return temp;
    }

    // If both children exist
    else {
      let succParent = root;
        // Find successor
      let succ = root.right;

        while (succ.left != null) {
            succParent = succ;
            succ = succ.left;
        }

        if (succParent != root)
            succParent.left = succ.right;
        else
            succParent.right = succ.right;

        // Copy Successor Data to root
        root.data = succ.data;

        return root;
    }
}

function find(root, key) {
    if (root == null) {
        return "Value not found!"; 
    } else if(root.data == key) {
        return root;
    } else if (root.data > key) {
        root = find(root.left, key);
    } else if (root.data < key) {
        root = find(root.right, key);
    } else {
        console.log("something went really wrong....")
    }
  return root;
}

function levelOrder(func, root) {
    if (root == null) {
      return root;
    }
    let queue = [];
    queue.push(root);
    let finalArray = [];
  
    while (queue.length != 0) {
      let current = queue[0];
      finalArray.push(current);
      if (current.left != null) {
        queue.push(current.left);
      }
      if (current.right != null) {
        queue.push(current.right);
      }
      // console.log(queue.shift());
      queue.shift();
    }
    func(finalArray);
  }
  
  function printNode(nodes) {
    return nodes.forEach(node => console.log(node))
  }
  
//   levelOrder(printNode, testTree.root);

function preorder(root) {
    if (root == null) {
      return;
    }
    console.log(root);
    preorder(root.left);
    preorder(root.right);
  }
  
  // preorder(testTree.root)
  
  function inorder(root) {
    if (root == null) {
      return;
    }
    inorder(root.left);
    console.log(root);
    inorder(root.right);
  }
  
  // inorder(testTree.root)
  
  function postorder(root) {
    if (root == null) {
      return;
    }
    postorder(root.left);
    postorder(root.right);
    console.log(root);
  }
  
  // postorder(testTree.root)

  function height(root, node) {
    let foundNode = find(root, node.data);
    let leftCounter = 0;
    let rightCounter = 0;
    let queue = [];
    queue.push(foundNode);
  
    while (queue.length != 0) {
      let current = queue[0];
      console.log(current)
      if (current.left != null) {
        queue.push(current.left);
        leftCounter++
      }
      if (current.right != null) {
        queue.push(current.right);
        rightCounter++
      }
      queue.shift();
    }
    
    return Math.max(leftCounter, rightCounter);
  }

// console.log(height(testTree.root))

  function depth(node, root) {
    if (node == null || node == root) {
      return 0;
    }
    let counter = 0;
    let current = root;
  
    while (current.data != node.data) {
      if (current.data > node.data) {
        current = current.left;
        counter++
      }
      if (current.data < node.data) {
        current = current.right;
        counter++
      }
    }
    return counter
  }
  
  // checking only for data equality
  // const depthNode = new Node(5);
  // console.log(depth(depthNode, testTree.root));