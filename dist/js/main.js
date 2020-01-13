

const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');

// Select Tab Content Item
function selectItem(e) {
  removeBorder();
  removeShow();
  // Add border to current tab
  this.classList.add('tab-bg');
  // Grab Content Item from DOM
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  tabContentItem.classList.add('show');
}


function removeBorder(){
  tabItems.forEach(item => item.classList.remove('tab-bg'))
}

function removeShow(){
  tabContentItems.forEach(item => item.classList.remove('show'))
}

// Listen for Tab Click
tabItems.forEach(item => item.addEventListener('click', selectItem));


function openSideMenu() {
  document.getElementById('side-menu').style.width = '350px';
}
function closeSideMenu() {
  document.getElementById('side-menu').style.width = '0px';
}


