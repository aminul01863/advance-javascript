let bonuses = 20;

function sum(first, second) {
    const result = first + second + bonuses;
    // console.log(bonuses);
    if (result > 9) {
        var mood = "happy";
        mood = "fishy";
        mood = "funky"
        console.log(mood);
    }
    console.log(mood);
    return result;
}

const output = sum(3, 7);
// console.log(bonuses);
// console.log(output);