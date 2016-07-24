var input = "7+7*2=ёжик=";
var reg = /[^+*0123456789\-\/.]/ig;//Составим список допустимых символов
var newString = input.replace(reg,"");//Уберем все лишние символы
newString = newString.replace(/^\D+/, "");//Уберем все операторы перед первым числом в получившейся строке
var result = newString.split('');//Превратим полученную строку в массив
var operators = [];//Создадим массив, в котором будут храниться операторы
var numbers = "";//Создадим строку с числами

result.forEach(function(item, index){ //Переберем массив
    if (item == "+" || item == "-" || item == "*" || item == "/") { //Если встречается оператор, то записываем его в массив с операторами
        operators += item;
        numbers += ","; //и ставим разделитель в строку с числами
    } else {
        numbers += item;//Если не оператор, то это число и оно записывается в строку с числами
    }
});

numbers = numbers.split(",");//Превратим строку с числами в массив
var numbersToFloats = [];//В этом массиве будут лежать числа не в виде строк, а в виде чисел
numbers.forEach(function(item){//Переберем массив с числами, записанными в виде строк, и превратим их в числа
   numbersToFloats.push(parseFloat(item));
});

var total = numbersToFloats[0];//Здесь будет лежать итоговый результат
var loopEnd = numbersToFloats.length-1;

for (var i = 0; i < loopEnd; i++) { //Переберем все числа, которые идут после первого. И каждый раз мы будем выполнять именно ту операцию, которая записана в массиве с операторами
    switch(operators[i]) {
    case "+":
        total += numbersToFloats[i+1];
        break;
    case "-":
        total -= numbersToFloats[i+1];
        break;
    case "*":
        total *= numbersToFloats[i+1];
        break;
    case "/":
        total /= numbersToFloats[i+1];
        break;
    default:
    	console.log("Недопустимое выражение!");
        break;
    }
}

console.log(total.toFixed(2));//Выведем результат с отображением сотых значений