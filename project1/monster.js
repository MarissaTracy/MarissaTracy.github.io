// When page loads only show welcome page
$(document).ready(function() { 
	$("#welcome_page").show(); 
	$("#choose_name").hide(); 
	$("#choose_body").hide(); 
	$("#choose_clothes").hide();
	$("#start_over_page").hide();
});

// Show homepage when top navigation home button is clicked
$("#lets_go_home").click(function() { 
	$("#welcome_page").show(); 
	$("#choose_name").hide(); 
	$("#choose_body").hide();
	$("#choose_clothes").hide();
	$("#start_over_page").hide();
});

// Goes to basic information page when "lets go" button is clicked
$("#lets_go_to_name").click(function() { 
	$("#choose_name").show(); 
	$("#welcome_page").hide(); 
	$("#choose_body").hide();
	$("#choose_clothes").hide();
	$("#start_over_page").hide();
});
// Goes to basic information page when selected from navigation bar
$("#lets_go_to_name_nav").click(function() { 
	$("#choose_name").show(); 
	$("#welcome_page").hide(); 
	$("#choose_body").hide();
	$("#choose_clothes").hide();
	$("#start_over_page").hide();
});

// goes to appearance tab when "next" button is clicked
$("#lets_go_to_body").click(function() { 
	$("#choose_body").show(); 
	$("#welcome_page").hide(); 
	$("#choose_name").hide();
	$("#choose_clothes").hide();
	$("#start_over_page").hide();
});

//goes to appearance tab when selected from navigation bar
$("#lets_go_to_body_nav").click(function() { 
	$("#choose_body").show(); 
	$("#welcome_page").hide(); 
	$("#choose_name").hide();
	$("#choose_clothes").hide();
	$("#start_over_page").hide();
});

//goes to clothes when "next" button is clicked
$("#lets_go_to_clothes").click(function() { 
	$("#choose_clothes").show(); 
	$("#welcome_page").hide(); 
	$("#choose_name").hide();
	$("#choose_body").hide();
	$("#start_over_page").hide();
});

//goes to clothes tab when selected from navigation bar
$("#lets_go_to_clothes_nav").click(function() { 
	$("#choose_clothes").show(); 
	$("#welcome_page").hide(); 
	$("#choose_name").hide();
	$("#choose_body").hide();
	$("#start_over_page").hide();
});

// Goes to basic information page if they want to start over
$("#start_over").click(function() { 
	$("#choose_name").show(); 
	$("#welcome_page").hide(); 
	$("#choose_body").hide();
	$("#choose_clothes").hide();
	$("#start_over_page").hide(); 

});

// Goes to page where design is displayed
$("#done_button").click(function() { 
	$("#start_over_page").show(); 
	$("#welcome_page").hide(); 
	$("#choose_body").hide();
	$("#choose_clothes").hide();
	$("#choose_name").hide();


});

