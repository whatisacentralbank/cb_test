let infoButtons = document.getElementsByClassName("more");
let closeButtons = document.getElementsByClassName("close");

for (let i = 0; i < infoButtons.length; i++) {
    infoButtons[i].onclick = function () {
        showInfo(infoButtons[i]);
    }
}

for (let i = 0; i < closeButtons.length; i++) {
    closeButtons[i].onclick = function () {
        hideInfo(closeButtons[i]);
    }
}

function showInfo (button) {
    button.nextSibling.style.display = "inline";
    button.nextSibling.nextSibling.style.display = "inline";
    console.log(button.nextSibling);
}

function hideInfo (button) {
    button.previousSibling.style.display = "none";
    button.style.display = "none";
    console.log(button);
}
