var number = 13761000.63


function func (number) {
  if (typeof(number) != "number") {
    console.log("Argument should be a number!");
    return false;
  }
  number = number.toFixed(2); //Округляем до сотых
	var result = ""; //Сюда будет записан отформатированный номер
	var str = number.toString(); //Переделываем в строку
	var parts = str.split("."); //Получаем массив с двумя частями - целая и дробная части
	
	var step = 0; //Объявим шаг, чтобы каждую третью итерацию добавлять пробел в формат нового числа
	for (var i = parts[0].length -1; i >= 0; i--) {
			result = parts[0][i] + result;//добавляем числа по одному
			step++; 
			if((step % 3) == 0) //каждый третий раз добавляем пробел к новому числу
					result = " " + result;				
	}

  if (parts[1] != "00") { //если дробная часть существует
    result = result + "," + parts[1]; //добавляем дробную часть
    if(/0+$/.test(result)) { //Если в дробной части нет сотых, а только десятые, то убираем ноль в конце
    result = result.substring(0, result.length - 1);
  }
  }
  
  if(result.charAt(0) === " ") { //Если пробел оказался в самом начале строки, то удаляем его
    result = result.slice(1);
  }


	console.log (result);
}
	
func(number);

