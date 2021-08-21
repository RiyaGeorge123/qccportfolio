$(document).ready(function(){
  $(".header").click(function(){
    $(".topnav").hide();
  });
});

$(document).ready(function(){
  $(".column").click(function(){
    $(".row").hide();
  });
});

$("header").click(function(){
  $(".topnav").hide(5000,function(){
    alert("The paragraph is now hidden")
  });
});
