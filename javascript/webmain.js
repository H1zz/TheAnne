let div_array = ['images','script1','script2'];
let script1_li = ["sort","size"];
let li1_script = ["周邊商品","One-Size"];
let script2_li = ["name","sales","origin"];   
let li2_script = ["KIRBY","特價NT$<span>99</span>元","原價NT$<span><s>1000</s></span>元"];
let img_array = ['img/items/item1.jpg','img/items/item2.jpg','img/items/item3.jpg','img/items/item4.jpg','img/items/item5.jpg'];

Item(5);
function Item(n){
    for( let i=0;i<n;i++){
        NewIdTag('Web_Items','div','class','Item');
        for(let b = 0;b<div_array.length;b++){
            NewClassTag('Item','div','class',div_array[b],i);
        }        
        for(let d =0;d<script1_li.length;d++){
            NewClassTagnContent('script1','li','class',script1_li[d],i,li1_script[d]);
        }
        for(let e =0;e<script2_li.length;e++){
            NewClassTagnContent('script2','li','class',script2_li[e],i,li2_script[e]);
        }
        NewAnImage('images','javascript:;',img_array[i],i);
    }   
    return;
}
Name(5);
function Name(n){
    let Name = ["飲料提袋","鑰匙圈","環保提袋","海報","書衣"];
    for(let i =0;i<n;i++){
        let name = document.getElementsByClassName('name')[i];
        name.innerHTML=Name[i];
    }
}
// ***********************************************************************************
function NewIdTag(IdName,NewTagName,IdClass,IdClassName){
    // 指定在框架(自訂)內新增標籤，宣告變數
    let BoxTag = document.getElementById(IdName);
    
    // 新增標籤 宣告變數
    let TagName = document.createElement(NewTagName);
    
    // 在框架內建立標籤
    BoxTag.appendChild(TagName);
    
    // 給予屬性
    TagName.setAttribute(IdClass,IdClassName);
}
function NewClassTag(ClassName,NewTagName,IdClass,IdClassName,i){
    // 指定在框架(自訂)內新增標籤，宣告變數
    let BoxTag = document.getElementsByClassName(ClassName)[i];
    
    // 新增標籤 宣告變數
    let TagName = document.createElement(NewTagName);
    
    // 在框架內建立標籤
    BoxTag.appendChild(TagName);
    
    // 給予屬性
    TagName.setAttribute(IdClass,IdClassName);
}
function NewClassTagnContent(ClassName,NewTagName,IdClass,IdClassName,i,Content){
    // 指定在框架(自訂)內新增標籤，宣告變數
    let BoxTag = document.getElementsByClassName(ClassName)[i];
    
    // 新增標籤 宣告變數
    let TagName = document.createElement(NewTagName);
    
    // 在框架內建立標籤
    BoxTag.appendChild(TagName);
    
    // 給予屬性
    TagName.setAttribute(IdClass,IdClassName);
    TagName.innerHTML=Content;
}
function NewAnImage(ClassName,NewALink,NewImgLink,i){
    let a = document.createElement('a');
    let images = document.getElementsByClassName(ClassName)[i];
    images.appendChild(a);
    a.setAttribute("href",NewALink);
    let img = document.createElement('img');
    a.appendChild(img);
    img.setAttribute("src",NewImgLink);
}