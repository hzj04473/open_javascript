console.log('함수지향 > 클로저 4/4 : 클로저 응용');

let arr = [];

// * before
// for (var i = 0; i < 5; i++) {
//   arr[i] = function () {
//     return i;
//   };
// }

// after
for (var i = 0; i < 5; i++) {
  arr[i] = (function (id) {
    return function () {
      return id;
    };
  })(i);
}

for (var index in arr) {
  console.log(arr[index]());
}
