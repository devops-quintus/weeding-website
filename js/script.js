// script.js
const countdownElement = {
    days: document.getElementById('days'),
    hours: document.getElementById('hours'),
    minutes: document.getElementById('minutes'),
    seconds: document.getElementById('seconds'),
};

// Hardcoded target date (YYYY-MM-DDTHH:MM:SS)
const targetDate = new Date('2024-12-31T23:59:59'); // Change this to your desired date

function startCountdown() {
    setInterval(() => {
        const now = new Date();
        const timeLeft = targetDate - now;

        if (timeLeft <= 0) {
            clearInterval(); // Stop the countdown
            countdownElement.days.textContent = "0";
            countdownElement.hours.textContent = "0";
            countdownElement.minutes.textContent = "0";
            countdownElement.seconds.textContent = "0";
            return;
        }

        const seconds = Math.floor((timeLeft / 1000) % 60);
        const minutes = Math.floor((timeLeft / 1000 / 60) % 60);
        const hours = Math.floor((timeLeft / 1000 / 60 / 60) % 24);
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));

        countdownElement.days.textContent = days;
        countdownElement.hours.textContent = hours;
        countdownElement.minutes.textContent = minutes;
        countdownElement.seconds.textContent = seconds;
    }, 1000);
}

// Start the countdown immediately
startCountdown();
