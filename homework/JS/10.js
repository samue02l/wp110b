function integral(func, lower, upper) {
    var area = 0;
    for ( lower;lower < upper; lower += 0.000001) {
        area = area + func(lower) * 0.000001;
    }
    return area;
}
console.log(integral((a) => a * a * a, 0, 1))
console.log(integral((x) => x * x, 0, 1))
console.log(integral((b) => Math.pow(b, 1 / 3), 0, 1))