(function getApi(){

    var xhttp = new XMLHttpRequest;
    xhttp.onreadystatechange = function(){
        if(this.readyState ==4 && this.status == 200){
            var translate = this.responseText;
            var Api = JSON.parse(translate);
            var element = Api.recipes;
            var myText ="";
    for(var i=0; i<element.length ;i++){
        var container =     `<div class="col-md-4 text-center my-3">
                            <img src="${element[i].image_url}" style="width:300px; height:300px;"class="img-fluid" >
                            <h4>${element[i].title}</h4>
                            </div>`;
            myText =myText + container;
        }
    }
    document.querySelector(".test").innerHTML = myText
}
xhttp.open("GET","https://forkify-api.herokuapp.com/api/search?q=pizza",true);
xhttp.send();

})();