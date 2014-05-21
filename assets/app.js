function init () {
	
};


	function addItemBack	() {
		$(this).closest('.item-picked').appendTo('#item-list').addClass('item').removeClass('item-picked');
		$('.item').children('span:first-of-type').addClass('item-name')
		$('.item').children('.glyphicon-pencil')
		.addClass('glyphicon-pencil-show')
		.removeClass('glyphicon-pencil-hide');
	};

	function removeItem () {
		$(this).closest('.item').appendTo('#picked-items').addClass('item-picked').removeClass('item');
			if($('.text').is(':visible')) {
				$('.text').hide();
				$('.item-name').show();
			}
			$('.item-picked').children('span:first-of-type').removeClass('item-name');
			$('.item-picked').children('.glyphicon-pencil').addClass('glyphicon-pencil-hide');
			$('.input').closest('#item-list').attr('checked', false);
	};

	function showPickedItems () {
		$('#picked-items').slideToggle('fast');
   		$('.glyphicon-eye-open').toggle();
   		$('.glyphicon-eye-close').toggle();
	};

	function deleteItem () {
		$(this).closest('.item').remove();
  	$(this).closest('.item-picked').remove();
	};

	function editItem () {
		$(this).siblings('.text').show()
  	.siblings('.item-name').hide().parent().siblings().children('.text').hide()
  	.siblings('.item-name').show();
	};
	
	function commitEdits () {
		if(event.keyCode==13) {
	  		var newValue = $(this).val();
	  		$(this).siblings('.item-name').html(newValue);
	  		$(this).hide();
	  		$('.item-name').show();	
	  	}
	  	else if(event.keyCode==27) {
  			$(this).hide();
  			$('.item-name').show();
  		}
	};

	function editPencil () {
		$(this).siblings('.text').toggle();
	  $(this).siblings('.item-name').toggle();
  };


	


$(document).ready(function() {

	$('#submit').on('click', function(event) {
		// Function Creates the Value For Each New Item
		 event.preventDefault();
			var myValue = $('#input').val();
			var newDiv = $('<div />').addClass('item');
			var checkBox = $('<input>').attr('type', 'checkbox').addClass('input');
			var textBox = $('<input>').attr('type', 'text').addClass('text');
			var createNewSpan = $('<span />').addClass('item-name').html(''+myValue+'');
			var pencil = $('<span />').addClass('glyphicon-pencil');
			var trashCan = $('<span />').addClass('glyphicon-trash');
			var textBox = $('<input>').attr('type', 'text').addClass('text').val( myValue );
			

			if(!$.trim($('#input').val())) {
				alert('Please Enter a Grocery Item');
			}
			else {
				$(newDiv).appendTo('#item-list');
				$(createNewSpan).appendTo(newDiv);
				$(checkBox).insertBefore(createNewSpan);
				$(textBox).insertAfter(checkBox).addClass('text');
				$(pencil).insertAfter(createNewSpan).addClass('glyphicon');
				$(trashCan).insertAfter(createNewSpan).addClass('glyphicon');
					}
			};

			
		var controlInput = $("#input");
        controlInput.replaceWith(controlInput = controlInput.val('').clone(true));
 
	});
 
 
	$('#picked-items').on('click', '.input', addItemBack);
	

	$('#item-list').on('click', '.input', removeItem);


  $('#picked-items-header').on('click', showPickedItems);

  $(document).on('click', '.glyphicon-trash', deleteItem);

  $(document).on('click', '.glyphicon-pencil', editPencil);

  $(document).on('click', '.item-name', editItem);
	
  $(document).on('keyup', '.text', commitEdits);

});


				