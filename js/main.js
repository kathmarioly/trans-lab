
$('.form-group').validate({
	rules : {
		password : {
			required: true,
			minlength: 6,
			maxlength: 10
		},
		password_confirm : {
			required: true,
			equalTo: "#pwd",
			minlength: 6,
			maxlength: 10
		}
	}
});



/*index 2*/


// SideNav Initialization
$(".button-collapse").sideNav();



/*FIn index 2*/
