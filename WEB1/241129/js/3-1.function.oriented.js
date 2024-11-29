console.log('함수지향 > 유료범위 1/5 : 전영변수와 지역변수');

console.log('유효범위(Scope)');

// * 전역변수 (global variable)
let vscope = 'global';
function fscope() {
  // ! 지역변수 (local variable)
  let vscope = 'local';
  // vscope = 'local';
  let lv = 'local variable';
  console.log(vscope);
  // console.log(lv);
}
function fscope2() {
  console.log(vscope);
}

fscope();
// console.log(lv); // Uncaught ReferenceError: lv is not defined
console.log(vscope); // Uncaught ReferenceError: lv is not defined

// fscope2();
