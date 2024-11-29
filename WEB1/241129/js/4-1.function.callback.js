console.log('함수지향 > 값으로서 함수와 콜백 1/4 : 함수의 용도1');

function a() {}

var a = function () {};

a = {
  b: function () {
    return '메서드라고 하고, 메소드 b라고 한다';
  },
};

console.log(a.b());

function cal(func, num) {
  return func(num);
}

function increase(num) {
  return num + 1;
}

function decrease(num) {
  return num - 1;
}

console.log(cal(increase, 1));
console.log(cal(decrease, 1));
