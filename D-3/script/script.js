$(function(){
    $("nav> ul> li").mouseenter(function(){
        $(".sub,.menuBg").stop().fadeIn();
    })
    $("nav> ul> li").mouseleave(function(){
        $(".sub,.menuBg").stop().fadeOut();
    })

    $(".pp").click(function(){
        $(".popup").show();
        return false;
    })
    $(".button").click(function(){
        $(".popup").hide();
    })
    $(".tabmenu h2").click(function(){
        $(".tabmenu h2").removeClass();
        $(this).addClass("on");

        let i=$(this).index();
        $(".tabcon").hide();
        $(".tabcon").eq(i).show();
    })

    let t=0;
    function slide(){
        if(t<2){
            t++;
        }else{t=0}
        $(".slide> ul li").fadeOut(1000);
        $(".slide> ul li").eq(t).fadeIn(1000);
    }
    setInterval(slide,3000)
})