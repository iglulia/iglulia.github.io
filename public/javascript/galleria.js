window.onload = function () {
    var btn1 = document.getElementById("tesseramento-2018-btn")
    var btn2 = document.getElementById("carnevale-2018-btn")
    var btn3 = document.getElementById("nocivo-2018-btn")
    var element = document.getElementById("tesseramento-2018-gallery");
    var element2 = document.getElementById("carnevale-2018-gallery");
    var element3 = document.getElementById("nocivo-2018-gallery");
    btn1.onclick = function () {
        setTimeout(function () {
            if (element.style.display == "none") {
                element.style.display = "block";
            } else {
                element.style.display = "none";
            }
        }, 200);
    }
    btn2.onclick = function () {
        setTimeout(function () {
            if (element2.style.display == "none") {
                element2.style.display = "block";
            } else {
                element2.style.display = "none";
            }
        }, 200);
    }
    btn3.onclick = function () {
        setTimeout(function () {
            if (element3.style.display == "none") {
                element3.style.display = "block";
            } else {
                element3.style.display = "none";
            }
        }, 200);
    }
}
