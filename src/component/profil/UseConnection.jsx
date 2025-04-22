export default function submitRules(userInput, id) {

    var result = false;

    const allowedChars =
        [
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
            null, '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '_', '-'
        ];

    const emailChars =
        [
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
            null, '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '_', '-', '@', '.'
        ];

    for (let i = 0; i < userInput.length; i++) { // envoie une erreur si un charactere non-autorisé est présent
        if (id != "email" && !allowedChars.includes(userInput[i])) {
            console.log(`'${userInput[i]}' is not allowed ! Only special characters allowed : '_' and '-'`); // ***put error message in UI
            result = false;
        } else if (id == "email" && !emailChars.includes(userInput[i])) {
            console.log(`'${userInput[i]}' is not allowed !Check the syntax of the email, it must contain : '@' and '.'`); // ***put error message in UI
            result = false;
        } else {
            result = true;
        }
    }

    return result;
}