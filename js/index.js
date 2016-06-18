document.addEventListener("DOMContentLoaded", function() {
	
	var linkShowApps = document.querySelector('.link-show-apps');
	var linkShowConfig = document.querySelector('.link-show-config > a');
	var linkShowMoreApps = document.querySelector('.btn-more-apps');
	var linkShowOtherApps = document.querySelector('.main-header__sub-menu .other-services-link');

	var headerSubMenu = document.querySelector('.main-header__sub-menu');
	var footerSubMenu = document.querySelector('.main-footer__sub-menu');
	var appsMoreMenu = document.querySelector('.sub-menu__apps-list:last-of-type');
	var dividedLine = document.querySelector('.main-header__sub-menu .divided-line');
	var triangleHeaderSubMenu = document.querySelector('.sub-menu__triangles');

	// /*-------------------------------preload sprite image-----------------------------------*/
	// var appsImageContainer = document.querySelectorAll('.main-header__sub-menu .apps-image');

	// appsSpriteImage = new Image();
	// appsSpriteImage.src = "img/apps-sprite.png";

	// for (var i = 0, max = appsImageContainer.length; i < max; i++) {
	// 	appsImageContainer[i].style.backgroundImage = "url(" + appsSpriteImage.src + ")";
	// }
	// /*--------------------------------------------------------------------------------------*/
	
	function hideHeaderSubMenu() {
		headerSubMenu.classList.remove('active');
		headerSubMenu.style.display = 'none';
		triangleHeaderSubMenu.style.display = 'none';
		appsMoreMenu.style.display = 'none';
		linkShowMoreApps.style.display = 'block';
		dividedLine.style.height = '0px';
		linkShowOtherApps.style.display = 'none';
	}

	function showHeaderSubMenu() {
		headerSubMenu.classList.add('active');
		headerSubMenu.style.display = 'block';
		triangleHeaderSubMenu.style.display = 'block';
		headerSubMenu.style.maxHeight = headerSubMenu.offsetHeight + 'px';
	}

	function showMoreApps() {
		appsMoreMenu.style.display = 'block';
		linkShowMoreApps.style.display = 'none';
		dividedLine.style.height = '1px';
		linkShowOtherApps.style.display = 'block';
	}

	function hideMoreApps() {
		appsMoreMenu.style.display = 'none';
		linkShowMoreApps.style.display = 'block';
		dividedLine.style.height = '0px';
		linkShowOtherApps.style.display = 'none';
	}

	function showFooterSubMenu() {
		footerSubMenu.classList.add('active');
		footerSubMenu.style.display = 'block';
	}

	function hideFooterSubMenu() {
		footerSubMenu.classList.remove('active');
		footerSubMenu.style.display = 'none';
	}


	linkShowApps.addEventListener('click', function(event) {

		event.preventDefault();
		
		if (headerSubMenu.classList.contains('active')) {
			hideHeaderSubMenu();
		} else {
			showHeaderSubMenu();
		};

	});

	linkShowMoreApps.addEventListener('click', function() {
		showMoreApps();
		linkShowOtherApps.scrollIntoView({behavior:'smooth'});
	});


	linkShowConfig.addEventListener('click', function(event) {

		event.preventDefault();
		
		if (footerSubMenu.classList.contains('active')) {
			
			hideFooterSubMenu();
		
		} else if ( (headerSubMenu.classList.contains('active')) || (!footerSubMenu.classList.contains('active')) ) {

			showFooterSubMenu();
			hideHeaderSubMenu();
		};

	});

	document.addEventListener('click', function(event) {

		event.preventDefault();

		if ( ((!linkShowApps.contains(event.target)) && (!headerSubMenu.contains(event.target))) && ((!linkShowConfig.contains(event.target)) && (!footerSubMenu.contains(event.target)))  ) {
			
			if ( (headerSubMenu.classList.contains('active')) && (!footerSubMenu.classList.contains('active')) ) {
				hideHeaderSubMenu();
			} else if ( (footerSubMenu.classList.contains('active')) && (!headerSubMenu.classList.contains('active')) ) {
				hideFooterSubMenu();
			} else {
				hideHeaderSubMenu();
				hideFooterSubMenu();
			}
			
		}

	});

	headerSubMenu.addEventListener('wheel', function(event) {
	
		var positionUnvisibleMenu = appsMoreMenu.getBoundingClientRect();
		var topUnvisibleMenu = positionUnvisibleMenu.top;

		if ( (event.deltaY > 0) ) {
			showMoreApps();
		} else if ( (event.deltaY < 0) && (topUnvisibleMenu > headerSubMenu.offsetHeight) ) {
			hideMoreApps();
		}
	});	

	headerSubMenu.addEventListener('scroll', function(event) {
		if (this.scrollTop == 0) {
			hideMoreApps();
		}
	});	
	
});