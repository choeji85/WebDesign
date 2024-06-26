$(function(){
    $("nav>ul>li").mouseenter(function(){
        $(".sub").stop().slideDown();
    })
    $("nav>ul>li").mouseleave(function(){
        $(".sub").stop().slideUp();
    })

    let i=0;
    function slide(){
        if(i<2){
            i++;
        }else{i=0}
        $(".slide ul li").animate({left:-1200*i},1000)
    }
    setInterval(slide,3000);

    let j;
    $(".tabmenu h2").click(function(){
        $(".tabmenu h2").removeClass();
        $(this).addClass("on");
        j=$(this).index();
        $(".tabcon").hide();
        $(".tabcon").eq(j).show();
    })

    $(".pp").click(function(){
        $(".popup").show();
        return false;
    })
    $(".button").click(function(){
        $(".popup").hide();
    })
})