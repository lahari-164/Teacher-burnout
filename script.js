document.getElementById("burnoutForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let stress = document.getElementById("stress").value;
    let hours = document.getElementById("hours").value;

    if (stress > 7 && hours > 8) {
        document.getElementById("result").innerText = "High Burnout Risk!";
    } else {
        document.getElementById("result").innerText = "Low Burnout Risk.";
    }
});
