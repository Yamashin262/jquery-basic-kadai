// $(function() {
    // ロードされた場合
    $(window).on('load', function() {
        console.log('loadイベントが発生しました');
    });

    // window.addEventListener('load', function() {
    //   console.log('loadイベントが発生しました');
    // });

    // スクロールされた場合
    $(document).on('scroll', function() {
        console.log('scrollイベントが発生しました');
    });
// });