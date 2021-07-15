const downnav = document.querySelector(".nav_sticky");
const header = document.querySelector("header");
const class_sticky = "sticky";
const test = "test";
const down_nav_top = downnav.offsetTop;
let lastScroll = 0; 

//STICKY HEDER (You can remove the comments and open the console)

window.onscroll= () => {
  const currentScroll = window.pageYOffset; 
    if (currentScroll > lastScroll
      && window.pageYOffset > down_nav_top){
      downnav.classList.add(class_sticky)
      header.classList.remove(class_sticky)
      // console.log('lastScroll:',lastScroll)
    } else if (
      currentScroll < lastScroll ||
      window.pageYOffset < down_nav_top
      ) {
        downnav.classList.remove(class_sticky);
        header.classList.add(class_sticky);
        // console.log('lastScroll:',lastScroll)
      }
  lastScroll = currentScroll;
  // console.log("currentScroll:",currentScroll)
};




