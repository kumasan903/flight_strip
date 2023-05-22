function	load_icao_flightplan()
{
	let	raw_flightplan	= window.prompt("ICAOフライトプランを貼り付けてください", "");
	let rows			= raw_flightplan.split('\n');
	console.log(rows[0]);
	let	callsigin		= (rows[0].split('-'))[1];
	let	aircraft_type	= (rows[1].split('-'))[1];
	let	origin			= rows[2].substr(1, 4);
	let	dest			= rows[4].substr(1, 4);
	let	altn			= rows[4].substr(10,4);
	let	cruise_alt		= rows[3].substr(7, 3);
	let	route			= rows[3].substr(11).slice(0, -1);
	create_new_strip('dep_strip');
	const	strips		= document.getElementById('strips');
	const	first_strip	= strips.firstChild;
	const	s_callsigin	= first_strip.firstChild;
	const	s_actype	= s_callsigin.nextSibling;
	const	s_cruise	= s_actype.nextSibling.nextSibling.nextSibling.nextSibling;
	const	s_origin	= s_cruise.nextSibling;
	const	s_dest		= s_origin.nextSibling;
	const	s_altn		= s_dest.nextSibling;
	const	s_route		= s_altn.nextSibling;
	s_callsigin.value	= callsigin;
	s_actype.value		= aircraft_type;
	s_cruise.value		= cruise_alt;
	s_origin.value		= origin;
	s_dest.value		= dest;
	s_altn.value		= altn;
	s_route.value		= route;
	set_squawk(s_origin);
}