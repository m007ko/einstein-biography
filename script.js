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
