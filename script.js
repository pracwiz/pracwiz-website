/**
 * PracWiz Solutions - Interactive Site Logic
 * Features: Soothing Canvas Wave Background & Reclaimed Hours Calculator
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Mobile Navigation Toggle ---
  const mobileToggle = document.getElementById('mobile-toggle');
  const navLinks = document.getElementById('nav-links');

  if (mobileToggle && navLinks) {
    mobileToggle.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      mobileToggle.classList.toggle('active');
    });
  }

  // --- 2. Interactive "Reclaimed Hours" Calculator ---
  const painItems = document.querySelectorAll('.pain-item');
  const hoursSlider = document.getElementById('hours-slider');
  const hoursValDisplay = document.getElementById('hours-val');
  const resultHoursDisplay = document.getElementById('result-hours');
  const resultLabelDisplay = document.getElementById('result-label');
  const gaugeFill = document.getElementById('gauge-fill');

  // Pain point hours weights (average hours saved per week by automating them)
  const painWeights = {
    'manual-entry': 6,
    'reporting': 4,
    'downtime': 10,
    'double-entry': 5
  };

  let activePains = new Set();

  // Set up click handlers on pain points
  painItems.forEach(item => {
    item.addEventListener('click', () => {
      const painId = item.getAttribute('data-pain');
      
      if (activePains.has(painId)) {
        activePains.delete(painId);
        item.classList.remove('active');
      } else {
        activePains.add(painId);
        item.classList.add('active');
      }
      
      calculateSavings();
    });
  });

  // Set up slider input handler
  if (hoursSlider) {
    hoursSlider.addEventListener('input', (e) => {
      if (hoursValDisplay) {
        hoursValDisplay.textContent = e.target.value;
      }
      calculateSavings();
    });
  }

  function calculateSavings() {
    if (!hoursSlider || !resultHoursDisplay) return;

    const sliderVal = parseFloat(hoursSlider.value);
    
    // Sum weights of selected pain points
    let painSum = 0;
    activePains.forEach(painId => {
      painSum += painWeights[painId] || 0;
    });

    // Base savings logic: pain point automation + percentage of general overhead
    // E.g. automating custom work saves 40% of their operational overhead, plus specific pain relief
    let calculatedSaved = painSum + (sliderVal * 0.4);
    
    // Cap savings at their total slider hours (cannot save more hours than they spend)
    if (calculatedSaved > sliderVal) {
      calculatedSaved = sliderVal;
    }

    // Round to nearest integer/half-hour
    const finalSaved = Math.round(calculatedSaved * 2) / 2;
    
    // Update displays
    animateNumber(resultHoursDisplay, finalSaved);

    // Calculate days per year (8 hours standard work day)
    const daysSavedPerYear = Math.round((finalSaved * 52) / 8);
    if (resultLabelDisplay) {
      resultLabelDisplay.textContent = `Reclaims ~${daysSavedPerYear} working days/year`;
    }

    // Update gauge fill percentage
    const fillPercent = Math.min((finalSaved / 40) * 100, 100);
    if (gaugeFill) {
      gaugeFill.style.width = `${fillPercent}%`;
    }
  }

  // Helper to animate numbers nicely
  function animateNumber(element, targetVal) {
    const startVal = parseFloat(element.textContent) || 0;
    const duration = 400; // ms
    const startTime = performance.now();

    function update(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Ease out quad
      const ease = progress * (2 - progress);
      const currentVal = startVal + (targetVal - startVal) * ease;
      
      element.textContent = currentVal.toFixed(currentVal % 1 === 0 ? 0 : 1);

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }
    requestAnimationFrame(update);
  }

  // Initial run of calculator
  calculateSavings();


  // --- 3. Soothing HTML5 Canvas Wave Background Animation ---
  const canvas = document.getElementById('canvas-wave');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = 750; // Constrained to hero section
    }

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Wave properties for slow, relaxing movement
    const waves = [
      {
        y: 400,
        length: 0.002,
        amplitude: 24,
        speed: 0.004,
        offset: 0,
        color: 'rgba(224, 242, 254, 0.45)' // Sky Blue tint
      },
      {
        y: 430,
        length: 0.0015,
        amplitude: 35,
        speed: -0.003,
        offset: Math.PI / 3,
        color: 'rgba(230, 247, 240, 0.5)' // Calm Green tint
      },
      {
        y: 380,
        length: 0.003,
        amplitude: 15,
        speed: 0.005,
        offset: Math.PI / 1.5,
        color: 'rgba(14, 165, 233, 0.08)' // Accent Blue glow tint
      }
    ];

    function animateWaves() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      waves.forEach(wave => {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height);
        
        // Render sine points
        for (let x = 0; x < canvas.width; x++) {
          const y = wave.y + Math.sin(x * wave.length + wave.offset) * wave.amplitude;
          ctx.lineTo(x, y);
        }

        ctx.lineTo(canvas.width, canvas.height);
        ctx.closePath();
        ctx.fillStyle = wave.color;
        ctx.fill();

        // Increment wave offset for gentle sliding animation
        wave.offset += wave.speed;
      });

      animationFrameId = requestAnimationFrame(animateWaves);
    }

    animateWaves();
  }
});
