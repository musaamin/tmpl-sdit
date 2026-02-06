// SDIT Website JavaScript with Alpine.js

document.addEventListener('alpine:init', () => {
    
    // Counter animation component
    Alpine.data('counter', () => ({
        count: 0,
        target: 0,
        duration: 2000,
        
        init() {
            // Intersection Observer to trigger animation when visible
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.animate();
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.5 });
            
            observer.observe(this.$el);
        },
        
        animate() {
            const start = 0;
            const end = parseInt(this.target);
            const duration = this.duration;
            const startTime = performance.now();
            
            const updateCount = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                
                // Easing function
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                
                this.count = Math.floor(easeOutQuart * (end - start) + start);
                
                if (progress < 1) {
                    requestAnimationFrame(updateCount);
                } else {
                    this.count = end;
                }
            };
            
            requestAnimationFrame(updateCount);
        }
    }));
    
    // Lightbox component
    Alpine.data('lightbox', () => ({
        isOpen: false,
        currentImage: '',
        currentIndex: 0,
        images: [
            'assets/images/galeri/galeri-01.jpg',
            'assets/images/galeri/galeri-02.jpg',
            'assets/images/galeri/galeri-03.jpg',
            'assets/images/galeri/galeri-04.jpg',
            'assets/images/galeri/galeri-05.jpg',
            'assets/images/galeri/galeri-06.jpg',
            'assets/images/galeri/galeri-07.jpg',
            'assets/images/galeri/galeri-08.jpg',
            'assets/images/galeri/galeri-09.jpg',
            'assets/images/galeri/galeri-10.jpg',
            'assets/images/galeri/galeri-11.jpg',
            'assets/images/galeri/galeri-12.jpg'
        ],
        
        open(image, index) {
            this.currentImage = image;
            this.currentIndex = index;
            this.isOpen = true;
            document.body.style.overflow = 'hidden';
        },
        
        close() {
            this.isOpen = false;
            document.body.style.overflow = '';
        },
        
        next() {
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
            this.currentImage = this.images[this.currentIndex];
        },
        
        prev() {
            this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
            this.currentImage = this.images[this.currentIndex];
        },
        
        init() {
            // Close on escape key
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && this.isOpen) {
                    this.close();
                } else if (e.key === 'ArrowRight' && this.isOpen) {
                    this.next();
                } else if (e.key === 'ArrowLeft' && this.isOpen) {
                    this.prev();
                }
            });
        }
    }));
    
    // Sticky header component
    Alpine.data('stickyHeader', () => ({
        isSticky: false,
        
        init() {
            window.addEventListener('scroll', () => {
                this.isSticky = window.scrollY > 100;
            });
        }
    }));
    
    // Mobile menu component
    Alpine.data('mobileMenu', () => ({
        isOpen: false,
        
        toggle() {
            this.isOpen = !this.isOpen;
        },
        
        close() {
            this.isOpen = false;
        }
    }));
    
    // Gallery filter component
    Alpine.data('galleryFilter', () => ({
        activeFilter: 'all',
        
        filter(category) {
            this.activeFilter = category;
        },
        
        isVisible(category) {
            return this.activeFilter === 'all' || this.activeFilter === category;
        }
    }));
    
    // Scroll to top component
    Alpine.data('scrollTop', () => ({
        isVisible: false,
        
        init() {
            window.addEventListener('scroll', () => {
                this.isVisible = window.scrollY > 300;
            });
        },
        
        scroll() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }));
    
    // WhatsApp form component
    Alpine.data('whatsappForm', () => ({
        nama: '',
        email: '',
        subjek: '',
        pesan: '',
        phone: '6281234567890', // Replace with actual phone number
        
        submit() {
            const text = `Nama: ${this.nama}%0AEmail: ${this.email}%0ASubjek: ${this.subjek}%0APesan: ${this.pesan}`;
            const url = `https://wa.me/${this.phone}?text=${text}`;
            window.open(url, '_blank');
        }
    }));
    
    // Teacher filter component
    Alpine.data('teacherFilter', () => ({
        activeFilter: 'all',
        
        filter(type) {
            this.activeFilter = type;
        },
        
        isVisible(type) {
            return this.activeFilter === 'all' || this.activeFilter === type;
        }
    }));
});

// Intersection Observer for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
            }
        });
    }, observerOptions);
    
    // Observe elements with animation classes
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        el.classList.add('opacity-0', 'translate-y-10', 'transition-all', 'duration-700');
        observer.observe(el);
    });
});

// Preloader
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.classList.add('opacity-0', 'pointer-events-none');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 300);
    }
});
