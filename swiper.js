
// zq swiper
(function ($) {
    $.fn.slide = function (options) {
        var defaults = {
            el: '.slide',  //元素
            time: 8000,   //间隔时间
            page: false,
            allow: false,
            index: 0,
            
        };

        let params = $.extend(defaults, options),
            page_list = `${params.el} .slide-pag ul li`,
            el_img = `${params.el} img`,
        //转成DOM对象
            keyIndex = 0,
            leftmove = $(`${params.el} .arrow-left`)[0],
            rightmove = $(`${params.el} .arrow-right`)[0];
        //将第一张图片设为可见，css()方法修改样式
        $(el_img).eq(params.index).css({
            display: "block"
        });
        $(page_list).eq(params.index).addClass('active')
        //鼠标经过函数
    $(page_list).hover(function () {
        var index = $(this).index();
        keyIndex = index
        $(this).addClass('active').siblings().removeClass('active')
        $(el_img).stop(false, true).fadeOut(500);
        $(el_img).eq(index).stop(false, true).fadeIn(600);
    }, function() {
        
    })

    // 向左滑动事件函数
    function moveLeft() {
        keyIndex--;
        if (keyIndex < 0) {
            keyIndex = el_img.length - 1;
        }
        $(el_img).stop(false, true).fadeOut(500);
        $(el_img).eq(keyIndex).stop(false, true).fadeIn(600);
        $(page_list).eq(keyIndex).addClass('active').siblings().removeClass('active')
    };
    // 绑定向左滑动事件函数
    leftmove.onclick = moveLeft;

    // 向右滑动事件函数
    function moveRight() {
        keyIndex++;
        if (keyIndex > el_img.length - 1) {
            keyIndex = 0;
        }
        $(el_img).stop(false, true).fadeOut(500);
        $(el_img).eq(keyIndex).stop(false, true).fadeIn(600);
        $(page_list).eq(keyIndex).addClass('active').siblings().removeClass('active')
    };
    // 绑定右滑动事件函数
    rightmove.onclick = moveRight;
        // 定时器实现定时轮播
    // var timer = setInterval(moveRight, 8000);
    // // 当鼠标停在轮播图上面停止滑动，移开后恢复滑动
    // $(params.el).hover(function () {
    //     clearInterval(timer);
    // }, function () {
    //     timer = setInterval(moveRight, 8000);
    // })
    }
})(jQuery)