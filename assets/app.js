$(document).ready(function() {
	$('#submit').click(function(event) {
		 event.preventDefault();
			var myValue = $('#input').val();
			var newDiv = $('<div />').addClass('item');
			var checkBox = $('<input>').attr('type', 'checkbox').addClass('input');
			var textBox = $('<input>').attr('type', 'text').addClass('text');
			var span = $('<span />').addClass('item-name').html(''+myValue+'');
			var pencil = $('<span />').addClass('glyphicon-pencil');
			var trashCan = $('<span />').addClass('glyphicon-trash');
			var textBox = $('<input>').attr('type', 'text').addClass('text').val( myValue );
			
			
			$(newDiv).appendTo('#item-list');
			$(span).appendTo(newDiv);
			$(checkBox).insertBefore(span);
			$(textBox).insertAfter(checkBox).addClass('text');
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
   	$('#picked-items').slideToggle('fast');
   		$('.glyphicon-eye-open').toggle();
   		$('.glyphicon-eye-close').toggle();
  });

  $(document).on('click', '.glyphicon-trash', function() {
  	// alert('Success')
  	$(this).closest('.item').remove();
  	$(this).closest('.item-picked').remove();
  });

  $(document).on('click', '.glyphicon-pencil', function() {
  	console.log('Jess is nice');
  });


});
				