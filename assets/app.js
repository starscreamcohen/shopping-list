function init () {

}

	function addItemBack	() {
				$(this).closest('.item-picked').appendTo('#item-list').addClass('item').removeClass('item-picked');
				$('.item').children('span:first-of-type').addClass('item-name')
				$('.item').children('.glyphicon-pencil')
				.addClass('glyphicon-pencil-show')
				.removeClass('glyphicon-pencil-hide');
				console.log("what's going on");
	}



$(document).ready(function() {

	$('#submit').on('click', function(event) {
		// Function Creates the Value For Each New Item
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
		addItemBack();
	
	});


	// This Function Must Be Below to Ensure that Checkbox is Unchecked
	// Function Puts Item In Picked Up Area
	$('#item-list').on('click', '.input', function() {
		$(this).closest('.item').appendTo('#picked-items').addClass('item-picked').removeClass('item');
			if($('.text').is(':visible')) {
				$('.text').hide();
				$('.item-name').show();
			}
			$('.item-picked').children('span:first-of-type').removeClass('item-name');
			$('.item-picked').children('.glyphicon-pencil').addClass('glyphicon-pencil-hide');
			$('.input').closest('#item-list').attr('checked', false);
  });

 //Function Toggles the Slide Feature to Show or Not Show Picked Up Items 
  $('#picked-items-header').on('click', function() { 
   	$('#picked-items').slideToggle('fast');
   		$('.glyphicon-eye-open').toggle();
   		$('.glyphicon-eye-close').toggle();
  });


  //Function Removes Text Node When Clicking Trash Can
  $(document).on('click', '.glyphicon-trash', function() {
  	$(this).closest('.item').remove();
  	$(this).closest('.item-picked').remove();
  });

 //Function Shows Text Area Box When Clicked
  $(document).on('click', '.glyphicon-pencil', function() {
  	$(this).siblings('.text').toggle();
  	$(this).siblings('.item-name').toggle();
  	
  });

  //Function Shows Text Area When .Item-Name is Clicked
  $(document).on('click', '.item-name', function() {
  	$(this).siblings('.text').show()
  	.siblings('.item-name').hide().parent().siblings().children('.text').hide()
  	.siblings('.item-name').show();

	});
	
  	$(document).on('keypress', '.text', function(event){
	  	if(event.keyCode==13) {
	  		var newValue = $(this).val();
	  		console.log('work');
	  		$(this).siblings('.item-name').html(newValue);
	  		$(this).hide();
	  		$('.item-name').show();	
	  	}
  });
  	$(document).on('keyup', '.text', function(event){
  		if(event.keyCode==27) {
  			$(this).hide();
  			$('.item-name').show();
  		}
  	});

  	
});
				