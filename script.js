window.addEventListener('DOMContentLoaded', () => {
    // 🌌 --- TWINKLING STARS ---
    const starContainer = document.getElementById('stars');
    if (starContainer) {
        for (let i = 0; i < 100; i++) {
            const star = document.createElement('div');
            star.classList.add('star');
            star.style.top = Math.random() * 100 + 'vh';
            star.style.left = Math.random() * 100 + 'vw';
            star.style.animationDelay = (Math.random() * 2) + 's';
            starContainer.appendChild(star);
        }
    }

    // 🚀 --- ROCKET LAUNCH ---
    const rocket = document.getElementById('rocket');
    const launchBtn = document.getElementById('launch');

    if (rocket && launchBtn) {
        // Definiši animaciju ako je nema
        const style = document.createElement('style');
        style.innerHTML = `
        @keyframes launchNow {
            0% { transform: translate(50vw, 80vh) scale(1) rotate(-10deg); opacity: 1; }
            100% { transform: translate(50vw, -300px) scale(0.5) rotate(0deg); opacity: 0; }
        }`;
        document.head.appendChild(style);

        launchBtn.addEventListener('click', () => {
            // 1️⃣ resetuj postojeću animaciju
            rocket.style.animation = 'none';
            void rocket.offsetHeight; // force reflow

            // 2️⃣ pokreni novu "launch" animaciju
            rocket.style.animation = 'launchNow 3s ease-in forwards';

            // 3️⃣ otvori Pump.fun link u novom tabu
            const link = launchBtn.dataset.link || "https://pump.fun/"; // fallback
            window.open(link, '_blank', 'noopener');
        });
    }
});
