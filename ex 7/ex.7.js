function toUpper(strArr) {
  let array = [];

  strArr.forEach((str) => array.push(str.toUpperCase()));

  console.log(array);
}

toUpper(['gwapa', 'ko', 'by', 'yayen'])

//2

function arrayDouble(strArray) {
  let array2 = [];

  strArray.forEach(function (str) {
    array2.push(str); 
    array2.push(str);
  });

  console.log(array2);
}

arrayDouble(['gwapa', 'ko']);


//3

function arraySum(numArr) {
  let total = 0;
  
  numArr.forEach(function (num) {
    total = total + num;
  });

  console.log(total);
}

arraySum([4,5,8]);
arraySum([50, -10, 39, 62]);