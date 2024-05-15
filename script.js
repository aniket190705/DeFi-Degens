document.addEventListener('DOMContentLoaded', function() {
    // Countdown Timer
    var countdownDate = new Date("May 16, 2024 09:00:0").getTime();
    var countdownTimer = setInterval(function() {
        var now = new Date().getTime();
        var distance = countdownDate - now;

        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("countdown-timer").innerHTML = days + "d " + hours + "h " 
        + minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(countdownTimer);
            document.getElementById("countdown-timer").innerHTML = "EXPIRED";
        }
    }, 1000);
});
