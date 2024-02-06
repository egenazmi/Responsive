const hamburger = document.querySelector('.hamburger')
const bar1 = document.querySelector('.bar1')
const bar2 = document.querySelector('.bar2')
const bar3 = document.querySelector('.bar3')

hamburger.addEventListener('click', () => {
    bar1.classList.toggle('animationBar1')
    bar2.classList.toggle('animationBar2')
    bar3.classList.toggle('animationBar3')
})

const navlinks = document.querySelector('.nav-links')
hamburger.addEventListener('click', () => {
    navlinks.classList.toggle('openSideBar')
})

const fiyatBtn = document.querySelector('#fiyat-btn')
const fiyatBody = document.querySelector('#fiyat-body')
fiyatBtn.addEventListener('click', () => {
    
    if (fiyatBody.classList.contains("dropdown-open")){
        fiyatBody.classList.remove("dropdown-open");
        fiyatBody.classList.add("dropdown-close");
    }
    else {
        fiyatBody.classList.remove("dropdown-close");
        fiyatBody.classList.add("dropdown-open");
    }
})
