$(document).ready(function(){

//Получить консультацию
	$(".main_btn:eq(0)").on("click", function(){
		$(".overlay").fadeToggle("slow");
		$(".modal").slideDown(1500);
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
		$(".overlay").fadeToggle("slow");
		$(".modal").slideDown(1500);
	});

//Расписание туров
	 $("li:nth-child(2)").on("click", function(){
		$(".overlay").fadeToggle("slow");
		$(".modal").slideDown(1500);
	});

});
