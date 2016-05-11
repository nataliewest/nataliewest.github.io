//Home
	//when user hovers over the button they will annimate


	//when the user scrolls down the page, the top header will remain at the top (sticky nav)


//Recipe 
	//when the user hovers over any of the links, the page will turn a different shade

$('.recipe').hover(function(){
	$('.recipes').addClass('grayscale');	
});

$('.recipe').mouseout(function(){
	$('.recipes').removeClass('grayscale');
});


//decor
	//when the user hovers over any of the links, the page will turn a different shade

$(document).ready(function(){
	$('.decor_line').addClass('animation');
});	

//ettiquette
	//when the user hovers over any of the links, the page will turn a different shade

$('.ettiquette_class').hover(function(){
	$('.ettiquette').toggleClass('.ettiquette_alt_img');
});


