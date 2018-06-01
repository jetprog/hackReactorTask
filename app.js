$(document).ready(function(){
	
	$('.submitForm').click(function(){
		$value = $('.textField').val();
		localStorage.setItem("textFieldValue", $value);
		$('.textField').val('');
	});

	$('.retrieveData').click(function(){
		var $data = localStorage.getItem("textFieldValue");
		console.log($data);
		var $div = "<div><h2>"+$data+"</h2></div>"
		$('body').append($div);
	});
});
