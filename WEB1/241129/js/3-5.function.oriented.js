console.log('함수지향 > 유료범위 5/5 : 정적 유효범위');

// 자바스크립트는 함수가 선언된 시점에서의 유효범위를 갖는다.
// * 이러한 유효범위의 방식을 정적 유효범위(static scoping), 혹은 렉시컬(lexical scoping)이라고 한다.

let i = 5; // 전역변수

function a() {
  let i = 10; // 지역변수
  b();
}

function b() {
  console.log(i); // i는 전역변수 i 이다.
}

a();
