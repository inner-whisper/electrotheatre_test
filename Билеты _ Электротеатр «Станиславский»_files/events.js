(function ($) {
	$( document ).ready(function() {
              $('.field-name-field-photos .field-items').addClass('owl-carousel');
              var owl = $('.owl-carousel');
              owl.on('initialize.owl.carousel initialized.owl.carousel ' +
                'initialize.owl.carousel initialize.owl.carousel ' +
                'resize.owl.carousel resized.owl.carousel ' +
                'refresh.owl.carousel refreshed.owl.carousel ' +
                'update.owl.carousel updated.owl.carousel ' +
                'drag.owl.carousel dragged.owl.carousel ' +
                'translate.owl.carousel translated.owl.carousel ' +
                'to.owl.carousel changed.owl.carousel', function(e) {
                  $('.' + e.type)
                    .removeClass('secondary')
                    .addClass('success');
                  window.setTimeout(function() {
                    $('.' + e.type)
                      .removeClass('success')
                      .addClass('secondary');
                  }, 500);
                });
              owl.owlCarousel({
                loop: false,
                nav: true,
                lazyLoad: true,
                margin: 10,
                video: true,
				responsiveClass:true,
				navRewind: false,
				responsive : {
					// breakpoint from 0 up
					0 : {
					items: 1
					},
					// breakpoint from 768 up
					870 : {
					items: 3
					}
				}
              });
	});

})(jQuery);