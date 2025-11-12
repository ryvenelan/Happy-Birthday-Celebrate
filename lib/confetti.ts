import confetti from 'canvas-confetti';

export const runFireworks = (): void => {
    const duration = 90 * 1000; // Changed from 5 to 90 seconds
    const animationEnd = Date.now() + duration;
    const defaults: confetti.Options = {
        startVelocity: 30,
        spread: 360,
        ticks: 60,
        zIndex: 999
    };

    const randomInRange = (min: number, max: number): number => {
        return Math.random() * (max - min) + min;
    };

    const interval = setInterval((): void => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
            clearInterval(interval);
            return;
        }

        const particleCount = 50 * (timeLeft / duration);

        confetti({
            ...defaults,
            particleCount,
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
        });

        confetti({
            ...defaults,
            particleCount,
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
        });
    }, 250);

    setTimeout((): void => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff']
        });
    }, 1000);
};