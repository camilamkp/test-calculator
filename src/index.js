function calculator(a, b, operator)
{
    switch(operator)
    {
        case '+':
            return a + b;

        case '-':
            return a - b;
            
        case '*':
            return a * b;
            
        case '/':
            return a / b;
            
        default:
            return 'xXxXx Err0r - 404';
    }
}
// console.log(calculator(2, 3, '+'));
// console.log(calculator(2, 3, '*'));
// console.log(calculator(5, 3, '-'));
// console.log(calculator(9, 3, '/'));
// console.log(calculator(-987, 3, '.'));

module.exports = calculator;
