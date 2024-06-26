$(function(){
    $("nav>ul>li").mouseenter(function(){
        $(this).find(".sub").stop().slideDown();
    })
    $("nav>ul>li").mouseleave(function(){
        $(".sub").stop().slideUp();
    })
    // let i=0;
    // function slide(){
    //     if(i<2){
    //         i++;
    //     }else{i=0}
    // $(".slide ul").animate({top: -870 * i},1000);
    // }
    function slide(){
        $(".slide ul").animate({top:"-870px"},1000,function(){
            $(".slide ul").append($(".slide ul li").first())
            $(".slide ul").css({top:0})
        })
    }
    setInterval(slide,3000);

    $(".pp").click(function(){
        $(".popup").show();
        $(".modal").show();
        return false;
    })
    $(".popup button").click(function(){
        $(".popup").hide();
        $(".modal").hide();
    })
})