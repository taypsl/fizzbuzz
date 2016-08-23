
var FizzBuzz = document.querySelector("#fizzbuzz");

for (var i = 1; i < 100; i++) {
	if (i % 15 == 0) {
		FizzBuzz.innerHTML += "fizz buzz <br />";
	}
	else if (i % 3 == 0) {
		FizzBuzz.innerHTML += "fizz <br />";
	}	
	else if (i % 5 == 0) {
		FizzBuzz.innerHTML += "buzz <br />";
	}
	else {
		FizzBuzz.innerHTML += i + "<br />";
	}
}








