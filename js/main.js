$(document).ready(function () {
	$(".form-group").validate({
		rules: {
			email: { 
				required: true,
				minlength: 8,
				maxlength: 10,

			} , 

			pwd: { 
				equalTo: "#pwd",
				minlength: 6,
				maxlength: 10
			}


		},
		messages:{
			pwd: { 
				required:"La contraseña es requerida"

			}
		}

	});
}