//教材：https://github.com/hexschool/nodejs_ajax_tutorial

//取得button物件
var login = document.querySelector('.login');

//建立監聽
login.addEventListener('click', signin, false);

function signin() {
    var emailStr = document.querySelector('.account').value;
    var passwordStr = document.querySelector('.password').value;

    var account = {};
    account.email = emailStr;
    account.password = passwordStr;

    var xhr = new XMLHttpRequest();
    xhr.open('post', 'https://hexschool-tutorial.herokuapp.com/api/signin', true);

    xhr.setRequestHeader('Content-type', 'application/json');

    var data = JSON.stringify(account);

    xhr.send(data);

    xhr.onload = function () {
        var callbackData = JSON.parse(xhr.responseText);
        console.log(callbackData);

        alert(callbackData.message);
    }
}