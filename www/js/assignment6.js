/* 
Qing Liu
ICT 4510
02/10/2014
*/

var getName = function(){
	var fname = $('#fname').val().trim();
	var lname = $('#lname').val().trim();
	var email = $('#email').val().trim();
	var fullName = "<p>Thank you, " + fname + " " + lname + "! Your information has been submitted!<br>A comfirmation letter has been sent to " + email + "</p>";
	return fullName;
};

var emptyForm = function(){
	$('#myForm :text').val("");
	$('#myList').prop('selectedIndex',0);
};

var display = function(){
	$('#message').empty().append(getName());
	emptyForm();
};

$(document).ready(function(){
	// jquery ui
	$('#mainNav').menu();
	$('#accordion').accordion({heightStyle: "content"});
	$('#tabs1').tabs();
	$('#tabs2').tabs();

	// superfish navigation bar
	//$('#mainNav').superfish();
	
	// focus on the first text field
	//$('#myForm :text:first').focus();
	
	// jquery validation plug-in
	$('#myForm-personalInfo').validate({
		debug: true,
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
		},
		errorPlacement: function(error,element){
			error.insertBefore(element);
		},
		submitHandler: function(){
			$('#ui-id-15').click();
		},
	}); // end validate
	
	$('#myForm-webPref').validate({
		debug: true,
		rules:{
			myList:{
				required: true,
			}
		},
		messages:{
			myList:{
				required: "Please select a browser"
			}
		},
		errorPlacement: function(error,element){
			error.insertBefore(element);
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