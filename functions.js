//var a = document.getElementById('intro');
//var a = document.getElementsByTagName('h1');
//a.style.color = "black";
//var element = document.querySelector('p');
//console.log(element);

// const newP = document.createElement('p');
// const newContent = document.createTextNode('HI.......');
// newP.appendChild(newContent);
// const specialDiv = document.getElementById('some-special-div');
// document.body.insertBefore(newP, newContent); 

// var button = document.getElementById("myBtn");
// button.addEventListener("click ", function (event) {
//    alert("Hi!");
// });

// var link = document.getElementById('myLink');
// link.addEventListener("click ", function (event) {
// event.preventDefault();
// alert('Hellloooo');
// });


// document.getElementById('demo').onclick = function changeContent() {

//     document.getElementById('demo').textContent = "Help me";
//     document.getElementById('demo').style = "Color: red";
 
//  }
 

// var pageBody = document.getElementsByTagName('body')[0];
// // create our image tag with attributes
// var newImg = document.createElement('img');
// newImg.src = 'http://placekitten.com/g/500/200';
// newImg.style.border = '1px solid black';
// // add our image to the body
// pageBody.appendChild(newImg);
// // create a paragraph tag with content
// var newParagraph  = document.createElement('p');
// var paragraphText = document.createTextNode('Squee!');
// newParagraph.appendChild(paragraphText);
// // add our new paragraph to the body
// pageBody.appendChild(newParagraph)



function getInputValue() {
    var firstName = document.getElementById("firstName").value;
    console.log(firstName);
    var radios = document.getElementsByName('married');
    var radiosLength = radios.length;
    for (var i = 0; i < radiosLength; i++) {
        if (radios[i].checked) {
        var radioButtonValue = radios[i].value;
        // only one radio can be checked, so stop now
        console.log(radioButtonValue);
        break;
        }
    }
}

function getInfo(){
    var name = document.getElementById('name').value;
    console.log(name);
    document.write(name);
}

//Javascript Challenges

function percentageCalculator(number, percentage){
    let percent = number * percentage / 100;
    return percent;

}

//console.log(percentageCalculator(20, 30));

function drinkOrder(drink, size){
    switch(drink){
        case 'cola':
        console.log('Thanks for ordering a ' + drink + '.');
        break;
        case 'lemonade':
            console.log('Thanks for ordering a ' + drink + '.');
            break;
        case 'orange':
            console.log('Thanks for ordering a ' + drink + '.');
            break;

    }

}
//drinkOrder('lemonade' ,'small');

//Calculator
function calculator(number1, number2, operator){
   // console.log (typeof number1);
    let message = '';
    switch(operator){
        case '+':{
            message = number1 + number2;
            break;
        }
        case '-':{
            message = number1 - number2;
            break;
        }case '*':{
            message = number1 * number2;
            break;
        }
        case '/':{
            message = number1 / number2;
            break;
        }
        default:
            console.log('Not valid');
    }
   // console.log(message);


}
calculator(10, 100, '+');

//Calculator to calculate age
function calculateAge(curentYear, birthYear){
// let curentYear = '';
// let birthYear = '';
var yourAge = curentYear - birthYear;
//console.log('Your are either ' +  (yourAge -1) + ' ' + 'or' + ' ' + yourAge + '.');
}

calculateAge(2021, 1996);

//Fortune Teller
var numberOfChildren = 2;
var partnerName = 'Ahmad';
var geographicLocation = 'Paris';
var jobTitle = 'Developer';
var future = 'You wil be a ' + jobTitle + ',' + ' married to ' + partnerName + ' in ' + geographicLocation + ' with ' + numberOfChildren + '.' 
//console.log(future);

//Temperature Convertor
 var celcius = 30;
 var celciusInF = (celcius / 5) * 9 + 32 ; 
 //console.log(celcius + 'C is ' + celciusInF + 'F'); //Celcius to Fahrenheit

 //var fahrenheit = 86; intead of using one value we are using math.random to generate random numbers
 var fahrenheit = Math.floor(Math.random() * 101);     // returns a random integer from 0 to 100
 var fahrenheitInC = (fahrenheit - 32) * 5 / 9;
 //console.log('It is ' + fahrenheit + 'F today. That is ' + fahrenheitInC + 'C'); //Fahrenheit to Celcius

//FUnctions and Control Flow
//compare two numbers
function compare(n1, n2){
    var checkNum1 = typeof n1;
    var checkNum2 = typeof n2;
    console.log('type of numbers:',checkNum1,checkNum2);
   var largestNum = Math.max(n1,n2);
   if(n1 === n2){
       console.log('Error: numbers are equal');
   }else if(checkNum1 != 'number' || checkNum2 != 'number'){
       console.log('Error: n1 or n2 is not a number');
   } 
   else{
    console.log('comparing two numbers:',largestNum);
   }
}
compare(0,0);

//The Calculator
function squareNumber(n){
    var result = n * n;
    console.log('The result of squaring the number ' + n + ' is ' + result);
    return result;
}
squareNumber(10);

function halfNumber(n){
    var resultHalfNum = n / 2;
    console.log('Half of ' + n + ' is ' +resultHalfNum);
    return resultHalfNum;
}
halfNumber(6);

function percentOf(n1, n2){
    var resultPercent = (n1/n2) * 100;
    console.log(n1 + ' is ' + resultPercent + '% of ' + n2);
    return resultPercent;
}
percentOf(2,4);

function areaOfCircle(radius){
    var resultRadius = radius * radius;
    var resultAreaOfCircle = (22/7) * resultRadius;
    
    console.log('The area for a circle with radius '+ radius + ' is '+ resultAreaOfCircle.toFixed(2));
}
areaOfCircle(2);

function combineAll(n){
     var r = halfNumber(n);
     var r2 = squareNumber(r);
     var r3 = areaOfCircle(r2);
}
combineAll(10);





