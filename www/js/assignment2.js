/* 
Qing Liu
ICT 4510
01/20/2014
This script is to collect first name and last name from the text input field of the HTML form, 
and to display the full name by concatenate first name and last name.
*/

var getName = function(){
	var fname = document.getElementById("fname").value.trim();
	var lname = document.getElementById("lname").value.trim();
	var fullName;
	if (fname !== "" && lname !== "")
	{
		fullName = fname + " " + lname;
	}
	else
	{
		fullName = "Please enter your first and last name.";
		document.getElementById("fname").value = "";
		document.getElementById("lname").value = "";
		document.getElementById("fname").focus();
	}
	return fullName;
};

var displayName = function(){
	alert(getName());
};