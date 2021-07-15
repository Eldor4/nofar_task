const downnav = document.querySelector(".nav_sticky");
const header = document.querySelector("header");
const class_sticky = "sticky";
const down_nav_top = downnav.offsetTop;
let lastScroll = 0; 

window.onscroll= () => {
  const currentScroll = window.pageYOffset; 
    if (currentScroll > lastScroll && window.pageYOffset > down_nav_top){
      downnav.classList.add(class_sticky)
      header.classList.remove(class_sticky)
    } else if (
      currentScroll < lastScroll || window.pageYOffset < down_nav_top){
        downnav.classList.remove(class_sticky);
        header.classList.add(class_sticky);
      }
  lastScroll = currentScroll;
};




