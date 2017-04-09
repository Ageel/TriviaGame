var correct = 0;
var incorrect = 0;
var unanswered = 0;
var number = 30;
var intervalId;

$(".game").hide();
$(".result").hide();


$(".startNowButton").on("click", showTheGame);
$(".submitAnswersButton").on("click", showResult);

//showTheGame function shows the game section and hides the startNowButton.
function showTheGame () {
	$(".game").show();
	$(".startNowButton").hide();
	run();
}
//showResult function: hides the game section and shows the result section.
function showResult () {
	$(".game").hide();
	$(".result").show();
	// alert("Another of Erik's instruction");
	// question1();
	// question2();
	// question3();
}

    $(".submitAnswersButton").on("click", stop);
    $(".submitAnswersButton").on("click", checkAnswers);

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
      	alert("Erik said do this")
        //  ...run the showResult function.
        showResult();
      }
    }

    //  The stop function
    function stop() {

      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
      showResult();
    }

function checkAnswers(){
	function question1 (){
	    if (name == "q1" && value == "HTML"){
    	correct++;
	    }
	    else if (name =="q1" && value !=="HTML"){
	    	incorrect++;
	    }
	    else {
	    	unanswered++;
	    }
	    // console.log(question1);
	}

	function question2 (){
	    if (name == "q2" && value == "CSS"){
    	correct++;
	    }
	    else if (name =="q2" && value !=="CSS"){
	    	incorrect++;
	    }
	    else {
	    	unanswered++;
	    }
	    // console.log(question2);
	}

	function question3 (){
	    if (name == "q3" && value == "CSS"){
    	correct++;
	    }
	    else if (name =="q3" && value !=="CSS"){
	    	incorrect++;
	    }
	    else {
	    	unanswered++;
	    }
	    // console.log(question3);
	}

}


console.log(correct);
console.log(incorrect);
console.log(unanswered);
    


