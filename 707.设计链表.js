var MyLinkedList = function() {
    this.arr = []
  };
  
  /** 
   * @param {number} index
   * @return {number}
   */
  MyLinkedList.prototype.get = function(index) {
    if (index < 0 || index >= this.arr.length) return -1
    return this.arr[index]
  };
  
  /** 
   * @param {number} val
   * @return {void}
   */
  MyLinkedList.prototype.addAtHead = function(val) {
    this.arr.unshift(val)
  };
  
  /** 
   * @param {number} val
   * @return {void}
   */
  MyLinkedList.prototype.addAtTail = function(val) {
    this.arr.push(val)
  };
  
  /** 
   * @param {number} index 
   * @param {number} val
   * @return {void}
   */
  MyLinkedList.prototype.addAtIndex = function(index, val) {
    const len = this.arr.length
    if (index < 0) this.arr.unshift(val)
    else if (index > len) return
    else if (index === len) this.arr.push(val)
    else this.arr.splice(index, 0, val)
  };
  
  /** 
   * @param {number} index
   * @return {void}
   */
  MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index >= 0 && index < this.arr.length) this.arr.splice(index, 1)
  };
  
  /**
   * Your MyLinkedList object will be instantiated and called as such:
   * var obj = new MyLinkedList()
   * var param_1 = obj.get(index)
   * obj.addAtHead(val)
   * obj.addAtTail(val)
   * obj.addAtIndex(index,val)
   * obj.deleteAtIndex(index)
   */