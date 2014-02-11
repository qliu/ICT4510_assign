/* 
Qing Liu
ICT 4510
02/10/2014
*/

var getName = function(){
	var fname = $('#fname').val().trim();
	var lname = $('#lname').val().trim();
	var fullName = "Thank you, " + fname + " " + lname + "! Your information has been submitted!";
	return fullName;
};

var emptyForm = function(){
	$('#myForm :text').val("");
	$('#myForm :select').val("");
};

var display = function(){
	$('#message').empty().append(getName());
	emptyForm();
};

$(document).ready(function(){
	// superfish navigation bar
	$('#mainNav').superfish();
	
	// focus on the first text field
	$('#myForm :text:first').focus();
	
	// jquery validation plug-in
	$('#myForm').validate({
		rules:{
			fname:{
				required: true,
			},
			lname:{
				required: true,
			},
			email:{
				required: true,
				email: true,
			},
			myList:{
				required: true,
			}
		},
		messages:{
			fname:{
				required: "Please enter your first name",
			},
			lname:{
				required: "Please enter your last name",
			},
			email:{
				required: "Please enter your Email address",
				email: "Please enter a valid Email address",
			},
			myList:{
				required: "Please select a browser"
			}
		},
		submitHandler: function(){
			display();
		},
	}); // end validate
	
	// toggle textarea
	$('#toggleDiv').hide();
	$('#toggleField').prop('checked',false);
	$('#toggleField').click(function(){
		$('#toggleDiv').toggle("slow");
	}); // end click
	
	 // attach fancybox
	$("#myImage").fancybox();
}); // end ready