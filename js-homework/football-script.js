function startClock() {
    setInterval(function() {

		var date = new Date();
		var football = new Date(2018, 6, 15);
		var difference = football-date;
		var timeLeft = new Date(difference);

		var Years = football.getFullYear() - date.getFullYear();
		var Months = football.getMonth() - date.getMonth();
		var Days = football.getDate() - date.getDate();
		var Hours = timeLeft.getHours();
		var Minutes = timeLeft.getMinutes();
		var Seconds = timeLeft.getSeconds();

		var array = [];
		array.push(Years);
		array.push(Months);
		array.push(Days);
		array.push(Hours);
		array.push(Minutes);
		array.push(Seconds);

		var case1 = ["год", "месяц", "день", "час", "минута", "секунда"];
		var case2 = ["года", "месяца", "дня", "часа", "минуты", "секунды"];
		var case3 = ["лет", "месяцев", "дней", "часов", "минут", "секунд"];

		var patternCase1 = new RegExp("^1$|([2-9]+1$)");
		var patternCase2 = new RegExp("^[2-4]$|([2-9]+[2-4]$)");

		// array.forEach(function(item, i) {
		// 	if (patternCase1.test(item)) {console.log(item+" "+case1[i])}
		//     else {if (patternCase2.test(item)) {console.log(item+" "+case2[i])}
		//         else {console.log(item+" "+case3[i])}
		//     }
		// });

		array.forEach(function(item, i) {
			if (patternCase1.test(item)) {
				$("ul li:eq("+i+") span").html(item);
				$("ul li:eq("+i+") div").html(case1[i]);
			} else {
				if (patternCase2.test(item)) {
					$("ul li:eq("+i+") span").html(item);
					$("ul li:eq("+i+") div").html(case2[i]);
				} else {
					$("ul li:eq("+i+") span").html(item);
					$("ul li:eq("+i+") div").html(case3[i]);
				}
		    }
		});

	}, 1000);
}

$(document).ready(function() {
	startClock();
});