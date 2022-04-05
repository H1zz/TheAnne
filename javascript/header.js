MenuShow();
function MenuShow(){
    //  $ jQuery的變數前綴詞

    // 隱藏選單與關閉按鈕
    $('#Navbar_Menu').hide();
    $('#Mobile_Close').hide();

    // 開啟選單
    $('#Mobile_Menu').click( function(){
        $('#Navbar_Menu').toggle("slide");
        $('#Mobile_Menu').hide();
        $('#Mobile_Close').show();        
    });
    
    // 關閉選單
    $('#Mobile_Close').click( function(){
        $('#Navbar_Menu').toggle("slide");
        $('#Mobile_Close').hide();
        $('#Mobile_Menu').show(); 
    });
}
WebMenuShow();
function WebMenuShow(){
    $('#OpenMenu').hide();

    $('#WOMEN').click(function(){
        $('#OpenMenu').toggle("slide");
        $('#OpenMenu').show();
    })
}