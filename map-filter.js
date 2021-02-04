const numbers = [3, 4, 5, 6, 7, 8, 9];
const output = [];
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    const result = element * element
    output.push(result);
}
function square(element) {
    return element * element;
}
numbers.map(function (element, index, array) {
    console.log(element, index, array);
})
console.log(output);

const result = numbers.map(a => a * a);
console.log(result);

const result = numbers.filter(x => x > 5);
console.log(result);