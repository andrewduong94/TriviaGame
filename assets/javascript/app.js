//Game Setup
var display = $('#setup');
var startcounter = 30

//Event listeners

$(document).on("click", '.answer-button', function(event){
 check(event)
});

$(document).on("click", '#start', function(){
  $('#subwrapper').prepend('<h2>Time remaining: <span id ="currentTime">30</span> seconds</h2>' + "<br>");
  loadquestion();
})

$(document).on("click", '#reset', function(){
  reset();
})

//List of Questions 

var questions = [{
  question: "Which team beat the Golden State Warriors in the 2016 NBA Finals?",
  answers: ["Boston Celtics", "Toronto Raptors", "Cleveland Cavaliers", "Philadelphia 76ers"],
  correctAnswer: "Cleveland Cavaliers",
  image:"assets/images/LebronJames.gif"
}, {
  question : "How many divisions does the NFL consist of?",
  answers : ["Eight", "Ten", "Four", "Six"],
  correctAnswer : "Eight",
  image :"assets/images/NFL.gif"
}, {
  question : "Which team won the most World Series?",
  answers : ["Boston Red Sox", "New York Yankees", "Los Angeles Dodgers", "Chicago White Sox"],
  correctAnswer : "New York Yankees",
  image :"assets/images/Yankees.gif"
}, {
  question : "Who was the shortest player to play in the NBA?",
  answers : ["Tyrone Bogues", "Earl Boykins", "Nate Robinson", "Yao Ming"],
  correctAnswer : "Tyrone Bogues",
  image :"assets/images/NateRobinson.gif"
}, {
  question : "How many holes are there in a full round of golf?",
  answers : [16, 21, 12, 18],
  correctAnswer : 18,
  image :"assets/images/Golf.gif"
}, {
  question : "Who is the only athlete ever to play in a Super Bowl and a World Series?",
  answers : ["Jerry Rice", "Deion Sanders", "Bo Jackson", "Michael Jordan"],
  correctAnswer : "Deion Sanders",
  image :"assets/images/DeionSanders.gif"
}, {
  question : "How many soccer players should be on the field at the same time?",
  answers : [22, 20, 24, 26],
  correctAnswer : 22,
  image :"assets/images/Soccer.gif"
}, {
  question : "What NFL Quarterback has been in the most Super Bowls?",
  answers : ["Brett Favre", "Peyton Manning", "Dan Marino", "Tom Brady"],
  correctAnswer : "Tom Brady",
  image :"assets/images/TomBrady.gif"
}];

questionnum = 0
correctCount = 0
incorrectCount = 0
timer = startcounter


function loadquestion(){

  time = setInterval(countdown, 1000);
  display.html ("<h1>"+questions[this.questionnum].question+"</h1>" + "<br>")
  display.append('<h2>' + 'Correct:' + correctCount + '</h2>') 
  display.append('<h2>' + 'Wrong:' + incorrectCount + '</h2>' + "<br>")
  for (var i = 0; i<questions[this.questionnum].answers.length; i++){
    display.append('<button class="answer-button" id="button"' + 'data-name="' + questions[this.questionnum].answers[i] + '">' + questions[this.questionnum].answers[i]+ '</button>' + "<br>");
}
}

function nextQuestion(){
  timer = startcounter
  $('#currentTime').html(timer)
  questionnum++;
  loadquestion();
}


function check(a){
  clearInterval(time)
  var correctChoice = questions[this.questionnum].correctAnswer
  var choice = $(event.target).data('name')

  if (choice === correctChoice){
    correctAnswer()
  }
  else {
    wrongAnswer()
  }
  console.log(questionnum)
 }


function wrongAnswer() {
  incorrectCount++
  display.html('<h1>' + "WRONG!" + '</h1>')
  display.append('<img src=' + "assets/images/Fail.gif" + ' />');
  if (questionnum == 7){
    setTimeout(results, 3000)
  }
  else {
    setTimeout(nextQuestion, 3000)
  }
}

function correctAnswer() {
  correctCount++
  display.html('<h1>' + "Correct!" + '</h1>')
  display.append('<img src="' + questions[questionnum].image + '" />');
  console.log(questions[questionnum].image)
  if (questionnum == 7){
    setTimeout(results, 3000)
  }
  else {
    setTimeout(nextQuestion, 3000)
  }
}

function results(){
  display.html("");
  display.append('<h2>' + 'Correct:' + correctCount + '</h2>') 
  display.append('<h2>' + 'Wrong:' + incorrectCount + '</h2>' + "<br>")
  display.append('<button id = "reset" >' + 'Try Again' + '</button>')
}


function reset(){
  questionnum = 0;
  correctCount = 0;
  incorrectCount = 0;

  loadquestion();
}

function countdown(){
  timer--
$('#currentTime').html(timer);

if (timer === 0){
  timeUp()
  }

}

function timeUp(){
  alert("Times Up!")
  display.append('<img src=' + "assets/images/Fail.gif" + ' />');
  clearInterval(time)
  incorrectCount++
  $('#currentTime').html(timer)
  if (questionnum ===7){
    setTimeout(results, 2000)
  }
  else {
    setTimeout(nextQuestion, 2000)
  }
}


  


