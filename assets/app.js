$(document).ready(function() {
	$('#submit').click(function(event) {
		event.preventDefault()
			var myValue = $('#input').val();
			var newDiv = $('<div />').addClass('item');
			var checkBox = $('<input>').attr('type', 'checkbox');
			var span = $('<span />').addClass('item-name').html(''+myValue+'');
			var pencil = $('<span />').addClass('glyphicon-pencil');
			var trashCan = $('<span />').addClass('glyphicon-trash');
			
			
			$(newDiv).appendTo('#item-list');
			$(span).appendTo(newDiv);
			$(checkBox).insertBefore(span);
			$(pencil).insertAfter(span).addClass('glyphicon');
			$(trashCan).insertAfter(span).addClass('glyphicon');
	});
});
				