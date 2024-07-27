// 文字色変化
$("#change-color").click(function(){
    $("#target").css("color", "red");
});
// 文字内容変化
$("#change-text").click(function(){
    $("#target").text("Hello!");
});
// フェードアウトする
$("#fade-out").click(function(){
    $("#target").fadeOut();
});
// フェードインする
$("#fade-in").click(function(){
    $("#target").fadeIn();
});