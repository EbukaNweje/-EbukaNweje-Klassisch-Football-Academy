const menu = document.querySelector('.fa-bars');
const menuList = document.querySelector('.menuList');
const CloseDiv = document.querySelector('.MenuBar2');
const closeMenu = document.querySelector('.fa-times');

menu.onclick = () => {
  menuList.style.display = 'flex';
  closeMenu.style.display = 'block';
  menu.style.display = 'none';
  CloseDiv.style.display = 'flex';
};

closeMenu.onclick = () => {
  menuList.style.display = 'none';
  menu.style.display = 'flex';
  closeMenu.style.display = 'none';
  CloseDiv.style.display = 'none';
  window.location.reload();
};