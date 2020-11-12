$(function () {

	// selector
	var $cboxList = $('.js-cbox'),
	    $cboxSubmit = $(".js-cbox-submit");

	// variable
	var url = $cboxSubmit.attr("data-url");

	// update cbox value when click
	$cboxList.change(function() {
    if($(this).is(":checked")) {
      $(this).val("1");
    } else {
    	$(this).val("0");
    }  
	});

	// submit
	$cboxSubmit.click(function() {
		// update url by value
		var value = "";
		for (var i = 1; i <= $cboxList.length; i++) {
			var id = "#cbox0" + i;
			value += $(id).val();
		}

	  window.location.href = url + value;
	}); 
	
});