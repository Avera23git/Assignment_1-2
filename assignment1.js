function calculate(num1, num2, string) {
    // Validate input numbers
    if (num1 === null || num2 === null || num1 === undefined || num2 === undefined) {
        return "Error: Both numbers must be provided and cannot be null or undefined.";
    }

    // Validate string
    if (['add', 'subtract', 'multiply', 'divide'].indexOf(string) === -1) {
        return "Error: Invalid string. Choose from 'add', 'subtract', 'multiply', 'divide'.";
    }

    // Performing the string using if-else
    if (string === 'add') {
        return num1 + num2;
    } else if (string === 'subtract') {
        return num1 - num2;
    } else if (string === 'multiply') {
        return num1 * num2;
    } else if (string === 'divide') {
        if (num2 === 0) { 
            return "Error: Division by zero is not allowed.";}
     else {
                return num1 / num2;
        }
        
            
    }

}

// Testing the function
console.log(calculate(7, 3, 'add'));        
console.log(calculate(10, 2, 'divide'));    
console.log(calculate(6, 2, 'subtract'));   
console.log(calculate(7, 3, 'multiply'));   
