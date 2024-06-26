$(function(){
    //상단메뉴
    $("nav > ul > li").mouseenter(function(){
        $(this).find(".sub").stop().slideDown();
    })
    $("nav > ul > li").mouseleave(function(){
        $(this).find(".sub").stop().slideUp();
    })
    //슬라이드
    let t=0;
    function slide(){
        if(t<2){
            t++;
        }else{t=0;}
        $(".slide ul").animate({top: 300*(-1)*t},1000)
    }
    setInterval(slide,2000);
    
    //갤러리
    $(".con2> ul> li").mouseenter(function(){
        $(this).css("opacity",0.5);
    })
    $(".con2> ul> li").mouseleave(function(){
        $(this).css("opacity",1);
    })
    
    //팝업창
    $(".pp").click(function(){
        $(".popup").show();
    })
    $(".popup .button").click(function(){
        $(".popup").hide();
    })
});