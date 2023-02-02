export const getRandomCardNumber = () => {
    let cardNumber = '';
    //i < 4, because card numbers consist of 16 numbers
    for (let i = 0; i < 4; i++) {
        const randomDiginNumber = Math.round(1000 + Math.random() * 9000);

        if (i !== 0) {
            cardNumber += ' ';
        }

        cardNumber += randomDiginNumber;
    }
    return cardNumber;
}