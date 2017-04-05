function QuadraticEquation(a, b, c) {
    var x1, x2, discriminant;
    var result = " ";

    discriminant = b * b - 4 * a * b * c;
    if (discriminant > 0) {
        x1 = (-b + Math.sqrt(discriminant)) / 2 * a
        x2 = (-b - Math.sqrt(discriminant)) / 2 * a
        result = "перший корінь = " + x1 + "<br> другий корінь +x2";
    } else if (discriminant < 0) {
        result = "Рівняння без коренів";
    } else {
        x1 = -b / 2 * a;
        result = "корінь рівняння = " + x1;
    }
    return result;
}
var a = Number(prompt("введіть перший коефіціент"));
var b = Number(prompt("введіть другий коефіціент"));
var c = Number(prompt("введіть третій коефіціент"));

document.write(QuadraticEquation(a, b, c));