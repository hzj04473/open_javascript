console.log('함수지향 > 값으로서 함수와 콜백 3/4 : 콜백');

// 함수의 인자로 함수로 전달할 수 있다.

let numbers = [20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];

// numbers 라는 것은 객체라고 한다.
// sort() 는 메소드 - 내장객체, 내장메소드

// callback
let sortfunc = function (a, b) {
  console.log(a, b);

  // return a - b;
  return b - a; // 역순

  // if (a > b) {
  //   return 1;
  // } else if (a < b) {
  //   return -1;
  // } else {
  //   return 0;
  // }
};

console.log(numbers.sort(sortfunc));

// 사용자 정의 객체, 함수라고 한다.
