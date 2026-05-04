let entry = document.getElementById("entry");
let time = document.getElementById("time");
let t = 10;
const answer = document.getElementById("answer");
const input = document.getElementById("input");
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
    }
    );
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