$(function() {
    //Search Form
    var $searchForm = $('.search-form');
    var $searchFormInput = $('.search-form__input');
    $('.js-search').on('click', function(e){
      e.preventDefault();
      if ($searchForm.hasClass('open') && $searchFormInput.val() == "") {
        $searchForm.removeClass('open');
      }
      else {
        $searchForm.addClass('open');
        $searchFormInput.focus();
      }
    });

    //MOBILE MENU
    $headerMenuList = $('.header-menu__list');
    $('.header-menu__mobile').click(function(){
      $('body').addClass('body-mobile')
      $headerMenuList.addClass('mobile');
    });
    $('.header-menu__mobile-close, .header-menu__link').on('click', function(){
      $headerMenuList.removeClass('mobile');
      $('body').removeClass('body-mobile')
    });

    //Language select
    var $languageSelect = $('.language-select');
    $languageSelect.click(function(){
      $(this).toggleClass('open');
    });

    $('.language-select li').click(function(){
      $('ul li').removeClass('active');
      $(this).toggleClass('active');
    });

    //CLOSE ELEMENTS AFTER CLICK OUTSIDE
    $("body").on('click touchstart', function(e) {
      if($(e.target).closest(".language-select").length==0)
        $languageSelect.removeClass('open');
      if($(e.target).closest('.search-form').length==0)
        $searchForm.removeClass('open');
    });

    //HEADER SCROLL
    var $header = $('.header');
    $(window).scroll(function(){
      if ($(this).scrollTop() >= 70){
        $header.addClass('scroll');
      }
      else{
        $header.removeClass('scroll');
      }
    });

    //Tabs
    $(".tab-content").hide();
    $(".tab-content:last").show();

    $("ul.tabs li").click(function() {
      $(".tab-content").hide();
      var activeTab = $(this).attr("rel");
      $("#"+activeTab).fadeIn();
      $("ul.tabs li").removeClass("active");
      $(this).addClass("active");
    });

    //Sliders

    // Info block carousel
    $('#js-carousel-info').owlCarousel({
      items: 1,
      loop:true,
      autoplay:true,
      autoplayTimeout:4000
    });

    // News block carousel
    $('#js-carousel-news').owlCarousel({
      items: 3,
      nav:true,
      navText : ["",""],
      responsive : {
        0 : {
          items: 1,
        },
        480 : {
          items: 2,
        },
        768 : {
          items: 3,
        }
      }
    });

    // Lectures and Main block carousel
    $('#js-carousel-lectures, #js-carousel-main').owlCarousel({
      items: 1,
      nav:true,
      navText : ["",""]
    });

});
