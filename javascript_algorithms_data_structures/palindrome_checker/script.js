const userInput = document.getElementById('text-input');
const checkButton = document.getElementById('check-btn');
const resultDiv = document.getElementById('result');

const cleanedInput = userInput => {
    return userInput.replace(/[\W_]+/g, '').toLowerCase();
};

const isPalindrome = cleanedInput => {
    return cleanedInput === cleanedInput.split('').reverse().join('');
};

checkButton.addEventListener("click", () => {
    const textInput = cleanedInput(userInput.value);
    const isPalindromeResult = isPalindrome(textInput);

    const resultMessage = isPalindromeResult
        ? `${textInput} is a palindrome!`
        : `${textInput} is not a palindrome.`;

    resultDiv.innerHTML = resultMessage;
});

userInput.addEventListener('keydown', check => {
    if (check.key === 'Enter') {
        checkButton.click();
    }
})