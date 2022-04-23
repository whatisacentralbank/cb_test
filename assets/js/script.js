let card = document.getElementById("ebrd");
console.log(card);
let flag = true;
let cardDiv;
ebrd.onclick = function () {
    if (cardDiv) {
        card.removeChild(cardDiv);
    }
    cardDiv = document.createElement("div");
    cardDiv.classList.add("bank-desc");
    card.appendChild(cardDiv);
    card.textContent += 'test';
    console.log(card.childNodes);
}