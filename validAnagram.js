const isAnagram = function(s, t) {

  let obj = {};

  for (let key of s) {

    if (obj[key] === undefined) {

      obj[key] = 1;

    } else {

      obj[key] = obj[key] + 1;

    }

  }

  let obj2 = {};

  for (let key of t) {

    if (obj[key] === undefined ) {

      return false;

    } else if (obj2[key] === undefined) {

      obj2[key] = 1;

    } else {

      obj2[key] = obj2[key] + 1;

    }

  }

  if (Object.keys(obj).length !== Object.keys(obj2).length) {

    return false;

  }

  for (let key in obj) {

    if (obj[key] === obj2[key]) {

      return true;

    } else {
      return false;
    }

  }

};