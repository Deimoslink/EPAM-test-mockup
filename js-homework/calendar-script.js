function calendar(year, month) {
	var thisMonthLastDay = new Date(year,month+1,0).getDate(), //Узнаем последний день месяца
		prevMonthTotalDays = new Date(year,month,0).getDate(), //Узнаем, сколько было дней в предыдущем месяце
		thisMonthLastDayToDate = new Date(year,month,thisMonthLastDay), //Вернем последний день месяца как дату
		thisMonthLastDayToWeekDay = thisMonthLastDayToDate.getDay(), //Узнаем, каким днем недели является последний день месяца
		thisMonthFirstDayToWeekDay = new Date(thisMonthLastDayToDate.getFullYear(),thisMonthLastDayToDate.getMonth(),1).getDay(), //Узнаем, каким днем недели является первый день месяца
		calendar = '<tr>',//Начинаем рисовать календарь с пустого ряда
		daysFromPrevMonth = [],
		daysFromPrevMonthToWeekDay = thisMonthFirstDayToWeekDay-1;
	if (daysFromPrevMonthToWeekDay == -1) {daysFromPrevMonthToWeekDay = 6}
		for (var i = 0; i < daysFromPrevMonthToWeekDay; i++) {
			daysFromPrevMonth.push(prevMonthTotalDays);
			prevMonthTotalDays--;
		}
	daysFromPrevMonth.reverse();

	if (thisMonthFirstDayToWeekDay != 0) { //Если первый день недели не воскресенье
		var j = 0;
		for(var  i = 1; i < thisMonthFirstDayToWeekDay; i++) {calendar += '<td class="blur">'+daysFromPrevMonth[j]; j++}; //То добавляем пустые td в первую строку. Ровно столько, сколько дней было на этой неделе в предыдущем месяце
	} else { //Если первый день воскресенье
		var j = 0;
		for(var  i = 0; i < 6; i++) {calendar += '<td class="blur">'+daysFromPrevMonth[j]; j++}; //То добавляем 6 пустых td с днями недели из предыдущего месяца
	}

	for(var  i = 1; i <= thisMonthLastDay; i++) { //Далее начинаем добавлять дни, пока не дойдем до последнего дня в месяце
		if (i == new Date().getDate() && thisMonthLastDayToDate.getFullYear() == new Date().getFullYear() && thisMonthLastDayToDate.getMonth() == new Date().getMonth()) { //Если день, год и месяц совпадают с сегодняшней датой, то присваиваем класс тудей
			calendar += '<td class="today">' + i;
		} else {
			calendar += '<td>' + i; //Добавляем td и в ячейку записываем число
		}
		if (new Date(thisMonthLastDayToDate.getFullYear(),thisMonthLastDayToDate.getMonth(),i).getDay() == 0) {//как только цикл натыкается на воскресенье, мы начинаем новую строку
			calendar += '<tr>';
		}
	}

	if (thisMonthLastDayToWeekDay != 0) {
		var j = 1;
		for(var  i = thisMonthLastDayToWeekDay; i < 7; i++) {calendar += '<td class="blur">'+j;
		j++}; //Добавляем оставшиеся пустые ячейки, которые являются днями следующего месяца
	}

	document.querySelector('tbody').innerHTML = calendar;//Добавим получившуюся таблицу в tbody
	document.querySelector('input').value = thisMonthLastDayToDate.getFullYear();//Добавим год в Input
	document.querySelector('option[value="' + month + '"]').selected = true; //Выберем текущий месяц в Option
	document.querySelector('option[value="' + new Date().getMonth() + '"]').style.color = 'red'; // в выпадающем списке выделен текущий месяц
}

calendar(new Date().getFullYear(),new Date().getMonth());//вызов функции

document.querySelector('#calendar').onchange = function refresh() {//обновление функции при изменении Input или option
	calendar(document.querySelector('#calendar input').value, parseFloat(document.querySelector('#calendar select').options[document.querySelector('#calendar select').selectedIndex].value));//вызываем calendar с новыми аргументами
}