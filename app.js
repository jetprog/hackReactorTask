$(document).ready(function(){

	var obj = {};
	$('.submitForm').click(function(){
		 var $codeName = $('.textField').val();
		 var $snippet = $('.code').val();

		if(localStorage.getItem("object") === null){
			obj[$codeName] = $snippet;
			var jsonObject = JSON.stringify(obj);
			localStorage.setItem("object", jsonObject);
		}
		else{

			var jsonString = localStorage.getItem("object");
			var getObject = JSON.parse(jsonString);
			getObject[$codeName] = $snippet;
			var jsonObject = JSON.stringify(getObject);
			localStorage.setItem("object", jsonObject);
		}


		$('.textField').val('');
		$('.code').val('');

	});

	$('.showSnippet').click(function(){
		var data = JSON.parse(localStorage.getItem("object"));
		if(Object.keys(data).length>0){
			$('.listSnippet').toggle();
			$('.list').prepend("<h4>List of snippets</h4>")

			for(key in data){
				var $test = "<li>"+key+"</li>";
				$('.listSnippet').append($test);
			}
		}

	});

	$('.searchSnippet').click(function(){
		var data = JSON.parse(localStorage.getItem("object"));
		if(Object.keys(data).length>0){
			var message = prompt("Write the name of the function you search"," ");
			if(data.hasOwnProperty(message)){
				$('.textField').val(message);
				$('.code').val(data[message]);
				$('.textField').attr('readonly', true);
			}
			else{
				alert("Not exist");
			}

		}
		
		//localStorage.setItem("object", JSON.stringify(data))
	});
	
	$('.deleteSnippet').click(function(){
		var data = JSON.parse(localStorage.getItem("object"));
		if(Object.keys(data).length>0){
			var message = prompt("Write the name of your function you want to delete"," ");
			if(data.hasOwnProperty(message)){
				delete data[message];
				localStorage.setItem("object", JSON.stringify(data));
				alert('Function ' +message+ ' was deleted')
			}
			else{
				alert("Not exist");
			}
		}

	});


});
