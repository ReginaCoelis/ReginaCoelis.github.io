function increaseFontSize() {
    const txtArea = document.getElementById("textArea");
    let fontSize = parseInt(window.getComputedStyle(document.getElementById("textArea")).fontSize);
    txtArea.style.fontSize = fontSize + 2 + "px";
}

function increaseFontSizeWithTimer() {
    setInterval(increaseFontSize, 500);
}

function clearFontGrowth() {
    clearInterval(increaseFontSizeWithTimer);
}

/*
setTimeout(function, delayMS); // arranges to call given function after given delay in ms
setInterval(function, delayMS); // arranges to call function repeatedly every delayMS ms
*/


function displayAlert() {
    alert("Hello, world!");
}

function boldenText() {
    const checkBox = document.getElementById("check1");
    const txtArea = document.getElementById("textArea");
    const body = document.getElementById("body");
    if (checkBox.checked === true) {
        txtArea.style.fontWeight = "bold";
        txtArea.style.color = "green";
        txtArea.style.textDecoration = "underline";
        body.style.background = "url('http://www.cs.washington.edu/education/courses/190m/CurrentQtr/labs/6/hundred-dollar-bill.jpg')";

    } else {
        txtArea.style.fontWeight = "normal";
        txtArea.style.color = "black";
        txtArea.style.textDecoration = "none";
        body.style.background = "none"
    }
}

function transformPigLatin() {
    const words = document.getElementById("textArea").value;
    const arr = words.split(' ');
    for (let i=0;i<arr.length;i++) {
        var word = arr[i];
        if (word.length > 0 && isNaN(word)) {
            arr[i] = checkForConsonant(word);
        }
    }
    document.getElementById("textArea").value = arr.join(' ');

}

function checkForConsonant(word) {
    let firstLetter = word.charAt(0)
    let result = ['a', 'e', 'i', 'o', 'u'].indexOf(firstLetter.toLowerCase());
    if (result >= 0) {
        word += 'ay';

    }
    else {
        word = word.substring(1);
        word += firstLetter + 'ay';
    }
    return word;
}

function transforMalkovitch() {
    const words = document.getElementById("textArea").value;
    const arr = words.split(' ');
    for (let i=0;i<arr.length;i++) {
        var word = arr[i];
        if (word.length >= 5 && isNaN(word)) {
            arr[i] = "Malkovitch";
        }
    }
    document.getElementById("textArea").value = arr.join(' ');
}