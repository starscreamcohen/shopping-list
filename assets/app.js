$(document).ready(function() {
	$('#submit').click(function(event) {
		event.preventDefault();
			var myValue = $('#input').val();

			//$($('<span>'+ myValue +'</span>')).appendTo('#item-list').addClass('item');
			// $( ".item-clone" ).clone().appendTo( "#item-list" ).show();
			// $('#item-list').append($('<div>' + myValue + '</div>')).addClass(item);
				console.log(myValue);
		// Create a New .item
		// Get a Value From Text Input
		// Append Value to #item-list
	});
});