const inputNumber = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const result = document.getElementById("output");

const romanNumbers = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I"
};

const isValidNumber = () => {
    const input = inputNumber.value;

    if (input > 3999) {
        result.innerText = "Please enter a number less than or equal to 3999";
        return false;
    }

    else if (input < 1) {
        result.innerText = "Please enter a number greater than or equal to 1";
        return false;
    }

    else if (!/^\d+$/.test(input)) {
        result.innerText = "Please enter a valid number";
        return false;
    }

    return true;
};

const convertToRoman = () => {
    if (isValidNumber()) {
        let roman = "";
        let num = parseInt(inputNumber.value);
        const keys = Object.keys(romanNumbers).reverse();

        for (const key of keys) {
            const value = parseInt(key);
            while (num >= value) {
                roman += romanNumbers[value];
                num -= value;
            }
        }

        result.innerText = roman;
    }
};

convertBtn.addEventListener("click", convertToRoman);

inputNumber.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        convertToRoman();
    }
});