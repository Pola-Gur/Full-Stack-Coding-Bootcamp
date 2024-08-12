function validateUnionType(value, allowedTypes) {
    var typeOfValue = typeof value;
    if (allowedTypes.indexOf(typeOfValue) > -1) {
        return true;
    }
    return false;
}
console.log(validateUnionType(4, ["number", "boolean"]));
console.log(validateUnionType(4, ["string", "boolean"]));
console.log(validateUnionType("smth", ["string", "boolean"]));
// const x = ...
// validateUnionType(x, ["number", "boolean"])
