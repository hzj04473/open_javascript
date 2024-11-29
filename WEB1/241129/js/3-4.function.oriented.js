console.log('함수지향 > 유료범위 4/5 : 유효범위의 대상');

// 자바스크립트는 함수에 대한 유효범위만을 제공
// 그외는 전역변수의 성격

for (var i = 0; i < 1; i++) {
  let name = 'cording everybody';
}

console.log(name);
