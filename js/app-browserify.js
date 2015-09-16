
var btn = document.querySelector('.guess-button')

hidden_number=  Math.floor(Math.random()*100+1)

btn.addEventListener("click", function(evt){
  var userInput = document.querySelector('input').value
  console.log(parse_int(userInput))
})





