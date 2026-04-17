function validate(email) {
    let validator = email;

    if (validator.replace(/[^@]/g, "").length > 1) {
        return "Invalid email. Your email has more than one @ sign."
    }
    
    else if (validator.replace(/^.[\W.-].$/g, "").length > 0) {
        return "Invalid email. Your email must only contain alphanumerical charaters, underscores, dots and/or hyphens."
    }

}

// console.log(validate("alfredo@gmail.com"));

