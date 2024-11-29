console.log('함수지향 > 유료범위 2/5 : 유효범위의 효용');

function a() {
  let i = 0;
  // i = 0; // 무한로딩 i 가 계속 0으로 초기화
  // * 꼭 변수 이름을 사용할떄, let, var 를 꼭 써라
  // * 변수 이름을 출돌할수 없게... (같은 i 는 노노)
}

for (let i = 0; i < 5; i++) {
  a();
  document.write(i);
}
