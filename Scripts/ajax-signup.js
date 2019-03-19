

var send = document.querySelector('.send');

if (send) {
    //新增監聽事件
    send.addEventListener('click', signup, false);
}


function signup() {
    var emailStr = document.querySelector('.account').value;
    var passwordStr = document.querySelector('.password').value;

    //空的物件
    var account = {};
    account.email = emailStr;
    account.password = passwordStr;

    var xhr = new XMLHttpRequest();
    xhr.open('post', 'https://hexschool-tutorial.herokuapp.com/api/signup', true);

    //設定文件格式
    xhr.setRequestHeader('Content-type', 'application/json');

    //轉成字串
    var data = JSON.stringify(account);

    xhr.send(data);


    xhr.onload = function () {
        var callbackData = JSON.parse(xhr.responseText);
        console.log(callbackData);

        var veriStr = callbackData.message;
        if (veriStr == "帳號註冊成功") {
            alert('帳號註冊成功!');
        } else {
            alert('帳號註冊失敗!');
        }
    }
}

