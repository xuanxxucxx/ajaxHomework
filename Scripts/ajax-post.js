/*
var xhr = new XMLHttpRequest();

xhr.open('post', 'https://hexschool-tutorial.herokuapp.com/api/signup', true);

xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
//告訴他我要傳東西給你喔! 會用到甚麼格式傳給你

xhr.send('email=abcde@gmail.com&password=1234');
*/

var account = {
    email: "ajaxHomework@gmail.com",
    password: "12345678"
};

//註冊
var xhr = new XMLHttpRequest();
xhr.open('post', 'https://hexschool-tutorial.herokuapp.com/api/signup', true);

xhr.setRequestHeader('Content-type', 'application/json');

//將JSON轉型成字串格式
//因為.send()無法傳送object
var data = JSON.stringify(account);

xhr.send(data);

xhr.onload = function () {
    console.log(xhr);
}