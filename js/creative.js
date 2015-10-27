/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */
 $(document).ready(function(){
    $("#website1").submit(function(){
                var email =document.getElementById("email").value;
                var number = document.getElementById("number").value;   
                    $.ajax({
                        
                        url: "https://docs.google.com/forms/d/1PyuxNKJkHpEZqFqupS3qkVQGKB-Xah5CzcoDHb-ki18/formResponse",
                        dataType: "xml",
                        data: {
                            "entry.1585510926": email,
                            "entry.1797597004": number
                        },

                        type: "POST",
                        statusCode: {
                            0: function() {
                                //alert("Thank you for signing up! We will get in touch with you shortly!");
                                $('#email').val("");
                                $('#number').val("");
                                //Success message
                            },
                            200: function() {
                               // alert("Thank you for signing up! We will get in touch with you shortly!");
                                $('#email').val("");
                               $('#number').val("");
                                //Success Message
                            }
                        }
                    });

    });
});
function postToGoogle(){
//alert("in ajax");
                //var email =document.getElementById("email").value;
                var number = document.getElementById("number").value;   
                    $.ajax({
                        
                        url: "https://docs.google.com/forms/d/1PyuxNKJkHpEZqFqupS3qkVQGKB-Xah5CzcoDHb-ki18/formResponse",
                        dataType: "xml",
                        data: {
                           // "entry.1585510926": "default_email"
                            "entry.1797597004": number
                        },

                        type: "POST",
                        statusCode: {
                            0: function() {
                                //alert("Thank you for your interest! We will receive a SMS ");
                               // $('#email').val("");
                                $('#number').val("");
                                //Success message
                            },
                            200: function() {
                                //alert("xyx");
                               // $('#email').val("");
                               $('#number').val("");
                                //Success Message
                            }
                        }
                    });

    }

$(document).ready(function(){
                $('#website2').submit(function() {
//alert("remove alert");
                    postToGoogle();
                    return false;
                });
            });

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict
