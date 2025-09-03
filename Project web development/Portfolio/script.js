
        // Add smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Add interactive hover effects
        const profileImage = document.querySelector('.profile-image');
        const profileContainer = document.querySelector('.profile-container');

        profileContainer.addEventListener('mousemove', (e) => {
            const rect = profileContainer.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            profileImage.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });

        profileContainer.addEventListener('mouseleave', () => {
            profileImage.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        });

        // Enhanced hover effect for name (without text disappearing)
        const nameElement = document.querySelector('.name');
        
        nameElement.addEventListener('mouseenter', () => {
            nameElement.style.transform = 'scale(1.05)';
            nameElement.style.textShadow = '0 0 20px rgba(255, 107, 53, 0.8)';
        });

        nameElement.addEventListener('mouseleave', () => {
            nameElement.style.transform = 'scale(1)';
            nameElement.style.textShadow = 'none';
        });
    