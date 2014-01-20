/* 
Qing Liu
ICT 4510
01/13/2014
This script pops a messagebox to show your name.
*/

function showName()
{
	var fname = document.getElementById("fname").value;
	var lname = document.getElementById("lname").value;
	alert("Thank you, " + fname + " " + lname + "!\nYour experience has been shared!");
}