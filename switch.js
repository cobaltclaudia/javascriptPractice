const numColor = 20;

// if x > 10, set to red, else set to blue
const sColor = numColor > 10 ? 'purple' : 'blue';

console.log('switch.js');


switch(sColor){
    case 'purple':
        console.log('color is purple');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT purple or blue');
        break;

}
