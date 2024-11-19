const navigation = document.getElementById("navigation");
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


  navigation.appendChild(link);
});



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
});

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

