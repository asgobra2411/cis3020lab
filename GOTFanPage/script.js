function getResult() {

    let answers = document.querySelectorAll("input[type=radio]:checked");

    if (answers.length < 3) {
        document.getElementById("result").textContent =
        "Please answer all questions.";
        return;
    }

    let score = {
        stark: 0,
        lannister: 0,
        targaryen: 0,
        baratheon: 0
    };

    answers.forEach(function(answer){
        score[answer.value]++;
    });

    let house = Object.keys(score).reduce((a, b) => score[a] > score[b] ? a : b);

    let text = "";

    if (house === "stark") {
        text = "You belong to House Stark: loyal and honorable.";
    } 
    else if (house === "lannister") {
        text = "You belong to House Lannister: strategic and powerful.";
    } 
    else if (house === "targaryen") {
        text = "You belong to House Targaryen: bold and destined for greatness.";
    } 
    else {
        text = "You belong to House Baratheon: strong and fearless.";
    }

    document.getElementById("result").textContent = text;
}