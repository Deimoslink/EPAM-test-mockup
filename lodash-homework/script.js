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
var addButton = document.getElementById('add');
var toggleButton = document.getElementById('toggle');
var sortButton = document.getElementById('sort');
var sortToggle = false;

function render () {
	var addTable = _.template(document.getElementById('template').innerHTML);		
	document.getElementById('app').innerHTML = addTable({ keys: columns, items: Table});
	var removeButtons = document.getElementsByClassName("remove");
	for (var i = 0; i < removeButtons.length; i++) {
		removeButtons[i].addEventListener("click", removeRow);
		removeButtons[i].setAttribute("id", i);
	}
};

render();

addButton.onclick = function() {
	var newCity = document.getElementById("city").value;
	var newStreet = document.getElementById("street").value;
	var newHouse = document.getElementById("house").value;
	var newId = Table[Table.length - 1].id + 1;
	var newObj = {
		id: newId,
		city: newCity,
		street: newStreet,
		house: newHouse
	}
	Table.push(newObj);
	render();
	console.log(Table.length);
}

function removeRow (event) {
	var index = event.target.id;
	Table.splice(index,1);
	render();
};

toggleButton.onclick = function() {
	var len = document.querySelectorAll("td").length / 5;
	document.querySelectorAll("th")[0].style.visibility === "hidden" ? document.querySelectorAll("th")[0].style.visibility = "visible" : document.querySelectorAll("th")[0].style.visibility = "hidden";
	for (var i = 0; i < len; i++) {
		document.querySelectorAll("td")[i*5].style.visibility === "hidden" ? document.querySelectorAll("td")[i*5].style.visibility = "visible" : document.querySelectorAll("td")[i*5].style.visibility = "hidden";;
	}
}

sortButton.onclick = function () {
	sortToggle ? sortByDesc() : sortByAsc();
};

	function sortByAsc () {
		Table = Table.sort(function(obj1, obj2) {
			return obj1.house - obj2.house;
		});
		sortToggle = true;
		render();
	};

	function sortByDesc () {
		Table = Table.sort(function(obj1, obj2) {
			return obj2.house - obj1.house
		});
		sortToggle = false;
		render();
	};