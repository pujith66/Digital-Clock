function updateclock(){
    const date = new Date;
    let hours = date.getHours();
    const m = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    hours = hours.toString().padStart(2, 0);
    const mins = date.getMinutes().toString().padStart(2, 0);
    const secs = date.getSeconds().toString().padStart(2, 0);
    const time = `${hours}:${mins}:${secs} ${m}`;
    document.getElementById("clock").textContent = time;
}
document.getElementById("stopwatch").addEventListener("click", () => {
    window.location.href = "https://pujith66.github.io/stopwatch";
});


updateclock();
setInterval(updateclock, 1000);