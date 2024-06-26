$(function(){
    $("nav>ul>li").mouseenter(function(){
        $(".sub").stop().show();
    })
    $("nav>ul>li").mouseleave(function(){
        $(".sub").stop().hide();
    })

    let i=0;
    function slide(){
        if(i<2){
            i++;
        }else{i=0}
        $(".slide ul li").fadeOut();
        $(".slide ul li").eq(i).fadeIn();
    }
    setInterval(slide,3000);

    $(".pp").click(function(){
        $(".popup").show();
        return false;
    })
    $(".popup button").click(function(){
        $(".popup").hide();
    })
})