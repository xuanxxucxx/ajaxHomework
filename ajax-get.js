var xhr = new XMLHttpRequest();
//瀏覽器要跟伺服器要資料時，必須透過XMLHttpRequest

//readyState
//0 - 你已經產生出一個XMLHttpRequest，但是還沒有連結你要撈的資料
//1 - 你用了open()，但還沒把資料傳送過去
//2 - 偵測到使用send()
//3 - 資料loading中，還未接收完全
//4 - 撈到資料了，數據已經完全接收

//.open(格式, 要讀取的網址, 同步與非同步);
//格式：get(讀取)、post(傳送資料到伺服器)
xhr.open('get', 'https://raw.githubusercontent.com/xuanxxucxx/ajaxHomework/master/data.json', true);

//true 非同步，不會等資料傳回來，就讓程式繼續往下跑，等到回傳才會自動回傳
//false 會等資料傳回來，才讓程式碼繼續往下跑

//CORS 是否可以跨網域撈取資料
//跨網域json範例：
//xhr.open('get', 'http://data.ntpc.gov.tw/api/v1/rest/datastore/382000000A-003145-001', true);

//null表示沒有要傳送任何值，只打算讀取資料
xhr.send(null);

console.log(xhr.responseText);

//.onload()當確認有資料回傳回來時，便執行此function
xhr.onload = function () {
    console.log(xhr.responseText);
    if (xhr.status == 200) {
        //使用status看狀態編號
        //200 資料有正確回傳，有撈到
        //404 資料讀取錯誤，沒有撈到
        var str = JSON.parse(xhr.responseText);
        document.querySelector('.message').textContent = str[0].name;
    } else {
        console.log('資料錯誤');
    }
}
//1. 建立了一個XMLHttpRequest
//2. 傳送到對方伺服器要資料
//3. 回傳資料到自己的瀏覽器
//4. 拿到資料後再看要怎麼處理