function login() {
    let user = document.getElementById("username").value
    let pass = document.getElementById("password").value
    if (user === "admin" && pass === "123") {
        alert("Đăng nhập vào tài khoản admin loading...99%");
    } else if (user === "user" && pass === "123") {
        alert("Đăng nhập vào tài khoản user loadng...99%");
    } else {
        ("Tài khoảng không tồn tại")
    }
}