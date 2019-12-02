const _Node = require('./_Node');

class Stack{
  constructor(){
    this.top = null;
  }

  push(data){
    if(!this.top){
      this.top = new _Node(data);
      return this.top;
    }

    const node = new _Node(data, this.top);
    this.top = node;
  }

  pop(){
    if(!this.top){
      throw new Error(`Stack is already empty`);
    }
    const node = this.top;
    this.top = node.next;
    return node.data;
  }

  display(){
    // to display the stack - what is the 1st item in your stack?
    if(!this.top){
      return [];
    }

    let currNode = this.top;
    let thisStack = [];
    while(currNode.next){
      thisStack.push(currNode.data);
      currNode = currNode.next;
    }
    thisStack.push(currNode.data);
    return thisStack;
    
  }

  isEmpty(){
    // allows you to check if the stack is empty or not
    if(!this.top)
      return true;

    return false;
  }

  peek(){
    // allows you to look at the top of the stack without removing it
    if(this.isEmpty()){
      throw new Error(`Stack is empty`);
    }

    return this.top.data;
  }



}

module.exports = Stack;