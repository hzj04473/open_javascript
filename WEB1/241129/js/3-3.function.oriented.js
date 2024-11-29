console.log('함수지향 > 유료범위 3/5 : 전역변수를 사용하는 법');

// * 불가피하게 전역변수를 사용해야 하는 경우는 하나의 객체를 전역변수로 만들고 객체의 속성으로 변수를 관리하는 방법을 사용한다
// MYAPP = {};

// MYAPP.calculator = {
//   left: null,
//   right: null,
// };

// MYAPP.coordinate = {
//   left: null,
//   right: null,
// };

// MYAPP.calculator.left = 10;
// MYAPP.calculator.right = 20;

// console.log(MYAPP);

// function sum() {
//   return MYAPP.calculator.left + MYAPP.calculator.right;
// }

// console.log(sum());

// * 아래 같은 방법은 자바스크립트에서 로직을 모듈화하는 일반적인 방법이다.
(function () {
  MYAPP = {};

  MYAPP.calculator = {
    left: null,
    right: null,
  };

  MYAPP.coordinate = {
    left: null,
    right: null,
  };

  MYAPP.calculator.left = 10;
  MYAPP.calculator.right = 20;

  console.log(MYAPP);

  function sum() {
    return MYAPP.calculator.left + MYAPP.calculator.right;
  }

  console.log(sum());
})();
