/* 
Qing Liu
ICT 4510
02/03/2014
This script is to collect first name and last name from the text input field of the HTML form, 
and to display the full name by concatenate first name and last name.
*/

var getName = function(){
	var fname = $('#fname').val().trim();
	var lname = $('#lname').val().trim();
	var fullName;
	if (fname !== "" && lname !== "")
	{
		fullName = "Thank you, " + fname + " " + lname + "!";
		$('#message').css('color','#3C3C3C');
	}
	else
	{
		fullName = "Please enter your first and last name.";
		$('#message').css('color','#C74451');
		$('#fname').val("");
		$('#lname').val("");
		$('#fname').focus();
	}
	return fullName;
};

var displayName = function(){
	$('#message').empty().append(getName());
};

$(document).ready(function(){
	$('#toggleDiv').hide();
	$('#toggleField').prop('checked',false);
	$('#clickMe').click(function(){
		displayName();
	}); // end click
	$('#toggleField').click(function(){
		$('#toggleDiv').toggle("slow");
	}); // end click
	$("#myImage").fancybox(); // attach fancybox
}); // end ready