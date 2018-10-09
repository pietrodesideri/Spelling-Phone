var currentQuestion = 0;
var score = 0;
var totQuestions = questions.length;
var firstQuestion = questions[0];
var container = document.getElementById('quizContainer');
var questionEl = document.getElementById("question");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");
var nextButton = document.getElementById("nextButton");
var resultCont = document.getElementById('result');
var quizimg = document.getElementById('quizimg');
var clap = document.querySelector(".clap");
var haa = document.querySelector(".haa");
var info = document.getElementById("info");
var infobtn = document.getElementById("infobtn");
var body = document.getElementById('body');
var good = document.getElementById('good');
var back = document.querySelector(".back");
function loadquestion (questionIndex) {
	var q = questions[questionIndex];
	
	// questionEl.textContent = q.question;
	quizimg.src = q.question;
    opt1.textContent = q.option1;
	opt2.textContent = q.option2;
	opt3.textContent = q.option3;
	opt4.textContent = q.option4;
	quizimg.style.backgroundSize = "cover";
	quizimg.style.backgroundRepeat = "no-repeat";
	quizimg.style.visibility = "visible";
    // clearInterval(r());
opt1.addEventListener("click", function(){
	opt2.style.display = "none";
	 opt3.style.display = "none";
     opt4.style.display = "none";
     opt1.style.display = "none";
	var selectedOption = document.querySelector('#opt1');
	if(questions[currentQuestion].answer == 1){

	 
	correct();

	} else {
    wrong();
	// opt1.style.visibility = "hidden"
	
}
})
opt2.addEventListener("click", function(){
	opt2.style.display = "none";
	 opt3.style.display = "none";
     opt4.style.display = "none";
     opt1.style.display = "none";

	var selectedOption = document.querySelector('#opt2');
	if(questions[currentQuestion].answer == 2){

	 	correct();
	} else {
    wrong();
	//opt2.style.visibility = "hidden"
	
}
})
opt3.addEventListener("click", function(){
	opt2.style.display = "none";
	 opt3.style.display = "none";
     opt4.style.display = "none";
     opt1.style.display = "none";

	var selectedOption = document.querySelector('#opt3');
	if(questions[currentQuestion].answer == 3){
     correct();
	} else {
	wrong();
	//opt3.style.visibility = "hidden";
	
}
})
opt4.addEventListener("click", function(){
	opt2.style.display = "none";
	 opt3.style.display = "none";
     opt4.style.display = "none";
     opt1.style.display = "none";

	var selectedOption = document.querySelector('#opt4');
	if(questions[currentQuestion].answer == 4){

	correct()
	} else {
	wrong();
	//opt4.style.visibility = "hidden";
	
}
})
};
function loadNextQuestion(){
		currentQuestion++;
if(currentQuestion == totQuestions){
	window.location = "quiz.html";
	return;
}
clap.pause();
clap.currentTime = 0;
container.style.visibility = 'visible';
    	container.style.display = "";
     	// clearInterval(r());
loadquestion(currentQuestion);
forwardOne();
 opt2.style.display = "";
	 opt3.style.display = "";
     opt1.style.display = "";
	opt4.style.display = "";
}
function forwardOne() {
if ( good.style.backgroundImage = "url('3.gif')"
	
	) {
    good.style.backgroundImage = "";
       };
     // if (good.textContent = ""){
     // 	 good.textContent = "ANIMAL QUIZ";
     // };
    
	if(opt1.style.visibility == "hidden")
		opt1.style.visibility = "visible";

	if(opt2.style.visibility == "hidden")
		opt2.style.visibility = "visible";

if(opt3.style.visibility == "hidden")
		opt3.style.visibility = "visible";
	
if(opt4.style.visibility == "hidden")
		opt4.style.visibility = "visible";
		};
  
  // to fire when the correct option is clicked.

function correct(){
	var good = document.querySelector('#good');
		good.textContent = "";
	 good.style.backgroundImage = "url('4.jpg')";
	good.style.backgroundSize = "100% 100%";
	good.style.backgroundRepeat = "no-repeat";
	clap.play();
     
};
// to fire when the wrong option is clicked.
function wrong(){
	good.style.backgroundImage = "url('6.png')";
	good.style.backgroundSize = "100% 100%";
	good.style.backgroundRepeat = "no-repeat";
	good.textContent = "";
	haa.play();
	
}
loadquestion(currentQuestion);

function search(questions){
    for (var i=0; i < questions.length; i++) { 
        	if(questions[i] === 0){
	back.addEventListener("click", function(){
		back.style.visibility = "hidden";
	}) 
	};
};

};

function backOne(){
	search(questions);
			currentQuestion = currentQuestion - 1;
	
clap.pause();
clap.currentTime = 0;
container.style.visibility = 'visible';
    	info.style.display= "none";
    	container.style.display = "";
     	// clearInterval(r());
loadquestion(currentQuestion);
forwardOne();
}
