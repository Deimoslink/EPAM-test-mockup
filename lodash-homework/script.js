var Table = [
	{
		id: 1,
		city: "Samara",
		street: "Michurina",
		house: 78
	},
		{
		id: 2,
		city: "Moscow",
		street: "Tverskaya",
		house: 8
	},
		{
		id: 3,
		city: "St Petersburg",
		street: "Nevskiy",
		house: 12
	},
		{
		id: 4,
		city: "Ufa",
		street: "Salavat Ulaev",
		house: 31
	},
		{
		id: 5,
		city: "Kazan",
		street: "Bauman",
		house: 3
	}
];

var columns = _.keysIn(Table[0]);
function render () {
	var addTable = _.template(document.getElementById('template').innerHTML);		
	document.getElementById('app').innerHTML = addTable({ keys: columns, items: Table});


var removeButtons = document.getElementsByClassName("remove");

for (var i = 0; i < removeButtons.length; i++) {
    removeButtons[i].addEventListener("click", doThis);
    removeButtons[i].setAttribute("id", i);
}

};

render();

var button = document.getElementById('add');
button.onclick = function() {
	var newCity = document.getElementById("city").value;
	var newStreet = document.getElementById("street").value;
	var newHouse = document.getElementById("house").value;
	var newId = Table.length + 1;
	var newObj = {
		id: newId,
		city: newCity,
		street: newStreet,
		house: newHouse
	}
	Table.push(newObj);
	render();
}


function doThis (event) {
	var index = event.target.id;
	Table.splice(index,1);
	render();
};

var toggle = document.getElementById("toggle");
toggle.onclick = function() {
	document.getElementsByTagName('*').style.color = 'red';
}

