import '../scss/main.scss';


const firstName = "Gabriela";
const age = 22;
console.log(firstName);
console.log(age);
console.log(`Heja, nazywam się ${firstName} i mam ${age} lata`);

alert("Witam w moim pierwszym projekcie WTF");

// const heading = document.querySelector('.main-heading--js');
// console.log(heading);

const element = document.querySelector('.extra-element--js');
element.innerHTML =`Inna wartość`;
// console.log(element);

function calculate(myNumber){
    myNumber=myNumber*7;
    return myNumber;
    // console.log(`Dostałam ${myNumber}`);
    // return myNumber*7;
}
const myResult= calculate(age);
console.log(myResult);

function greet(age, firstName){
    console.log(`Heja, nazywam się ${firstName} i mam ${age} lata a to jest drugie powitanie z użyciem funkcji calculate`);
}
greet(22, 'Gabriela');

const start="Front-end";
const choice=2;
function paragraph(start,choice){
    console.log(`${start} był moim ${choice} wyborem po architekturze`)
}
paragraph("Front-end",2);

function createContent(querySelectorContent, content){
    const element = document.querySelector(querySelectorContent);
    element.innerHTML =  content;
}
createContent('.extra-element--js', 'Kolejny tekst z js')
// createContent('.extra-paragraph--js','Pragraf stworzony w js');

function extraParagraph(querySelectorParagraph, content){
    const element = document.querySelector(querySelectorParagraph);
    element.innerHTML =  content;
}
extraParagraph('.extra-paragraph--js','Pragraf stworzony w js');

const book = {
    name:'Heartland',
    pages: 132,
}
// console.log(book.name)
// console.log(book['name'])

const MyProperty='pages'
console.log('Przeczytałam',(book.name),',która zawiera', (book[MyProperty]), 'strony');

const humanOne={
    name:'Maciek',
    age:32,
    adress:{
        street:'Lipowa',
        city: 'Białystock',
    }
}
const humanTwo ={
    name:'Stefan',
    age: humanOne.age,
    adress: humanOne.adress.street,
} 

console.log(humanTwo);
 console.log(humanOne);

 humanOne.age = 35;
 console.log(humanTwo);
 console.log(humanOne);

 if(2 !=='2'){
     console.log('Java to nie JavaScript');
 }

 if(humanOne.age>humanTwo.age){
     console.log('HumanOne jest starszy');
 }
 if(humanOne.age<humanTwo.age){
    console.log('HumanTwo jest starszy');
}

if((humanOne.age!==35) && humanTwo.age===32){
    console.log('To się wykona');
   }   else if(humanOne.age>humanTwo.age) {
        console.log('To się wykonało przy użyciu else if');
    }

if((humanOne.age===35) || humanTwo.pet){
    console.log('i się wykonało');
}

const myNumber=6

switch (myNumber){
    case 7:
    console.log('hi 7');
    break;
    case 9:
        console.log('hi 9');
    break;
    default:
        console.log('hi another number');  
}


const button=document.querySelector('.action--js');
console.log(button)

const myClick = () => {
    const heading = document.querySelector('.main-heading--js');
    // heading.innerHTML="Witam ponownie";
    // console.log(heading);
   
}

// button.addEventListener('click', myClick);


button.addEventListener('click', (e) =>{
    const heading = document.querySelector('.main-heading--js');
    console.log(e);
    heading.innerHTML="Witam ponownie";
    console.log(heading.classList.contains('main-heading--js'));
    // heading.classList.toggle('klasa-z-js');
});

const hamburger = document.querySelector('.hamburger--js');

hamburger.addEventListener('click', ()=> {
    const nav= document.querySelector('.navigation--js');
    nav.classList.toggle('navigation--open');
});



// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('HELLO 🚀')
console.log(JSON.stringify({name:"gabi"}));
document.cookie='name = gabi';

// localStorage.setItem('human', 'gabi');

console.log(localStorage.getItem('human'));
// const myNewObject = JSON.parse(myResult);
// myNewObject.newProperty ='hi';
// console.log(myNewObject);
// const myResult = localStorage.getItem('nowyKlucz');

// localStorage.setItem('nowyKlucz', JSON.stringify({name:"gabi"}));

// console.log(JSON.parse(myResult));