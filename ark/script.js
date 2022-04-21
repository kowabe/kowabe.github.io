function degree(a , b){
	let f = a ** b
	return f;
}
a = prompt("введите число");
b = prompt("введите степень");
alert(degree(a, b));

function fd(a) {
	let s = [];
	for (let i = 1; i <= a; i++) {
		if (a % i == 0) {
			s.push(i);
		}
	}
	return s;
}
a = prompt("введите число");
alert(fd(a));