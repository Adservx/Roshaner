function createParticles() {
    const profileImage = document.querySelector('.profile-image');
    const rect = profileImage.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Create black fog overlay
    const fog = document.createElement('div');
    fog.style.position = 'fixed';
    fog.style.top = '0';
    fog.style.left = '0';
    fog.style.width = '100%';
    fog.style.height = '100%';
    fog.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    fog.style.transition = 'background-color 1s';
    fog.style.pointerEvents = 'none';
    fog.style.zIndex = '999';
    document.body.appendChild(fog);

    // Animate fog to black
    setTimeout(() => {
        fog.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
    }, 100);

    // Create particles
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 8 + 4;
        const angle = Math.random() * Math.PI * 2;
        const velocity = Math.random() * 200 + 100;
        const hue = Math.random() * 60 - 30;

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.backgroundColor = `hsl(${hue}, 100%, 50%)`;
        particle.style.left = `${centerX}px`;
        particle.style.top = `${centerY}px`;

        document.body.appendChild(particle);

        // Animate particle
        const dx = Math.cos(angle) * velocity;
        const dy = Math.sin(angle) * velocity;

        particle.animate([
            {
                transform: 'translate(0, 0)',
                opacity: 1
            },
            {
                transform: `translate(${dx}px, ${dy}px)`,
                opacity: 0
            }
        ], {
            duration: Math.random() * 1000 + 500,
            easing: 'cubic-bezier(0, .9, .57, 1)',
            fill: 'forwards'
        });
    }

    // Remove fog and particles after animation with fade out
    setTimeout(() => {
        fog.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        setTimeout(() => {
            fog.remove();
            document.querySelectorAll('.particle').forEach(p => p.remove());
        }, 1000);
    }, 2000);
}

// Add click event listener to profile image
document.addEventListener('DOMContentLoaded', () => {
    const profileImage = document.querySelector('.profile-image');
    profileImage.addEventListener('click', createParticles);
});
