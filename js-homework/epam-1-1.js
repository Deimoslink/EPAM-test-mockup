var text = "Lorem ipresult";
var num = 123;
var array = [1,2,3];
var object = {first:"Bon",second:"Jovi"};

function func() {

	var totalArguments = arguments.length;

	if (totalArguments < 2) {
		console.log ('Function must have at least 2 arguments!');
	    return; //Если аргументов нет или один
	}

	var firstArgument =  arguments[0];
	var firstArgumentType = typeof(firstArgument);
	
	if (firstArgumentType != "string" && firstArgumentType != "number" && !Array.isArray(firstArgument)) {
	    console.log ('Arguments should be strings, numbers or arrays!');
	    return; //Если первый переданный аргумент не массив, число или текст
	}

	console.log('Total arguments: '+totalArguments);

	var homogenious = true;
	var result = firstArgument;

	if (Array.isArray(firstArgument)) {
		for (var i = 1; i < totalArguments; i++) {
		    if (!Array.isArray(arguments[i])) {
			        console.log("Arguments should be of the same type!");
			        homogenious = false;
			        break;
			} else {result = result.concat(arguments[i]);} 
		}
	} else {
		for (var i = 1; i < totalArguments; i++) {

		    if (typeof(arguments[i]) != firstArgumentType) {
		        console.log("Arguments should be of the same type!");
		        homogenious = false;
		        break;
		    } else {result += arguments[i];}
		}
	} 

	if (homogenious) {console.log(result);}
}

func(array);