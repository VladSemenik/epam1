module.exports = function solveEquation(equation) {
  var arr = equation.split(" * x");
    var str_b = arr[1];
    var str_c = arr[2];
    str_b = str_b.substr(3, 1) + str_b.substr(5, str_b.length-4);
    str_c = str_c.substr(1,1)+ str_c.substr(3, str_c.length-2);
    arr[1] = str_b;
    arr[2] = str_c;
    var a, b, c, d, x1, x2;
    a = Number(arr[0]);
    b = Number(arr[1]);
    c = Number(arr[2]);
    d = Math.pow(b,2)-4*a*c;
    x1 = (-b+Math.sqrt(d))/(2*a);
    x2 = (-b-Math.sqrt(d))/(2*a);
    x1 = Math.round(x1);
    x2 = Math.round(x2);
    var result = [x1, x2];
    result.sort(function(a, b) {
            return a - b;
        });
    return result;
}
