
function check(){
    var correct = 0;
    var question1 = document.form_quiz.question1.value;
    var question2 = document.form_quiz.question2.value;
    var question3 = document.form_quiz.question3.value;

    var messages = ["Great job!", "That's just okay!", "Come on, you can do betetr!"];
    var pictures = ["img/success.gif", "img/just-ok-nod.gif", "img/oh-nooo-facepalm-baby.gif"]

    if (question1 == "Kathmandu"){
        correct++;
    }
    if (question2 == "Nepal"){
        correct++;
    }
    if (question3 == "Nepal"){
        correct++;
    }

    var range;
    if (correct < 1){
        range = 2;
    }
    if (correct > 0 && correct < 3){
        range = 1;
    }
    if (correct > 2){
        range = 0;
    }

    document.getElementById("after_submit").style.visibility = "visible";
    document.getElementById("message").innerHTML = messages[range];
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
    document.getElementById("picture").src = pictures[range];
}
