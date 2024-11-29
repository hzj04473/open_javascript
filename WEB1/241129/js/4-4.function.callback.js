console.log('함수지향 > 값으로서 함수와 콜백 4/4 : 비동기 콜백');

// Ajax : Asynchronous Javascript And Xml
console.log('Ajax : Asynchronous Javascript And Xml');

$.get(
  'http://127.0.0.1:5501/WEB1/241129/json/4-4.function.callback.json',
  function (result) {
    console.log(result);
    console.log(result.title);
  },
  'json'
);
