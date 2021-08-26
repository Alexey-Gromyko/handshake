
@@include('jquery-3.6.0.min.js')
@@include('slick.min.js')

function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
    });



    $(document).ready(function() {

        $('.header-burger').on('click', function() {
            $('.header-burger').toggleClass('active');
            $('.header-links').toggleClass('active');
            $('body').toggleClass('lock');
        })


        $('.ibm-slider').slick({
            dots: true,
        });


        $('.employers-slider').slick({
            infinite: true,
            slidesToShow: 6,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            speed: 2500,
            autoplaySpeed: 0,
            cssEase: "linear",
            responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    cssEase: "linear",
                  }
                },
                {
                    breakpoint: 615,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll: 1,
                      infinite: true,
                      cssEase: "linear",
                    }
                },
                {
                    breakpoint: 400,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1,
                      infinite: true,
                      cssEase: "linear",
                    }
                },
              ]
        });

        $('.mobile-footer-list').on('click', function() {
            $(this).toggleClass('show-content');
            $(this).find('.mobile-footer-list-arrow span').toggleClass('active');
            if($(this).hasClass('show-content')) {
                $(this).parent('.footer-list').find('ul').slideDown();
            } else {
                $(this).parent('.footer-list').find('ul').slideUp();
            }
        })
    })