$(document).ready(function() { 
	$("#content_dialer").show(); 
	$("#content_list").hide(); 
	$("#content_add").hide(); 
	$("#content_help").hide();
});

$("#dialer").click(function() { 
	$("#content_dialer").show(); 
	$("#content_list").hide(); 
	$("#content_add").hide();
	$("#content_help").hide();

});

$("#contact").click(function() { 
	$("#content_list").show(); 
	$("#content_dialer").hide(); 
	$("#content_add").hide();
	$("#content_help").hide();
});

$("#add").click(function() { 
	$("#content_add").show(); 
	$("#content_dialer").hide(); 
	$("#content_list").hide();
	$("#content_help").hide();
});

$("#help").click(function() { 
	$("#content_help").show();
	$("#content_add").hide(); 
	$("#content_dialer").hide(); 
	$("#content_list").hide();
});

//Put numbers into box, from A1 solutions
$("#content_dialer button").click(function() {
	$("#dialerinput").val($("#dialerinput").val() + this.innerText);
});

//clear box, from A1 solutions
$("#clear_button").click(function() {
	$("#dialerinput").val("");
});

$("#dial_button").click(function() {
	$("#dialerinput") + "";
});

