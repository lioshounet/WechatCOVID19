window.onload = function () {
    var bu = document.getElementById("qie");
    var maimg = document.getElementById("maimg");
    var flag = 1;
    bu.onclick = function () {
        if (flag % 2 == 0) {
            maimg.src = "img/hong.png";
        }
        else {
            maimg.src = "img/A17F4D4322C20C0AFFC5F3F763589C88.png";
        }
        flag++;
    }
}