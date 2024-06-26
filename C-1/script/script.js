$(function(){
    $("nav>ul>li").mouseenter(function(){
        $(this).find(".sub").stop().slideDown();
    })
    $("nav>ul>li").mouseleave(function(){
        $(".sub").stop().slideUp();
    })

    $(".pp").click(function(){
        $(".popup").show();
        return false;
    })
    $("button").click(function(){
        $(".popup").hide();
    })

    let i=0;
    function slide(){
        if(i<2){
            i++;
        }else{i=0;}
        $(".slide ul li").fadeOut(1000);
        $(".slide ul li").eq(i).fadeIn(1000);        
    }
    setInterval(slide, 2000);

    
    $(".tabmenu h2").click(function(){
        $(".tabmenu h2").removeClass();
        $(this).addClass("on");

        let j=$(this).index();    
        $(".tabcon").hide();
        $(".tabcon").eq(j).show();
    })
})