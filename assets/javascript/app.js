var correct = 0;
var incorrect = 0;
var unanswered = 0;
var number = 20;
var intervalId;
function showScore (){
	$("#correct").text(correct);
	$("#incorrect").text(incorrect);
	$("#unanswered").text(unanswered);
}

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
	showScore();

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
      	// alert("Erik said do this")
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

// $('input[name=name_of_your_radiobutton]:checked').val();
$('input[name="q1"]:checked').val();

// if($('input[name="q1"]:checked').val() == "HTML")
//Create a function that logs the correct, incorrect and unanswered questions.
function checkAnswers(){
	
	function question1 (){
	    if ($('input[name="q1"]:checked').val() == "HTML"){
    	correct++;
	    }
	    else if ($('input[name="q1"]:checked').val()== undefined){
	    	unanswered++;
	    }
	    else {
	    	incorrect++;
	    }
	    // console.log(question1);
	}

	function question2 (){
	    if ($('input[name="q2"]:checked').val() == "CSS"){
    	correct++;
	    }
	    else if ($('input[name="q2"]:checked').val()== undefined){
	    	unanswered++;
	    }
	    else {
	    	incorrect++;
	    }
	    // console.log(question2);
	}

	function question3 (){
	    if ($('input[name="q3"]:checked').val() == "Javascript"){
    	correct++;
	    }
	    else if ($('input[name="q3"]:checked').val()== undefined){
	    	unanswered++;
	    }
	    else {
	    	incorrect++;
	    }
	    // console.log(question3);
	}
	//call the above question functions.
	// console.log(typeof(correct));
	// console.log(typeof(incorrect));
	// console.log(typeof(unanswered));
	// console.log($('input[name="q1"]:checked').val());
	// console.log($('input[name="q2"]:checked').val());
	// console.log($('input[name="q3"]:checked'));
	// console.log("not showResult");
	question1();
	question2();
	question3();
	console.log("Correct answers: " + correct);
	console.log("Incorrect answers: "+ incorrect);
	console.log("Unanswered answers: " + unanswered);
	$("#correct").text(correct);
	$("#incorrect").text(incorrect);
	$("#unanswered").text(unanswered);
    

}

	// console.log(typeof(correct));
	// console.log(typeof(incorrect));
	// console.log(typeof(unanswered));
	console.log("Correct answers: " + correct);
	console.log("Inorrect answers: " + incorrect);
	console.log("Unanswered answers: " + unanswered);
    
    


