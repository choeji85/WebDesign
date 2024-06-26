$(function(){
    $("nav>ul>li").mouseenter(function(){
        $(this).find(".sub").stop().slideDown();
    })
    $("nav>ul>li").mouseleave(function(){
    $(".sub").stop().slideUp();
    })

    $(".tabmenu h2").click(function(){
        $(".tabmenu h2").removeClass();
        $(this).addClass("on");

        let i=$(this).index();
        $(".tabcon").hide();
        $(".tabcon").eq(i).show();
    })
    let j=0;
    function slide(){
        if(j<2){
            j++;
        }else{j=0}
    $(".slide .sld").animate({top:-400*j},1000)
    }
    setInterval(slide,3000)
    $(".pp").click(function(){
        $(".popup").show();
        return false;
    })
    $(".button").click(function(){
        $(".popup").hide();
    })
})