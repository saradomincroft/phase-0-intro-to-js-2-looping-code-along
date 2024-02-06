const names = ["Guadalupe", "Ollie", "Aki"]

function writeCards(names) {
    let thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
        thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`);
    }
    return thankYouMessages;
}

let number = 10;

function countDown() {
    for(let i = number; i >= 0; i--)
    console.log(i);
}
countDown();