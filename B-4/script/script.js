$(function(){
    $("nav>ul>li").mouseenter(function(){
        $(".sub").stop().slideDown();
        $(".menuBg").stop().show();
    })
    $("nav>ul>li").mouseleave(function(){
        $(".sub").stop().slideUp();
        $(".menuBg").stop().hide();
    })
    let i=0;
    function slide(){
        if(i<2){
            i++;
        }else{i=0}
        $(".slide ul").animate({left: -1200*i},1000)
    }
    // function slide(){
    //     $(".slide ul").animate({left:"-1200px"},800,function(){
    //         $(".slide ul").append($(".slide ul li").first())
    //         $(".slide ul").css({left:0})
    //     })
    // }
    setInterval(slide, 3000);
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