let mobile_banner = ["img/banner/Mbanner1.jpg","img/banner/Mbanner2.jpg","img/banner/Mbanner3.jpg"];
let web_banner = ["img/banner/Wbanner1.jpg","img/banner/Wbanner2.jpg","img/banner/Wbanner3.jpg"];
let ad1 = ["img/banner/005.JPG","img/banner/006.png","img/banner/007.JPG","img/banner/008.JPG"];
let ad2 = ["img/banner/009.JPG","img/banner/010.JPG","img/banner/011.jpg","img/banner/012.jpg"];
let ad3 = ["img/banner/005.jpg","img/banner/008.jpg","img/banner/009.jpg","img/banner/010.jpg"];
// 變數 紀錄目前正在顯示第幾張圖片，儲存著圖片對應的索引編號
let current = 0;

// 方法 宣告變數，將執行方法直接寫入變數中
let changeImg = function(num){

    current += num;
    
    // 循環寫法
    if(current<0){
        current = mobile_banner.length-1;
    } else if(current>(mobile_banner.length-1)){
        current = 0;
    }
    // // 判斷條件 = 索引編號 + 自訂參考值 >=0 和 索引編號 + 自訂參數值 < 圖片陣列的長度，同時成立時
    // if( current + num >=0 && current + num <mobile_banner.length){
    //     // 索引變數 = 索引變數 + 自訂參考值 current = current + num;
    //     current += num;
    //     // 更改 圖片的連結檔案
    // }else if( current<=0 ){
    //     current = (mobile_banner.length-1);
    // }else {
    //     current = 0;
    // }    
    document.getElementById('Banner_01').src = mobile_banner[current];
    document.getElementById('web_Banner_01').src = web_banner[current];
    document.getElementById('Ad1Banner_01').src = ad1[current];
    document.getElementById('Ad22Banner_01').src = ad2[current];    
    document.getElementById('Ad3Banner_01').src = ad3[current];
}

// 按鈕執行 方法
document.getElementById('prev').onclick = function(){
    changeImg(-1);
}
document.getElementById('web_prev').onclick = function(){
    changeImg(-1);
}

document.getElementById('next').onclick = function(){
    changeImg(1);
}
document.getElementById('web_next').onclick = function(){
    changeImg(1);
}
// 自動播放
let timer = setInterval(()=>{
    changeImg(1);
},2000);