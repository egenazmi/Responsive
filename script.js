const hamburger   = document.querySelector('.hamburger')
const bar1        = document.querySelector('.bar1')
const bar2        = document.querySelector('.bar2')
const bar3        = document.querySelector('.bar3')

hamburger.addEventListener('click', () => 
{
    if (bar1.classList.contains('animationBar1')) 
    {
        bar1.classList.remove('animationBar1')  
        bar2.classList.remove('animationBar2')    
        bar3.classList.remove('animationBar3')
        bar1.classList.add('animationBar1Close')  
        bar2.classList.add('animationBar2Close')    
        bar3.classList.add('animationBar3Close')
    }    
    else
    {
        bar1.classList.remove('animationBar1Close')  
        bar2.classList.remove('animationBar2Close')    
        bar3.classList.remove('animationBar3Close')
        bar1.classList.add('animationBar1')  
        bar2.classList.add('animationBar2')    
        bar3.classList.add('animationBar3')
    }
})

const navlinks    = document.querySelector('.nav-links')
hamburger.addEventListener('click', () => {
    if (category.classList.contains('openCategory')) {
        category.classList.remove('openCategory')
        navlinks.classList.add('openSideBar')
    }
    else {
        navlinks.classList.toggle('openSideBar')
    }
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
    if (navlinks.classList.contains('openSideBar')) {
        bar1.classList.remove('animationBar1')  
        bar2.classList.remove('animationBar2')    
        bar3.classList.remove('animationBar3')
        bar1.classList.add('animationBar1Close')  
        bar2.classList.add('animationBar2Close')    
        bar3.classList.add('animationBar3Close')
        navlinks.classList.remove('openSideBar')
        category.classList.add('openCategory')
    }
    else {
        category.classList.toggle('openCategory')
    }
})