$(function(){
    $("nav>ul>li").mouseenter(function(){
        $(this).find(".sub").stop().slideDown(500);   
    })
    $("nav>ul>li").mouseleave(function(){
        $(".sub").stop().slideUp();
    })
    let i=0;
    function slide(){
        if(i<2){
            i++;
        }else{i=0;}
        $(".slide ul").animate({left:(-800*i)+"px"},1000)
    }
    setInterval(slide,3000);

    $(".pp").click(function(){
        $(".popup").show();
        return false
    })
    $(".button").click(function(){
        $(".popup").hide();
    })
})