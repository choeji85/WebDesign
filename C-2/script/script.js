$(function(){
    $("nav>ul>li").mouseenter(function(){
        $(this).find(".sub").stop().slideDown();
    })
    $("nav>ul>li").mouseleave(function(){
        $(".sub").stop().slideUp();
    })
    
    $(".pp").click(function(){
        $(".popup").show();
        $(".modal").show();
    })
    $(".button").click(function(){
        $(".popup").hide();
        $(".modal").hide();
    })

    let i=0;
    function slide(){
        if(i<2){
            i++;
        }else{i=0}
    $(".slide ul li").fadeOut(1000);
    $(".slide ul li").eq(i).fadeIn(1000);
    }
    setInterval(slide,3000);
})