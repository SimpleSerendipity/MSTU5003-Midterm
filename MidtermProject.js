var answer;

var el = document.getElementById("buttonA").addEventListener("click", function() {
    answer = prompt("Please enter your answer");
		learnerAnswer('A');
});

var el = document.getElementById("buttonB").addEventListener("click", function() {
    answer = prompt("Please enter your answer");
		learnerAnswer('B');
});

function learnerAnswer(questionId) {

	if (questionId === "A") {
		if (answer === "left") {
        alert("Good job.");
    } else {
        alert("Sorry, you have entered the wrong answer. Please try again");
    }
	} else {
		if (answer === "right") {
        alert("Good job.");
    } else {
        alert("Sorry, you have entered the wrong answer. Please try again");
    }
	}

};
