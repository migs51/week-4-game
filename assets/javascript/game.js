var score = 0;

var wins = 0;

var losses = 0;

var number = (Math.floor(Math.random()*101) +19);


$(document).ready(function(){

	
	$('#randomNumber').text(number);

	redRuby_number = (Math.floor(Math.random()*11) + 1);

	greenRuby_number = (Math.floor(Math.random()*11) + 1);

	yellowGem_number = (Math.floor(Math.random()*11) + 1);

	diamond_number = (Math.floor(Math.random()*11) + 1);



	$('#redRuby').click(function() {
		score += redRuby_number;
		$('#scoreNumber').text(score);
		 checkScore();

	});

	$('#greenRuby').click(function() {
		score += greenRuby_number;
		$('#scoreNumber').text(score);
		 checkScore();

	});

	$('#yellowGem').click(function() {
		score += yellowGem_number;
		$('#scoreNumber').text(score);
		 checkScore();

	});

	$('#diamond').click(function() {
		score += diamond_number;
		$('#scoreNumber').text(score);
		checkScore();

	});


	   function checkScore() {

        if(score == number) {
            wins++;
            $('#wins').html(wins);
            console.log('wins: '+ wins);
            score = 0;
            reset();
        }
        else if (score > number) {
            losses++;
            $('#losses').html("Losses:" + losses);
            console.log(losses);
            score = 0;
            reset();

        }


    }

      function reset() {
        number = (Math.floor(Math.random()*101) +19);
    }

	

	

});






