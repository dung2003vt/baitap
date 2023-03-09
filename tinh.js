function tinh(){
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let tong = a + b;
    let tru = a - b;
    let nhan = a * b;
    let chia = a / b;
    let du = a % b;
    document.getElementById("Tổng là:" + tong ).innerHTML
    document.getElementById("Hiệu là:" + tru ).innerHTML
    document.getElementById("Tích là:" + nhan ).innerHTML
    document.getElementById("Thương là:" + chia ).innerHTML
    document.getElementById("Dư là:" + du).innerHTML
}