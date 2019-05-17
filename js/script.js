$(document).ready(function() {
 
    //-------------quotes_caurusel----------------------
    $('.carousel').carousel();
    $.validate({
    lang: 'ru'
  });
    $("#carouselExampleIndicators").carousel();
    $('.flexslider_quotes').flexslider({
        animation: "slide",
        controlNav: false,
        smoothHeight: true,
        animation: "fade",
        start: function() {
            $("#quotes_slider_next").on("click", function(e) {
                console.log("heya");
                $(".flexslider_quotes .flex-prev").trigger('click');
            });
            $("#quotes_slider_prev").on("click", function(e) {
                console.log("heya");
                $(".flexslider_quotes .flex-next").trigger('click');
            });
        }
    });
    $('#carouselExampleIndicators').on('slide.bs.carousel', function() {
        // do something…
    })
    $(".fancybox").fancybox();
    $('.flexslider').flexslider({
        animation: "fade", // slide or fade
        controlsContainer: ".flex-container", // the container that holds the flexslider
        controlNav: false,
    });


    //--------------fancybox_options-----------------------

    $(".fancyboxGal").fancybox({
        wrapCSS: "elements_call",
        padding: 0,
        helpers: {
            overlay: {
                opacity: 0.1,
                css: {
                    'background': 'rgba(90, 92, 94, 0.8)'
                }
            }
        }
    });

    //--------------END fancybox_options-------------------

    //--------------BEGIN BIG CLICK FILE -------------------------------
    $('.file_bigger').click(function(event) {
        $("input#file").trigger('click');
    });

    $('div.time_bigger').click(function(e) {
        e.stopPropagation();
        $("li.inner_time_menu.init").trigger('click');
    });

    $("div.b-m_bigger").click(function(e) {
        console.log("b-m_bigger");
        e.stopPropagation();
        $("div.button-menu").trigger('click');
    });
    $("div.b-m_bigger").hover(function() {
        console.log("b-m_hover");
        $("div.button-menu").mouseenter();
    });

    $("div.b-m_bigger").mouseleave(function(event) {
        $("div.button-menu").mouseleave();
    });

    $('div.vk_bigger').click(function(e) {
        e.stopPropagation();
        jQuery("a.vk")[0].click();
    });

    $('div.fb_bigger').click(function(e) {
        e.stopPropagation();
        jQuery("a.fb")[0].click();
    });

    $('.siteDev_big').click(function(e) {
        e.stopPropagation();
        jQuery("div.footer-1 a")[0].click();
    });

    $('.email_big').click(function(e) {
        e.stopPropagation();
        jQuery("p.footer-grey a")[0].click();
    });

    $('span.proizBaz_big').click(function(e) {
        e.stopPropagation();
        jQuery(".footer-3")[0].click();
    });

    $('span.mikola_phone_big').click(function(e) {
        e.stopPropagation();
        jQuery("div.footer-4 a:nth-child(1)")[0].click();
    });

    $('span.office_phone_big').click(function(e) {
        e.stopPropagation();
        jQuery("div.footer-4 a").children().eq(1).click();
    });

    $('.to_gal_big').click(function(e) {
        e.stopPropagation();
        jQuery("div.main-right-slide.main-articles.flexslider .main-articles-buttons a").click();
    });

    $('.to_gal_big2').click(function(e) {
        e.stopPropagation();
        jQuery("div.main-right-slide.main-works.flexslider .main-articles-buttons a").click();
    });
    //--------------END BIG CLICK FILE ---------------------------------

    //--------------inner_time_menu-----------------------


    $("#inner_time_menu_ID > li").on("click", function(e) {
        if ($("#inner_time_menu_ID > ul").hasClass('none')) {
            $("#inner_time_menu_ID > ul").removeClass("none");

            //stopping another functions that hides our menu
            e.stopPropagation();
        } else {
            $("#inner_time_menu_ID > ul").addClass("none");
        }
    });

    //choosing needed option
    $("#inner_time_menu_ID > ul > li").on("click", function() {
        $("#inner_time_menu_ID > li").empty();
        $("#inner_time_menu_ID > li").append($(this).text());
        $("#inner_time_menu_ID > ul").addClass("none");
    });

    //if we are clicking out of list, it will hide itself
    $(document).click(function(e) {
        if (!($("#inner_time_menu_ID > ul").hasClass('none'))) {
            $("#inner_time_menu_ID > ul").addClass("none");
        }
    })

    //--------------inner_time_menu-----------------------

    //--------------BEGIN back-call-block-------------------------------
    //hide and show call_block on click

    $("#open-header-form").click(function(e) {
        e.stopPropagation();
        if ($("#header-form").hasClass('none')) {
            $('#header-form').removeClass('none');
            $(this).toggleClass('active');
        } else {
            $('#header-form').addClass('none');
            $(this).toggleClass('active');
        }
        e.preventDefault();
    });

    // reacting on background clicks
    $(document).click(function(e) {
        if ((!($(e.target).closest(".header-form").length)) && (!($(e.target).closest(".fluid-container.project-row").length)) && (!($(e.target).closest(".fluid-container.search-row").length))) {
            if (!($("#header-form").hasClass('none'))) {
                $('#header-form').addClass("none");
                $("#open-header-form").removeClass('active');
            }
        }
    });

    //--------------END back-call-block---------------------------


    //--------------BEGIN project_row_hover-----------------------
    //show addit menu on click

    $("a#project-button").click(function(e) {
        e.stopPropagation();
        if ($("div.fluid-container.project-row").hasClass('none')) {
            if ($("div.fluid-container.search-row").hasClass('none')) {
                $("div.fluid-container.project-row").css("top", "41px");
            } else {
                $("div.fluid-container.project-row").css("top", "140px");
            }
            $("div.fluid-container.project-row").removeClass("none");
            $("#project-button").addClass('active');
        } else {
            $("div.fluid-container.project-row").addClass("none");
            $("#project-button").removeClass('active');
        }
        e.preventDefault();
    })

    $("a#project-button-fix").click(function(e) {
        e.stopPropagation();
        if ($(".floating_projects_projects_menu").hasClass('none')) {
            $(".floating_projects_projects_menu").removeClass("none");
            $("#project-button-fix").addClass('fix-active');
        } else {
            $("div.fluid-container.project-row").addClass("none");
            $("#project-button-fix").removeClass('fix-active');
        }
        e.preventDefault();
    })

    // reacting on background clicks
    $(document).click(function(e) {
        e.stopPropagation();
        if ((!($(e.target).closest(".header-form").length)) && (!($(e.target).closest(".fluid-container.project-row").length)) && (!($(e.target).closest(".fluid-container.search-row").length))) {
            if (!($("div.fluid-container.project-row").hasClass('none'))) {
                $("div.fluid-container.project-row").addClass("none");
                $("#project-button").removeClass('active');
                $("#project-button-fix").removeClass('fix-active');
            }
        }
    });

    // reacting on a clicks
    $("div.fluid-container.project-row a").click(function() {
        $("a#project-button").removeClass('active');
        console.log("aaa");
    });

    //--------------END project_row_hover-------------------------  

    //--------------BEGIN project_project_a_click-----------------
    $("div.fluid-container.project-row a").click(function(event) {
        $("div.fluid-container.project-row").addClass("none");
        $("#project-button").removeClass('active');
    });
    //--------------END project_project_a_click-------------------

    //--------------BEGIN search_row_appear-----------------------
    //show addit menu on click

    $("a#search-button-main").click(function(e) {
        e.stopPropagation();
        if ($("div.fluid-container.search-row").hasClass('none')) {
            if (!($("div.fluid-container.project-row").hasClass('none'))) {
                $("div.fluid-container.project-row").css("top", "140px");
            }
            $("div.fluid-container.search-row").removeClass("none");
        } else {
            if (!($("div.fluid-container.project-row").hasClass('none'))) {
                $("div.fluid-container.project-row").css("top", "41px");
            }
            $("div.fluid-container.search-row").addClass("none");
        }
        e.preventDefault();
    })

    // reacting on background clicks
    $(document).click(function(e) {
        if ((!($(e.target).closest(".header-form").length)) && (!($(e.target).closest(".fluid-container.project-row").length)) && (!($(e.target).closest(".fluid-container.search-row").length))) {
            if (!($("div.fluid-container.search-row").hasClass('none'))) {
                $("div.fluid-container.search-row").addClass("none");
            }
        }
    });


    //--------------END search_row_appear-------------------------

    //--------------upper_floating_menu---------------------------


    //when scrolled amount bigger than position of row menu - float_menu become visible

    $(window).scroll(function(e) {
        if ($(window).scrollTop() > ($("div.fluid-container.header-logo").height())) {
            if ($('.fix-menu').hasClass('none')) {
                $('.fix-menu').removeClass('none');
            }

            $(".right-menu").removeClass('none');

            // projects menu 
            $(".items-row").addClass("none");
            $("div.menu-wrap div.fluid-container.project-row").addClass("none");
            $("#search-main-line").addClass("none");
            $("#project-button").removeClass('active');
            $("div.fluid-container.project-row").css("top", "");

            //projects_projects submenu
            $("div.menu-wrap div.fluid-container.project-row").addClass("floating_projects_projects_menu");
            $("div.floating_projects_menu #project-button").removeClass('active');



            // checking on second part of screen-scrolling and hiding menu
            if (!($("div.fluid-container.project-row").hasClass('none'))) {
                $("div.fluid-container.project-row").addClass("none");
            }
        } else {
            if (!($('.fix-menu').hasClass('none'))) {
                $('.fix-menu').addClass('none');
            }

            $(".right-menu").addClass('none');

            // projects menu 
            $("div.menu-wrap div.fluid-container.project-row").addClass("none");
            $("#project-button").removeClass('active');
            $("#project-button-fix").removeClass('fix-active');

            //projects_projects submenu
            $("#main_menu").removeClass("floating_projects_menu");
            $("div.menu-wrap div.fluid-container.project-row").removeClass("floating_projects_projects_menu");
            $("div.floating_projects_menu #project-button").removeClass('active');

            // checking on first part of screen-scrolling and hiding menu
            if ($("div.fluid-container.project-row").hasClass('none')) {
                $("div.fluid-container.project-row").addClass("none");
            }
        }
    })

    $("div.button-menu").click(function() {
        $(".items-row").toggleClass('none');
    });

    //start animation on hover

    $("div.button-menu").hover(function() {
        $("div.button-menu").animateRotate(0, 180, 50, 'linear', function() {});
    }, function() {
        $("div.button-menu").animateRotate(180, 0, 50, 'linear', function() {});
    });



    //options for callback_popup fancybox

    $("a.callback-popup").click(function() {

        $(".callback-popup").fancybox({
            "wrapCSS": "call",
            "padding": 0,
            helpers: {
                overlay: {
                    locked: false,
                    opacity: 0.1,
                    css: {
                        'background': 'rgba(90, 92, 94, 0.8)'
                    }
                }
            }
        })
    })


    // AnimateRotate_Function

    $.fn.animateRotate = function(startAngle, endAngle, duration, easing, complete) {
        return this.each(function() {
            var elem = $(this);

            $({
                deg: startAngle
            }).animate({
                deg: endAngle
            }, {
                duration: duration,
                easing: easing,
                step: function(now) {
                    elem.css({
                        '-moz-transform': 'rotate(' + now + 'deg)',
                        '-webkit-transform': 'rotate(' + now + 'deg)',
                        '-o-transform': 'rotate(' + now + 'deg)',
                        '-ms-transform': 'rotate(' + now + 'deg)',
                        'transform': 'rotate(' + now + 'deg)'
                    });
                },
                complete: complete || $.noop
            });
        });
    };

    //--------------END upper_floating_menu-----------------------

    //--------------BEGIN flexslider -----------------------------
    $(".tab-next").click(function() {
        $($(this).closest('div').attr('id') + " a").click();
    });
    $(".tab-next").click(function() {
        $("#" + ($(this).closest("[id]").attr("id")) + " a.flex-next").click();
    });

    $(".tab-prev").click(function() {
        $("#" + ($(this).closest("[id]").attr("id")) + " a.flex-prev").click();
    });

    $("div.art-right").click(function() {
        $("#" + ($(this).closest("[id]").attr("id")) + " li.flex-nav-next a").click();
    });

    $("div.art-left").click(function() {
        $("#" + ($(this).closest("[id]").attr("id")) + " li.flex-nav-prev a").click();
    });

    // *elements*

    // 1.1
    $(".main-right-slide.main-articles.flexslider .art-right").click(function() {
        $(".main-right-slide.main-articles.flexslider li.flex-nav-next a").click();

    });

    $(".main-right-slide.main-articles.flexslider .art-left").click(function() {
        $(".main-right-slide.main-articles.flexslider li.flex-nav-prev a").click();
    });

    // 1.2

    $(".main-right-slide.main-works.flexslider .art-right").click(function() {
        $(".main-right-slide.main-works.flexslider li.flex-nav-next a").click();

    });

    $(".main-right-slide.main-works.flexslider .art-left").click(function() {
        $(".main-right-slide.main-works.flexslider li.flex-nav-prev a").click();
    });

    //--------------END flexslider -------------------------------


})