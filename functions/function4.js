function createTeaMaker(){
    let score = 100;
    return function (teaType) {
        return `Making ${teaType} ${score}`;
    };
}
let teaMaker = createTeaMaker();
console.log(teaMaker("green tea"));