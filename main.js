function create_new_strip() {
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

	strip.className	= "strip";
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

	div1.placeholder	= "コールサイン";
	div2.placeholder	= "機種/後方乱気流区分";
	div3.placeholder	= "ID";
	div4.placeholder	= "スコーク";
	div5.placeholder	= "暫定高度";
	div6.placeholder	= "巡航高度";
	div7.placeholder	= "出発地";
	div8.placeholder	= "到着地";
	div9.placeholder	= "代替";
	div10.placeholder	= "フライトプラン";

	const deletebutton	= document.createElement("input");
	const checkbox1		= document.createElement("input");
	const checkbox2		= document.createElement("input");

	deletebutton.type		= "button";
	deletebutton.value		= "☓";
	deletebutton.className	= "deletebutton";
	checkbox1.type			= "checkbox";
	checkbox2.type			= "checkbox";

	div25.appendChild(deletebutton);
	div26.appendChild(checkbox1);
	div27.appendChild(checkbox2);

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

	document.body.appendChild(strip);
}