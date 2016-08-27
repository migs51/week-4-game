$(document).ready(function(){
	number = (Math.floor(Math.random()*101) +19);
	$('#randomNumber').text(number);

	redRuby_number = (Math.floor(Math.random()*11) + 1);

	greenRuby_number = (Math.floor(Math.random()*11) + 1);

	yellowGem_number = (Math.floor(Math.random()*11) + 1);

	diamond_number = (Math.floor(Math.random()*11) + 1);

	score = 0;


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
	

	

});
