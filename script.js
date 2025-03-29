document.addEventListener("DOMContentLoaded", () => {
  // Navigation functionality
  const navLinks = document.querySelectorAll("nav a")
  const sections = document.querySelectorAll(".section")

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault()

      // Remove active class from all links and sections
      navLinks.forEach((link) => link.classList.remove("active"))
      sections.forEach((section) => section.classList.remove("active"))

      // Add active class to clicked link
      this.classList.add("active")

      // Show the corresponding section
      const sectionId = this.getAttribute("data-section")
      document.getElementById(sectionId).classList.add("active")
    })
  })

  // Getting Started button functionality
  const getStartedBtn = document.getElementById("getting-started")
  getStartedBtn.addEventListener("click", () => {
    // Remove active class from all links and sections
    navLinks.forEach((link) => link.classList.remove("active"))
    sections.forEach((section) => section.classList.remove("active"))

    // Activate the Find Groups section
    document.querySelector('nav a[data-section="find"]').classList.add("active")
    document.getElementById("find").classList.add("active")
  })
})
