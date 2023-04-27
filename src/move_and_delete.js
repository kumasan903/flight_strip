function delete_strip(obj) {
	const parent_strip = obj.parentNode.parentNode;
	parent_strip.remove();
}

function move_up(obj){
	const parent_strip = obj.parentNode.parentNode;
	const strips = document.getElementById("strips");
	const prev_strip = parent_strip.previousSibling;
	if (prev_strip === null)
	{
		return ;
	}
	strips.insertBefore(parent_strip, prev_strip);
}

function move_down(obj){
	const parent_strip = obj.parentNode.parentNode;
	const next_strip = parent_strip.nextSibling;
	const strips = document.getElementById("strips");
	if (next_strip === null){
		return;
	}
	strips.insertBefore(parent_strip, next_strip.nextSibling);
}

function move_top(obj){
	const parent_strip = obj.parentNode.parentNode;
	const strips = document.getElementById("strips");
	strips.insertBefore(parent_strip, strips.firstChild);
}

function move_bottom(obj){
	const parent_strip = obj.parentNode.parentNode;
	const strips = document.getElementById("strips");
	strips.insertBefore(parent_strip, null);
}
