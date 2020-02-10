<!DOCTYPE html>
<html>
<head>
<title>Function Return</title>
</head>

<body>
<script>

function calcTot(merchTot) {
	var orderTot;
	if (merchTot >= 100) {
		orderTot = merchTot;
	}
	else if (merchTot < 50.01) {
		orderTot = merchTot + 5;
	}
	else {
		orderTot = merchTot + 5 + (.03 * (merchTot - 50));
	}
	return orderTot;
}

var amount = prompt("Enter the amount", 0);
amount = Number(amount);
var totalToCharge = calcTot(amount);
var currencyTotal = "$" + totalToCharge;
alert(currencyTotal);

</script>

</body>
</html>