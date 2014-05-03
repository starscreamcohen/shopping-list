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
		$(this).closest('.item-picked').appendTo('#item-list').addClass('item item-name').removeClass('item-picked');
		$('.item-name').children('.glyphicon-pencil')
		.addClass('glyphicon-pencil-show')
		.removeClass('glyphicon-pencil-hide');
	
	})

	// This Function Must Be Below to Ensure that Checkbox is Unchecked
	

	$('#item-list').on('click', '.input', function() {
		$(this).closest('.item').appendTo('#picked-items').addClass('item-picked').removeClass('item item-name');
			$('.item-picked').children('.glyphicon-pencil').addClass('glyphicon-pencil-hide');
			$('.input').closest('#item-list').attr('checked', false);
  });

  
  $('#picked-items-header').on('click', function() { 
  	
  	
  	$('#picked-items').slideUp();
  	$('.glyphicon-eye-open').hide();
  	$('.glyphicon-eye-close').show();
  	$('#picked-items-header').addClass('hide-header');
  
  });

  $('$picked-items-header').on('click', 'hide-header', function() { 
  	$('#picked-items').slideDown();
  	$('.glyphicon-eye-close').hide();
  	$('.glyphicon-eye-open').show();
  	$('#picked-items-header').removeClass('hide-header');
});
				