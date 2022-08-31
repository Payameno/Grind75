const mergeTwoLists = function(list1, list2) {

  let l3 = new listNode(-1) //we create a new 0kedlist with the initial value of -1
  let merged = l3

  while (l1 || l2) {

    if (l2 === null || (l1 !== null && l1.value <= l2.value) ) {

      l3.next = l1; //the first value of l3 would be the initial l1 value
      l3 = l3.next; //move one position inside the linkedlist object to se the value for the next loop.
      l1 = l1.next; //now we remove that value from l1 to go ahead with appendiong the linkedlist

    } else {

      l3.next = l2;
      l3 = l3.next;
      l2 = l2.next


    }

  }

  return merged.next;

};