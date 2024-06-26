$(function(){
    $("nav>ul>li").mouseenter(function(){
        $(this).find(".sub").stop().fadeIn();
    })
    $("nav>ul>li").mouseleave(function(){
        $(".sub").stop().fadeOut();
    })

    $(".pp").click(function(){
        $(".popup, .modal").show();
        return false;
    })
    $(".popup button").click(function(){
        $(".popup, .modal").hide();
    })
    let i=0;
    function slide(){
        if(i<2){
            i++;
        }else{i=0}
        $(".slide ul").animate({left:(-100 *i)+"%"},1000)
    }
    setInterval(slide, 3000);
})