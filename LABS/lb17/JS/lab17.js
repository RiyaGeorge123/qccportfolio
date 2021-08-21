function cashregister() {
  var shopper = prompt("Please enter your name");
alert(shopper+ " " + " Let's begin shopping!!")
var oranges = prompt("How many oranges are you buying?");
var each_Orange = 3;
var total_Orangeprice= each_Orange * oranges;

var apples = prompt("How many apples are you buying?");
var each_Apple = 2;
var total_Appleprice= each_Apple * apples;

var aloeverajuice = prompt("How many bottles of aloejuice are you buying?");
var each_aloe = 10;
var total_aloeprice= each_aloe * aloeverajuice;

var cookies = prompt("How much packs of cookies are you buying?");
var each_cookies = 7;
var total_cookies= each_cookies * cookies;



document.write(" RECIEPT:  ");
document.write("Oranges Total: $ " + total_Orangeprice   + "          " + "       Apples Total: $ " + total_Appleprice + " ");
document.write("AloeJuice Total: $ " + total_aloeprice   + "          " +  "   Oreos Total:$ "  + total_cookies);
}
