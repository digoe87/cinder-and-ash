
require('normalize.css/normalize.css');
require('./styles/index.scss');

function preventDefault(evt) {
  evt.preventDefault();
}
document.body.style.overflow = "hidden";

window.onwheel = preventDefault; // modern standard
window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
window.ontouchmove = preventDefault; // mobile

const buttons = document.getElementsByTagName("button");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", evt => {
    const pageNum = evt.target.getAttribute("data-page");

    console.log(
      `You clicked a button and it had ${pageNum} as it's data-page attribute value`
    );

    window.scrollTo({
      behavior: "smooth",
      top: window.innerHeight * pageNum
    });
  });
}
