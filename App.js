const inputTextE1 = document.getElementById("input-text-area");
const wordCountE1 = document.getElementById("word-count");
const remainingCountE1 = document.getElementById("remaining-counter");

// Function to update the counters
function updateCounter() {
    wordCountE1.innerText = inputTextE1.value.length;
    remainingCountE1.innerText = inputTextE1.getAttribute("maxlength") - inputTextE1.value.length;
}

// Event listener for keyup to update the counters in real-time
inputTextE1.addEventListener("keyup", () => {
    updateCounter();
});

// Event listener for focus to remove the placeholder
inputTextE1.addEventListener("focus", () => {
    inputTextE1.placeholderBackup = inputTextE1.placeholder;
    inputTextE1.placeholder = '';
});

// Event listener for blur to restore the placeholder if the textarea is empty
inputTextE1.addEventListener("blur", () => {
    if (inputTextE1.value === '') {
        inputTextE1.placeholder = inputTextE1.placeholderBackup;
    }
});

// Initialize the counter when the page loads
updateCounter();

 