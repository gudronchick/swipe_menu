const menu = document.querySelector('.menu');
const menuWidth = menu.clientWidth;
let isPressed = false;
let distanceToEdge = 0;

const closeMenu = () => {
  menu.style.transform = `translateX(${-100}%)`;
};

const startSwipe = (e) => {
  if (e.target.classList.contains('menu__item') || e.target.classList.contains('close_btn') || !e.target.classList.contains('menu')) {
    closeMenu();
  }
  isPressed = true;
  distanceToEdge = e.pageX;
};

const moveSwipe = (e) => {
  if (isPressed && distanceToEdge <= 30) {
    let distance = 0;
    if (e.pageX >= 100) {
      distance = 0;
      menu.style.transition = 'transform .2s ease-in';
      menu.style.setProperty('pointer-events', 'all');
    } else {
      distance = -100 + (e.pageX - distanceToEdge) * 100 / menuWidth;
      menu.style.setProperty('pointer-events', 'none');
      menu.style.transition = '';
      closeMenu()
    }

    menu.style.transform = `translateX(${distance}%)`;
  }
};

const endSwipe = (e) => {
  isPressed = false;
  if (e.pageX < 100) {
    menu.style.transition = 'transform .2s ease-in';
    closeMenu()
  }
}

document.addEventListener('pointerdown', startSwipe);
document.addEventListener('pointermove', moveSwipe);
document.addEventListener('pointerup', endSwipe);