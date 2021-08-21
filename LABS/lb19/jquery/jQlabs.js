$(document).ready(function(){
  $(".header").click(function(){
    $(".topnav").hide(5000,function(){
      alert("The navbar is gone")
    });
  });
$("#show").click(function(){
  $(".topnav").show(5000,function(){
    alert("The nav bar is back")
  });
});
$("#abc").click(function(){
  //$("#ani").animate({
  //  left: '+=8px',
  //  opacity:'0.5',
  //  height:'+=10px',
  //  width:'+=90px',
//});
var a=$("#ani");
  a.animate({height: '+=10', opacity: '0.8'}, "slow");
  a.animate({height: '+=10', opacity: '0.8'}, "fast");
  a.animate({height: '+=30', opacity: '0.8'}, "slow");
  a.animate({border:'10%'}, 'slow');
    });
});


$("#start").click(function(){
  a.animate({left: '300px'}, 4000);
  a.animate({fontSize: '3em'}, 4000);
});

$("#stop").click(function(){
  a.animate.stop();
});

$("#topnav").css("color", "red").slideUp(3500).slideDown(3500);
