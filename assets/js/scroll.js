
let prevScroll = window.pageYOffset;
window.onscroll = () => {
  const currentScroll = window.pageYOffset;
  const nav = document.querySelector(".nav-animation");

  if (prevScroll > currentScroll) {
    if (window.pageYOffset === 0) {
      nav.style.top = "0";
    } else {
      nav.style.top = "-43px";
    }
  } else {
    nav.style.top = "-119px";
  }

  prevScroll = currentScroll;
}