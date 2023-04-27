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

function move_up_sep(obj){
	const parent_strip = obj.parentNode.parentNode;
	const strips = document.getElementById("strips");
	while (true)
	{
		if (parent_strip.previousSibling == null)
		{
			break;
		}
		if (parent_strip.previousSibling.className == 'sep')
		{
			strips.insertBefore(parent_strip, parent_strip.previousSibling);
			break;
		}
		
		strips.insertBefore(parent_strip, parent_strip.previousSibling);
	}
	while (true)
	{
		if (parent_strip.previousSibling == null || parent_strip.previousSibling.className == 'sep')
		{
			break;
		}
		strips.insertBefore(parent_strip, parent_strip.previousSibling);
	}
}

function move_down_sep(obj){
	const parent_strip = obj.parentNode.parentNode;
	const strips = document.getElementById("strips");
	let next_strip;
	while (true)
	{
		next_strip = parent_strip.nextSibling;
		if (next_strip == null){
			break;
		}
		if (next_strip.className == 'sep')
		{
			strips.insertBefore(parent_strip, next_strip.nextSibling);
			break;
		}
		strips.insertBefore(parent_strip, next_strip.nextSibling);
	}
}
