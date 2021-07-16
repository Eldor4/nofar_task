const downnav = document.querySelector(".nav_sticky");
const header = document.querySelector("header");
const class_sticky = "sticky";
const down_nav_top = downnav.offsetTop;
const imgMessage = document.querySelector(".img_message");
const panelChat = document.querySelector(".panel_chat");
const closeBtn = document.querySelector(".close_btn");
const hiddenChat = "hidden_chat";
const visibleChat = "visible_chat";

//sticky nav
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

//open chat
imgMessage.onclick=()=>{
    panelChat.classList.add(visibleChat)
    panelChat.classList.remove(hiddenChat)
}
//close chat
closeBtn.onclick=()=>{
    panelChat.classList.add(hiddenChat)
    panelChat.classList.remove(visibleChat)
}



