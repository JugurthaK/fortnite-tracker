var url = "https://fortnite.y3n.co/v2/shop";

ajaxGet(url, function (reponse) {

    var shop = JSON.parse(reponse);

    shop = shop.br;


    var shopDaily = shop.daily;
    var shopWeekly = shop.weekly;
    var i = 0;



    shopDaily.forEach(item => {

        var div = document.createElement("div");
        div.classList.value = "mt-2 col-md-" + Math.floor((12 / shopDaily.length));

        var img = document.createElement("img");
        img.style.maxWidth = "100%";
        if (item.rarity == "uncommon") {
            img.classList.value +=" item-uncommon ombre rounded";
        } else if (item.rarity == "rare"){
            img.classList.value +=" item-rare ombre rounded";
        } else if (item.rarity == "epic"){
            img.classList.value +=" item-epic ombre rounded";
        } else {
            img.classList.value +=" item-legendary ombre rounded";
        }
        var p = document.createElement("p");
        p.classList.add("text-center");

        p.innerHTML = "<b>" + item.name + "</b> <br> Price: "+ item.price;;
        img.setAttribute("src", item.imgPNGURL);
        div.appendChild(img);
        div.appendChild(p);
        document.getElementById("container1").appendChild(div);
    });
    
    shopWeekly.forEach(item => {


        var div = document.createElement("div");
        div.classList.value = "mt-2 col-md-" + Math.floor((12 / shopWeekly.length));

        var img = document.createElement("img");
        img.style.maxWidth = "100%";
        img.classList.value = "text-center"
        if (item.rarity == "uncommon") {
            img.classList.value +=" item-uncommon ombre rounded";
        } else if (item.rarity == "rare"){
            img.classList.value +=" item-rare ombre rounded";
        } else if (item.rarity == "epic"){
            img.classList.value +=" item-rare ombre rounded";
        }else {
            img.classList.value +=" item-legendary ombre rounded";
        }
        var p = document.createElement("p");
        p.classList.add("text-center");

        p.innerHTML = "<b>" + item.name + "</b> <br>" + item.price;;
        img.setAttribute("src", item.imgPNGURL);
        div.appendChild(img);
        div.appendChild(p);
        document.getElementById("container").appendChild(div);
    });


});