/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    //递归+分治
    if(lists.length === 0) return null;
    //合并两个列表
    let mergetTwoLists = (l1, l2) => {
        if(!l1) return l2;
        if(!l2) return l1;
        if(l1.val <= l2.val) {
            l1.next = mergetTwoLists(l1.next, l2);
            return l1;
        } 
        else {
            l2.next = mergetTwoLists(l1, l2.next);
            return l2;
        } 
    }
    //合并列表
    let merge = (left, right) => {
        if(left === right) return lists[left];
        let mid = (left + right) >> 1;
        let l1 = merge(left, mid);
        let l2 = merge(mid + 1, right);
        return mergetTwoLists(l1, l2);
    }
    return merge(0, lists.length - 1);
};