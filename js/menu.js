var flag = 0;
$(document).ready(function(){
    //Скрыть PopUp при загрузке страницы    
    $("#menu").hide();
});

function show_menu() {
	$("#menu").show();
	//OffScroll ();  //Запустили отмену прокрутки
}

function hide_menu() {
	$("#menu").hide();
	//$(window).unbind('scroll'); //Выключить отмену прокрутки
}


function OffScroll () 
{
	var winScrollTop = $(window).scrollTop();
	$(window).bind('scroll',function () {
	  $(window).scrollTop(winScrollTop);
	});
}

function moveDIV() {
	if (flag == 0)
	{
		wlm_1.style.top='25px';
		wlm_3.style.top='15px';
		flag = 1;
	}
	else {
		wlm_1.style.top='10px';
		wlm_3.style.top='30px';
		flag = 0;
	}
}