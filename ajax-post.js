var xhr = new XMLHttpRequest();

xhr.open('post', 'https://hexschool-tutorial.herokuapp.com/api/signup', true);

xhr.setRequestHeader("Content-type","application/x-www-form-urlencoded");
//告訴他我要傳東西給你喔! 會用到甚麼格式傳給你

xhr.send('email=abcde@gmail.com&password=1234');