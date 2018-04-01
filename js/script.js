(function ($) {
    'use strict';

    jQuery(document).ready(function () {
        /* Typed.js */	
        
        $(".typing").typed({
            strings: ["Rellena el formulario y toma un café.", "W&amp;G CV diseña el curriculum perfecto para ti."],   
            typeSpeed: 70,
            loop: false
          });

        /* Portfolio Filtering */

        $('.portfolio-inner').mixItUp();

        /* Magnific Popup */

        $('.portfolio-popup').magnificPopup({
            type: 'image',
			
          gallery: { enabled: true },
			     zoom: { enabled: true,
			     duration: 500
					
          },
		  
         image:{
               markup: '<div class="mfp-figure portfolio-pop-up">'+
               '<div class="mfp-close"></div>'+
               '<div class="mfp-img"></div>'+
               '<div class="mfp-bottom-bar portfolio_title">'+
               '<div class="mfp-title"></div>'+
               '<div class="mfp-counter"></div>'+
               '</div>'+
               '</div>',

               titleSrc:function(item){
                return item.el.attr('title');
              }
            }

          });

        $('.sidenav').sidenav();
        $('.materialboxed').materialbox();
        $('.tabs').tabs();
        $('.datepicker').datepicker();
        $('.carousel').carousel();
        $('.modal').modal();
        $('.tooltipped').tooltip();
        $('.scrollspy').scrollSpy();
        $('.dropdown-trigger').dropdown();

        $(".gen-ref .repeatable").repeatable({
          addTrigger: ".gen-ref .add",
          deleteTrigger: ".gen-ref .delete",
          template: "#gen-ref"
        });

        $(".gen-educ .repeatable").repeatable({
          addTrigger: ".gen-educ .add",
          deleteTrigger: ".gen-educ .delete",
          template: "#gen-educ"
        });

        $(".gen-exp .repeatable").repeatable({
          addTrigger: ".gen-exp .add",
          deleteTrigger: ".gen-exp .delete",
          template: "#gen-exp"
        });

        $( "#hider" ).click(function() {
        $( ".save-data" ).hide(1000);
        $( ".choice-design" ).show( 1000 );
      });

    });

   })(jQuery);