

$(document).ready(function() {
  //Set the carousel options
  $('#quote-carousel').carousel({
    pause: true,
    interval: 1000,
  });
});

 $(document).ready(function() {
    $('.carousel').carousel({
      interval: 6000
    })
  });






 var ufb_data = {"geo":"SG","user_ip":"157.52.71.20","content_url":"https:\/\/business.udemy.com\/wp-content","uploads_url":"http:\/\/business.udemy.com\/wp-content\/uploads"};

var APP_ID = "sehj53dd";

 window.intercomSettings = {
    app_id: APP_ID
  };

  (function(){var w=window;var ic=w.Intercom;if(typeof ic==="function"){ic('reattach_activator');ic('update',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/'+APP_ID;var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()

  (function(){function b(){!1===c&&(c=!0,Munchkin.init("273-CKQ-053"))}var c=!1,a=document.createElement("script");a.type="text/javascript";a.async=!0;a.src="//munchkin.marketo.net/munchkin.js";a.onreadystatechange=function(){"complete"!=this.readyState&&"loaded"!=this.readyState||b()};a.onload=b;document.getElementsByTagName("head")[0].appendChild(a)})();

var SWPX=SWPX||{};SWPX.cmd=SWPX.cmd||[];SWPX.cmd.push(function(){SWPX.pixel.setPixel("xu7g");SWPX.pixel.fire()});

!function(c,d){var a=c.madkudu=c.madkudu||[];if(!a.initialize)if(a.invoked)c.console&&console.error&&console.error("MadKudu snippet included twice.");else{a.invoked=!0;a.methods="identify reset group ready page track once on smart_form".split(" ");a.factory=function(g){return function(){var b=Array.prototype.slice.call(arguments);return b.unshift(g),a.push(b),a}};for(var e=0;e<a.methods.length;e++){var f=a.methods[e];a[f]=a.factory(f)}a.load=function(a){var b=("https:"===d.location.protocol?"https://":
"http://")+"cdn.madkudu.com/madkudu.js/v1/"+a+"/madkudu.min.js";"function"==typeof c.define&&c.define.amd?c.require([b]):(a=d.createElement("script"),a.type="text/javascript",a.async=!0,a.src=b,b=d.getElementsByTagName("script")[0],b.parentNode.insertBefore(a,b))}}}(window,document);madkudu.SNIPPET_VERSION="0.4.0";madkudu.load("6d49c8a6ae84b6ec1031f079444e28d0");madkudu.page();

window._6si=window._6si||[];window._6si.push(["enableEventTracking",!0]);window._6si.push(["setToken","7bcd0fa34fd41124640db389a0c91156"]);window._6si.push(["setEndpoint","b.6sc.co"]);(function(){var a=document.createElement("script");a.type="text/javascript";a.async=!0;a.src="//j.6sc.co/6si.min.js";var b=document.getElementsByTagName("script")[0];b.parentNode.insertBefore(a,b)})();

function getCookieByName(a){a=RegExp(""+a+"[^;]+").exec(document.cookie);return unescape(a?a.toString().replace(/^[^=]+./,""):"")}
function sendPageEvent(a,k,l){var m="https://page-events-ustats.udemy.com/api-2.0/visits/me/page-events/ufb/Business/",c={},n=window.navigator.language||window.navigator.userLanguage,p=getCookieByName("udmy_2_v57r"),q=document.referrer,b=new Date;var h=b.getFullYear();var d=b.getMonth()+1,e=b.getDate(),f=b.getHours(),g=b.getMinutes();b=b.getSeconds();10>d&&(d="0"+d);10>e&&(e="0"+e);10>f&&(f="0"+f);10>g&&(g="0"+g);10>b&&(b="0"+b);h=h+"-"+d+"-"+e+" | "+f+":"+g+":"+b;c.extra={action:a,label:k,IP:l,lang:n,
visitorUUID:p,referrer:q,timeStamp:h,userHash:decodeURIComponent((/[?|&]data_h=([^&;]+?)(&|#|;|$)/.exec(location.search)||[null,""])[1].replace(/\+/g,"%20"))||null,organizationId:0};a=location.pathname.match(/(\/?(pt-br|..|))(\/.*)/);c.extra.sourceURL=a?a[3]:location.pathname;c.extra.search=location.search;c.userId=0;a=new XMLHttpRequest;a.open("POST",m,!0);a.setRequestHeader("Content-Type","text/plain; charset\x3dUTF-8");a.send(JSON.stringify(c))};





$('#example').tooltip('show')





$(document).ready(function() {
        
                
    /*Menu-toggle*/
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("active");
    });

    /*Scroll Spy*/
    $('body').scrollspy({ target: '#spy', offset:80});

    /*Smooth link animation*/
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });
        
        });




