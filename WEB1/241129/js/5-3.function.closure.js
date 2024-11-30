console.log('함수지향 > 클로저 3/4 : private variable');
function factory_movie(title) {
  return {
    get_title: function () {
      return title;
    },
    set_title: function (_title) {
      if (typeof _title === 'String') {
        title = _title;
      } else {
        console.log('Invalid input type. Title should be a string.');
      }
    },
  };
}
ghost = factory_movie('Ghost in the shell');
matrix = factory_movie('Matrix');

console.log(ghost.get_title());
console.log(matrix.get_title());

// ghost.set_title('공각기동대');
ghost.set_title('1');

console.log(ghost.get_title());
console.log(matrix.get_title());

console.log('-- 자바스크립트 대단하다.--');
