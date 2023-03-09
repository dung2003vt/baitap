function tamgiac() {
    let a = document.getElementById("canhA");
    let b = document.getElementById("canhB");
    let c = document.getElementById("canhC");
    if (a + b > c || a + c > b || b + c > a) {
        document.getElementById("ketqua").innerHTML = "Đây là hình tam giác";
    }
    if ((a + b > c && a === b || a === c || b === c) || (a + c > b && a === b || a === c || b === c) || (b + c > a && a === b || a === c || b === c)) {
        document.getElementById("ketqua").innerHTML = "Đây là tam giác cân";
    if (a === b && b === c)
        document.getElementById("ketqua").innerHTML = "Đây là tam giác đều";
    if (a * a + b * b === c * c || a * a + c * c === b * b || b * b + c * c === a * a)
        document.getElementById("ketqua").innerHTML = "Đây là tam giác vuông";
    } else {
        document.getElementById("ketqua").innerHTML = "Đây không phải hình tam giác";
    }

}