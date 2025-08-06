const sections = document.querySelectorAll('section');
        const revealSection = () => {
            const trigger = window.innerHeight * 0.85;
            sections.forEach(sec => {
                const top = sec.getBoundingClientRect().top;
                if (top < trigger) {
                    sec.style.animationPlayState = 'running';
                }
            });
        };
        window.addEventListener('scroll', revealSection);
        window.addEventListener('DOMContentLoaded', revealSection);