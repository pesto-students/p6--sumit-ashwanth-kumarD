function parenthesisCheck(str) {
    let n = str.length;
    if (n % 2 == 0) {
      let arr = str.split("");
      let stack = [];
      let flag= false;
      for (let k = 0; k < n; k++) {
        arr[k] = arr[k].charCodeAt(0);
      }
      //console.log(arr, n);
      for (let k = 0; k < n; k++) {
        if (arr[k] == 91 || arr[k] == 40 || arr[k] == 123) {
          stack.push(arr[k]);
          continue;
        }
        //console.log(stack);
        switch (arr[k]) {
          case 93:
            if (stack.pop() == 91) {
              flag = true;
              break;
            } else return false;
          case 41:
            if (stack.pop() == 40) {
              flag = true;
              break;
            } else return false;
          case 125:
            if (stack.pop() == 123) {
              flag = true;
              break;
            } else return false;
        }
      }
  
      return flag;
    } else {
      return false;
    }
  }
  console.log(parenthesisCheck("[](){}"));
  console.log(parenthesisCheck("[({})](){}"));
  console.log(parenthesisCheck("[(]){}"));