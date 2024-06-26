$(function(){
    $("nav>ul>li").mouseenter(function(){
        $(this).find(".sub").stop().slideDown();
    })
    $("nav>ul>li").mouseleave(function(){
        $(".sub").stop().slideUp();
    })
    let i=0;
    function slide(){
        if(i<2){
            i++;
        }else{i=0}
    $(".slide ul").animate({top: -700*i})
    }
    setInterval(slide,3000)

    $(".pp").click(function(){
        $(".popup").show();
    })
    $(".popup button").click(function(){
        $(".popup").hide();
    })
})