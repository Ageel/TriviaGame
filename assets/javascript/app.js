var correct = 0;
var incorrect = 0;
var unanswered = 0;
var number = 30;
var intervalId;
$(".game").hide();
$(".result").hide();


$(".startNowButton").on("click", showTheGame);

$(".submitAnswersButton").on("click", showResult);

function showTheGame () {
	$(".game").show();
	$(".startNowButton").hide();
	run();
}

function showResult () {
	$(".game").hide();
	$(".result").show();
	alert("Another of Erik's instruction");
}



    // var intervalId;

    $(".submitAnswersButton").on("click", stop);

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

    // if (name == "q1" && value == "HTML"){
    // 	correct++;
    // }
    // else if (name !=="q1" && value !=="HTML"){
    // 	incorrect++;
    // }
    // else {
    // 	unanswered++;
    // }



    


