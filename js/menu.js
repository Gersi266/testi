document.addEventListener("DOMContentLoaded", () => {
  // Menu navigation functionality
  const menuNavButtons = document.querySelectorAll(".menu-nav-button")
  const menuSections = document.querySelectorAll(".menu-category")

  // Function to update active button
  function updateActiveButton() {
    const scrollPosition = window.scrollY

    // Find the current section
    menuSections.forEach((section, index) => {
      const sectionTop = section.offsetTop - 100
      const sectionBottom = sectionTop + section.offsetHeight

      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
        // Remove active class from all buttons
        menuNavButtons.forEach((button) => {
          button.classList.remove("active")
        })

        // Add active class to current button
        menuNavButtons[index].classList.add("active")
      }
    })
  }

  // Add click event to menu buttons
  menuNavButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault()

      // Get the target section
      const targetId = this.getAttribute("href").substring(1)
      const targetSection = document.getElementById(targetId)

      // Scroll to the section
      window.scrollTo({
        top: targetSection.offsetTop - 70,
        behavior: "smooth",
      })
    })
  })

  // Update active button on scroll
  window.addEventListener("scroll", updateActiveButton)

  // Initialize active button
  updateActiveButton()
})
