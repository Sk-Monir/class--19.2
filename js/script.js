$(function(){
    // Back To Top start
    $(window).on('scroll',function(){
        var scrollTop= $(this).scrollTop();

        if(scrollTop > 500){
            $('.back_to_top').fadeIn(500);
        }else{
            $('.back_to_top').fadeOut(500);
        }
    });

    $('.back_to_top').on('click',function(){
      $('html,body').animate(
          {
            scrollTop : 0,
          },500);
    });
    // Back To Top End
    // preloader start
    $(window).on('load',function(){
        $('.preloader').fadeOut(5000)
    });
    // preloader End
    // smooth Scroll
    $('a').on('click',function(e){
        e.preventDefault();

        var hash=this.hash;
        if(this.hash !== ' ' ){
            $('html ,body').animate({
                scrollTop: $(hash).offset().top
            },800);
        }

    });
    // smooth Scroll


});