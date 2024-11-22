const navLinksContainer = document.querySelector(".nav-links-container");
const articles = document.querySelectorAll("#timeline article");

articles.forEach((article, index) => {

  const year = article.querySelector(".year").textContent;


  const link = document.createElement("a");

  link.textContent = year;
  link.href = `#`;

  link.addEventListener("click", (event) => {
    event.preventDefault();

    article.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

  });


  navLinksContainer.appendChild(link);
});


/*
document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("header");
  const stickyMain = document.getElementById("sticky-main");

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (!entry.isIntersecting) {
        stickyMain.style.display = "flex";
      } else {
        stickyMain.style.display = "none";
      }
    },
    { root: null, threshold: 0 }
  );

  observer.observe(header);
});*/

// Listen for scroll events on the window
window.onscroll = function() {
  var arrow = document.getElementById("scrollToTop");
  // Show the arrow after scrolling beyond half the page
  if (document.body.scrollTop > window.innerHeight / 2 || document.documentElement.scrollTop > window.innerHeight / 2) {
      arrow.style.display = "block";
  } else {
      arrow.style.display = "none";
  }
};

// Function to scroll smoothly to the top of the page
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 1200, 
    easing: 'ease-in-out',
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const articles = document.querySelectorAll("#timeline article");
  const dynamicPhoto = document.getElementById("dynamicPhoto");
  const divPhoto = document.querySelector(".sticky-photo");
  const totalImages = 13; 
  const navBar = document.getElementById("navigation");

  const scrollRange = {
    start: articles[0].offsetTop, 
    end: articles[articles.length - 1].offsetTop + articles[articles.length - 1].offsetHeight, 
  };

  window.addEventListener("scroll", () => {
    const navHeight = navBar.offsetHeight;
    const scrollPosition = window.scrollY;

    if (scrollPosition >= scrollRange.start && scrollPosition <= scrollRange.end) {
      const scrollPercentage =
        (scrollPosition - scrollRange.start) /
        (scrollRange.end - scrollRange.start);

      const imageIndex = Math.min(
        totalImages,
        Math.floor(scrollPercentage * totalImages) + 1
      );

      dynamicPhoto.src = `images/e${imageIndex}.jpg`; 
    }

    if (scrollPosition <= navHeight) { 
      divPhoto.style.top = `${navHeight + 10}px`; 
    } else {
      divPhoto.style.top = "5rem";
    }

  });

  const faviconIcon = document.getElementById("faviconIcon");
  const stickyPhoto = document.querySelector(".sticky-photo");

  faviconIcon.addEventListener("click", () => {
    stickyPhoto.classList.toggle("hidden");
  });

});

