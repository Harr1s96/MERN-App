function userNameValidation(inputString) {
    if (inputString.match(/[^a-zA-Z0-9]/g)) {
        throw new Error("Username can only be alphanumeric")
    }
}
//need to confirm unique in db
//minimum length
//maximum length?
//alphanumeric only?

function emailValidation(inputString) {
    if (inputString.match(/\s/g)) {
        throw new Error("Cannot have a space in the email")
    }
    if (inputString.match(/@[A-Za-z]+/g) == null) {
        throw new Error("Does not have a domain")
    }
    if (inputString.match(/\.[A-Za-z.]+/g) == null) {
        throw new Error("Email must have a network")
    }


}

//need to confirm unique in db
//must have String@Domain.Somewhere


function passwordValidation(inputString) {
    if (inputString.length < 8) {
        throw new Error("Password too short")
    }
    if (inputString.match(/\d+/g) == null) {
        throw new Error("Password must contain a number")
    }
    if (inputString.match(/[A-Za-z]+/g) == null) {
        throw new Error("Password must contain a letter")
    }

    if (inputString.match(/[^a-zA-Z0-9]/g) == null) {
        throw new Error("Password must contain a special character")
    }
    if (inputString.match(/\s/g)) {
        throw new Error("Cannot have a space in the password")
    }
}

//Minimum length
//Alphanumeric + special
//

