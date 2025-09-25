        document.addEventListener('DOMContentLoaded', function() {
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            const closeMenuBtn = document.getElementById('close-menu-btn');
            const navContainer = document.getElementById('nav-container');
            
            // Open mobile menu
            mobileMenuBtn.addEventListener('click', function() {
                navContainer.classList.add('active');
                mobileMenuBtn.classList.add('hidden');
                document.body.style.overflow = 'hidden'; // Prevent scrolling
            });
            
            // Close mobile menu
            closeMenuBtn.addEventListener('click', function() {
                navContainer.classList.remove('active');
                mobileMenuBtn.classList.remove('hidden');
                document.body.style.overflow = ''; // Enable scrolling
            });
            
            // Close menu when clicking on a link
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.addEventListener('click', function() {
                    navContainer.classList.remove('active');
                    mobileMenuBtn.classList.remove('hidden');
                    document.body.style.overflow = '';
                });
            });
        });

       