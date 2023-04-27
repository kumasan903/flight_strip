function clock()
{
	const date = new Date();
	const hours = ("0" + date.getUTCHours()).slice(-2);
	const minutes = ("0" + date.getUTCMinutes()).slice(-2);
	const time = hours + minutes + 'z';
	const clock = document.getElementById("clock");
	clock.value = time;
}

setInterval(clock, 1000);