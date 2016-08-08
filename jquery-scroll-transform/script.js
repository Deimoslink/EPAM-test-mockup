var pictures = [];
var i = 1;

while (i <= 6) {
	pictures.push({url:"pics/"+i+".jpg"});
	i++;
}

$(document).ready(function(){

	var totalPics = pictures.length;

	(function addPics () {
		var i = 0;
		while (i < totalPics) {
			var element = '<div class="slide"><img src="'+pictures[i].url+'" alt=""></div>';
			$('.slider-inner').append(element)
			i++;
		}
	}());

	(function createNav () {
		var listItem = '<li></li>';
		var step = 1;
		while (step <= totalPics) {
			$('.slider-nav-list').append(listItem);
			step++;
		}
	}());

	function render () {
		$(".slide, .slider-nav-list li").removeClass("active");
		$(".slide:eq("+currentIndex+"), .slider-nav-list li:eq("+currentIndex+")").addClass("active");
	};

	function nextSlide (){
		currentIndex ++;
		if (currentIndex > totalPics - 1) {
			currentIndex = 0;
		}
		render();
	};

	function prevSlide (){
		currentIndex --;
		if (currentIndex < 0) {
			currentIndex = totalPics - 1;
		}
		render();
	};

	var currentIndex = 0;
	var autoSlide = true;

	$(".slide:first, .slider-nav-list li:first").addClass("active");
	$("#sliderNext").on('click',nextSlide);
	$("#sliderPrev").on('click',prevSlide);

	$(".slider-nav-list li").on('click',function(){
		currentIndex = $(".slider-nav-list li").index($(this));
		render();
	});

	var autoSlide = setInterval(function(){ nextSlide() }, 1000);

	function stopAutoSlide() {
	    clearInterval(autoSlide);
	}

	$('#slider').on('mouseenter',function() {
		stopAutoSlide();
	});

	$('#slider').on('mouseleave',function() {
		autoSlide = setInterval(function(){ nextSlide() }, 1000);
	});

});