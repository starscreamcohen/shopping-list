$(document).ready(function() {
	$('#submit').click(function(event) {
		 event.preventDefault();
			var myValue = $('#input').val();
			var newDiv = $('<div />').addClass('item');
			var checkBox = $('<input>').attr('type', 'checkbox').addClass('input');
			var span = $('<span />').addClass('item-name').html(''+myValue+'');
			var pencil = $('<span />').addClass('glyphicon-pencil');
			var trashCan = $('<span />').addClass('glyphicon-trash');
			
			
			$(newDiv).appendTo('#item-list');
			$(span).appendTo(newDiv);
			$(checkBox).insertBefore(span);
			$(pencil).insertAfter(span).addClass('glyphicon');
			$(trashCan).insertAfter(span).addClass('glyphicon');

			
		var controlInput = $("#input");
        controlInput.replaceWith(controlInput = controlInput.val('').clone(true));
    

	});

	
	$('#picked-items').on('click', '.input', function() {
		$(this).closest('.item-picked').appendTo('#item-list').addClass('item').removeClass('item-picked');
			$('.item > span:last').show();
	});

	// This Function Must Be Below to Ensure that Checkbox is Unchecked

	$('#item-list').on('click', '.input', function() {
		$(this).closest('.item').appendTo('#picked-items').addClass('item-picked').removeClass('item');
			$('.item-picked > span:last').hide();
			$('.input').closest('#item-list').attr('checked', false);
  });
});
				