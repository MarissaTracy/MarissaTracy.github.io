$(document).ready(function() { 
	$("#content_dialer").show(); 
	$("#content_list").hide(); 
	$("#content_add").hide(); 
});

$("#dialer").click(function() { 
	$("#content_dialer").show(); 
	$("#content_list").hide(); 
	$("#content_add").hide();
});

$("#contact").click(function() { 
	$("#content_list").show(); 
	$("#content_dialer").hide(); 
	$("#content_add").hide();
});

$("#add").click(function() { 
	$("#content_add").show(); 
	$("#content_dialer").hide(); 
	$("#content_list").hide();
});
