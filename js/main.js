(function ($) {
"use strict";
// TOP Menu Sticky
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 400) {
    $("#sticky-header").removeClass("sticky");
    $('#back-top').fadeIn(500);
	} else {
    $("#sticky-header").addClass("sticky");
    $('#back-top').fadeIn(500);
	}
});


$(document).ready(function(){

// mobile_menu
var menu = $('ul#navigation');
if(menu.length){
	menu.slicknav({
		prependTo: ".mobile_menu",
		closedSymbol: '+',
		openedSymbol:'-'
	});
};
// blog-menu
  // $('ul#blog-menu').slicknav({
  //   prependTo: ".blog_menu"
  // });

// review-active
$('.slider_active').owlCarousel({
  loop:true,
  margin:0,
items:1,
autoplay:true,
navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
  nav:true,
dots:false,
autoplayHoverPause: true,
autoplaySpeed: 800,
  responsive:{
      0:{
          items:1,
          nav:false,
      },
      767:{
          items:1,
          nav:false,
      },
      992:{
          items:1
      }
  }
});

// about_active
$('.about_active').owlCarousel({
  loop:true,
  margin:0,
items:1,
autoplay:true,
navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
  nav:true,
dots:false,
autoplayHoverPause: true,
autoplaySpeed: 800,
  responsive:{
      0:{
          items:1,
          nav:false,
      },
      767:{
          items:1,
          nav:false,
      },
      992:{
          items:1
      }
  }
});

// review-active
$('.testmonial_active').owlCarousel({
  loop:true,
  margin:0,
items:1,
autoplay:true,
navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
  nav:true,
dots:false,
autoplayHoverPause: true,
autoplaySpeed: 800,
  responsive:{
      0:{
          items:1,
          dots:false,
          nav:false,
      },
      767:{
          items:1,
          dots:false,
          nav:false,
      },
      992:{
          items:1,
          nav:false
      },
      1200:{
          items:1,
          nav:false
      },
      1500:{
          items:1
      }
  }
});

// for filter
  // init Isotope
  var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      // use outer width of grid-sizer for columnWidth
      columnWidth: 1
    }
  });

  // filter items on button click
  $('.portfolio-menu').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

  //for menu active class
  $('.portfolio-menu button').on('click', function (event) {
    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
    event.preventDefault();
	});
  
  // wow js
  new WOW().init();

  // counter 
  $('.counter').counterUp({
    delay: 10,
    time: 10000
  });

/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup img view */
$('.img-pop-up').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});


  // scrollIt for smoth scroll
  $.scrollIt({
    upKey: 38,             // key code to navigate to the next section
    downKey: 40,           // key code to navigate to the previous section
    easing: 'linear',      // the easing function for animation
    scrollTime: 600,       // how long (in ms) the animation takes
    activeClass: 'active', // class given to the active nav element
    onPageChange: null,    // function(pageIndex) that is called when page is changed
    topOffset: 0           // offste (in px) for fixed top navigation
  });

  // scrollup bottom to top
  $.scrollUp({
    scrollName: 'scrollUp', // Element ID
    topDistance: '4500', // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: '<i class="fa fa-angle-double-up"></i>', // Text for element
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });


  // blog-page

  //brand-active
$('.brand-active').owlCarousel({
  loop:true,
  margin:30,
items:1,
autoplay:true,
  nav:false,
dots:false,
autoplayHoverPause: true,
autoplaySpeed: 800,
  responsive:{
      0:{
          items:1,
          nav:false

      },
      767:{
          items:4
      },
      992:{
          items:7
      }
  }
});

// blog-dtails-page

  //project-active
$('.project-active').owlCarousel({
  loop:true,
  margin:30,
items:1,
// autoplay:true,
navText:['<i class="Flaticon flaticon-left-arrow"></i>','<i class="Flaticon flaticon-right-arrow"></i>'],
nav:true,
dots:false,
// autoplayHoverPause: true,
// autoplaySpeed: 800,
  responsive:{
      0:{
          items:1,
          nav:false

      },
      767:{
          items:1,
          nav:false
      },
      992:{
          items:2,
          nav:false
      },
      1200:{
          items:1,
      },
      1501:{
          items:2,
      }
  }
});

if (document.getElementById('default-select')) {
  $('select').niceSelect();
}

  //about-pro-active
$('.details_active').owlCarousel({
  loop:true,
  margin:0,
items:1,
// autoplay:true,
navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
nav:true,
dots:false,
// autoplayHoverPause: true,
// autoplaySpeed: 800,
  responsive:{
      0:{
          items:1,
          nav:false

      },
      767:{
          items:1,
          nav:false
      },
      992:{
          items:1,
          nav:false
      },
      1200:{
          items:1,
      }
  }
});

});

// resitration_Form
$(document).ready(function() {
	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});
});



//------- Mailchimp js --------//  
function mailChimp() {
  $('#mc_embed_signup').find('form').ajaxChimp();
}
mailChimp();



        // Search Toggle
        $("#search_input_box").hide();
        $("#search").on("click", function () {
            $("#search_input_box").slideToggle();
            $("#search_input").focus();
        });
        $("#close_search").on("click", function () {
            $('#search_input_box').slideUp(500);
        });
        // Search Toggle
        $("#search_input_box").hide();
        $("#search_1").on("click", function () {
            $("#search_input_box").slideToggle();
            $("#search_input").focus();
        });

        if (document.body.classList.contains('portfolio-home')) {
            var portfolioBody = document.body;
            var revealItems = document.querySelectorAll('.reveal-on-scroll');
            var countItems = document.querySelectorAll('.count-up');
            var storageKey = 'refluncePortfolioPrefs';

            function readPrefs() {
                try {
                    return JSON.parse(window.localStorage.getItem(storageKey) || '{}');
                } catch (error) {
                    return {};
                }
            }

            function savePrefs(preferences) {
                try {
                    window.localStorage.setItem(storageKey, JSON.stringify(preferences));
                } catch (error) {
                    return;
                }
            }

            var savedPrefs = readPrefs();
            var currentMode = savedPrefs.mode === 'light' ? 'light' : 'dark';
            var currentTheme = savedPrefs.theme === 'sunset' ? 'sunset' : 'aurora';
            var currentFontSize = savedPrefs.fontSize === 'small' || savedPrefs.fontSize === 'large' ? savedPrefs.fontSize : 'medium';

            function applyPortfolioPreferences() {
                portfolioBody.classList.remove('mode-light', 'mode-dark', 'style-aurora', 'style-sunset', 'font-small', 'font-medium', 'font-large');
                portfolioBody.classList.add('mode-' + currentMode, 'style-' + currentTheme, 'font-' + currentFontSize);

                document.querySelectorAll('[data-mode]').forEach(function(button) {
                    button.classList.toggle('is-active', button.getAttribute('data-mode') === currentMode);
                });

                document.querySelectorAll('[data-theme]').forEach(function(button) {
                    button.classList.toggle('is-active', button.getAttribute('data-theme') === currentTheme);
                });

                document.querySelectorAll('[data-font-size]').forEach(function(button) {
                    button.classList.toggle('is-active', button.getAttribute('data-font-size') === currentFontSize);
                });

                savePrefs({
                    mode: currentMode,
                    theme: currentTheme,
                    fontSize: currentFontSize
                });
            }

            applyPortfolioPreferences();

            if ('IntersectionObserver' in window) {
                var revealObserver = new IntersectionObserver(function(entries, observer) {
                    entries.forEach(function(entry) {
                        if (entry.isIntersecting) {
                            entry.target.classList.add('is-visible');
                            observer.unobserve(entry.target);
                        }
                    });
                }, { threshold: 0.18 });

                revealItems.forEach(function(item) {
                    revealObserver.observe(item);
                });

                var countObserver = new IntersectionObserver(function(entries, observer) {
                    entries.forEach(function(entry) {
                        if (!entry.isIntersecting) {
                            return;
                        }

                        var target = entry.target;
                        var finalValue = parseInt(target.getAttribute('data-count'), 10) || 0;
                        var duration = 1400;
                        var startTime = null;

                        function updateCount(timestamp) {
                            if (!startTime) {
                                startTime = timestamp;
                            }

                            var progress = Math.min((timestamp - startTime) / duration, 1);
                            target.textContent = Math.floor(progress * finalValue);

                            if (progress < 1) {
                                window.requestAnimationFrame(updateCount);
                            } else {
                                target.textContent = finalValue;
                            }
                        }

                        window.requestAnimationFrame(updateCount);
                        observer.unobserve(target);
                    });
                }, { threshold: 0.5 });

                countItems.forEach(function(item) {
                    countObserver.observe(item);
                });
            } else {
                revealItems.forEach(function(item) {
                    item.classList.add('is-visible');
                });
                countItems.forEach(function(item) {
                    item.textContent = item.getAttribute('data-count');
                });
            }

            var tiltCard = document.querySelector('[data-tilt-card]');
            if (tiltCard && window.innerWidth > 991) {
                tiltCard.addEventListener('mousemove', function(event) {
                    var bounds = tiltCard.getBoundingClientRect();
                    var centerX = bounds.left + (bounds.width / 2);
                    var centerY = bounds.top + (bounds.height / 2);
                    var rotateY = ((event.clientX - centerX) / bounds.width) * 8;
                    var rotateX = ((centerY - event.clientY) / bounds.height) * 8;

                    tiltCard.style.transform = 'perspective(1200px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
                });

                tiltCard.addEventListener('mouseleave', function() {
                    tiltCard.style.transform = 'perspective(1200px) rotateX(0deg) rotateY(0deg)';
                });
            }

            var switcherToggle = document.querySelector('.style-switcher-toggle');
            var switcherClose = document.querySelector('.style-switcher-close');

            function closeSwitcher() {
                portfolioBody.classList.remove('switcher-open');
                if (switcherToggle) {
                    switcherToggle.setAttribute('aria-expanded', 'false');
                }
            }

            function toggleSwitcher() {
                var isOpen = portfolioBody.classList.toggle('switcher-open');
                if (switcherToggle) {
                    switcherToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
                }
            }

            if (switcherToggle) {
                switcherToggle.addEventListener('click', function() {
                    toggleSwitcher();
                });
            }

            if (switcherClose) {
                switcherClose.addEventListener('click', function() {
                    closeSwitcher();
                });
            }

            document.querySelectorAll('[data-mode]').forEach(function(button) {
                button.addEventListener('click', function() {
                    currentMode = button.getAttribute('data-mode') === 'light' ? 'light' : 'dark';
                    applyPortfolioPreferences();
                });
            });

            document.querySelectorAll('[data-theme]').forEach(function(button) {
                button.addEventListener('click', function() {
                    currentTheme = button.getAttribute('data-theme') === 'sunset' ? 'sunset' : 'aurora';
                    applyPortfolioPreferences();
                });
            });

            document.querySelectorAll('[data-font-size]').forEach(function(button) {
                button.addEventListener('click', function() {
                    var selectedSize = button.getAttribute('data-font-size');
                    currentFontSize = selectedSize === 'small' || selectedSize === 'large' ? selectedSize : 'medium';
                    applyPortfolioPreferences();
                });
            });

            document.addEventListener('click', function(event) {
                var switcherPanel = document.querySelector('.style-switcher-panel');
                if (!portfolioBody.classList.contains('switcher-open') || !switcherPanel || !switcherToggle) {
                    return;
                }

                if (!switcherPanel.contains(event.target) && !switcherToggle.contains(event.target)) {
                    closeSwitcher();
                }
            });

            document.addEventListener('keydown', function(event) {
                if (event.key === 'Escape') {
                    closeSwitcher();
                }
            });

            var filterButtons = document.querySelectorAll('.filter-button');
            var portfolioItems = document.querySelectorAll('.portfolio-item');

            if (filterButtons.length && portfolioItems.length) {
                filterButtons.forEach(function(button) {
                    button.addEventListener('click', function() {
                        var filter = button.getAttribute('data-filter');

                        filterButtons.forEach(function(item) {
                            item.classList.remove('active');
                        });
                        button.classList.add('active');

                        portfolioItems.forEach(function(item) {
                            var categories = (item.getAttribute('data-category') || '').split(' ');
                            var showItem = filter === 'all' || categories.indexOf(filter) !== -1;

                            if (showItem) {
                                item.classList.remove('is-hidden');
                            } else {
                                item.classList.add('is-hidden');
                            }
                        });
                    });
                });
            }

            var briefForm = document.getElementById('project-brief-form');
            if (briefForm) {
                briefForm.addEventListener('submit', function(event) {
                    event.preventDefault();

                    var nameField = document.getElementById('brief-name');
                    var emailField = document.getElementById('brief-email');
                    var typeField = document.getElementById('brief-type');
                    var budgetField = document.getElementById('brief-budget');
                    var goalField = document.getElementById('brief-goal');
                    var statusField = document.getElementById('brief-status');
                    var pageLang = document.documentElement.lang === 'en' ? 'en' : 'ar';

                    var name = nameField ? nameField.value.trim() : '';
                    var email = emailField ? emailField.value.trim() : '';
                    var type = typeField ? typeField.value.trim() : '';
                    var budget = budgetField ? budgetField.value.trim() : '';
                    var goal = goalField ? goalField.value.trim() : '';

                    if (!name || !goal) {
                        if (statusField) {
                            statusField.textContent = pageLang === 'en'
                                ? 'Please add at least your name and project goal.'
                                : 'من فضلك اكتب الاسم وهدف المشروع على الأقل.';
                        }
                        return;
                    }

                    var message = pageLang === 'en'
                        ? 'Hello Reflunce Tech,%0A%0AHere is my project brief:%0AName: ' + encodeURIComponent(name)
                            + '%0AEmail: ' + encodeURIComponent(email || 'Not provided')
                            + '%0AProject type: ' + encodeURIComponent(type || 'Not specified')
                            + '%0ABudget: ' + encodeURIComponent(budget || 'Not specified')
                            + '%0AGoal: ' + encodeURIComponent(goal)
                        : 'مرحبًا Reflunce Tech،%0A%0Aهذا ملخص مشروعي:%0Aالاسم: ' + encodeURIComponent(name)
                            + '%0Aالبريد: ' + encodeURIComponent(email || 'غير مذكور')
                            + '%0Aنوع المشروع: ' + encodeURIComponent(type || 'غير محدد')
                            + '%0Aالميزانية: ' + encodeURIComponent(budget || 'غير محددة')
                            + '%0Aالهدف: ' + encodeURIComponent(goal);

                    if (statusField) {
                        statusField.textContent = pageLang === 'en'
                            ? 'Opening WhatsApp with your brief...'
                            : 'جاري فتح واتساب بالـ brief الخاص بك...';
                    }

                    window.open('https://wa.me/201556969501?text=' + message, '_blank');
                });
            }
        }

})(jQuery);	
