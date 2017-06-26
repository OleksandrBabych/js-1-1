var a = Number(prompt('Enter "a" a != 0'));
var b = Number(prompt('Enter "b"'));
var c = Number(prompt('Enter "c"'));

var D = b * b - 4 * a * c;
var result = qudraticEquation(a, b, c);



document.write(result);

function qudraticEquation(a, b, c) {
    if (a === 0) {
        var result
        result = 'The equation has no solution please enter <b>a != 0</b>'
        return result
    }
    if (D < 0) {
        result = 'The equation has no solution becouse of <b>D < 0</b>'
        return result;
    }
    else if (D > 0) {
        var x1 = ((-b + Math.sqrt(D)) / (2 * a));
        var x2 = ((-b - Math.sqrt(D)) / (2 * a));
        result = 'x1 = ' + x1 + ';<br> x2 = ' + x2;
        return result
    }
    else if (D === 0) {
        var x = (-b / (2 * a));
        result = 'x = ' + x;
        return result;
    }

}
