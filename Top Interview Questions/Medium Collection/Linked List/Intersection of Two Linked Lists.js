const getIntersectionNode = function(headA, headB) {
    
  let curA = headA;
  let curB = headB;
  let lenA = 0;
  let lenB = 0;
      while (curA !== null) {
          lenA += 1
          curA = curA.next
      }
          
      while (curB !== null) {
          lenB += 1
          curB = curB.next
      }
          
      curA= headA;
      curB = headB;
      if (lenA > lenB) {
          for (let i = 0; i < lenA-lenB; i++) curA = curA.next;          
      }
          
      else if (lenB > lenA)
          for (let i = 0; i < lenB-lenA; i++) curB = curB.next;
              
      while (curB !== curA) {
          curB = curB.next;
          curA = curA.next;
      }
          
      return curA;
}
