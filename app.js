// Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.
// Наприклад:

// const array = [1, 3, 4, 6, 2, 5, 7];
// removeElement(array,4);
// console.log(array); Результат: [1, 3, 6, 2, 5, 7]

function removeElement(array, item){
    const newArray = [];
    for(let i = 0; i <array.length; i++){
        if(array[i] !== item){
            newArray.push(array[i]);
        }
    }
    return newArray;
}

const array = [1, 3, 4, 6, 2, 5, 7, 5];
const newArray = removeElement(array, 5і);
console.log(`Original array: ${array}`);
console.log(`New array: ${newArray}`);