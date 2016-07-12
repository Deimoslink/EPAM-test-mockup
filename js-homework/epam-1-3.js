var array = ["test","text","rext","best","strange","rest"];


function func (array, elem) {

	for (items in array) {
		var pattern = new RegExp(elem, "i");
		if (pattern.test(array[items])) {
			return true;
		}
	}

return false;

}

func (array, "text");