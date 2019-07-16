var button = document.getElementById("button");

var rainbow = ["red", "orange", "yellow", "green", "blue",
    "indigo", "violet"
];

function change() {
    document.body.style.background = rainbow[Math.floor(7 * Math.random())];
}
button.addEventListener("click", change);

//To Do:
//1.) When User clicks "Send Honey!" Button:
    //*Add 100 "Pollen" to "Total Pollen" count
    //*Display "Thank You!" Page