const message = "Bienvenido al ATM";
console.log (message)

const screen = document.querySelector(".atm-system__screen")

screen.innerText = message

// screen.innerHTML ="<h1> Bienvenidos </h1>"

const inputCard = document.querySelector (".atm-system__card")
inputCard.addEventListener('click', function () {
    alert('insertó tarjeta');
});