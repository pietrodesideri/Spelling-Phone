


var currentSpelling = 0;
var sone = document.getElementById("one");
var stwo = document.getElementById("two");
var sthree = document.getElementById("three");
var sfour = document.getElementById("four");
var sfive = document.getElementById("five");
var ssix = document.getElementById("six");
var sseven = document.getElementById("seven");
var seight = document.getElementById("eight");
var snine = document.getElementById("nine");
var sten = document.getElementById("ten");
var inner = document.getElementById("inner");
var next1 = document.getElementById("next");
var back1 = document.getElementById("back1");
var head = document.getElementById("head");

function loadspelling (spellingIndex) {
	var q = spelling[spellingIndex];
	
	// questionEl.textContent = q.question;
	sone.src = q.one;
    stwo.src = q.two;
    sthree.src = q.three;
    sfour.src = q.four;
    sfive.src = q.five;
 ssix.src = q.six;
 sseven.src = q.seven;
 seight.src = q.eight;
 snine.src = q.nine;
 sten.src = q.ten;
next1.src = q.next;
back1.src = q.back;
head.textContent = q.head;
sone.addEventListener("click", function(){
inner.textContent = q.one0
});
stwo.addEventListener("click", function(){
inner.textContent = q.two0
});
sthree.addEventListener("click", function(){
inner.textContent = q.three0
});
sfour.addEventListener("click", function(){
inner.textContent = q.four0
});
sfive.addEventListener("click", function(){
inner.textContent = q.five0
});
ssix.addEventListener("click", function(){
inner.textContent = q.six0
});
sseven.addEventListener("click", function(){
inner.textContent = q.seven0
});
 seight.addEventListener("click", function(){
inner.textContent = q.eight0
});
snine.addEventListener("click", function(){
inner.textContent = q.nine0
});
sten.addEventListener("click", function(){
inner.textContent = q.ten0
});
	
};
 loadspelling(currentSpelling);
function loadNextSpelling() {
	currentSpelling++;
	loadspelling(currentSpelling);
}
function loadPreviousSpelling() {
	currentSpelling--;
	loadspelling(currentSpelling);
}