$(function(){

    // $.ajax({
    //     url: "../header.html", //パスはcommon.jsが読み込まれたHTMLファイルが基準になります
    //     cache: false, //キャッシュを利用するか（お好みで）
    //     async: false, //非同期で読み込むか（お好みで）
    //     success: function(html){
    //         document.write(html);
    //     }
    // });
    var header = $("#header")
    header.load("../header.html")
});
