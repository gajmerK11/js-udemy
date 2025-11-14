function makeTea(a){
    return a;

}
function processTeaOrder(makeTea){
    return makeTea("earl grey");

}

console.log(processTeaOrder(makeTea));
// function callbackFunction(){
//     console.log('I am  a callback function');
// }

// // higher order function
// function higherOrderFunction(func){
//     console.log('I am higher order function')
//     callbackFunction()
// }

// higherOrderFunction(callbackFunction);