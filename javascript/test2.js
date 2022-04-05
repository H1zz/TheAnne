Item();
function Item(){
    let Item_array = ["Item1","Item2","Item3","Item4","Item5","Item6","Item7","Item8","Item9"]
    for(let i=0;i<Item_array.length;i++){
        let div = document.createElement('div');
        let Mobile_Items = document.getElementById('Mobile_Items');
        Mobile_Items.appendChild(div);    
        div.setAttribute("class","Item");
        div.setAttribute("id",Item_array[i]);
        // 以上為第一層
        let div_array = ['images','script1','script2'];
        let Item = document.getElementById(Item_array[i]);
        for(let i=0;i<div_array.length;i++){
            let div2 = document.createElement('div');
            Item.appendChild(div2);
            div2.setAttribute("class",div_array[i]);   
        }
        // let Item1 = document.getElementById('Item1');
        // let Item2 = document.getElementById('Item2');
        // let img1 = Item1.querySelector('.images');
        // img1.setAttribute("id","img1");
        // let img2 = Item2.querySelector('.images');
        // img2.setAttribute("id","img2");
        // let img3 = Item3.querySelector('.images');
        // img3.setAttribute("id","img3");
        // let img4 = Item4.querySelector('.images');
        // img4.setAttribute("id","img4");
        // 以上為第二層
        // let a_array = ['a1','a2','a3','a4'];
        let a = document.createElement('a');
        // let images = document.querySelector('.images');

        // 利用class 物件的索引編號，判讀為哪一個class物件
        let images = document.getElementsByClassName('images')[i];
        images.appendChild(a);
        a.setAttribute("href","javascript:;");
        let img = document.createElement('img');
        a.appendChild(img);
        img.setAttribute("src","img/items/kirby.png");
        // 以上為2-1
        let li1_array = ["sort","size"];
        let li1_script = ["玩具","One-Size"];
        let script1 = Item.querySelector('.script1');
        // let li = document.createElement('li');
        // for(let i=0;i<li_array.length;i++){
        //     let li = document.createElement('li');
        //     script1.appendChild(li);
        //     li.setAttribute("class",li_array[i]);
        //     li.innerText = li_script[i];
        // }
        // 以上為2-2
        let li2_array = ["name","sales","origin"];    
        let li2_script = ["KIRBY","特價NT$<span>800</span>元","原價NT$<span><s>1000</s></span>元"];
        let script2 = Item.querySelector('.script2');
        // for(let i=0;i<li2_array.length;i++){
        //     let li = document.createElement('li');
        //     script2.appendChild(li);
        //     li.setAttribute("class",li2_array[i]);
        //     li.innerHTML = li2_script[i];
        // }
        // 以上為2-3    
        Script(li1_array,script1,li1_script);
        Script(li2_array,script2,li2_script);
        function Script(Array,Class,Script){
            for(let i=0;i<Array.length;i++){
                let li = document.createElement('li');
                Class.appendChild(li);
                li.setAttribute("class",Array[i]);
                li.innerHTML = Script[i];
            }
            return;
        }
    // 以上Script1,Script2共用的function
    }    
}