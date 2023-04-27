// on change "from_airport"
document.addEventListener('change', function(event) {
	if (event.target.classList.contains('div7')) {
		set_squawk(event.target);
	}
});

let squawk_group1301 = 0o1301;
let squawk_group1340 = 0o1340;
let squawk_group1360 = 0o1360;
let squawk_group1501 = 0o1501;
let squawk_group1520 = 0o1520;
let squawk_group1540 = 0o1540;
let squawk_group1550 = 0o1550;
let squawk_group5201 = 0o5201;
let squawk_group5301 = 0o5301;
let squawk_group5401 = 0o5401;
let squawk_group5440 = 0o5440;
let squawk_group5701 = 0o5701;
let squawk_group5720 = 0o5720;
let squawk_group5730 = 0o5730;
let squawk_group5740 = 0o5740;

function set_squawk(object)
{
	let squawk = object.previousSibling.previousSibling.previousSibling;
	// もし、スコーク欄が空欄なら
	if (squawk.value === "")
	{
		// 出発空港によってスコークを割り当てる
		switch(object.value.toUpperCase())
		{
			case "RJCO":
				squawk_group5701 = assign_squawk(squawk, squawk_group5701, 0o5737);
				break;
			case "RJCC":
				squawk_group5401 = assign_squawk(squawk, squawk_group5401, 0o5477);
				break;
			case "RJCH":
				squawk_group1501 = assign_squawk(squawk, squawk_group1501, 0o1537);
				break;
			case "RJCB":
				squawk_group5301 = assign_squawk(squawk, squawk_group5301, 0o5327);
				break;
			case "RJSS":
				squawk_group1501 = assign_squawk(squawk, squawk_group1501, 0o1537);
				break;
			case "RJSM":
				squawk_group1301 = assign_squawk(squawk, squawk_group1301, 0o1377);
				break;
			case "RJSH":
				squawk_group5701 = assign_squawk(squawk, squawk_group5701, 0o5737);
				break;
			case "RJSO":
				squawk_group5740 = assign_squawk(squawk, squawk_group5740, 0o5757);
				break;
			case "RJST":
				squawk_group5401 = assign_squawk(squawk, squawk_group5401, 0o5477);
				break;
			case "RJTT":
				squawk_group1301 = assign_squawk(squawk, squawk_group1301, 0o1377);
				break;
			case "RJAH":
				squawk_group5301 = assign_squawk(squawk, squawk_group5301, 0o5377);
				break;
			case "RJTJ":
				squawk_group1550 = assign_squawk(squawk, squawk_group1550, 0o1577);
				break;
			case "RJTL":
				squawk_group1520 = assign_squawk(squawk, squawk_group1520, 0o1547);
				break;
			case "RJTE":
				squawk_group1501 = assign_squawk(squawk, squawk_group1501, 0o1517);
				break;
			case "RJTU":
				squawk_group5701 = assign_squawk(squawk, squawk_group5701, 0o5727);
				break;
			case "RJTC":
				squawk_group5730 = assign_squawk(squawk, squawk_group5730, 0o5737);
				break;
			case "RJTY":
				squawk_group5201 = assign_squawk(squawk, squawk_group5201, 0o5277);
				break;
			case "RJTA":
				squawk_group5740 = assign_squawk(squawk, squawk_group5740, 0o5777);
				break;
			case "RJAW":
				squawk_group5720 = assign_squawk(squawk, squawk_group5720, 0o5777);
				break;
			case "RJSN":
				squawk_group1301 = assign_squawk(squawk, squawk_group1301, 0o1337);
				break;
			case "RJNK":
				squawk_group5201 = assign_squawk(squawk, squawk_group1301, 0o5277);
				break;
			case "RJNH":
				squawk_group5301 = assign_squawk(squawk, squawk_group5301, 0o5377);
				break;
			case "RJNA":
				squawk_group1340 = assign_squawk(squawk, squawk_group1301, 0o1377);
				break;
			case "RJGG":
				squawk_group1360 = assign_squawk(squawk, squawk_group1360, 0o1377);
				break;
			case "RJOE":
				squawk_group5701 = assign_squawk(squawk, squawk_group5701, 0o5737);
				break;
			case "RJBB":
				squawk_group1301 = assign_squawk(squawk, squawk_group1301, 0o1357);
				break;
			case "RJOH":
				squawk_group5301 = assign_squawk(squawk, squawk_group5301, 0o5377);
				break;
			case "RJOA":
				squawk_group1501 = assign_squawk(squawk, squawk_group1501, 0o1517);
				break;
			case "RJOI":
				squawk_group1540 = assign_squawk(squawk, squawk_group1540, 0o1577);
				break;
			case "RJOS":
				squawk_group5401 = assign_squawk(squawk, squawk_group5401, 0o5477);
				break;
			case "RJFF":
				squawk_group1301 = assign_squawk(squawk, squawk_group1301, 0o1337);
				break;
			case "RJFZ":
				squawk_group5301 = assign_squawk(squawk, squawk_group5301, 0o5377);
				break;
			case "RJFN":
				squawk_group5440 = assign_squawk(squawk, squawk_group5440, 0o5477);
				break;
			case "RJFY":
				squawk_group5201 = assign_squawk(squawk, squawk_group5201, 0o5277);
				break;
			case "RJFA":
				squawk_group5440 = assign_squawk(squawk, squawk_group5440, 0o5477);
				break;
			case "RJFT":
				squawk_group5701 = assign_squawk(squawk, squawk_group5701, 0o5737);
				break;
			case "RJFO":
				squawk_group1520 = assign_squawk(squawk, squawk_group1520, 0o1537);
				break;
			case "RJFU":
				squawk_group5740 = assign_squawk(squawk, squawk_group5740, 0o5777);
				break;
			case "RJFK":
				squawk_group1340 = assign_squawk(squawk, squawk_group1340, 0o1377);
				break;
			case "ROAH":
				squawk_group1501 = assign_squawk(squawk, squawk_group1501, 0o1537);
				break;
			case "RODN":
				squawk_group5301 = assign_squawk(squawk, squawk_group5301, 0o5377);
				break;
			default:
				squawk_group1301 = assign_squawk(squawk, squawk_group1301, 0o1377);
				break;
		}
	}
}

function assign_squawk(squawk, squawk_group, squawk_max)
{
	if (squawk_group <= squawk_max)
	{
		squawk.value = ('0000' + squawk_group.toString(8)).slice(-4);
		squawk_group += 1;
	}
	else
	{
		squawk.value = "Err";
	}
	return (squawk_group);
}
