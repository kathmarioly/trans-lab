$(document).ready(function() {

	function ValidarEmail(email) {
		var expr = /^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
		return expr.test(email);
	};
	$("#enviar").click(function () {
		if (!ValidarEmail($("#email").val())) {
			alert("El email ingresado no es correcto");
		}
		else{
			document.write("EnHorabuena");
		}
	});
}