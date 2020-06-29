let preAnimation;
let speed = 250;
let timer = null;
let frameNumber = 0
let animationbox;
let selectSize;
let selectAnimation;
let startBtn;
let turboChecked;
let selectElem;

window.onload = function() {
    selectElem = document.getElementById("size");

    turboChecked = document.getElementById("checkbox");
    turboChecked.onclick = turbo;

    animationbox = document.getElementById("mytextarea");

    selectAnimation = document.getElementById("animation");
    selectAnimation.onchange = changeAnimation;
    selectAnimation.selectedIndex = 0;

    startBtn = document.getElementById("start-btn");
    startBtn.onclick = startAnimation;

    stopBtn = document.getElementById("stop-btn");
    stopBtn.onclick = stopAnimation;
    stopBtn.disabled = true;

    selectSize = document.getElementById("size");
    selectSize.onchange = resize;
    selectSize.selectedIndex = 2;
};

function startAnimation() {
    toggle('start');
    preAnimation = animationbox.value;
    if (timer == null) {
        timer = setInterval(switchFrames, 250);
    }

}

function stopAnimation() {
    toggle('stop');
    if (timer != null) {
        clearInterval(timer);
        timer = null;
        frameNumber = 0;
    }
    frameNumber = 0;
    document.getElementById("mytextarea").value = preAnimation;
}

function toggle(state) {
    if (state == 'start') {
        startBtn.disabled = true;
        stopBtn.disabled = false;
        selectAnimation.disabled = true;
    } else if (state == 'stop') {
        startBtn.disabled = false;
        stopBtn.disabled = true;
        selectAnimation.disabled = false;
    }
}

function turbo() {
    if (turboChecked.checked) {
        speed = 50;
        clearInterval(timer);
        timer = setInterval(switchFrames, speed);
    } else {
        speed = 250;
        clearInterval(timer);
        timer = setInterval(switchFrames, speed);
    }
}

function switchFrames() {
    let frames = preAnimation.split(/=====\n/);
    animationbox.value = frames[frameNumber];
    frameNumber++;
    if (frameNumber === frames.length) {
        frameNumber = 0;
    }
}

function changeAnimation() {
    let action = document.getElementById("animation").value;
    document.getElementById("mytextarea").value = frames[action];
}

function resize() {

    document.getElementById("mytextarea").className = selectElem.value;
}