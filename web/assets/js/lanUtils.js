// fadeEle超過targetEle之後就會fadeIn，反之fadeOut
function fadeInUntilScrollOverEle(fadeEle, targetEle) {
    $(window).scroll(function () {
        let targetHeight = $(targetEle).outerHeight();
        if ($(this).scrollTop() > targetHeight) {
            // 加入stop()可以停止動畫，避免動畫不斷疊加
            // fadeIn跟fadeOut有時會有衝突，所以用fadeTo("", 1)代替
            $(fadeEle).stop().fadeTo("fast", 1);
        } else {
            $(fadeEle).stop().fadeOut("fast");
        }
    });
}