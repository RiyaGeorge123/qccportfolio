$(document).ready(function(){
  $("#button1").click(function(){ //id of class goes in first .click function
    $("#divv").animate({
    left:'300px' ,
    right:'300px',
  }{//first parameter is the set of css things we wnat to change
  //use single quotes
  });
});
