$(function(){

    var header = $("#header");
    if(location.host == "peichan.github.io"){
        header.load("http://" + location.host + "/uce/header.html");
    }else{
        header.load("./header.html");
    };
});
