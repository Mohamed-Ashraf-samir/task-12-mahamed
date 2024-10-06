(function getApi(){

    var xhttp = new XMLHttpRequest;
    xhttp.onreadystatechange = function(){
        if(this.readyState ==4 && this.status == 200){
            var translate = this.responseText;
            var Api = JSON.parse(translate);
            var element = Api.products;
            var myText ="";
    for(var i=0; i<element.length ;i++){
        var container =     `<div class="col-md-4 text-center mb-3">
                            <img src="${element[i].images[0]}" style="height:300px" class="img-fluid">
                            <h4>${element[i].title}</h4>
                            <h4>${element[i].category}</h4>
                            <h4>${element[i].price}$</h4>
                            </div>`;
            myText =myText + container;
        }
    }
    document.querySelector(".test").innerHTML = myText
}
xhttp.open("GET","https://dummyjson.com/products",true);
xhttp.send();

})();