function calendar(year, month) {
	var Dlast = new Date(year,month+1,0).getDate(), //Узнаем последний день месяца
		Dprev = new Date(year,month,0).getDate(), //Узнаем, сколько было дней в предыдущем месяце
		D = new Date(year,month,Dlast), //Вернем последний день месяца как дату
		DNlast = D.getDay(), //Узнаем, каким днем недели является последний день месяца
		DNfirst = new Date(D.getFullYear(),D.getMonth(),1).getDay(), //Узнаем, каким днем недели является первый день месяца
		calendar = '<tr>';//Начинаем рисовать календарь с пустого ряда
console.log(Dprev);
		var array = [];
		var daysFromPrev = DNfirst-1;
		if (daysFromPrev == -1) {daysFromPrev = 6}
			for (var i = 0; i < daysFromPrev; i++) {
				array.push(Dprev);
				Dprev--;
			}
array.reverse();
//console.log(array);

	if (DNfirst != 0) { //Если первый день недели не воскресенье
		var j = 0;
		for(var  i = 1; i < DNfirst; i++) {calendar += '<td class="blur">'+array[j]; j++}; //То добавляем пустые td в первую строку. Ровно столько, сколько дней было на этой неделе в предыдущем месяце
	


	} else { //Если первый день воскресенье
		var j = 0;
		for(var  i = 0; i < 6; i++) {calendar += '<td class="blur">'+array[j]; j++}; //То добавляем 6 пустых td
	}

	for(var  i = 1; i <= Dlast; i++) { //Далее начинаем добавлять дни, пока не дойдем до последнего дня в месяце
		if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) { //Если день, год и месяц совпадают с сегодняшней датой, то присваиваем класс тудей
			calendar += '<td class="today">' + i;
		} else {
			calendar += '<td>' + i; //Добавляем td и в ячейку записываем число
		}
		if (new Date(D.getFullYear(),D.getMonth(),i).getDay() == 0) {//как только цикл натыкается на воскресенье, мы начинаем новую строку
			calendar += '<tr>';
		}
	}
	if (DNlast != 0) {
		var j = 1;
		for(var  i = DNlast; i < 7; i++) {calendar += '<td class="blur">'+j;
		j++}; //Добавляем оставшиеся пустые ячейки, которые являются днями следующего месяца
	}

	document.querySelector('tbody').innerHTML = calendar;//Добавим получившуюся таблицу в tbody
	document.querySelector('input').value = D.getFullYear();//Добавим год в Input
	document.querySelector('option[value="' + month + '"]').selected = true; //Выберем текущий месяц в Option
	document.querySelector('option[value="' + new Date().getMonth() + '"]').style.color = 'red'; // в выпадающем списке выделен текущий месяц
}

calendar(new Date().getFullYear(),new Date().getMonth());//вызов функции

document.querySelector('#calendar').onchange = function refresh() {//обновление функции при изменении Input или option
	calendar(document.querySelector('#calendar input').value, parseFloat(document.querySelector('#calendar select').options[document.querySelector('#calendar select').selectedIndex].value));//вызываем calendar с новыми аргументами
}
