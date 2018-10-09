


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
var totspelling = spelling.length;
var firstspelling = spelling[0];
var container = document.getElementById("container");

function loadspelling (spellingIndex) {
	var q = spelling[spellingIndex];
	sone.textContent = q.one;
    stwo.textContent = q.two;
    sthree.textContent = q.three;
    sfour.textContent = q.four;
    sfive.textContent = q.five;
 ssix.textContent = q.six;
 sseven.textContent = q.seven;
 seight.textContent = q.eight;
 snine.textContent = q.nine;
 sten.textContent = q.ten;
next1.src = q.next;
back1.src = q.back;
var speak1 = q.one0;
sone.addEventListener("click", function(){
inner.textContent = q.one0;

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
		if(currentSpelling == 0){
  back1.style.visibility = "hidden";
};
			if(currentSpelling == 9){
  next1.style.visibility = "hidden";
};
};
 loadspelling(currentSpelling);

function loadNextSpelling() {
	currentSpelling++;
	loadspelling(currentSpelling);
	back1.style.visibility = "visible";

	}


function loadPreviousSpelling() {
	currentSpelling--;
	loadspelling(currentSpelling);
if(next1.style.visibility = "hidden"){
	next1.style.visibility = "visible";
}
}

container.addEventListener('touchstart', function(evt){
    startingX = evt.touches[0].clientX;
     });
 container.addEventListener('touchmove', function(evt){
   var touch = evt.touches[0];
      var change = startingX - touch.clientX;
       });
 container.addEventListener('touchend', function(evt){
 var change = startingX - evt.changedTouches[0].clientX;
      var threshold = screen.width / 3;
     //	 if (change < threshold){

          if (change > 0 && change > threshold){
        loadNextSpelling();
      }

      else if (change < threshold && change < 0){
       loadPreviousSpelling();
      }
      else {
        loadspelling(currentSpelling);
      }

    });
 sone.addEventListener("click",function setUp (){
	    var q = spelling[currentSpelling];

		let voice = new p5.Speech();
		voice.speak(q.one0);
	} );
stwo.addEventListener("click",function setUp (){
	    var q = spelling[currentSpelling];

		let voice = new p5.Speech();
		voice.speak(q.two0);
	} );

sthree.addEventListener("click",function setUp (){
	   var q = spelling[currentSpelling];

		let voice = new p5.Speech();
		voice.speak(q.three0);
	} );

sfour.addEventListener("click",function setUp (){
	   var q = spelling[currentSpelling];

		let voice = new p5.Speech();
		voice.speak(q.four0);
	} );

sfive.addEventListener("click",function setUp (){
	   var q = spelling[currentSpelling];

		let voice = new p5.Speech();
		voice.speak(q.five0);
	} );

ssix.addEventListener("click",function setUp (){
	  var q = spelling[currentSpelling];

		let voice = new p5.Speech();
		voice.speak(q.six0);
	} );

sseven.addEventListener("click",function setUp (){
	   var q = spelling[currentSpelling];

		let voice = new p5.Speech();
		voice.speak(q.seven0);
	} );

seight.addEventListener("click",function setUp (){
	   var q = spelling[currentSpelling];

		let voice = new p5.Speech();
		voice.speak(q.eight0);
	} );
snine.addEventListener("click",function setUp (){
	   var q = spelling[currentSpelling];

		let voice = new p5.Speech();
		voice.speak(q.nine0);
	} );

sten.addEventListener("click",function setUp (){
	   var q = spelling[currentSpelling];

		let voice = new p5.Speech();
		voice.speak(q.ten0);
	} );
