/* This file intentionally left blank. */

var downX = 0
var downY = 0
var upX = 0
var upY = 0

$("#gestureArea").mousedown(function() { // when "button_id" is clicked
	$("#gestureResult").text("Mouse down"); // show element
	downX = event.pageX;
	downY = event.pageY;
});

$("#gestureArea").mouseup(function() { // when "button_id" is clicked
	$("#gestureResult").text("Mouse up"); // show element
	upX = event.pageX;
	upY = event.pageY;

	if (upX < downX) {
		$("#gestureResult").text("Swipe Left");
	}

	else if (upX > downX){
		$("#gestureResult").text("Swipe Right");
	}

	else if (upY < downY){
		$("#gestureResult").text("Swipe Up");
	}

	else if (upY > downY){
		$("#gestureResult").text("Swipe Down");
	}

	else {
		$("#gestureResult").text("No gesture");
	}
});



	