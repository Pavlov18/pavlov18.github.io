!function(e){easySlider=function(i){function n(n){var c=e(".project .main-image-holder, .project-item.active .image-holder");t=e("li",c).length,r=t-1,a=e("li",c).width(),c.find("li").removeClass("active");var u=o;switch(n){case"next":o=u>=r?i.continuous?0:r:o+1;break;case"prev":o=0>=o?i.continuous?r:0:o-1}c.find("li").eq(o).addClass("active");var l=Math.abs(u-o),s=l*i.speed;i.vertical||(p=o*a*-1,c.find("ul").animate({marginLeft:p},s))}var t,a,r,c={speed:500,pause:1e4,continuous:!0},i=e.extend(c,i),o=0;e(".arrow-right").click(function(){return n("next"),!1}),e(".arrow-left").click(function(){return n("prev"),!1})}}(jQuery);