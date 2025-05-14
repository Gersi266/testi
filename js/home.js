document.addEventListener("DOMContentLoaded", () => {
  // Hero Slider
  const slides = document.querySelectorAll(".slide")
  const dots = document.querySelectorAll(".slider-dots .dot")
  const prevBtn = document.querySelector(".slider-btn.prev")
  const nextBtn = document.querySelector(".slider-btn.next")
  let currentSlide = 0
  let slideInterval

  // Initialize slider
  function initSlider() {
    if (slides.length === 0) return

    // Set first slide as active
    showSlide(currentSlide)

    // Start auto sliding
    startSlideInterval()

    // Add event listeners
    if (prevBtn) {
      prevBtn.addEventListener("click", prevSlide)
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", nextSlide)
    }

    dots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        showSlide(index)
        resetSlideInterval()
      })
    })
  }

  // Show specific slide
  function showSlide(index) {
    slides.forEach((slide) => slide.classList.remove("active"))
    dots.forEach((dot) => dot.classList.remove("active"))

    currentSlide = index

    if (currentSlide >= slides.length) {
      currentSlide = 0
    } else if (currentSlide < 0) {
      currentSlide = slides.length - 1
    }

    slides[currentSlide].classList.add("active")
    dots[currentSlide].classList.add("active")
  }

  // Next slide
  function nextSlide() {
    showSlide(currentSlide + 1)
    resetSlideInterval()
  }

  // Previous slide
  function prevSlide() {
    showSlide(currentSlide - 1)
    resetSlideInterval()
  }

  // Start auto sliding
  function startSlideInterval() {
    slideInterval = setInterval(nextSlide, 5000)
  }

  // Reset auto sliding timer
  function resetSlideInterval() {
    clearInterval(slideInterval)
    startSlideInterval()
  }

  // Initialize slider
  initSlider()

  // Testimonial Slider
  const testimonials = document.querySelectorAll(".testimonial")
  const testimonialDots = document.querySelectorAll(".testimonial-dots .dot")

  let currentTestimonial = 0
  let testimonialInterval

  function initTestimonialSlider() {
    if (testimonials.length === 0) return

    showTestimonial(currentTestimonial)
    startTestimonialInterval()

    testimonialDots.forEach((dot, index) => {
      dot.addEventListener("click", () => {
        showTestimonial(index)
        resetTestimonialInterval()
      })
    })
  }

  function showTestimonial(index) {
    testimonials.forEach((testimonial) => testimonial.classList.remove("active"))
    testimonialDots.forEach((dot) => dot.classList.remove("active"))

    currentTestimonial = index

    if (currentTestimonial >= testimonials.length) {
      currentTestimonial = 0
    } else if (currentTestimonial < 0) {
      currentTestimonial = testimonials.length - 1
    }

    testimonials[currentTestimonial].classList.add("active")
    testimonialDots[currentTestimonial].classList.add("active")
  }

  function nextTestimonial() {
    showTestimonial(currentTestimonial + 1)
    resetTestimonialInterval()
  }

  function startTestimonialInterval() {
    testimonialInterval = setInterval(nextTestimonial, 6000)
  }

  function resetTestimonialInterval() {
    clearInterval(testimonialInterval)
    startTestimonialInterval()
  }

  initTestimonialSlider()
})
