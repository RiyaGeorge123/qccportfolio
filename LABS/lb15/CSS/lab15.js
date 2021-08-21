function returnText(){
  var input= document.getElementById("fname").value;
    alert(input+ " " + "you will win 5 million dollars next year")
}


function returnText2(){
  var input= document.getElementById("fav_Season").value;
    alert("Next" + " " + input + " " + "next you will travel to another country")
}



function returnText3(){
  var input= document.getElementById("fav_Number").value;
    alert("You will have " + " "+ input + " " + "children")
}


function returnText4(){
  var input= document.getElementById("fav_Color").value;
    alert(input+ " "  + "will be the color of your car in the next 6 years")
}

function sty1() {
  /*we are going to create bottoms to chnage css style*/

document.getElementsByTagName("link")[0].setAttribute("href","CSS/style.css");
}

function sty2() {
  /*we are going to create bottoms to chnage css style*/

document.getElementsByTagName("link")[0].setAttribute("href","CSS/style1.css");
}

function sty3() {
  /*we are going to create bottoms to chnage css style*/

document.getElementsByTagName("link")[0].setAttribute("href","CSS/style2.css");
}

function sty4() {
  /*we are going to create bottoms to chnage css style*/

document.getElementsByTagName("link")[0].setAttribute("href","CSS/style3.css");
}
