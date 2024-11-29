console.log('함수지향 > 값으로서 함수와 콜백 2/4 : 함수의 용도2');

function cal(mode) {
  var funcs = {
    plus: function (left, right) {
      return left + right;
    },
    minus: function (left, right) {
      return left - right;
    },
  };

  return funcs[mode]; // 반환값으로 함수를 사용 할수 있다.
}

console.log(cal('plus')(2, 1));
console.log(cal('minus')(2, 1));

var process = [
  function (input) {
    return input + 10;
  },
  function (input) {
    return input * input;
  },
  function (input) {
    return input / 2;
  },
];
var input = 1;
for (var i = 0; i < process.length; i++) {
  input = process[i](input); // 배열의 값으로도 사용할 수 있다.
}
console.log(input);

// 변수, 매개변수, 리턴값 으로 사용을 할수 가 있어서
// first-class-citizen
// first-class-object
// 라고 한다.
