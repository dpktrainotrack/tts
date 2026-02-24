





(function ($) {
    "use strict";

    var windowOn = $(window)
        ///////////////////////////////////////////////////
        // 01. PreLoader Js
    windowOn.on('load', function() {
        $('#loading').fadeOut(500);
    });

    ///////////////////////////////////////////////////
    // 02. SubMenu Dropdown Toggle
    if ($('.tp-main-menu nav > ul > li.has-dropdown > a').length) {
        $('.tp-main-menu nav > ul > li.has-dropdown > a').append('<i class="fal fa-angle-down"></i>');
    }

    ///////////////////////////////////////////////////
    // 03. scroll-to-target 
    windowOn.on('scroll', function() {
        var scroll = windowOn.scrollTop();
        if (scroll < 500) {
            $('.scroll-to-target').removeClass('open');

        } else {
            $('.scroll-to-target').addClass('open');
        }
    });

    ///////////////////////////////////////////////////
    // 04. Scroll Up Js
    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click', function() {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }

    ///////////////////////////////////////////////////
    // 05. wow animation
    var wow = new WOW({
        mobile: true,
    });
    wow.init();
    var windowOn = $(window);

    ///////////////////////////////////////////////////
    // 06. PreLoader Js
    windowOn.on('load', function() {
        $("#loading").fadeOut(500);

    });

    ///////////////////////////////////////////////////
    // 07. Sticky Header Js
    windowOn.on('scroll', function() {
        var scroll = windowOn.scrollTop();
        if (scroll < 400) {
            $("#header-sticky").removeClass("header-sticky");
        } else {
            $("#header-sticky").addClass("header-sticky");
        }
    });

    ////////////////////////////////////////////////////
    // 08. Mobile Menu Js
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991",
        meanExpand: ['<i class="fal fa-plus"></i>'],
    });



    $(window).on('load', function() {

        $('#preloader').delay(350).fadeOut('slow');

        $('body').delay(350).css({ 'overflow': 'visible' });

    })

    ////////////////////////////////////////////////////
    // 09. Sidebar Js
    $(".tp-menu-bar").on("click", function() {
        $(".tpoffcanvas").addClass("opened");
        $(".body-overlay").addClass("apply");
    });
    $(".close-btn").on("click", function() {
        $(".tpoffcanvas").removeClass("opened");
        $(".body-overlay").removeClass("apply");
    });
    $(".body-overlay").on("click", function() {
        $(".tpoffcanvas").removeClass("opened");
        $(".body-overlay").removeClass("apply");
    });

    ///////////////////////////////////////////////////
    // 10. Magnific Js
    $(".popup-video").magnificPopup({
        type: "iframe",
    });

    ////////////////////////////////////////////////////
    // 11. Data CSS Js
    $("[data-background").each(function() {
        $(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
    });

    $("[data-width]").each(function() {
        $(this).css("width", $(this).attr("data-width"));
    });

    $("[data-bg-color]").each(function() {
        $(this).css("background-color", $(this).attr("data-bg-color"));
    });

    ////////////////////////////////////////////////////
    // 12. Counter Js
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // 09. Home-1-Slider js
    $('.tp-slider-active').slick({
        fade: true,
        autoplay: true,
        slidesToShow: 1,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-long-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fal fa-long-arrow-right"></i></button>',
        responsive: [{
                breakpoint: 992,
                settings: {
                    arrows: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                }
            }
        ]
    });

    // 09. Home-1-Slider js
    $('.tp-brand-slider-active').slick({
        fade: false,
        autoplay: false,
        slidesToShow: 6,
        arrows: false,
        Infinity: true,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    arrows: false,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                }
            }
        ]
    });
    // 09. Home-1-Slider js
    $('.tp-case-slider-active').slick({
        fade: false,
        autoplay: false,
        slidesToShow: 3,
        arrows: false,
        centerMode: true,
        centerPadding: '160px',
        responsive: [{
                breakpoint: 1600,
                settings: {
                    arrows: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    arrows: false,
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                    centerPadding: '90px',
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    centerPadding: '0px',
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerPadding: '0px',
                    slidesToShow: 1,

                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    centerPadding: '0px',
                    slidesToShow: 1,
                }
            }
        ]
    });
    // 09. Home-1-Slider js
    $('.testimonial-slider-active').slick({
        fade: false,
        autoplay: false,
        slidesToShow: 3,
        arrows: false,
        dots: true,
        Infinity: true,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
            }
        ]
    });
    // 09. Home-1-Slider js
    $('.tp-slider-three-active').slick({
        fade: false,
        autoplay: false,
        slidesToShow: 1,
        arrows: false,
        dots: false,
        Infinity: true,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
            }
        ]
    });
    // 09. Home-1-Slider js
    $('.tp-team-slider-active').slick({
        fade: false,
        autoplay: false,
        slidesToShow: 4,
        arrows: true,
        dots: false,
        Infinity: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fal fa-arrow-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fal fa-arrow-right"></i></button>',
        responsive: [{
                breakpoint: 1400,
                settings: {
                    arrows: false,
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
            }
        ]
    });
    // 09. Home-1-Slider js
    $('.testimonial-slider-three').slick({
        fade: true,
        autoplay: false,
        slidesToShow: 1,
        arrows: false,
        dots: true,
        Infinity: true,
        responsive: [{
                breakpoint: 1200,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                }
            }
        ]
    });

    ////////////////////////////////////////////////////
    // 14. magnificPopup Js
    $('.popup-image').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });


    // 20. Show Login Toggle Js
    $('#showlogin').on('click', function() {
        $('#checkout-login').slideToggle(900);
    });

    /*-------------------------

    	showcoupon toggle function

    --------------------------*/

    $('#showcoupon').on('click', function() {

        $('#checkout_coupon').slideToggle(900);

    });


    /*-------------------------

    	Create an account toggle function

    --------------------------*/

    $('#cbox').on('click', function() {

        $('#cbox_info').slideToggle(900);

    });



    /*-------------------------

    	Create an account toggle function

    --------------------------*/

    $('#ship-box').on('click', function() {

        $('#ship-box-info').slideToggle(1000);

    });


    ////////////////////////////////////////////////////
    // 15. MagnificPopup video view Js
    $(".popup-video").magnificPopup({
        type: "iframe",
    });

    ////////////////////////////////////////////////////
    //26.isotope
    $('.grid').imagesLoaded(function() {
        // init Isotope
        var $grid = $('.grid').isotope({
            itemSelector: '.grid-item',
            percentPosition: true,
            layoutMode: 'fitRows',
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: 1,
            },

        });


        // filter items on button click
        $('.masonary-menu').on('click', 'button', function() {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({
                filter: filterValue,
                animationOptions: {
                    duration: 10000,
                    easing: "linear",
                    queue: true
                }
            });

        });

        //for menu active class
        $('.masonary-menu button').on('click', function(event) {
            $(this).siblings('.active').removeClass('active');
            $(this).addClass('active');
            event.preventDefault();
        });

    });

    // 05. Search Js
    $(".button-search-toggle").on("click", function() {
        $(".search-btn-wrap").toggleClass("header_search-open");
    });
    $("body > *:not(header)").on("click", function() {
        $(".search-btn-wrap").removeClass("header_search-open");
    });

    ////////////////////////////////////////////////////
    // 16. Cart Quantity Js
    $('.cart-minus').on('click', function() {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });

    $('.cart-plus').on('click', function() {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });


    /* Price filter active */

    if ($("#slider-range").length) {

        $("#slider-range").slider({

            range: true,

            min: 0,

            max: 500,

            values: [75, 300],

            slide: function(event, ui) {

                $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);

            }

        });

        $("#amount").val("$" + $("#slider-range").slider("values", 0) +

            " - $" + $("#slider-range").slider("values", 1));

        $('#filter-btn').on('click', function() {

            $('.filter-widget').slideToggle(1000);

        });

    }



    // 08. Nice Select Js
    $('select').niceSelect();


})(jQuery);


document.addEventListener('DOMContentLoaded', function() {
    const tocList = document.getElementById('toc-list');
    const headings = document.querySelectorAll('article h1, article h2, article h3, article h4');

    headings.forEach((heading) => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');

        link.textContent = heading.textContent;
        link.href = `#${heading.id}`;
        if (heading.tagName.toLowerCase() === 'h2') {
            listItem.style.marginLeft = '10px';
        }

        if (heading.tagName.toLowerCase() === 'h3') {
            listItem.style.marginLeft = '20px';
        }
        if (heading.tagName.toLowerCase() === 'h4') {
            listItem.style.marginLeft = '40px';
        }
        if (heading.tagName.toLowerCase() === 'li') {
            listItem.style.marginLeft = '30px';
        }

        listItem.appendChild(link);
        tocList.appendChild(listItem);
    });


    // document.querySelector('article').style.display = 'block';
});


// Dynamically load it enquire fourm content
// fetch('/it-fourm.html')
//     .then(response => response.text())
//     .then(data => {
//         document.getElementById('itfourm').innerHTML = data;
//     })
//     .catch(error => console.error('error loading itforum:', error));

function Enquiry1() {
    var isValid = true;
    $('#contact1 input[type="text"]').each(function() {
        if ($.trim($(this).val()) == '') {
            $(this).css({ "border": "1px solid red", "box-shadow": "rgba(113, 113, 113, 0.73) 1px 0px 5px;" });
            isValid = false;
        } else {
            $(this).css({ "border": "", "box-shadow": "" });
        }
    });
    var Email = $("#txtEmail1").val();
    var emailExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (Email != '') {
        if (!Email.match(emailExp)) {
            $('#errorEmailId1').text('Invalid Email Id');
            return false;
        } else { $('#errorEmailId1').text(''); }
    }
    if (isValid == false) {

        // e.pre
    } else {
        var user = {};
        user.Name = $("#txtName1").val();
        user.Phone = $("#txtPhone1").val();
        user.EmailID = $("#txtEmail1").val();
        user.Subject = $("#txtSubject1").val();
        user.Comment = $("#txtComment1").val();
        // user.Title = "Contact Page";
        $("#btnSubmit").css("display", "none");
        $("#submitloding1").css("display", "block");
        $.ajax({
            type: "POST",
            url: "https://www.trainotracksolutions.com/WebService.asmx/SentMailfromContactPage1",
            data: '{user: ' + JSON.stringify(user) + '}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function(response) {
                var userId = response.d;
                if (userId == true) {
                    $("#SuccessMessage1").css("display", "block");
                    $("#btnSubmit").css("display", "inline-block");
                    $("#submitloding1").css("display", "none");
                    $("#SuccessMessage1").fadeOut(6000);
                    $('#txtName1').val('');
                    $('#txtComment1').val('');
                    $('#txtPhone1').val('');
                    $('#txtEmail1').val('');
                    $('#txtSubject1').val('');
                } else {
                    alert("Somthing Wrong!");
                }
            }
        });
    }
}



document.addEventListener("DOMContentLoaded", function() {
    // Check if the URL path starts with /certifications/
    if (window.location.pathname.startsWith("/certifications/")) {
        var canonicalLink = document.createElement("link");
        canonicalLink.rel = "canonical";
        canonicalLink.href = window.location.href.split('?')[0];
        document.head.appendChild(canonicalLink);
    }
});


var swiper = new Swiper(".mySwiper", {
    loop: true, // infinite loop
    loopedSlides: 2, // looped slides
    // autoplay: {
    //     delay: 4000, // 4 sec per slide
    //     disableOnInteraction: false,
    // },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    speed: 800, // smooth transition
});

var slider2 = new Swiper(".slider2", {
    loop: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },

    speed: 1500,
    slidesPerView: 5, 
    spaceBetween: 30, 
    breakpoints: {
        320: {
            slidesPerView: 2
        }, // Mobile
        768: {
            slidesPerView: 3
        }, // Tablet
        1024: {
            slidesPerView: 5
        }, // Laptop
        1280: {
            slidesPerView: 6
        } // Desktop
    }
});


let productswiper = new Swiper(".productSwiper", {
    slidesPerView: 4, // desktop pe 4 dikhe
    slidesPerGroup: 1, // ek bar me ek slide move ho
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1
        }, // Mobile
        768: {
            slidesPerView: 2
        }, // Tablet
        1024: {
            slidesPerView: 3
        }, // Laptop
        1280: {
            slidesPerView: 4
        } // Desktop
    }
});


//it price 

// Reusable function
function updateExamPrices() {
    for (let key in window.examPrices) {
        const exam = window.examPrices[key];

        // Actual Price
        const actualElements = document.querySelectorAll(`#${key}_actual`);
        actualElements.forEach(el => el.innerText = "₹" + exam.actual);

        // Our Price
        const sellingElements = document.querySelectorAll(`#${key}_selling`);
        sellingElements.forEach(el => el.innerText = "₹" + exam.selling);

        // our Save Price
        const saveElements = document.querySelectorAll(`#${key}_save`);
        saveElements.forEach(el => {
            const saved = exam.actual - exam.selling;
            el.innerText = " ₹" + saved;
        });


        // Discount
        const discountElements = document.querySelectorAll(`#${key}_discount`);
        discountElements.forEach(el => {
            const off = Math.round(((exam.actual - exam.selling) / exam.actual) * 100);
            el.innerText = off + "% OFF";
        });
    }
}

// Call once page load ho jaye
document.addEventListener("DOMContentLoaded", () => {
    updateExamPrices();
});

// Agar dusri jagah bhi chahiye to phir se call kar lo:
// updateExamPrices();



// Dynamically load sidebar.html content
// fetch('/it-fourm.html')
//     .then(response => response.text())
//     .then(data => {
//         const fourmElem = document.getElementById('staticBackdrop');
//         if (fourmElem) {
//             fourmElem.innerHTML = data;
//         } else {
//             console("somthing went wrong");
//         }
//     })
//     .catch(error => console.error('Error loading fourm:', error));
$(document).on("click", ".btn-group a", function () {
    // Go up to the nearest .pro-details and then find the exam name
    let examName = $(this).closest(".pro-details").find(".pro-heading a").text().trim();
    $("#hExamName").text(examName);
});
$(document).on("click", ".btn-group a, .sercviceinsurance button", function () {
    // Find nearest card
    let card = $(this).closest(".pro-details, .sercviceinsurance__item");

    // Look for exam name in both possible places
    let examName = card.find(".pro-heading a, .tp-sv-insurance-title a").text().trim();

    // Set exam name inside modal heading
    $("#hExamName").text(examName);
});
$(document).on("click", ".btn-group a, .sercviceinsurance button, .tp-ab-button-one", function () {
    // Find nearest card wrapper
    let card = $(this).closest(".pro-details, .sercviceinsurance__item, .product-dec");

    // Check for exam name inside different structures
    let examName = card.find(".pro-heading a, .tp-sv-insurance-title a, #hName").text().trim();

    // Put exam name inside modal heading
    $("#hExamName").text(examName);

   
});


fetch('/it-fourm.html')
    .then(response => response.text())
    .then(data => {
        const fourmElem = document.getElementById('fourm');
        if (fourmElem) {
            fourmElem.innerHTML = data;
        } else {
            console("somthing went wrong");
        }
    })
    .catch(error => console.error('Error loading fourm:', error));

$(document).on("click", "#btnSubmit11", function () {
    var isValid = true;
    $('#contact-form11 input[type="text"]').each(function () {
        if ($.trim($(this).val()) == '') {
            $(this).css({
                "border": "1px solid red",
                "box-shadow": "rgba(113, 113, 113, 0.73) 1px 0px 5px;"
            });
            isValid = false;
        } else {
            $(this).css({
                "border": "",
                "box-shadow": ""
            });
        }
    });
    var Email = $("#txtEmail11").val();
    var emailExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (Email != '') {
        if (!Email.match(emailExp)) {
            $('#errorEmailId11').text('Invalid Email Id');
            return false;
        } else {
            $('#errorEmailId11').text('');
        }
    }
    if (isValid == false) {

        // e.pre
    } else {
        var user = {};
        user.Course = $("#hExamName").text();
        user.Name = $("#txtName11").val();
        user.Phone = $("#txtPhone11").val();
        user.EmailID = $("#txtEmail11").val();
        user.Country = $("#txtCountry11").val();
        $("#btnSubmit11").css("display", "none");
        $("#dvLoading11").css("display", "block");
        $.ajax({
            type: "POST",
            url: "https://www.trainotracksolutions.com/WebService.asmx/SentMailfromContactPage",
            data: '{user: ' + JSON.stringify(user) + '}',
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (response) {
                var userId = response.d;
                if (userId == true) {
                    // $("#SuccessMessage1").css("display", "block");
                    $("#btnSubmit11").css("display", "inline-block");
                    $("#dvLoading11").css("display", "none");
                    // $("#SuccessMessage1").fadeOut(6000);
                    window.location.replace("../thankyou.html");
                    $('#txtName11').val('');
                    $('#txtPhone11').val('');
                    $('#txtEmail11').val('');
                    $('#txtCountry11').val('');
                    // window.location.replace("#");

                } else {
                    alert("Somthing Wrong!");
                }
            }
        });
    }
});

// Dynamically load it inqry fourm  content
fetch('/voucher-fourm.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('fourm2').innerHTML = data;
    })
    .catch(error => console.error('Error loading fourm:', error));

// Dynamically load it inqry fourm  content
fetch('/it-enquiry-fourm.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('fourm1').innerHTML = data;
    })
    .catch(error => console.error('Error loading fourm:', error));

// Dynamically load footer content
fetch('/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    })
    .catch(error => console.error('Error loading footer:', error));






// Header load karo
$("#header").load("/header.html", function() {

    // Meanmenu duplicate fix
    $(".mean-bar").remove();

    // Mobile menu init
    $('#mobile-menu').meanmenu({
        meanMenuContainer: '.mobile-menu',
        meanScreenWidth: "991",
        meanExpand: '<i class="fal fa-plus"></i>',
        meanContract: '<i class="fal fa-minus"></i>'
    });

    // Offcanvas open
    $(document).on("click", ".tp-menu-bar", function() {
        $(".tpoffcanvas").addClass("opened");
        $(".body-overlay").addClass("opened");
    });

    // Offcanvas close
    $(document).on("click", ".close-btn, .body-overlay", function() {
        $(".tpoffcanvas").removeClass("opened");
        $(".body-overlay").removeClass("opened");
    });

});

// Dynamically load Footer.html content
fetch('/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    })
    .catch(error => console.error('Error loading footer:', error));