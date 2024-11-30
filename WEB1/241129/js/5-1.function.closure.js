console.log('함수지향 > 클로저 1/4 : 외부함수와 내부함수');

function outer() {
  let inner = function () {
    let title = 'coding everybody';
    console.log(title);
  };

  inner();
}

// outer();

function outter() {
  let title = 'coding everybody';
  function inner() {
    // let title = 'coding everybody2';
    console.log(title);
  }
  inner();
}
outter();

console.log('자바스크립트 정말 그지 같다.');
