let menu = document.querySelector('.menu');
let isPressed = null;
let distanceToEdge = 0;
let isMoved = null;


const startSwipe = (e) => {
  if (e.target.classList.contains('menu__item') ||
    e.target.classList.contains('close_btn') ||
    !e.target.classList.contains('menu')) {
    menu.style.transform = `translateX(${-101}%)`;
  }
  isPressed = true;
  distanceToEdge = e.pageX;
};

let moveSwipe = (e) => {
  let distance = 0;
  if (isPressed && distanceToEdge <= 30) {
    if (e.pageX <= menu.clientWidth) {
      isMoved = true;
      menu.classList.remove('active');
      distance = -100 + (e.pageX - distanceToEdge) * 100 / menu.clientWidth;
    }
    menu.style.transform = `translateX(${distance}%)`;
    distance = null;
  }
};

const endSwipe = (e) => {
  isPressed = null;
  distanceToEdge = null;
  menu.classList.add('active');
  if (e.pageX >= 50 && isMoved) {
    menu.style.transform = `translateX(${0}%)`;
    isMoved = null;
  } else {
    menu.style.transform = `translateX(${-101}%)`;
  }
  isMoved = null;
}

document.addEventListener('pointerdown', startSwipe);
document.addEventListener('pointermove', moveSwipe);
document.addEventListener('pointerup', endSwipe);