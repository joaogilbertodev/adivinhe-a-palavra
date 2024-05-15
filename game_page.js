var player1 = localStorage.getItem("name1")
var player2 = localStorage.getItem("name2")
var score1 = 0
var score2 = 0

document.getElementById("player1").innerHTML = player1 + ":"
document.getElementById("player2").innerHTML = player2 + ":"
document.getElementById("score1").innerHTML = score1
document.getElementById("score2").innerHTML = score2

document.getElementById("pergunta").innerHTML = "Turno de pergunta-" + player1
document.getElementById("resposta").innerHTML = "Turno de resposta-" + player2

function send() {
    getword = document.getElementById("palavra").value
    word = getword.toLowerCase()
    charAt1 = word.charAt(1)
    lengthDivide1 = Math.floor(word.length / 2)
    charAt2 = word.charAt(lengthDivide1)

    lengthMenos1 = word.length - 1
    charAt3 = word.charAt(lengthMenos1)

    removeCharAt1 = word.replace(charAt1, "_")
    removeCharAt2 = removeCharAt1.replace(charAt2, "_")
    removeCharAt3 = removeCharAt2.replace(charAt3, "_")

    questionWord = "<h4 id='wordDisplay'>P." + removeCharAt3 + "</h4>"
    input_box = "<br>Resposta:<input type='text' id='inputCheckBox'/>"
    button = "<br><br><button class='btn btn-info' onclick='check()'>verificar</button>"
    row = questionWord + input_box + button
    document.getElementById("output").innerHTML = row
    document.getElementById("palavra").value = ""
}
questionTurn = "player1";
answerTurn = "player2"
function check() {
    getAnswer = document.getElementById("inputCheckBox").value
    answer = getAnswer.toLowerCase()
    if (answer == word) {
        if (answerTurn == "player1") {
            score1 = score1 + 1;
            document.getElementById("score1").innerHTML = score1
        } else if(answerTurn=="player2") {
            score2 = score2 + 1;
            document.getElementById("score2").innerHTML = score2
        }


        if (questionTurn == "player1") {
            questionTurn = "player2"
            document.getElementById("pergunta").innerHTML = "Turno de pergunta-" + player2
        } else {
            questionTurn = "player1"
            document.getElementById("pergunta").innerHTML = "Turno de pergunta-" + player1
        }
        if (answerTurn == "player1") {
            answerTurn = "player2"
            document.getElementById("resposta").innerHTML = "Turno de resposta-" + player2
        } else {
            questionTurn = "player1"
            document.getElementById("resposta").innerHTML = "Turno de resposta-" + player1
        }
    } else {
        alert("resposta errada e seu turno possou")
    }
    document.getElementById("output").innerHTML = ""
}