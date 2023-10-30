let countDownDate = new Date("Nov 4, 2023 21:00").getTime();

let x = setInterval(function() {

    let now = new Date().getTime();

    let distance = countDownDate - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    if(days === 0){
        document.getElementById("countdown").innerHTML =
            hours + "ore " + minutes + "min ";
    }
    else if(hours === 0){
    document.getElementById("countdown").innerHTML =
        days + "giorni " + minutes + "min ";
    }
    else if(minutes === 0){
        document.getElementById("countdown").innerHTML =
            days + "giorni " + hours + "ore ";
    }
    else{
        document.getElementById("countdown").innerHTML =
            days + "giorni " + hours + "ore " + minutes + "min ";
    }

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML =
            "Buon Divertimento";
    }
    if(distance < -5){
        document.getElementById("festa").innerHTML =
            "Nessun nuovo evento";

        clearInterval(x);
        document.getElementById("countdown").innerHTML =
            "A Presto";
    }

}, 500);