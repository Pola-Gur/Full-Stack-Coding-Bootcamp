function processInput(someInput: number | string | boolean) {
    switch(typeof someInput) {
        case "string":
            return someInput.toUpperCase();
        case "number":
            return someInput*someInput;
        case "boolean":
            return !someInput;
    }
}

console.log(processInput(4))
console.log(processInput('4'))
console.log(processInput(true))