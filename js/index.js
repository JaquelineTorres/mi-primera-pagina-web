document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav ul li a");
    const sections = document.querySelectorAll("#secciones section");
  
    links.forEach(function(link) {
      link.addEventListener("click", function(event) {
        event.preventDefault();
        const target = this.getAttribute("href").substring(1);
        sections.forEach(function(section) {
          section.classList.add("hidden");
          if (section.id === target) {
            section.classList.remove("hidden");
          }
        });
      });
    });
  });
  