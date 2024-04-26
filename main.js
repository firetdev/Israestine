var support = 0;
var questions = [
    new Question("Do you believe that Israel is committing genocide?", -5),
    new Question("Do you believe that Israel should not exist?", -5),
    new Question("Do you believe that Hamas attacked Israeli civilians on Oct. 7?", 3),
    new Question("Was Hamas justified in doing so?", -5),
    new Question("Do the Jews have a right to the state of Israel?", 5),
    new Question("Is Israel's response justified?", 4),
    new Question("Do you believe Israel is targeting civilians?", -4),
    new Question("Do you think Hamas should be destroyed?", 3),
    new Question("Do you think Israel should return the Gaza strip to Palestine?", -3),
    new Question("Should Israel remain in the West Bank?", 4),
    new Question("Should Hamas govern Gaza?", -4),
    new Question("Should the US continue sending aid to Israel?", 4),
    new Question("Is Hamas a terrorist organization?", 3)];
var currentQuestion = 0;

function Question(text, score) {
    this.text = text;
    this.score = score;
}

function next() {
    if (currentQuestion + 1 < questions.length) {
        currentQuestion++;
        document.getElementById("ask").innerText = questions[currentQuestion].text;
    } else {
        document.getElementById("quiz").hidden = true;
        document.getElementById("results").hidden = false;
        document.getElementById("res").style.left = ((window.innerWidth / 2) + ((support / 2) * 8)) + "px";
        window.setTimeout("next()", 50);
    }
}

function answer(ans) {
    if (currentQuestion < questions.length) {
        if (ans == true) {
            support += questions[currentQuestion].score;
        } else if (ans == false) {
            support -= questions[currentQuestion].score;
        }
    }
    console.log(support);
    next();
}

function init() {
    document.getElementById("results").hidden = true;
    document.getElementById("ask").innerText = questions[currentQuestion].text;
}

window.setTimeout("init()", 1);
