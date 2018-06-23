$(document).ready(function(){

//Получить консультацию
	$(".main_btn:eq(0)").on("click", function(){
		$(".overlay").animate (
		{
			opacity:"toggle"
		});
		$(".modal").slideDown(1500)
		$(".modal").animate({
			opacity: "0.8"
		});
	});

// Закрыть окно
	$("span:first").on("click", function(){
		$(".modal").slideUp(1500)
		$(".overlay").animate(
		{
			opacity:'toggle'
		});
	});

// Выбрать тур
	$(".main_btna:eq(0)").on("click", function(){
		$(".overlay").animate (
		{
			opacity:"toggle"
		});
		$(".modal").slideDown(1500)
		$(".modal").animate({
			opacity: "0.8"
		});
	});

//Расписание туров
	 $("li:nth-child(2)").on("click", function(){
		
		$(".overlay").animate (
		{
			opacity:"toggle"
		});
		$(".modal").slideDown(1500)
	});

});
