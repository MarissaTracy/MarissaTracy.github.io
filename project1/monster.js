// When page loads only show welcome page
$(document).ready(function() { 
	$("#welcome_page").show(); 
	$("#choose_name").hide(); 
	$("#choose_body").hide(); 
	$("#choose_clothes").hide();
	$("#start_over_page").hide();
	$("#help_page").hide();
	$("#circle").hide();
	$("#square").hide();
	$("#help_table").hide()
});

// Show homepage when top navigation home button is clicked
$("#lets_go_home").click(function() { 
	$("#welcome_page").show(); 
	$("#choose_name").hide(); 
	$("#choose_body").hide();
	$("#choose_clothes").hide();
	$("#start_over_page").hide();
	$("#help_page").hide();
	$("#circle").hide();
	$("#square").hide();
	$("#help_table").hide()
});

// Goes to basic information page when "lets go" button is clicked
$("#lets_go_to_name").click(function() { 
	$("#choose_name").show(); 
	$("#welcome_page").hide(); 
	$("#choose_body").hide();
	$("#choose_clothes").hide();
	$("#start_over_page").hide();
	$("#help_page").hide();
	$("#circle").hide();
	$("#square").hide();
	$("#help_table").hide()
});
// Goes to basic information page when selected from navigation bar
$("#lets_go_to_name_nav").click(function() { 
	$("#choose_name").show(); 
	$("#welcome_page").hide(); 
	$("#choose_body").hide();
	$("#choose_clothes").hide();
	$("#start_over_page").hide();
	$("#help_page").hide();
	$("#circle").hide();
	$("#square").hide();
	$("#help_table").hide()
});

// goes to appearance tab when "next" button is clicked
$("#lets_go_to_body").click(function() { 
	$("#choose_body").show(); 
	$("#welcome_page").hide(); 
	$("#choose_name").hide();
	$("#choose_clothes").hide();
	$("#start_over_page").hide();
	$("#help_page").hide();
	// Hide other body selection
	$("#circle").hide();
	// Show "default" body
	$("#square").show();
	$("#help_table").show()
	$("#left_arm").hide();
	$("#right_arm").hide();
	$("#left_leg").hide();
	$("#right_leg").hide();
	$("#antenna").hide();
	$("#tall_eyes").hide();
	$("#tongue_mouth").hide();
	$("#dio").hide();
	$("#sbsp").hide();
});

//goes to appearance tab when selected from navigation bar
$("#lets_go_to_body_nav").click(function() { 
	$("#choose_body").show(); 
	$("#welcome_page").hide(); 
	$("#choose_name").hide();
	$("#choose_clothes").hide();
	$("#start_over_page").hide();
	$("#help_page").hide();
	// Hide other body selection
	$("#circle").hide();
	// Show "default" body
	$("#square").show();
	$("#help_table").show()
	$("#left_arm").hide();
	$("#right_arm").hide();
	$("#left_leg").hide();
	$("#right_leg").hide();
	$("#antenna").hide();
	$("#tall_eyes").hide();
	$("#tongue_mouth").hide();
	$("#dio").hide();
	$("#sbsp").hide();
	
});

//goes back to body tab when button is clicked
// $("#back_to_body").click(function() { 
// 	$("#choose_body").show(); 
// 	$("#welcome_page").hide(); 
// 	$("#choose_name").hide();
// 	$("#choose_clothes").hide();
// 	$("#start_over_page").hide();
// 	$("#help_page").hide();
// 	$("#circle").hide();
// 	$("#square").hide();
// });

//goes back to information tab when button is clicked
// $("#back_to_basic").click(function() { 
// 	$("#choose_body").hide(); 
// 	$("#welcome_page").hide(); 
// 	$("#choose_name").show();
// 	$("#choose_clothes").hide();
// 	$("#start_over_page").hide();
// 	$("#help_page").hide();
// 	$("#circle").hide();
// 	$("#square").hide();
// });

//goes to clothes when "next" button is clicked
$("#lets_go_to_clothes").click(function() { 
	$("#choose_clothes").show(); 
	$("#welcome_page").hide(); 
	$("#choose_name").hide();
	$("#choose_body").hide();
	$("#start_over_page").hide();
	$("#help_page").hide();
	$("#circle").hide();
	$("#square").hide();
});

//goes to clothes tab when selected from navigation bar
$("#lets_go_to_clothes_nav").click(function() { 
	$("#choose_clothes").show(); 
	$("#welcome_page").hide(); 
	$("#choose_name").hide();
	$("#choose_body").hide();
	$("#start_over_page").hide();
	$("#help_page").hide();
	$("#circle").hide();
	$("#square").hide();
});

// Goes to basic information page if they want to start over
$("#start_over").click(function() { 
	$("#choose_name").show(); 
	$("#welcome_page").hide(); 
	$("#choose_body").hide();
	$("#choose_clothes").hide();
	$("#start_over_page").hide(); 
	$("#help_page").hide();
	$("#circle").hide();
	$("#square").hide();
});

// Goes to page where design is displayed (done page)
$("#done_button").click(function() { 
	$("#start_over_page").show(); 
	$("#welcome_page").hide(); 
	$("#choose_body").hide();
	$("#choose_clothes").hide();
	$("#choose_name").hide();
	$("#help_page").hide();
	$("#circle").hide();
	$("#square").hide();
});

//displays help page when selected from navigation
$("#help").click(function() { 
	$("#start_over_page").hide(); 
	$("#welcome_page").hide(); 
	$("#choose_body").hide();
	$("#choose_clothes").hide();
	$("#choose_name").hide();
	$("#help_page").show();
	$("#circle").hide();
	$("#square").hide();
});

// Create JS function for each arrow
var timesClickedRA = 0;
var timesClickedLA = 0;

$("#right_arrow").click(function() { 
	timesClickedRA++;
	if(timesClickedRA == 1){
		$("#choose_body").show();
		// Load either the square or cirlce body
		$("#circle").show();
		$("#welcome_page").hide(); 
		$("#choose_name").hide();
		$("#choose_clothes").hide();
		$("#start_over_page").hide();
		$("#help_page").hide();
		$("#square").hide();
	}	
	else{
		timesClickedRA = 0;
		$("#choose_body").show();
		// Load the other body
		$("#square").show();
		// Hide other body
		$("#circle").hide();
		$("#welcome_page").hide(); 
		$("#choose_name").hide();
		$("#choose_clothes").hide();
		$("#start_over_page").hide();
		$("#help_page").hide();
	}	
});

$("#left_arrow").click(function() { 
	timesClickedLA++;
	if(timesClickedLA == 1){
		$("#choose_body").show();
		// Load the other body
		$("#square").show();
		// Hide other body
		$("#circle").hide();
		$("#welcome_page").hide(); 
		$("#choose_name").hide();
		$("#choose_clothes").hide();
		$("#start_over_page").hide();
		$("#help_page").hide();
	}	
	else{
		timesClickedLA = 0;
		$("#choose_body").show();
		// Load either the square or cirlce body
		$("#circle").show();
		$("#welcome_page").hide(); 
		$("#choose_name").hide();
		$("#choose_clothes").hide();
		$("#start_over_page").hide();
		$("#help_page").hide();
		$("#square").hide();
	}	
});

// JS function for legs and arms
var timesClickedAL = 0;
var timesClickedAR = 0;
var timesClickedLL = 0;
var timesClickedLR = 0;


$("#arm_left").click(function() { 
	timesClickedAL++;
	if(timesClickedAL == 1){
		$("#choose_body").show();
		// Load the other body
		$("#left_arm").show();
		// Hide other body
		$("#welcome_page").hide(); 
		$("#choose_name").hide();
		$("#choose_clothes").hide();
		$("#start_over_page").hide();
		$("#help_page").hide();
	}
	else{
		timesClickedAL = 0;
		$("#choose_body").show();
		// Load the other body
		$("#left_arm").hide();
		// Hide other body
		$("#welcome_page").hide(); 
		$("#choose_name").hide();
		$("#choose_clothes").hide();
		$("#start_over_page").hide();
		$("#help_page").hide();
	}
});

$("#arm_right").click(function() { 
	timesClickedAR++;
	if(timesClickedAR == 1){
		$("#choose_body").show();
		// Load the other body
		$("#right_arm").show();
		// Hide other body
		$("#welcome_page").hide(); 
		$("#choose_name").hide();
		$("#choose_clothes").hide();
		$("#start_over_page").hide();
		$("#help_page").hide();
	}	
	else{
		timesClickedAR = 0;
		$("#choose_body").show();
		// Load the other body
		$("#right_arm").hide();
		// Hide other body
		$("#welcome_page").hide(); 
		$("#choose_name").hide();
		$("#choose_clothes").hide();
		$("#start_over_page").hide();
		$("#help_page").hide();
	}	
});

$("#leg_left").click(function() { 
	timesClickedLL++;
	if(timesClickedLL == 1){
		$("#choose_body").show();
		// Load the other body
		$("#left_leg").show();
		// Hide other body
		$("#welcome_page").hide(); 
		$("#choose_name").hide();
		$("#choose_clothes").hide();
		$("#start_over_page").hide();
		$("#help_page").hide();
	}	
	else{
		timesClickedLL = 0;
		$("#choose_body").show();
		// Load the other body
		$("#left_leg").hide();
		// Hide other body
		$("#welcome_page").hide(); 
		$("#choose_name").hide();
		$("#choose_clothes").hide();
		$("#start_over_page").hide();
		$("#help_page").hide();
	}	
});

$("#leg_right").click(function() { 
	timesClickedLR++;
	if(timesClickedLR == 1){
		$("#choose_body").show();
		// Load the other body
		$("#right_leg").show();
		// Hide other body
		$("#welcome_page").hide(); 
		$("#choose_name").hide();
		$("#choose_clothes").hide();
		$("#start_over_page").hide();
		$("#help_page").hide();
	}	
	else{
		timesClickedLR = 0;
		$("#choose_body").show();
		// Load the other body
		$("#right_leg").hide();
		// Hide other body
		$("#welcome_page").hide(); 
		$("#choose_name").hide();
		$("#choose_clothes").hide();
		$("#start_over_page").hide();
		$("#help_page").hide();
	}	
});

// JS function for other features
var timesClickedAntenna = 0;
var timesClickedET = 0;
var timesClickedMT = 0;
var timesClickedDio = 0;
var timesClickedSB = 0;


$("#antenna_btn").click(function() { 
	timesClickedAntenna++;
	if(timesClickedAntenna == 1){
		$("#choose_body").show();
		// Load the other body
		$("#antenna").show();
		// Hide other body
		$("#welcome_page").hide(); 
		$("#choose_name").hide();
		$("#choose_clothes").hide();
		$("#start_over_page").hide();
		$("#help_page").hide();
	}	
	else{
		timesClickedAntenna = 0;
		$("#choose_body").show();
		// Load the other body
		$("#antenna").hide();
		// Hide other body
		$("#welcome_page").hide(); 
		$("#choose_name").hide();
		$("#choose_clothes").hide();
		$("#start_over_page").hide();
		$("#help_page").hide();
	}	
});

$("#eyes_tall").click(function() { 
	timesClickedET++;
	if(timesClickedET == 1){
		$("#choose_body").show();
		// Load the other body
		$("#tall_eyes").show();
		// Hide other body
		$("#welcome_page").hide(); 
		$("#choose_name").hide();
		$("#choose_clothes").hide();
		$("#start_over_page").hide();
		$("#help_page").hide();
	}	
	else{
		timesClickedET = 0;
		$("#choose_body").show();
		// Load the other body
		$("#tall_eyes").hide();
		// Hide other body
		$("#welcome_page").hide(); 
		$("#choose_name").hide();
		$("#choose_clothes").hide();
		$("#start_over_page").hide();
		$("#help_page").hide();
	}	
});

$("#mouth_tongue").click(function() { 
	timesClickedMT++;
	if(timesClickedMT == 1){
		$("#choose_body").show();
		// Load the other body
		$("#tongue_mouth").show();
		// Hide other body
		$("#welcome_page").hide(); 
		$("#choose_name").hide();
		$("#choose_clothes").hide();
		$("#start_over_page").hide();
		$("#help_page").hide();
	}	
	else{
		timesClickedMT = 0;
		$("#choose_body").show();
		// Load the other body
		$("#tongue_mouth").hide();
		// Hide other body
		$("#welcome_page").hide(); 
		$("#choose_name").hide();
		$("#choose_clothes").hide();
		$("#start_over_page").hide();
		$("#help_page").hide();
	}	
});

$("#dio_btn").click(function() { 
	timesClickedDio++;
	if(timesClickedDio == 1){
		$("#choose_body").show();
		// Load the other body
		$("#dio").show();
		// Hide other body
		$("#welcome_page").hide(); 
		$("#choose_name").hide();
		$("#choose_clothes").hide();
		$("#start_over_page").hide();
		$("#help_page").hide();
	}	
	else{
		timesClickedDio = 0;
		$("#choose_body").show();
		// Load the other body
		$("#dio").hide();
		// Hide other body
		$("#welcome_page").hide(); 
		$("#choose_name").hide();
		$("#choose_clothes").hide();
		$("#start_over_page").hide();
		$("#help_page").hide();
	}	
});

$("#sbsp_btn").click(function() { 
	timesClickedSB++;
	if(timesClickedSB == 1){
		$("#choose_body").show();
		// Load the other body
		$("#sbsp").show();
		// Hide other body
		$("#welcome_page").hide(); 
		$("#choose_name").hide();
		$("#choose_clothes").hide();
		$("#start_over_page").hide();
		$("#help_page").hide();
	}	
	else{
		timesClickedSB = 0;
		$("#choose_body").show();
		// Load the other body
		$("#sbsp").hide();
		// Hide other body
		$("#welcome_page").hide(); 
		$("#choose_name").hide();
		$("#choose_clothes").hide();
		$("#start_over_page").hide();
		$("#help_page").hide();
	}	
});
