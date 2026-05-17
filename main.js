let t = 10;
let s = 0;
let expression = "";
let value = 0;
let timer;
const two = ["+", "-"];
const three = ["+", "-", "*"];
const answer = document.getElementById("answer");
const input = document.getElementById("input");
const score = document.getElementById("score");
const maths = document.getElementById("math");
const back = document.getElementById("back");
const entry = document.getElementById("entry");
const time = document.getElementById("time");
const losescore = document.getElementById("losescore");
if (entry){
    entry.addEventListener("click", function() {
        sessionStorage.setItem("RenderMaths", "true");
        sessionStorage.setItem("Score", 0);
        window.location.href = "maths.html";
    });
}
if (back){
    document.addEventListener("DOMContentLoaded", function() {
        s = sessionStorage.getItem("Score");
        losescore.innerText = "You scored " + s + (s == 1 ? " point." : " points.");
    });
    back.addEventListener("click", function() {
        window.location.href = "index.html";
    });
}
if (sessionStorage.getItem("RenderMaths") === "true") {
    sessionStorage.setItem("RenderMaths", "false");
    renderMaths();
}
if (answer){
    answer.addEventListener("submit", function() {
        event.preventDefault();
        let answer = parseInt(input.value);
        if (answer === value) {
            clearInterval(timer);
            s += 1;
            renderMaths();
            input.value = "";
        }
        else {
            sessionStorage.setItem("Score", s);
            window.location.href = "lose.html";
        }
    });
}
function startTimer() {
    timer = setInterval(() => {
        time.innerText = t;
        t--;
        if (t < 0) {
            sessionStorage.setItem("Score", s);
            window.location.href = "lose.html";
        }
    }, 1000);
}
function getRandomInt(a, b){
    return Math.floor(Math.random() * (b - a + 1)) + a;
}
function shuffleOperators(operators) {
  for (let i = operators.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [operators[i], operators[j]] = [operators[j], operators[i]];
  }
  return operators;
}
function levelOne(){
    let o = Math.random() < 0.5 ? "+" : "-";
    expression = getRandomInt(1, 20) + " " + o + " " + getRandomInt(1, 20);
    value = math.evaluate(expression);
    const node = math.parse(expression);
    const tex = node.toTex();
    maths.innerHTML = "\\(" + tex + " = ?\\)";
    MathJax.typeset([maths]);
    console.log(expression);
    t = 10;
    startTimer();
}
function levelTwo(){
    let o = shuffleOperators(two);
    expression = getRandomInt(10, 99) + " " + o[0] + " " + getRandomInt(10, 99) + " " + o[1] + " " + getRandomInt(10, 99);
    value = math.evaluate(expression);
    const node = math.parse(expression);
    const tex = node.toTex();
    maths.innerHTML = "\\(" + tex + " = ?\\)";
    MathJax.typeset([maths]);
    console.log(expression);
    t = 15;
    startTimer();
}
function levelThree(){
    let o = shuffleOperators(three);
    expression = getRandomInt(10,99);
    for (let i = 0; i < o.length; i++){
        if (o[i] === "*")
            expression += o[i] + getRandomInt(2, 9);
        else
            expression += o[i] + getRandomInt(10, 99);
    }
    value = math.evaluate(expression);
    const node = math.parse(expression);
    const tex = node.toTex();
    maths.innerHTML = "\\(" + tex + " = ?\\)";
    MathJax.typeset([maths]);
    console.log(expression);
    t = 20;
    startTimer();
}
function levelFour(){
    let o = shuffleOperators(three);
    expression = getRandomInt(10,99);
    for (let i = 0; i < o.length; i++){
        expression += o[i] + getRandomInt(10, 99);
    }
    value = math.evaluate(expression);
    const node = math.parse(expression);
    const tex = node.toTex();
    maths.innerHTML = "\\(" + tex + " = ?\\)";
    MathJax.typeset([maths]);
    console.log(expression);
    t = 30;
    startTimer();
}
function renderMaths(){
    score.innerHTML = "Score: " + s;
    switch (Math.floor(s/5)){
        case 0:
            levelOne();
            break;
        case 1:
            levelTwo();
            break;
        case 2:
            levelThree();
            break;
        case 3:
            levelFour();
            break;
        default:
            levelFour();
    }
}