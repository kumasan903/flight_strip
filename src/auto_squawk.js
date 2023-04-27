// on change "from_airport"
document.addEventListener('change', function(event) {
	if (event.target.classList.contains('div7')) {
		set_squawk(event.target);
	}
});

let rjtt_squawk = 0o1301;

function set_squawk(object)
{
	let squawk = object.previousSibling.previousSibling.previousSibling;
	// もし、スコーク欄が空欄なら
	if (squawk.value === "")
	{
		// 出発空港によってスコークを割り当てる
		if (object.value === "RJTT")
		{
			squawk.value = ( '0000' + rjtt_squawk.toString(8)).slice(-4);
			rjtt_squawk += 1;
		}
		else
		{
			squawk.value = ( '0000' + rjtt_squawk.toString(8)).slice(-4);
			rjtt_squawk += 1;
		}
	}
}
