// 回到頂端
// 出現
$(window).scroll(function() {
    let scrollTop = $(this).scrollTop();
    if (scrollTop >= 200) {
        $('#top').css('display', 'block');
    } else {
        $('#top').css('display', 'none');
    }
});

let gotop = document.getElementById("top");

gotop.addEventListener("click", function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;

});
