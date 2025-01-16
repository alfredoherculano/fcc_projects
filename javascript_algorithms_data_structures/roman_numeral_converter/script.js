const inputNumber = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("output");

romanNumberArr = [
    {
        1: "I",
        5: "V",
        10: "X",
        50: "L",
        100: "C",
        500: "D",
        1000: "M"
    },

    {
        4: "IV",
        9: "IX",
        40: "XL",
        90: "XC",
        400: "CD",
        900: "CM"
    }
];

const isValidNumber = () => {
    input = inputNumber.value;

    if (input > 3999) {
        return result.innerText = "Please enter a number less than or equal to 3999";
    }

    else if (input < 1) {
        return result.innerText = "Please enter a number greater than or equal to 1";
    }

    else if (!/^\d+$/.test(input)) {
        return result.innerText = "Please enter a valid number";
    }

    return true;
};

const convertToRoman = () => {
    if (!isValidNumber()) {
        return; // Stop conversion if validation fails
    }

    const input = inputNumber.value;
    const num = parseInt(input);

    for (const obj of romanNumberArr) {
        if (num in obj) {
            result.innerText = obj[num];
        }
    }
};

convertBtn.addEventListener("click", convertToRoman);

inputNumber.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        convertToRoman();
    }
});