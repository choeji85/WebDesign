$(function(){
    $("nav>ul>li").mouseenter(function(){
        $(".sub, .menuBg").stop().slideDown();
    })
    $("nav>ul>li").mouseleave(function(){
        $(".sub, .menuBg").stop().slideUp();
    })

    $(".pp").click(function(){
        $(".popup").show();
        return false;
    })
    $(".popup .button").click(function(){
        $(".popup").hide();
    })
    let t;
    function slide(){
            if(t<2){
                t++
            }else{ t=0;}
            $(".slide ul").animate({left:1200*(-1)*t},1000)
        }
    setInterval(slide, 2000)
        
})