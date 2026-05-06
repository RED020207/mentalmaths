let entry = document.getElementById("entry");
let time = document.getElementById("time");
let t = 10;
let s = 0;
let lost = false;
let expression = "";
const answer = document.getElementById("answer");
const input = document.getElementById("input");
const score = document.getElementById("score");
if (entry){
    entry.addEventListener("click", function() {
    window.location.href = "maths.html";
    });
}
if (answer){
    answer.addEventListener("submit", function() {
        event.preventDefault();
        console.log("Answer submitted: " + input.value);
        input.value = "";
        input.focus();
    });
}
function startTimer() {
    const timer = setInterval(() => {
        time.innerHTML = t;
        t--;
        if (t < 0) {
            t = 10;
            clearInterval(timer);
            startTimer();
        }
    }, 1000);
}
startTimer();
function renderMaths(){
    score.innerHTML = "Score: " + s;
    switch (Math.floor(s/5)){
        case 1:
            levelOne();
            break;
        case 2:
            levelTwo();
            break;
        case 3:
            levelThree();
            break;
        case 4:
            levelFour();
            break;
        default:
            levelFour();
    }
}
function levelOne(){
    
}