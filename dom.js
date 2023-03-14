console.log('dom.js');

console.log(window);

// window object
window.alert('THESE'); // window is the top level
alert('ARE THE WORST'); // alert part of window object
// localStorage stores in the browser
//innerheight, innerwidth
// fetch to make http requests
// document DOM


// single element
const form = document.getElementById('my-form');
console.log(form);

console.log(document.querySelector('.container'));
console.log(document.querySelector('h1')); // will only select the first element

// multiple element
// creates a NodeList object
console.log(document.querySelectorAll('.item'));

// older types
// creates a HTMLCollection object
console.log(document.getElementsByClassName('item'));
console.log(document.getElementsByTagName('li'));


// loop through items
const items = document.querySelectorAll('.item');
items.forEach((items) => console.log(items));
