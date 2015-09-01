(function ($) {
	var contextTexts = {'ru':'Контекст','en':'Context'};
	var hideContextTexts = {'ru':'Скрыть контекст','en':'Hide context'};
	var reedTexts = {'ru':'Читать','en':'Reed more'};
	var hideReedTexts = {'ru':'Свернуть','en':'Hide'};
	var lang = $('html').attr('lang');
	$( document ).ready(function() {
			var availableDates = $('#available-dates').data("dates").split(',');
			function availableDatesFunc(date) {
				var month = date.getMonth()+1;
				if(month<10){month = "0"+month;}
				var day = date.getDate();
				if(day<10){day = "0"+day;}
				dmy = date.getFullYear() + "-" + month + "-" + day;
				if ($.inArray(dmy, availableDates) != -1) {
					return [true, ""];//,"Available"];
				} else {
					return [false,""];//,"unAvailable"];
				}
			}
			
		$('.read-more-but').click(function(){
			if($(this).parent().children('.read-more-text').css('display')=='none'){
				$(this).text(hideReedTexts[lang]);
			}
			else{
				$(this).text(reedTexts[lang]);
			}
			$(this).parent().children('.read-more-text').slideToggle(800);
		});
		$('.cntxt-lnk').click(function(){
			if($('.event-context').css('display')=='none'){
				$(this).text(hideContextTexts[lang]);
			}
			else{
				$(this).text(contextTexts[lang]);
			}
			$('.event-context').slideToggle(800);
		});
		/*$('li').hover(function(){
			$(this).find('.menu').slideToggle(800);
		},function(){
			$(this).find('.menu').slideToggle(800);
		});*/
		$('.navbar-toggle').click(function(){
			if($('#block-system-main-menu>.menu').css('display')=='none'){	}
			else{ }
			$('#block-system-main-menu>.menu').slideToggle(800);
		});
		
		$('.filter-toggle').click(function(){
			if($('.header-filter .filter-wrap').css('display')=='none'){	}
			else{ }
			$('.header-filter .filter-wrap').slideToggle(800);
		});
		
		/*$.datepicker.regional['ru'] = {
			closeText: 'Закрыть',
			prevText: '&#x3C;',
			nextText: '&#x3E;',
			currentText: 'Сегодня',
			monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
			'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
			monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
			'Июл','Авг','Сен','Окт','Ноя','Дек'],
			dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
			dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
			dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
			weekHeader: 'Нед',
			dateFormat: 'dd.mm.yy',
			firstDay: 1,
			isRTL: false,
			showMonthAfterYear: false,
			yearSuffix: ''};
		$.datepicker.setDefaults($.datepicker.regional['ru']);
		$afisha = $('#block-system-main-menu .menu li a:contains("Афиша")');
		$afisha.html('<input type="hidden" id="datepicker2">');
		$afishaInput = $('#datepicker2');
		var monthBoo = false;
		$afishaInput.datepicker({
				beforeShowDay: availableDatesFunc,
				onSelect:function(){filterChange();},
				showOn: "button",
				buttonImage: "https://jqueryui.com/resources/demos/datepicker/images/calendar.gif",
				dateFormat: "yy-mm-dd",
				updateMonth:function(el,dp){$('#ui-datepicker-div').append('<div class="datepicker-additional-buts"><div id="datepicker-select-month">Весь месяц</div>');}
		});
		$afishaInput.next().append('<span class="ui-selectmenu-text">Афиша</span>');
		$('#ui-datepicker-div').on("click",'#datepicker-select-month',function(){
				var month = $.inArray($(this).parents('.ui-datepicker').find('.ui-datepicker-month').text(),$.datepicker.regional['ru']['monthNames'])+1;
				console.log($(this).parents('.ui-datepicker').find('.ui-datepicker-month'));
				if(month<10){month = "0"+month;}
				month = $('.ui-datepicker-year').text()+"-"+month;
				$afishaInput.datepicker("setDate",month+"-01");
				$afishaInput.datepicker("hide");
				monthBoo = true;
				filterChange();
		})
		$afisha.click(function(e){
			e.preventDefault();
		});
		function filterChange(){
			if(monthBoo){
				window.location = "/#m"+$afishaInput.val();
			}
			else{
				window.location = "/#"+$afishaInput.val();
			}
			if(location.pathname == "/"){
				location.reload();
			}
		}*/
		
//	 $('#block-system-main-menu .expanded').click(function(){
//			if($('#block-system-main-menu .expanded>.menu').css('display')=='none'){ $( "#block-system-main-menu .expanded" ).addClass('menuopen');	}
//			else{ $( "#block-system-main-menu .expanded" ).removeClass('menuopen'); }
//			$('#block-system-main-menu .expanded .menu').slideToggle();
//		 });
		
	/*$('#block-system-main-menu .expanded').click(function(){
			var div = $(this).find('.menu');
			console.log(div);
			console.log(div);
			if(div.css('display')=='none'){ $(this).addClass('menuopen'); }
			else { $(this).removeClass('menuopen'); }
			div.slideToggle(200);
		});*/
	
	/*$('#block-system-main-menu .expanded').hover(function(){
			var div = $(this).find('.menu');
			$(this).addClass('menuopen');
			div.hide().fadeIn("fast");
		},function(){
			var div = $(this).find('.menu');
			$(this).removeClass('menuopen');
			div.fadeOut("fast");
		});*/
	$('html').click(function() {
		$('#block-system-main-menu .expanded.menuopen').each(function(index){
			var div = $(this).find('.menu');
			$(this).removeClass('menuopen');
			div.fadeOut("fast");
		});
	});

	$('#block-system-main-menu .expanded').click(function(event){
		event.stopPropagation();
		if(!$(this).hasClass('menuopen')){
			var div = $(this).find('.menu');
			$(this).addClass('menuopen');
			div.hide().fadeIn("fast");
		}
	});
	
	$('#block-system-main-menu .expanded span').click(function(event){
		$menuContainer = $(this).parent('.expanded');
		if($menuContainer.hasClass('menuopen')){
			event.stopPropagation();
			var div = $menuContainer.find('.menu');
			$menuContainer.removeClass('menuopen');
			div.fadeOut("fast");
		}
	});
	
	var demoTimeout;
	$subscribeForm = $("#subscribeForm");
	$subscribeForm.jrumble({x:5,y:0,rotation:0});
	function subscribeDown(){
		var email = $("input#email").val();
		if(validateEmail(email)){
			$.post("/sites/all/themes/theater/php/subscribe.php", {email: email }, function(data) {
				if(data == "1"){
					$('#email, #subscribeSubmit').css("display","none");
					$('#subscribeResult').fadeIn();
				}
			});
		}
		else{
			clearTimeout(demoTimeout);
			$subscribeForm.trigger('startRumble');
			demoTimeout = setTimeout(function(){$subscribeForm.trigger('stopRumble');}, 300)
		}
	}
	function validateEmail(email) {
		var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
		return re.test(email);
	}
	$('#subscribeSubmit').click(subscribeDown);
	$("input#email").keyup(function (e) {
		if (e.keyCode == 13) {
			subscribeDown();
		}
	});

		
	});
})(jQuery);