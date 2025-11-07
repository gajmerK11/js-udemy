let cityArr = ["Paris", "New York", "Tokyo", "London"];
let cityList = [];
for (let i = 0; i < cityArr.length; i++) {
    // console.log(cityArr[i]);
    cityList.shift(cityArr[i]);
    
}
console.log("cityList = ", cityList);