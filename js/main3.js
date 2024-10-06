(function getApi(){

    var xhttp = new XMLHttpRequest;
    xhttp.onreadystatechange = function(){
        if(this.readyState ==4 && this.status == 200){
            var translate = this.responseText;
            var Api = JSON.parse(translate);
            var element= Api;
            myText="";
    for(var i=0;i<5000;i++){
        var container =     `<div class="col-md-4 text-center my-3">
                            <img src="${element[i].url}" style="height:300px" class="img-fluid">
                            <h4>${element[i].id}</h4>
                            <h4>${element[i].title}</h4>
                            </div>`;
            myText = myText + container;
        }
    }
    document.querySelector(".test").innerHTML = myText;
}
xhttp.open("GET","https://jsonplaceholder.typicode.com/photos",true);
xhttp.send();
})();