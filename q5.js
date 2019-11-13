class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }
  insert(key, value) {
    // If the tree is empty then this key being inserted is the root node of the tree
    if (this.key == null) {
      this.key = key;
      this.value = value;
    }
    else if (key < this.key) {
      if (this.left == null) {
        this.left = new BinarySearchTree(key, value, this);
      }
      else {
        this.left.insert(key, value);
      }
    }
    else {
      if (this.right == null) {
        this.right = new BinarySearchTree(key, value, this);
      }
      else {
        this.right.insert(key, value);
      }
    }
  }

  find(key) {
    // If the item is found at the root then return that value
    if (this.key == key) {
      return this.value;
    }
    else if (key < this.key && this.left) {
      return this.left.find(key);
    }
    else if (key > this.key && this.right) {
      return this.right.find(key);
    }
    // You have searched the tree and the item is not in the tree
    else {
      throw new Error('Key Error');
    }
  }

  remove(key) {
    if (this.key == key) {
      if (this.left && this.right) {
        const successor = this.right._findMin();
        this.key = successor.key;
        this.value = successor.value;
        successor.remove(successor.key);
      }
      else if (this.left) {
        this._replaceWith(this.left);
      }
      else if (this.right) {
        this._replaceWith(this.right);
      }
      else {
        this._replaceWith(null);
      }
    }
    else if (key < this.key && this.left) {
      this.left.remove(key);
    }
    else if (key > this.key && this.right) {
      this.right.remove(key);
    }
    else {
      throw new Error('Key Error');
    }
  }

  _replaceWith(node) {
    if (this.parent) {
      if (this == this.parent.left) {
        this.parent.left = node;
      }
      else if (this == this.parent.right) {
        this.parent.right = node;
      }

      if (node) {
        node.parent = this.parent;
      }
    }
    else {
      if (node) {
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      }
      else {
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }
    }
  }

  _findMin() {
    if (!this.left) {
      return this;
    }
    return this.left._findMin();
  }
}
module.exports = BinarySearchTree;

const BST = new BinarySearchTree();

BST.insert(25);
BST.insert(15);
BST.insert(50);
BST.insert(10);
BST.insert(24);
BST.insert(35);
BST.insert(70);
BST.insert(4);
BST.insert(12);
BST.insert(18);
BST.insert(31);
BST.insert(44);
BST.insert(66);
BST.insert(90);
BST.insert(22);

function inOrder(t) {
  let acc = [];

  function traverseTree(bst) {
    if (!bst) {
      return 'Empty tree';
    }
    traverseTree(bst.left);
    acc.push(bst.key);
    traverseTree(bst.right);
  }
  traverseTree(t);
  return acc;
}

//console.log(inOrder(BST));

function preOrder(t) {
  let acc = [];

  function traverseTree(bst) {
    if (!bst) {
      return 'Empty tree';
    }
    acc.push(bst.key);
    traverseTree(bst.left);
    traverseTree(bst.right);
  }
  traverseTree(t);
  return acc;
}

//console.log(preOrder(BST));

function postOrder(t) {
  let acc = [];

  function traverseTree(bst) {
    if (!bst) {
      return 'Empty tree';
    }
    
    traverseTree(bst.left);
    traverseTree(bst.right);
    acc.push(bst.key);
  }
  traverseTree(t);
  return acc;
}

console.log(postOrder(BST));