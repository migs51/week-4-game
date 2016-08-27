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

	});

	$('#greenRuby').click(function() {
		score += greenRuby_number;
		$('#scoreNumber').text(score);

	});

	$('#yellowGem').click(function() {
		score += yellowGem_number;
		$('#scoreNumber').text(score);

	});

	$('#diamond').click(function() {
		score += diamond_number;
		$('#scoreNumber').text(score);

	});

	if(score == number) {
		wins++;
		$('#wins').text(wins);
	}
	else(score > number) {
		losses++;
		$('#losses').text(wins);
		console.log(losses);
	}
	

	

});






