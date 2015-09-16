var max_num = 100

var super_secret_number =  Math.floor(Math.random()*max_num+1);

var guess_counter = 0;

var guess_history = []

var response = {
	match: "Yeeyyyy! You guessed the number!!",
	hotter: "Getting Warmer",
	colder: "Getting Colder",
	duplicate_guess: "You've already guessed that!",
	too_big: "Please enter a number less than max number: ",
	invalid_number: "Please input a number",
	first_stab: "First Guess Wrong....Unlucky"
}

var previous_difference = 0

var btn = document.querySelector('.guess-button');

btn.addEventListener("click", function(evt) {
  
  // Current User Guess
  var user_guess = document.querySelector('input').value;
  var user_guess_number = parseInt(user_guess)

  var output_box = document.querySelector('.output')

  if ( isNaN(user_guess_number) ) { 
  	output_box.innerHTML = response['invalid_number']
  	return null
  }

  if ( user_guess_number > max_num){
  	output_box.innerHTML = response['too_big']
  	return null
  }

  if ( guess_history.indexOf(user_guess_number) > -1 ) {
  	output_box.innerHTML = response['duplicate_guess']
  	return null
  }

  

  //-----------------------------
  // DATA MANIPULATION
  //-----------------------------

  // Guess Counter
  ++guess_counter
  var guess_count_el = document.querySelector('.guess-count')
  guess_count_el.innerHTML = guess_counter
  
  // Maintain Guess History 
  guess_history.push(user_guess_number)

  // Determine Current Difference
  var current_difference =  Math.abs(super_secret_number - user_guess_number)



  var output_msg = ""
  //Evaluate Hot/Cold
  if(super_secret_number === user_guess_number){
    output_msg = response['match']

  } else if (previous_difference === 0) {

    output_msg = response['first_stab']

  } else if (current_difference < previous_difference){

    output_msg = response['hotter']

  } else {

    output_msg = response['colder']
  }

  //Measure Current Difference

  //-----------------------------
  // HTML OUTPUT
  //-----------------------------
  
  //1) Feedback Output
  //---------------------------
  output_box.innerHTML = output_msg


  //2) 
  var li_element = document.createElement("li");
  var txt_node = document.createTextNode(user_guess);
  li_element.appendChild(txt_node);

  var ul_element = document.querySelector('ul')
  ul_element.appendChild(li_element)



  console.log('GuessCounter')
  console.log(guess_counter)
  console.log(guess_count_el)
  console.log('\nGuessHistory')
  console.log(guess_history)
  console.log('\nHiddenNumber')
  console.log(super_secret_number)
  console.log('\nOutput Msg')
  console.log(output_msg)
  console.log('==============\n==============')

  previous_difference = current_difference
});




