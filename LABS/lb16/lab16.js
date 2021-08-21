var p= prompt("Please enter your name", );
alert("Hello," + " " + p + " want to find out how old you'll be in any future year ? ")
var answer= prompt("Enter yes or no ");
  if (answer == "yes") {
   var birthyear = prompt("Enter the year you were born: ")
   var futureyear = prompt("Enter the future year you want to find out ")
   var age= futureyear - birthyear;
   var estimate= age - 1;
  alert( "You will be " + age + " or " + estimate + " in the year " + futureyear)
}


else if( answer == "no") {
   alert(" Ok, Bye ")
 }
