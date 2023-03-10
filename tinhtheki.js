function theki(){
let nam = document.getElementById("nam").value
    let sotheki = Math.floor(nam/100) + 1;
    document.getElementById("ketqua").innerHTML = "Đây là thế kỉ thứ" + sotheki;
}