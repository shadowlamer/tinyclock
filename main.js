function showTime() {
    const clock = document.getElementById('clockDisplay');
    const date = document.getElementById('dateDisplay');
    const now = new Date();
    clock.innerText = now.toLocaleTimeString();
    date.innerText = now.toLocaleDateString();
}

setInterval(showTime, 200);