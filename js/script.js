// Copyright 2022 Rory Mackay All rights reserved
//
// Created by: Rory Mackay
// Created on: April 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * This function displays if the user correctly guesses a random number
 */
function displayMessage () {
  const MIN = 1;
	
	// get user input
	let userGuess = parseInt(document.getElementById('user-guess').value)

  	// if temp is below 15, display "Its chilly outside! You should stay in and play VR."
	if (userGuess < 15) {
		document.getElementById("message").innerHTML = "Its chilly outside! You should stay in and play VR."
	} 
	// otherwise display "Its nice out! Play some football on the field"	
	else {
		document.getElementById("message").innerHTML = "Its nice out! Play some football on the field."
	}
} 