var inputString = "!??слово!плов олово$$$!"; //Строка на вход
input = inputString.toLowerCase(); //Переведем в строчные буквы
var coins = []; //Создадим массив, в котором будут храниться все совпадения
var coin = ""; //Здесь будут храниться единичные совпадения
var loopEnd = input.length;

for (var i = 0; i < loopEnd; i++) { //Идем по всей строке
    var character = input.charAt(i); //Выделяем символ
    var substr = input.substring(i+1); //Выделяем остаток строки справа
    if (substr.indexOf(character) != -1) { //Если такой символ попадается ещё хоть раз
        var currentPos = i; //Запомним номер, когда этот символ встречается впервые
        var nextPos = substr.indexOf(character)+i+1; //И когда он встречается ещё раз
        coin += input.charAt(currentPos);//Сразу запишем этот символ в совпадение
        var step = 1; //Начиная со следующего символа
        do { //Идем дальше по стороке
            if (input.charAt(currentPos+step) == input.charAt(nextPos+step))//Если следующие два символа тоже совпадают
            coin += input.charAt(currentPos+step);//Довбавляем их в текущее совпадение
            step++;//Делаем ещё шаг
        } while (input.charAt(currentPos+step) == input.charAt(nextPos+step));//Повторяем это до тех пор, пока символы совпадают
        coins[i] = coin; //Как только мы вышли из цикла, запишем текущее совпадение в массив с совпадениями
        coin = "";//Обнулим текущее совпадение
    }
}


var longestCoin = coins.sort(function (a, b) { return b.length - a.length; })[0];//Когда вся строка пройдена, найдем самое длинное совпадение

var result = inputString.replace(new RegExp(longestCoin, 'gi'), "");//Сотрем его везде где оно встречается во входной строке

console.log(result);//Выведем результат