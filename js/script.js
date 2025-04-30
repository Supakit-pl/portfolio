// Alert on form submit
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    this.reset();
  });
  
  // Scroll fade-in effect
  const faders = document.querySelectorAll('.fade-in');
  
  const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px"
  };
  
  const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    });
  }, appearOptions);
  
  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
  
  function openModal(title, description) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalDescription').textContent = description;
    document.getElementById('projectModal').style.display = 'block';
  }
  
  function closeModal() {
    document.getElementById('projectModal').style.display = 'none';
  }
  
  // ปิด modal เมื่อคลิกนอกกล่อง
  window.onclick = function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  };
  