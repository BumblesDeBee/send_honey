var init = 5000;
var countdown = 1 / fps;
var losingpollen = init - countdown;
var beforehoney = init - losingpollen;
var sendhoney = 100;
var currentpollen = beforehoney + sendhoney;
var displaycp = "The current pollen level is: " + currentpollen;

function currentpollen(beforehoney, sendhoney) {
    return beforehoney + sendhoney;
}

var button = document.getElementById("button");

button.addEventListener("click", sendhoney);