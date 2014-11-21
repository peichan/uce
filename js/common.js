$(function(){

    var header = $("#header");
    if(location.host == "peichan.github.io"){
        header.load("http://" + location.host + "/uce/header.html", function() {
            activate_link();
        });
    }else{
        header.load("./header.html", function() {
            activate_link();
        });
    };
});

// 今開いているページをactiveに
function activate_link(){
    var active_html = "." + location.pathname;
    $('a[href="' + active_html + '"]').parent().addClass("active");
};
