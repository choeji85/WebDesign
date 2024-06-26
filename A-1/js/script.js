$(function(){
    //메뉴
    $("nav>ul>li").mouseenter(function(){
        $(".sub").stop().slideDown()
    })

    $("nav>ul>li").mouseleave(function(){
        $(".sub").stop().slideUp()
    })
    //팝업창
    $(".pp").click(function(){
        $(".popup").show();
        return false;
    })
    $(".popup button").click(function(){
        $(".popup").hide();
    })
    //탭메뉴
    $(".tabmenu li").click(function(){
        $(".tabmenu li").removeClass("on");
        $(this).addClass("on");

        let i=$(this).index();
        console.log(i);
        $(".tabcon").hide();
        $(".tabcon").eq(i).show();

        return false;
    })
    //슬라이드
    // let t=0;
    // function slide(){
    //     if(t<2){
    //         t++;
    //     }else{
    //         t=0;
    //     }
    //     $(".slide ul").animate({top:t*300*(-1)},1000);
    // }
    function slide(){
        $(".slide ul").animate({top:-300},1000,function(){
            $(".slide ul").append($(".slide ul li").first());
            $(".slide ul").css({top:0});
        })
    }
    setInterval(slide,3000);
});