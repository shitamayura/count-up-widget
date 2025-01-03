document.addEventListener('DOMContentLoaded', (event) => {
    const startTime = new Date('2025-01-01T00:00:00').getTime();
    const display = document.getElementById('countup');

    function updateCountup() {
        const now = new Date().getTime();
        const elapsed = now - startTime;

        const days = Math.floor(elapsed / (1000 * 60 * 60 * 24));
        const hours = Math.floor((elapsed % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((elapsed % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((elapsed % (1000 * 60)) / 1000);

        display.innerHTML = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
    }

    setInterval(updateCountup, 1000);
});
