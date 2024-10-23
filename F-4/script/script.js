$(function(){
    $("nav> ul> li").mouseenter(function(){
        $(".sub").stop().slideDown();
        $(".bg").show();
    });
    $("nav> ul> li").mouseleave(function(){
        $(".sub").stop().slideUp();
        $(".bg").hide();
    });

    let i=0;
    function slide(){
        if(i<2){
            i++
        }else{i=0}
        $(".slide ul").animate({top:-350*i},1000)
    }
    setInterval(slide, 3000)
    $(".pp").click(function(){
        $(".popup").show();
        $(".modal").show();
        return false;
    })
    $(".popup button").click(function(){
        $(".popup").hide();
        $(".modal").hide();
    })
});