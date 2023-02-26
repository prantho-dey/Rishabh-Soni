

$(document).ready(function() {
    var allfunction = {

		menu_toggle: function() {
            var mainMenu = $('.mobile-menu'),
                menuList = $('.mobile-menu ul li'),
                hamburger = $('.hamburger'),
                menuClose = $('.menu-close');
                menuBody = $('body');

                hamburger.on("click", function() {
                    mainMenu.addClass('menu-active');
                    menuBody.addClass('overflow-hidden');
                });

                menuClose.on("click", function() {
                    mainMenu.removeClass('menu-active');
					menuBody.removeClass('overflow-hidden');
                }),

            $(document).on('click', function(event){
				if(!menuList.is(event.target) && !menuList.has(event.target).length && !hamburger.is(event.target) && !hamburger.has(event.target).length) {
					mainMenu.removeClass('menu-active');
					menuBody.removeClass('overflow-hidden');
                }
            })
        },
     

        init: function() {
            allfunction.menu_toggle()
        },
    }
    
    allfunction.init();
    // window.addEventListener('load',function(){
    //     document.querySelector('body').classList.add("loaded")  
    // });
});