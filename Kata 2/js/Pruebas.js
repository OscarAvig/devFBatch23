//Ciclo While

// let index = 0;
// while (index <=8){
//     index ++   
// }

// console.log('Me ejecuto ultimo')

//

// let index = 0

// while (index <= 100) {
//   if(index == 50){
//     console.log('felicidades eres el ganador');
//   }
//   else{
//     console.log(index);
//   }
//   index++
// }

//ciclo Do while

var contador =0;
do {
    contador ++;
    console.log ('conteo:' + contador);
} while (contador < 10);




// Ciclo for

for(let index = 0; index <=10; index++){
    console.log ('El valor de index es', index)

}

// 😄🌵🍤💀

const myArr = ['😄', '🌵', '🍤', '💀', '👹']

for(let index = 0; index < myArr.length; index++){
  console.log('el valor de index es', index);
  console.log(myArr[index]);
}

// Crear un algoritmo qu haga un conteo de 0 a 100
// Este algoritmo debe tener validaciones que determienn que cuando el numero sea divisible dentro de 3 escriba la palabra 'Fizz'
// Cuando el numero sea divisible dentro de 5 escriba la palabra "buzz"
// Cualdo el numero sea divisible dentro de 3 y de 5 escriba la palabra 'Fizzbuzz'

// for(let index = 0; index <=100; index++){
//     if(index = %3){
//         console.log ('Fizz');
//     }
//     if (index = % 5){
//         console.log ('Buzz');
//     }
//     if (index = %3, %5){
//         console.log ('FizzBuzz');
//     }
//     console.log ('El valor de index es', index)

// }

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