



var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("two");
var nine = document.getElementById("eight");
var ten = document.getElementById("nine");
var two = document.getElementById("ten");




function loadspelling (spellingIndex) {
	var q = questions[spellingIndex];
	
	// questionEl.textContent = q.question;
	one.src = q.one;
    two.src = q.two;
    three.src = q.three;
    four.src = q.four;
    five.src = q.five;
 six.src = q.six;
 seven.src = q.seven;
 eight.src = q.eight;
 nine.src = q.nine;
 ten.src = q.ten;

}

loadspelling();