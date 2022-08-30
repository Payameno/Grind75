const mergeTwoLists = function(list1, list2) {

  let mergedArray = [];

  console.log('mergedArray', mergedArray);

  for (let i=0; i < list1.length; i++) {
    mergedArray.push(i);
  };

  for (let j=0; j < list2.length; j++) {
    mergedArray.push(j);
  };

  return mergedArray;

};