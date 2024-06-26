$(function(){
    $("nav ul li").mouseenter(function(){
        $(this).find(".sub").stop().slideDown();
    })
    $("nav ul li").mouseleave(function(){
        $(this).find(".sub").stop().slideUp();
    })

    $(".pp").click(function(){
        $(".popup").show();
        return false;
    })
    $("button").click(function(){
        $(".popup").hide();
    })

    let i;
    $(".tabmenu h2").click(function(){
        $(".tabmenu h2").removeClass("on");
        $(this).addClass("on");
        i=$(this).index();

        $(".tabcon").hide();
        $(".tabcon").eq(i).show();
    })
    let t=0;
    function slide(){
        if(t<2){
          t++;  
        }else{t=0;}
        $(".slide ul li").fadeOut();
        $(".slide ul li").eq(t).fadeIn();
    }
    setInterval(slide,2000)
})
