//////////// TASK 1

const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];
let initials = []
midResult = userNames.join('').replace(/[a-zа-яі]/g, '')
console.log(midResult);

initials = midResult.split('').map(a => a[0]).join('.');

console.log(initials);


///////////////// TASK 2
const currentMaxValue = 4589;
let reverseMaxValue = currentMaxValue.toString().split("").reverse().join("");
console.log(reverseMaxValue)

//////////////////

///////////////// TASK3

const resultsArray = [1, 2, [3, [4]]];
let productOfArray = resultsArray.flat(2).reduce((res, item) => item * res, 1);



console.log(productOfArray); // 24


const arr = ['one', 'two', 'three']
