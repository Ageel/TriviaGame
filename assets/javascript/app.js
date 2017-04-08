var correct = 0;
var incorrect = 0;
var unanswered = 0;
var number = 30;
var intervalId;
$(".game").hide();
$(".result").hide();


$(".centering").on("click", showTheGame);

$(".done").on("click", showResult);

function showTheGame () {
	$(".game").show();
	$(".centering").hide();
	run();
}

function showResult () {
	$(".game").hide();
	$(".result").show();
}



    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;

    //  When the stop button gets clicked, run the stop function.
    $(".done").on("click", stop);

    //  When the resume button gets clicked, execute the run function.
    // $("#resume").on("click", run);

    //  The run function sets an interval
    //  that runs the decrement function once a second.
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

        //  ...run the stop function.
        showResult();

        //  Alert the user that time is up.
        // alert("Time Up!");
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

    

    


