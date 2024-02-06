const hamburger   = document.querySelector('.hamburger')
const bar1        = document.querySelector('.bar1')
const bar2        = document.querySelector('.bar2')
const bar3        = document.querySelector('.bar3')

hamburger.addEventListener('click', () => {
    bar1.classList.toggle('animationBar1')
    bar2.classList.toggle('animationBar2')
    bar3.classList.toggle('animationBar3')
})

const navlinks    = document.querySelector('.nav-links')
hamburger.addEventListener('click', () => {
    navlinks.classList.toggle('openSideBar')
})

const fiyatBtn    = document.querySelector('#fiyat-btn')
const fiyatBody   = document.querySelector('#fiyat-body')
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


const yildizbtn    = document.querySelector('#yildiz-btn')
const yildizBody   = document.querySelector('#yildiz-body')
yildizbtn.addEventListener('click', () => {
    if (yildizBody.classList.contains("dropdown-open")){
        yildizBody.classList.remove("dropdown-open");
        yildizBody.classList.add("dropdown-close");
    }
    else {
        yildizBody.classList.remove("dropdown-close");
        yildizBody.classList.add("dropdown-open");
    }
})  

const renkBtn     = document.querySelector('#renk-btn')
const renkBody    = document.querySelector('#renk-body')

renkBtn.addEventListener('click', () => {
    if (renkBody.classList.contains("dropdown-open")){
        renkBody.classList.remove("dropdown-open");
        renkBody.classList.add("dropdown-close");
    }
    else {
        renkBody.classList.remove("dropdown-close");
        renkBody.classList.add("dropdown-open");
    }
})

const filterBtn    = document.querySelector('.filter-btn')
const category = document.querySelector('.categories')
filterBtn.addEventListener('click', () => {
    category.classList.toggle('openCategory')
})