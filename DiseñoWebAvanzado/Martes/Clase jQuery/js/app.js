$(document).ready(function () {
	//aqui escribo todo mi codigo
	$("#iraarticulo1").click(function() {
		var posicion=$("#articulo1").offset().top;
		posicion=posicion-60;
		//alert(posicion);
		$("html,body").animate({
			scrollTop: posicion
		},800);
		//$("algo").animate({
			//que quiero que haga
		//},tiempoenmiliseg,quehagodespues);
	});

	$("#iraarticulo2").click(function() {
		var posicion=$("#articulo2").offset().top;
		posicion=posicion-60;
		//alert(posicion);
		$("html,body").animate({
			scrollTop: posicion
		},800);
		//$("algo").animate({
			//que quiero que haga
		//},tiempoenmiliseg,quehagodespues);
	});

	$("#iraarticulo3").click(function() {
		var posicion=$("#articulo3").offset().top;
		posicion=posicion-60;
		//alert(posicion);
		$("html,body").animate({
			scrollTop: posicion
		},800);
		//$("algo").animate({
			//que quiero que haga
		//},tiempoenmiliseg,quehagodespues);
	});


	$(".btn1").click(function() {
		//$(".img-responsive").slideUp();
		$(".img-responsive").fadeOut();

	});

	$(".btn2").click(function() {
		//$(".img-responsive").slideDown();
		$(".img-responsive").fadeIn();

	});

	$("#articulo2")
	.mouseenter(function(){
		$("#articulo2").addClass("cambialetra");
	})
	.mouseout(function(){
		$("#articulo2").removeClass("cambialetra");	
	});
	$(".circulo")
	.mouseenter(function(){
		$(".circulo").addClass("cuadrado");
	})
	.mouseout(function(){
		$(".circulo").removeClass("cuadrado");	
	});

});