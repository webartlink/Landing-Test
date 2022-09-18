const menu = document.querySelector('#menu'),
navBtn = document.querySelector('#nav-btn'),
navBtnImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
	if(menu.classList.toggle('open')) {
		navBtnImg.src = "./images/nav-close.svg";
	} else {
		navBtnImg.src = "./images/nav-open.svg";
	}
};