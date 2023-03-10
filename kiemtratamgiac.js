function tamgiac() {
    let a = document.getElementById("canhA").value;
    let b = document.getElementById("canhB").value;
    let c = document.getElementById("canhC").value;
    if (a + b > c && a + c > b && b + c > a) {
        if (a === b && b === c) {
            document.getElementById("ketqua").innerHTML = "Đây là tam giác đều";
        } else if (a === b || b === c || a === c) {
            document.getElementById("ketqua").innerHTML = "Đây là tam giác cân";
        } else if (a * a + b * b === c * c || a * a + c * c === b * b || b * b + c * c === a * a) {
            document.getElementById("ketqua").innerHTML = "Đây là tam giác vuông";
        } else {
            document.getElementById("ketqua").innerHTML = "Đây là hình tam giác"
        }
    } else {
        document.getElementById("ketqua").innerHTML = "Đây không phải hình tam giác";
    }
}