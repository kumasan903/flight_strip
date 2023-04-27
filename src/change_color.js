function change_color(obj) {
	let parent_strip_className = obj.parentNode.parentNode.className;
	if (parent_strip_className === "dep_strip") {
		obj.parentNode.parentNode.className = "arr_strip";
	}
	if (parent_strip_className == "arr_strip") {
		obj.parentNode.parentNode.className = "other_strip";
	}
	if (parent_strip_className == "other_strip") {
		obj.parentNode.parentNode.className = "dep_strip";
	}
	if (parent_strip_className == "sep") {
		obj.parentNode.parentNode.className = "red_sep"
	}
	if (parent_strip_className == "red_sep") {
		obj.parentNode.parentNode.className = "sep"
	}
}
