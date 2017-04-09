var correct = 0;
var incorrect = 0;
var unanswered = 0;
var number = 10;
var intervalId;

$(".game").hide();
$(".result").hide();

$(".startNowButton").on("click", showTheGame);
$(".submitAnswersButton").on("click", showResult);


function run() {
      intervalId = setInterval(decrement, 1000);
    }

    //  The decrement function.
    function decrement() {

      //  Decrease number by one.
      number--;

      //  Show the number in the #time tag.
      $("#time").text(number);


      //  Once number hits zero...
      if (number === 0) {
      	// alert("Erik said do this")
        //  ...run the showResult function.
        stop();
      }
    }

    //  The stop function
    function stop() {

      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
      // showResult();
    }

    //showTheGame function shows the game section and hides the startNowButton.
function showTheGame () {
	$(".game").show();
	$(".startNowButton").hide();
	$(".result").hide();
	run();
}

function showResult () {
	$(".game").hide();
	$(".result").show();
	checkAnswers();
	
}

if ((stop()) || ($(".submitAnswersButton").on("click", stop))) {
	showResult();
}

//Create a function that logs the correct, incorrect and unanswered questions.
function checkAnswers(){
	function question1 (){
	    if (name == "q1" && id == "HTML"){
    	correct++;
	    }
	    else if (name =="q1" && id !=="HTML"){
	    	incorrect++;
	    }
	    else {
	    	unanswered++;
	    }
	    // console.log(question1);
	}

	function question2 (){
	    if (name == "q2" && id == "CSS"){
    	correct++;
	    }
	    else if (name =="q2" && id !=="CSS"){
	    	incorrect++;
	    }
	    else {
	    	unanswered++;
	    }
	    // console.log(question2);
	}

	function question3 (){
	    if (name == "q3" && id == "CSS"){
    	correct++;
	    }
	    else if (name =="q3" && id !=="CSS"){
	    	incorrect++;
	    }
	    else {
	    	unanswered++;
	    }
	    // console.log(question3);
	}
	//call the above question functions.
	question1();
	question2();
	question3();
}
