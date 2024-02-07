let number1 = Math.floor(Math.random() * 6) +1;
let DicePhoto1 = 'dice' + number1 + '.png';
let photoSource1 = 'photos/' + DicePhoto1 ;
let photo1 = document.getElementById('img1');
photo1.setAttribute('src' , photoSource1);


let number2 = Math.floor(Math.random() * 6) +1;
let DicePhoto2 = 'dice' + number2 + '.png';
let photoSource2 = 'photos/' + DicePhoto2 ;
let photo2 = document.getElementById('img2');
photo2.setAttribute('src' , photoSource2);


if(number1 > number2){
    document.querySelector('h1').innerHTML = '🎉player 1 is winer!'
}
else if (number2 > number1){
    document.querySelector('h1').innerHTML = 'player 2 is winer!🎉'
}
else{
    document.querySelector('h1').innerHTML = 'Draw!'
}
