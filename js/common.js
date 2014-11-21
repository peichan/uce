$(function(){

    // $.ajax({
    //     url: "../header.html", //パスはcommon.jsが読み込まれたHTMLファイルが基準になります
    //     cache: false, //キャッシュを利用するか（お好みで）
    //     async: false, //非同期で読み込むか（お好みで）
    //     success: function(html){
    //         document.write(html);
    //     }
    // });
    var header = $("#header");
    if(location.host == "peichan.github.io"){
        header.load("http://" + location.host + "/uce/header.html");
    }else{
        header.load("./header.html");
    };
});
