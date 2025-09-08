
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
    
        //My Awesome Services

        
        function downloadCV() {
            // You can replace this with actual CV file path
            const link = document.createElement('a');
            link.href = 'path-to-your-cv.pdf'; // Replace with your CV file path
            link.download = 'Pravesh_Tiwari_CV.pdf';
            link.click();
        }

        // Add smooth scrolling for learn more buttons
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                console.log(`Navigating to ${targetId} section`);
                // You can add actual navigation logic here
            });
        });

        // Add interactive animations
        const serviceCards = document.querySelectorAll('.service-card');
        
        serviceCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                card.style.transform = 'translateY(-10px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'translateY(0) scale(1)';
            });
        });

        // Parallax effect for particles
        document.addEventListener('mousemove', (e) => {
            const particles = document.querySelectorAll('.particle');
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;
            
            particles.forEach((particle, index) => {
                const speed = (index + 1) * 0.5;
                const x = mouseX * speed;
                const y = mouseY * speed;
                particle.style.transform += ` translate(${x}px, ${y}px)`;
            });
        });

        const brandLogos = document.querySelectorAll('.brand-logo');
        
        brandLogos.forEach(logo => {
            logo.addEventListener('mouseenter', () => {
                logo.style.transform = 'scale(1.2) rotate(5deg)';
                logo.style.boxShadow = '0 20px 50px rgba(0, 0, 0, 0.4)';
            });
            
            logo.addEventListener('mouseleave', () => {
                logo.style.transform = 'scale(1) rotate(0deg)';
                logo.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.3)';
            });
        });

        // Parallax effect for background circles
        document.addEventListener('mousemove', (e) => {
            const circles = document.querySelectorAll('.bg-circle');
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;
            
            circles.forEach((circle, index) => {
                const speed = (index + 1) * 0.5;
                const x = mouseX * speed * 10;
                const y = mouseY * speed * 10;
                circle.style.transform += ` translate(${x}px, ${y}px)`;
            });
        });

        // Interactive animation on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                }
            });
        });

        brandLogos.forEach(logo => {
            observer.observe(logo);
        });


//contact me 





const form = document.getElementById('contactForm');
        const submitBtn = document.getElementById('submitBtn');
        const successMessage = document.getElementById('successMessage');

        // Input animation effects
        const inputs = document.querySelectorAll('.form-input');
        inputs.forEach(input => {
            input.addEventListener('focus', function() {
                this.parentElement.style.transform = 'scale(1.02)';
            });
            
            input.addEventListener('blur', function() {
                this.parentElement.style.transform = 'scale(1)';
            });

            // Typing effect
            input.addEventListener('input', function() {
                if (this.value.length > 0) {
                    this.style.borderColor = '#ff8c00';
                } else {
                    this.style.borderColor = '#333333';
                }
            });
        });

        // Form submission
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }

            // Add loading state
            submitBtn.textContent = '';
            submitBtn.classList.add('loading');
            submitBtn.disabled = true;

            // Simulate form submission
            setTimeout(() => {
                // Reset form
                form.reset();
                
                // Reset button
                submitBtn.textContent = 'Send';
                submitBtn.classList.remove('loading');
                submitBtn.disabled = false;
                
                // Show success message
                successMessage.classList.add('show');
                
                // Hide success message after 3 seconds
                setTimeout(() => {
                    successMessage.classList.remove('show');
                }, 3000);

                // Reset input borders
                inputs.forEach(input => {
                    input.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                });

            }, 2000);
        });


        // Add some interactive particles on mouse move
        document.addEventListener('mousemove', function(e) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: fixed;
                top: ${e.clientY}px;
                left: ${e.clientX}px;
                width: 3px;
                height: 3px;
                background: #ff8c00;
                border-radius: 50%;
                pointer-events: none;
                opacity: 0.6;
                animation: fadeOut 1s ease-out forwards;
                z-index: 999;
            `;
            
            document.body.appendChild(particle);
            
            setTimeout(() => {
                document.body.removeChild(particle);
            }, 1000);
        });

        // Add fadeOut animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeOut {
                0% {
                    opacity: 0.6;
                    transform: scale(1);
                }
                100% {
                    opacity: 0;
                    transform: scale(0);
                }
            }
        `;
        document.head.appendChild(style);

        




        //buttom pages


        document.getElementById('email').addEventListener('click', function() {
            navigator.clipboard.writeText('Pravesh252@gmail.com').then(function() {
                const email = document.getElementById('email');
                const originalText = email.textContent;
                
                email.textContent = '📋 Email Copied!';
                email.style.color = '#4CAF50';
                
                setTimeout(() => {
                    email.textContent = originalText;
                    email.style.color = 'white';
                }, 2000);
            }).catch(function(err) {
                // Fallback for older browsers
                console.log('Clipboard not supported');
                alert('Email: Pravesh252@gmail.com');
            });
        });

        // Ensure all elements are properly clickable
        document.querySelectorAll('.social-icon').forEach(function(icon) {
            icon.style.pointerEvents = 'auto';
        });

        document.getElementById('email').style.pointerEvents = 'auto';








