function create_new_strip(arg) {
	const strip	= document.createElement("div");
	const div1	= document.createElement("input");
	const div2	= document.createElement("input");
	const div3	= document.createElement("input");
	const div4	= document.createElement("input");
	const div5	= document.createElement("input");
	const div6	= document.createElement("input");
	const div7	= document.createElement("input");
	const div8	= document.createElement("input");
	const div9	= document.createElement("input");
	const div10	= document.createElement("textarea");
	const div16	= document.createElement("input");
	const div17	= document.createElement("input");
	const div18	= document.createElement("input");
	const div19	= document.createElement("input");
	const div20	= document.createElement("input");
	const div21	= document.createElement("input");
	const div22	= document.createElement("input");
	const div23	= document.createElement("input");
	const div24	= document.createElement("input");
	const div25	= document.createElement("div");
	const div26	= document.createElement("div");
	const div27	= document.createElement("div");
	const div28	= document.createElement("div");
	const div29	= document.createElement("div");
	const div30	= document.createElement("div");

	strip.className	= arg;
	div1.className	= "div1";
	div2.className	= "div2";
	div3.className	= "div3";
	div4.className	= "div4";
	div5.className	= "div5";
	div6.className	= "div6";
	div7.className	= "div7";
	div8.className	= "div8";
	div9.className	= "div9";
	div10.className	= "div10";
	div16.className	= "div16";
	div17.className	= "div17";
	div18.className	= "div18";
	div19.className	= "div19";
	div20.className	= "div20";
	div21.className	= "div21";
	div22.className	= "div22";
	div23.className	= "div23";
	div24.className	= "div24";
	div25.className	= "div25";
	div26.className	= "div26";
	div27.className	= "div27";
	div28.className	= "div28";
	div29.className	= "div29";
	div30.className	= "div30";

	div1.placeholder	= "コールサイン";
	div2.placeholder	= "機種/後方乱気流区分";
	div3.placeholder	= "name";
	div4.placeholder	= "スコーク";
	div5.placeholder	= "暫定高度";
	div6.placeholder	= "巡航高度";
	div7.placeholder	= "出発地";
	div8.placeholder	= "到着地";
	div9.placeholder	= "代替";
	div10.placeholder	= "フライトプラン";

	const checkbox1	= document.createElement("input");
	const checkbox2	= document.createElement("input");
	const checkbox3	= document.createElement("input");

	checkbox1.type	= "checkbox";
	checkbox2.type	= "checkbox";
	checkbox3.type	= "checkbox";

	div25.appendChild(checkbox1);
	div26.appendChild(checkbox2);
	div27.appendChild(checkbox3);

	div28.innerHTML = "<input class=\"button\" type=\"button\" value=\"&#x1f3a8\" onclick=\"change_color(this)\"><input class=\"button\" type=\"button\" value=\"☓\" onclick=\"delete_strip(this)\">"
	div29.innerHTML = "<input class=\"button\" type=\"button\" value=\"↑\" onclick=\"moveup(this)\"><input class=\"button\" type=\"button\" value=\"↑↑\" onclick=\"movetop(this)\">"
	div30.innerHTML = "<input class=\"button\" type=\"button\" value=\"↓\" onclick=\"movedown(this)\"><input class=\"button\" type=\"button\" value=\"↓↓\" onclick=\"movebottom(this)\">"

	strip.appendChild(div1);
	strip.appendChild(div2);
	strip.appendChild(div3);
	strip.appendChild(div4);
	strip.appendChild(div5);
	strip.appendChild(div6);
	strip.appendChild(div7);
	strip.appendChild(div8);
	strip.appendChild(div9);
	strip.appendChild(div10);
	strip.appendChild(div16);
	strip.appendChild(div17);
	strip.appendChild(div18);
	strip.appendChild(div19);
	strip.appendChild(div20);
	strip.appendChild(div21);
	strip.appendChild(div22);
	strip.appendChild(div23);
	strip.appendChild(div24);
	strip.appendChild(div25);
	strip.appendChild(div26);
	strip.appendChild(div27);
	strip.appendChild(div28);
	strip.appendChild(div29);
	strip.appendChild(div30);

	const strips = document.getElementById("strips");
	strips.insertBefore(strip, strips.firstChild);
}

function delete_strip(obj) {
	const parent_strip = obj.parentNode.parentNode;
	parent_strip.remove();
}

function moveup(obj){
	const parent_strip = obj.parentNode.parentNode;
	const strips = document.getElementById("strips");
	const prev_strip = parent_strip.previousSibling;
	if (prev_strip === null)
	{
		return ;
	}
	strips.insertBefore(parent_strip, prev_strip);
}

function movedown(obj){
	const parent_strip = obj.parentNode.parentNode;
	const next_strip = parent_strip.nextSibling;
	const strips = document.getElementById("strips");
	if (next_strip === null){
		return;
	}
	strips.insertBefore(parent_strip, next_strip.nextSibling);
}

function movetop(obj){
	const parent_strip = obj.parentNode.parentNode;
	const strips = document.getElementById("strips");
	strips.insertBefore(parent_strip, strips.firstChild);
}

function movebottom(obj){
	const parent_strip = obj.parentNode.parentNode;
	const strips = document.getElementById("strips");
	strips.insertBefore(parent_strip, null);
}

function create_new_sep(){
	const sep1 = document.createElement("input");
	const sep2 = document.createElement("div");
	const sep3 = document.createElement("div");
	const sep4 = document.createElement("div");

	sep1.className = "sep1";
	sep2.className = "sep2";
	sep3.className = "sep3";
	sep4.className = "sep4";

	const separator = document.createElement("div");
	separator.className = "sep";

	separator.appendChild(sep1);
	separator.appendChild(sep2);
	separator.appendChild(sep3);
	separator.appendChild(sep4);

	sep2.innerHTML = "<input class=\"button\" type=\"button\" value=\"&#x1f3a8\" onclick=\"change_color(this)\"><input class=\"button\" type=\"button\" value=\"☓\" onclick=\"delete_strip(this)\">"
	sep3.innerHTML = "<input class=\"button\" type=\"button\" value=\"↑\" onclick=\"moveup(this)\"><input class=\"button\" type=\"button\" value=\"↑↑\" onclick=\"movetop(this)\">"
	sep4.innerHTML = "<input class=\"button\" type=\"button\" value=\"↓\" onclick=\"movedown(this)\"><input class=\"button\" type=\"button\" value=\"↓↓\" onclick=\"movebottom(this)\">"

	const strips = document.getElementById("strips");
	strips.insertBefore(separator, strips.firstChild);
}

function change_color(obj) {
	let parent_strip_classname = obj.parentNode.parentNode.className;
	if (parent_strip_classname === "dep_strip") {
		obj.parentNode.parentNode.className = "arr_strip";
	}
	if (parent_strip_classname == "arr_strip") {
		obj.parentNode.parentNode.className = "other_strip";
	}
	if (parent_strip_classname == "other_strip") {
		obj.parentNode.parentNode.className = "dep_strip";
	}
	if (parent_strip_classname == "sep") {
		obj.parentNode.parentNode.className = "red_sep"
	}
	if (parent_strip_classname == "red_sep") {
		obj.parentNode.parentNode.className = "sep"
	}
}