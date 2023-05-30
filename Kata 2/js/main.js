for(let index = 1; index <=100; index++){

    if (index % 3=== 0 && index %5 === 0){
        console.log (index,'FIZBuzz');
    }
    else if(index %3 === 0){
        console.log (index,'Fizz');
    }
    else if (index %5=== 0){
        console.log (index,'Buzz');
    }
   
    else{
        console.log ( index)
    }
}

//

const screen = document.querySelector(".atm-system__screen");
const inputCard = document.querySelector (".atm-system__card");



//const keys = document.querySelector (".atm-system__keys");

//keys[0].addEventListener("clic", (event) => console.log (event.target.id));

const keys = document.querySelector('.atm-system__input-keys');



keys.addEventListener('click', (event)=> {
    if(event.target.id) {
        console.log(event.target.id);
    
    
} else {
        console.log("Tecla sin id");
    }
})

inputCard.addEventListener ("click", function() {
    screen.innerText = "Validando tarjeta..."
    setTimeout( ()=> {
        screen.innerText = "Ingrese su pin"    
    }, 2000)
});


window.addEventListener ('load', () => {
    screen.innerText = "Bienvenidos al ATM";
});