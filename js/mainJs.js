$(document).ready(function(){
	$('.comments__slider').slick({
		arrows:true,
		speed:800,
		centerMode:true,
		variableWidth:true,
		responsive:[
		{
			breakpoint: 992,
			settings: {
				centerMode:false,
				slidesToShow:1,
			}
		}]
	});
});
