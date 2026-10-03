/**
 * ==========================================================================
 * MAIN JAVASCRIPT - NHÀ GIẢ KIM (THE ALCHEMIST)
 * Hiệu ứng chuyển động xịn xò:
 * 1. Intersection Observer Scroll Reveal (xuất hiện mượt mà)
 * 2. 3D Tilt tương tác bìa sách Hero
 * 3. Canvas Hạt bụi vàng Giả Kim Thuật (Golden Alchemy Dust)
 * 4. Kích hoạt thanh tiến trình rating chạy tự động khi cuộn tới
 * 5. Navbar Glassmorphism & Active Link
 * 6. Quick Buy Modal (popup mua sách)
 * ==========================================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initScrollReveal();
  initBook3dTilt();
  initAlchemyDustCanvas();
  initRatingBarsAnimation();
  initOrderModal();
});

/* ==========================================================================
   1. NAVBAR & SMOOTH SCROLL
   ========================================================================== */
function initNavbar() {
  const header = document.getElementById('mainHeader');
  const navToggle = document.getElementById('navToggle');
  const mainNav = document.getElementById('mainNav');
  const navLinks = document.querySelectorAll('.nav-link');

  // Đổi style header khi cuộn chuột
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
    highlightCurrentSection();
  }, { passive: true });

  // Mobile navigation menu toggle
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      mainNav.classList.toggle('open');
      navToggle.classList.toggle('open');
    });

    // Tự động đóng menu khi bấm vào link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mainNav.classList.remove('open');
        navToggle.classList.remove('open');
      });
    });
  }

  // Highlight menu item theo section đang hiển thị
  function highlightCurrentSection() {
    const sections = document.querySelectorAll('section[id], footer[id]');
    const scrollPos = window.scrollY + 200;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (scrollPos >= top && scrollPos < top + height) {
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }
}

/* ==========================================================================
   2. INTERSECTION OBSERVER - SCROLL REVEAL HIỆN RA XỊN XÒ
   ========================================================================== */
function initScrollReveal() {
  const revealElements = document.querySelectorAll(
    '.reveal-fade-up, .reveal-fade-left, .reveal-fade-right, .reveal-zoom-in'
  );

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          // Sau khi hiện ra xong có thể bỏ quan sát để tối ưu hiệu năng
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));
  } else {
    // Fallback cho trình duyệt cũ
    revealElements.forEach(el => el.classList.add('is-visible'));
  }
}

/* ==========================================================================
   3. HIỆU ỨNG 3D TILT TƯƠNG TÁC CHO BÌA SÁCH HERO
   ========================================================================== */
function initBook3dTilt() {
  const book = document.getElementById('heroBook3d');
  if (!book) return;

  const maxTilt = 16; // Độ nghiêng tối đa (độ)

  book.addEventListener('mousemove', (e) => {
    const rect = book.getBoundingClientRect();
    const x = e.clientX - rect.left; // Tọa độ X trong phần tử
    const y = e.clientY - rect.top;  // Tọa độ Y trong phần tử

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const tiltX = ((y - centerY) / centerY) * -maxTilt;
    const tiltY = ((x - centerX) / centerX) * maxTilt;

    book.style.transform = `rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) scale3d(1.04, 1.04, 1.04)`;
  });

  book.addEventListener('mouseleave', () => {
    // Trở về vị trí cân bằng nhẹ nhàng khi chuột rời đi
    book.style.transform = 'rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  });
}

/* ==========================================================================
   4. CANVAS HẠT BỤI VÀNG GIẢ KIM THUẬT (GOLDEN ALCHEMY DUST)
   ========================================================================== */
function initAlchemyDustCanvas() {
  const canvas = document.getElementById('alchemyDustCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let animationFrameId;
  let particles = [];
  const particleCount = 42; // Số lượng vừa đủ để nhẹ và sang trọng

  function resizeCanvas() {
    canvas.width = canvas.parentElement.offsetWidth || window.innerWidth;
    canvas.height = canvas.parentElement.offsetHeight || window.innerHeight;
  }

  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

  class DustParticle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2.2 + 0.6;
      this.speedX = (Math.random() - 0.5) * 0.4;
      this.speedY = -Math.random() * 0.5 - 0.15; // Trôi nhẹ lên trên như bụi sa mạc
      this.opacity = Math.random() * 0.6 + 0.2;
      this.fadeSpeed = (Math.random() * 0.008) + 0.003;
      this.fadeDirection = Math.random() > 0.5 ? 1 : -1;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      // Độ sáng lấp lánh (twinkle)
      this.opacity += this.fadeSpeed * this.fadeDirection;
      if (this.opacity > 0.85) {
        this.opacity = 0.85;
        this.fadeDirection = -1;
      } else if (this.opacity < 0.1) {
        this.opacity = 0.1;
        this.fadeDirection = 1;
      }

      // Khi hạt trôi ra khỏi màn hình
      if (this.y < -10 || this.x < -10 || this.x > canvas.width + 10) {
        this.reset();
        this.y = canvas.height + 5;
      }
    }

    draw() {
      ctx.save();
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(228, 197, 124, ${this.opacity})`;
      ctx.shadowBlur = 8;
      ctx.shadowColor = 'rgba(201, 160, 80, 0.7)';
      ctx.fill();
      ctx.restore();
    }
  }

  for (let i = 0; i < particleCount; i++) {
    particles.push(new DustParticle());
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
      p.update();
      p.draw();
    });
    animationFrameId = requestAnimationFrame(animate);
  }

  animate();
}

/* ==========================================================================
   5. KÍCH HOẠT THANH TIẾN TRÌNH XẾP HẠNG (RATING PROGRESS BARS)
   ========================================================================== */
function initRatingBarsAnimation() {
  const breakdownSection = document.getElementById('ratingBreakdown');
  if (!breakdownSection) return;

  const barFills = breakdownSection.querySelectorAll('.rating-bar-fill');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        barFills.forEach(bar => {
          const targetPercent = bar.getAttribute('data-percent') || '0';
          bar.style.width = `${targetPercent}%`;
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(breakdownSection);
}

/* ==========================================================================
   6. MODAL ĐẶT MUA SÁCH NHANH (QUICK BUY POPUP)
   ========================================================================== */
function initOrderModal() {
  const modal = document.getElementById('orderModal');
  const closeBtn = document.getElementById('closeOrderModal');
  const triggers = document.querySelectorAll('.buy-book-trigger');

  if (!modal) return;

  // Mở modal khi bấm các nút Mua Sách
  triggers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('open');
      document.body.style.overflow = 'hidden'; // Ngăn cuộn trang phía sau
    });
  });

  // Đóng modal
  function closeModal() {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }

  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }

  // Đóng khi click ngoài hộp modal
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Đóng khi bấm ESC
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
    }
  });
}

// Hàm tính tiền theo số lượng
window.updateOrderPrice = function(quantity) {
  const priceDisplay = document.getElementById('orderTotalPrice');
  if (!priceDisplay) return;

  const pricePerBook = 129000;
  const qty = parseInt(quantity, 10) || 1;
  const total = pricePerBook * qty;

  priceDisplay.textContent = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(total);
};

// Xử lý nộp form đặt sách
window.handleOrderSubmit = function() {
  const name = document.getElementById('customerName')?.value || 'Quý khách';
  alert(`Cảm ơn bạn ${name} đã đặt mua "Nhà Giả Kim"!\nĐơn hàng của bạn đã được ghi nhận. Chúng tôi sẽ liên hệ xác nhận sớm nhất.`);
  
  const modal = document.getElementById('orderModal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
};
