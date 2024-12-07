document.addEventListener('DOMContentLoaded', () => {
  
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.style.background = 'rgba(0, 0, 0, 0.8)';
        header.style.transition = 'background 0.3s';
      } else {
        header.style.background = 'transparent';
      }
    });
  
    
    const animElements = document.querySelectorAll('.contenedor, .titulo, .card, .servicio-ind');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    animElements.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(50px)';
      el.style.transition = 'opacity 0.6s, transform 0.6s';
      observer.observe(el);
    });
  
    
    const galleryImages = document.querySelectorAll('.imagen-port img');
    galleryImages.forEach((img) => {
      img.addEventListener('mouseover', () => {
        img.style.transform = 'scale(1.1)';
        img.style.transition = 'transform 0.3s';
      });
      img.addEventListener('mouseout', () => {
        img.style.transform = 'scale(1)';
      });
    });
  
    
    const form = document.querySelector('.review-form');
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = document.querySelector('#name').value;
      const email = document.querySelector('#email').value;
      const review = document.querySelector('#review').value;
  
      if (name && email && review) {
        alert(`¡Gracias, ${name}! Tu reseña ha sido enviada con éxito.`);
        form.reset();
      } else {
        alert('Por favor, completa todos los campos antes de enviar.');
      }
    });
  });
  document.addEventListener('DOMContentLoaded', () => {
   
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        header.style.background = 'linear-gradient(45deg, rgba(0, 0, 0, 0.8), rgba(33, 33, 33, 0.8))';
        header.style.transition = 'background 0.5s';
      } else {
        header.style.background = 'transparent';
      }
    });
  
    
    const headerSection = document.querySelector('.textos-header');
    window.addEventListener('scroll', () => {
      const scrollPos = window.scrollY;
      headerSection.style.transform = `translateY(${scrollPos * 0.5}px)`;
    });
  

    const animElements = document.querySelectorAll('.contenedor, .titulo, .card, .servicio-ind, .imagen-port');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            entry.target.style.animation = 'bounce 1s';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    animElements.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(50px)';
      el.style.transition = 'opacity 0.6s, transform 0.6s';
      observer.observe(el);
    });
  
   
    const scrollToTopButton = document.createElement('button');
    scrollToTopButton.textContent = '↑';
    scrollToTopButton.style.position = 'fixed';
    scrollToTopButton.style.bottom = '20px';
    scrollToTopButton.style.right = '20px';
    scrollToTopButton.style.padding = '10px 15px';
    scrollToTopButton.style.fontSize = '20px';
    scrollToTopButton.style.border = 'none';
    scrollToTopButton.style.borderRadius = '50%';
    scrollToTopButton.style.background = 'rgba(0, 0, 0, 0.7)';
    scrollToTopButton.style.color = '#fff';
    scrollToTopButton.style.cursor = 'pointer';
    scrollToTopButton.style.display = 'none';
    scrollToTopButton.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.2)';
    document.body.appendChild(scrollToTopButton);
  
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        scrollToTopButton.style.display = 'block';
      } else {
        scrollToTopButton.style.display = 'none';
      }
    });
  
    scrollToTopButton.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  
    
    const particlesCanvas = document.createElement('canvas');
    particlesCanvas.id = 'particles';
    particlesCanvas.style.position = 'fixed';
    particlesCanvas.style.top = '0';
    particlesCanvas.style.left = '0';
    particlesCanvas.style.width = '100%';
    particlesCanvas.style.height = '100%';
    particlesCanvas.style.zIndex = '-1';
    document.body.appendChild(particlesCanvas);
  
    const canvas = particlesCanvas;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  
    const particlesArray = [];
    const colors = ['#FF5733', '#33FFBD', '#FFC300', '#337BFF', '#FF33D0'];
  
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
      }
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.size > 0.2) this.size -= 0.1;
      }
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    }
  
    function handleParticles() {
      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
        if (particlesArray[i].size <= 0.2) {
          particlesArray.splice(i, 1);
          i--;
        }
      }
    }
  
    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      handleParticles();
      requestAnimationFrame(animateParticles);
    }
  
    canvas.addEventListener('click', (event) => {
      for (let i = 0; i < 10; i++) {
        particlesArray.push(new Particle());
      }
    });
  
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  
    animateParticles();
  });
  