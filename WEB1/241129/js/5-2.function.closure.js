console.log('함수지향 > 클로저 2/4 : 클로저란?');

function outter() {
  let title = 'coding everybody';
  return function () {
    console.log(title);
  };
}

let inner = outter();
inner();

console.log('자바스크립트 정말 그지 같다.');
