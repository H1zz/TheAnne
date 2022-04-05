Item();
function Item(){
    // let Item_array = ["Item1","Item2","Item3","Item4","Item5","Item6","Item7","Item8","Item9"]
    for(let i=0;i<8;i++){
        NewIdTag('Mobile_Items','div','class','Item');
        NewClassTag('Item','a','class','name',i);
    } 
    return;
}
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
    let BoxTag = document.getElementByClassName(ClassName)[i];
    
    // 新增標籤 宣告變數
    let TagName = document.createElement(NewTagName);
    
    // 在框架內建立標籤
    BoxTag.appendChild(TagName);
    
    // 給予屬性
    TagName.setAttribute(IdClass,IdClassName);
}