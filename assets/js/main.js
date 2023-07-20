/*
	Stellar by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/
/*
	Modified by Gilbert Alvarado
*/
//code from menu.js
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const items = document.querySelectorAll(".item");

// Toggle mobile menu
function toggleMenu() {
	if (menu.classList.contains("active")) {
		menu.classList.remove("active");
		toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
	} else {
		menu.classList.add("active");
		toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
	}
	event.stopPropagation();
}

// Close the menu when clicking outside
function closeMenu(e) {
	if (menu.classList.contains("active") && !menu.contains(e.target) && !toggle.contains(e.target)) {
		// Close the menu if clicked outside the menu and toggle button
		toggleMenu();
	}
}

// Event Listeners
toggle.addEventListener("click", toggleMenu);
document.addEventListener("click", closeMenu);



(function($) {

	var	$window = $(window),
    $body = $('body'),
    $main = $('#main'),
    $nav = $('#myNAV'),
    $nav_a = $nav.find('a');
	// var $toggle_a = $nav.find('.toggle a');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1281px',  '1680px' ],
			large:    [ '981px',   '1280px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '361px',   '480px'  ],
			xxsmall:  [ null,      '360px'  ]
		});

	// Function to update active navigation item based on the current section in viewport.
	function updateActiveNavItem() {
		var scrollPosition = $window.scrollTop();
		
	
		$nav_a.each(function() {
		var $this = $(this),
			id = $this.attr('href'),
			$section = $(id),
			sectionTop = $section.offset().top - $nav.height() - 20, // Consider the height of the fixed navigation bar.
			sectionBottom = sectionTop + $section.outerHeight();
	
		if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
			// The current section is in the viewport.
			$nav_a.removeClass('active');
			$this.addClass('active');
		}
		});
	}//end updateActivateNavItem

		    // Event listeners
	$window.on('scroll', function() {
		// Update the active navigation item when scrolling.
		updateActiveNavItem();
	});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
				// On page load, update the active navigation item.
				updateActiveNavItem();
			}, 100);
		});

		if ($nav.length > 0) {

			// Shrink effect.
				// $main
				// 	.scrollex({
				// 		mode: 'top',
				// 		enter: function() {
				// 			$nav.addClass('alt');
				// 		},
				// 		leave: function() {
				// 			$nav.removeClass('alt');
				// 		},
				// 	});

			// Links.
				// var $nav_a = $nav.find('a');

				$nav_a
					.scrolly({
						speed: 1000,
						offset: function() { return $nav.height(); }
					})
					.on('click', function() {

						var $this = $(this);

						// External link? Bail.
							if ($this.attr('href').charAt(0) != '#')
								return;

						// Deactivate all links.
							$nav_a
								.removeClass('active')
								.removeClass('active-locked');

						// Activate link *and* lock it (so Scrollex doesn't try to activate other links as we're scrolling to this one's section).
							$this
								.addClass('active')
								.addClass('active-locked');

					})
					.each(function() {

						var	$this = $(this),
							id = $this.attr('href'),
							$section = $(id);

						// No section for this link? Bail.
							if ($section.length < 1)
								return;

						// Scrollex.
							$section.scrollex({
								mode: 'middle',
								initialize: function() {

									// Deactivate section.
										if (browser.canUse('transition'))
											$section.addClass('inactive');

								},
								enter: function() {

									// Activate section.
										$section.removeClass('inactive');

									// No locked links? Deactivate all links and activate this section's one.
										if ($nav_a.filter('.active-locked').length == 0) {

											$nav_a.removeClass('active');
											$this.addClass('active');

										}

									// Otherwise, if this section's link is the one that's locked, unlock it.
										else if ($this.hasClass('active-locked'))
											$this.removeClass('active-locked');

								}
							});

					});

		}

	// Scrolly.
		$('.scrolly').scrolly({
			speed: 1000
		});

})(jQuery);