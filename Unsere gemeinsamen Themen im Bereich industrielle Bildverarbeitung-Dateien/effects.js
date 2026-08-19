jQuery(document).ready(function () {

	// get current user agent
	var userAgent = navigator.userAgent.toLowerCase();
	// if android exits index > -1 will be returned
	var isAndroid = userAgent.indexOf("android") > -1;
	// if isAndroid == true then our double tab script will be executed
	if (isAndroid === true && navigator.maxTouchPoints > 0) {
		Common.doubleTapToGo("#cm_subnavigation li:has(ul)");
		Common.doubleTapToGo(".toggle_navigation");
	}
});


(function ($) {
	$(document).ready(function () {

		// Get current Navigation for Mobilebutton
		var str_mobile = $('.cm_current:last > a').html();
		$('.mobile_navigation > a').html('<i class="fa fa-bars"></i> ' + str_mobile);

		//Toggle Mobile Navigation
		$('.mobile_navigation > a').click(function () {
			$('body').toggleClass('open_navigation');
		});

		// Click to Scroll on Top
		$('.scroll-up').click(function () {
			goToByScroll('body');
		});

		// Check if Subnavigation exists
		if ($('#cm_navigation > ul > li').hasClass('cm_current cm_has_subnavigation') == true) {
			$('.mobile_navigation').css('display', 'block');
		}

		function setCmEmptyForElements(element, hiddenElement) {
			if (jQuery(element).hasClass('cm_empty')) {
				if (hiddenElement == undefined) {
					jQuery(element).addClass('cm-templates-empty');
				} else {
					jQuery(hiddenElement).addClass('cm-templates-empty');
				}
			}
		}

		setTimeout(function () {
			// CM-EMPTY 
			setCmEmptyForElements('.cm-templates-footer');
			setCmEmptyForElements('.cm-templates-sidebar-container');
			setCmEmptyForElements('.cm-templates-title-container');
			setCmEmptyForElements('#logo');
			setCmEmptyForElements('#keyvisual');
			setCmEmptyForElements('#title');
			setCmEmptyForElements('#subtitle');
			setCmEmptyForElements('#widgetbar_site_1');
			setCmEmptyForElements('#widgetbar_site_2');
			setCmEmptyForElements('#widgetbar_page_1');

			if (jQuery('#keyvisual').hasClass('cm_empty') && jQuery('#logo').hasClass('cm_empty')) {
				jQuery('.head_wrapper').addClass('cm-templates-header--cm-empty ');
			}

			if (jQuery('#widgetbar_site_1').hasClass('cm_empty') && jQuery('#widgetbar_page_1').hasClass('cm_empty') && jQuery('#widgetbar_site_2').hasClass('cm_empty')
				&& jQuery('#widgetbar_page_2').hasClass('cm_empty')) {
				jQuery('.cm-templates-sidebar-one').addClass('cm-templates-empty');
				jQuery('.design_content').css("width", "100%");
			}

			if (jQuery('#keyvisual').hasClass('cm_empty') && jQuery('#logo').hasClass('cm_empty') && jQuery('#title').hasClass('cm_empty') && jQuery('#subtitle').hasClass('cm_empty')) {
				jQuery('.head_wrapper').css("height", jQuery('.navigation_wrapper').height() + 'px');
				jQuery('.head_wrapper').css("min-height", 'auto');
			}

		}, 100);
	});
})(jQuery);

function cmEmptyApply() {
	function setCmEmptyForElements(element, hiddenElement) {
		if (jQuery(element).hasClass('cm_empty')) {
			if (hiddenElement == undefined) {
				jQuery(element).addClass('cm-templates-empty');
			} else {
				jQuery(hiddenElement).addClass('cm-templates-empty');
			}
		}
	}

	setCmEmptyForElements('#widgetbar_page_2');
	if (jQuery('#keyvisual').hasClass('cm_empty') && jQuery('#logo').hasClass('cm_empty')) {
		var determineNaviHeight = document.getElementById('cm_navigation').offsetHeight;
		var determineTitleWrapperHeight = document.getElementById('cm-templates-title-container').offsetHeight;
		var sumHeightTitleNavi = determineNaviHeight + determineTitleWrapperHeight;

		if (jQuery('.title').hasClass('cm_empty') && jQuery('.subtitle').hasClass('cm_empty')) {
			jQuery('.head_wrapper').css('height', '100px');
		} else {
			console.log(sumHeightTitleNavi);
			jQuery('.head_wrapper').css('height', sumHeightTitleNavi);
		}
	}
};

function goToByScroll(id) {
	jQuery('html,body').animate({ scrollTop: jQuery(id).offset().top }, 'slow');
}

