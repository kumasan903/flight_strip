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

	sep2.innerHTML = "<input title=\"色を変更\" class=\"button\" type=\"button\" value=\"&#x1f3a8\" onclick=\"change_color(this)\"><input title=\"さらばじゃ\" class=\"button\" type=\"button\" value=\"☓\" onclick=\"delete_strip(this)\">"
	sep3.innerHTML = "<input title=\"上に移動\" class=\"button\" type=\"button\" value=\"↑\" onclick=\"move_up(this)\"><input title=\"一番上に移動\" class=\"button\" type=\"button\" value=\"↑↑\" onclick=\"move_top(this)\">"
	sep4.innerHTML = "<input title=\"下に移動\" class=\"button\" type=\"button\" value=\"↓\" onclick=\"move_down(this)\"><input title=\"一番下に移動\" class=\"button\" type=\"button\" value=\"↓↓\" onclick=\"move_bottom(this)\">"

	const strips = document.getElementById("strips");
	strips.insertBefore(separator, strips.firstChild);
}