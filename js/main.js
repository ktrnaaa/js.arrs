//////////// TASK 1

const userNames = ["Петрик Ольга Іванівна", "Гнатюк Петро Антонович", "Рудко Андрій Опанасович"];

const midResult = userNames.join(' / ').replace(/[a-zа-яі]/g, '')
console.log(midResult);

const mid2Result = midResult.split(' / ');

initials = mid2Result.map((element) => {

    const initParts = element.split(' ');
    return initParts.join('.') + '.';
} ); 

initials.sort();

console.log(initials);


///////////////// TASK 2
const currentMaxValue = -4589;

let reverseMaxValue

let negative = currentMaxValue < 0;

if (negative){
    reverseMaxValue = currentMaxValue.toString().split("").reverse();

    const negSignMidValue = reverseMaxValue.splice(0, 4).join('');
    negSignMidValue2 = '-' + negSignMidValue;

    numMaxValue = parseInt(negSignMidValue2);

    console.log(numMaxValue);
    
} else {
    reverseMaxValue = currentMaxValue.toString().split("").reverse().join("");
    numMaxValue = parseInt(reverseMaxValue);

    console.log(numMaxValue);

}


//////////////////

///////////////// TASK3

const resultsArray = [1, 2, [3, [4]]];
let productOfArray = resultsArray.flat(2).reduce((res, item) => item * res, 1);



console.log(productOfArray); // 24


const arr = ['one', 'two', 'three']
