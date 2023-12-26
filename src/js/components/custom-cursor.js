const cursor = document.querySelector(".js-cursor");
const contentBox = document.querySelectorAll('.content');

const showCursor = () => {
  cursor.style.opacity = 1;
  cursor.classList.add('cursor--active');
}

const hideCursor = () => {
  cursor.style.opacity = 0;
  cursor.classList.remove('cursor--active');
}


contentBox.forEach((slide) => {
  slide.addEventListener("mouseenter", showCursor);
  slide.addEventListener("mouseleave", hideCursor);
});

document.addEventListener("mousemove", function (e) {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});
