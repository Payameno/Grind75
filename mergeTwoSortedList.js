const mergeTwoLists = function(list1, list2) {

  mergedArray = [];

  for (let i=0; i < list1.length; i++) {
    mergedArray.push(i);
  };

  list2.forEach(number => mergedArray.push(number));

  return mergedArray.sort((a,b) => a-b)
  

};