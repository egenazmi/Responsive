const hamburger = document.querySelector('.hamburger')
const bar1 = document.querySelector('.bar1')
const bar2 = document.querySelector('.bar2')
const bar3 = document.querySelector('.bar3')

hamburger.addEventListener('click', () => {
    if (bar1.classList.contains('animationBar1')) {
        bar1.classList.remove('animationBar1')
        bar2.classList.remove('animationBar2')
        bar3.classList.remove('animationBar3')
        bar1.classList.add('animationBar1Close')
        bar2.classList.add('animationBar2Close')
        bar3.classList.add('animationBar3Close')
    }
    else {
        bar1.classList.remove('animationBar1Close')
        bar2.classList.remove('animationBar2Close')
        bar3.classList.remove('animationBar3Close')
        bar1.classList.add('animationBar1')
        bar2.classList.add('animationBar2')
        bar3.classList.add('animationBar3')
    }
})

const navlinks = document.querySelector('.nav-links')
hamburger.addEventListener('click', () => {
    if (category.classList.contains('openCategory')) {
        category.classList.remove('openCategory')
        navlinks.classList.add('openSideBar')
    }
    else {
        navlinks.classList.toggle('openSideBar')
    }
})

const fiyatBtn = document.querySelector('#fiyat-btn')
const fiyatBody = document.querySelector('#fiyat-body')
fiyatBtn.addEventListener('click', () => {

    if (fiyatBody.classList.contains("dropdown-open")) {
        fiyatBody.classList.remove("dropdown-open");
        fiyatBody.classList.add("dropdown-close");
        document.querySelector('#fiyat-btn .arrow').classList.remove('arrowRotateUp');
    }
    else {
        fiyatBody.classList.remove("dropdown-close");
        fiyatBody.classList.add("dropdown-open");
        document.querySelector('#fiyat-btn .arrow').classList.add('arrowRotateUp');
    }
})


const yildizbtn = document.querySelector('#yildiz-btn')
const yildizBody = document.querySelector('#yildiz-body')
yildizbtn.addEventListener('click', () => {
    if (yildizBody.classList.contains("dropdown-open")) {
        yildizBody.classList.remove("dropdown-open");
        yildizBody.classList.add("dropdown-close");
        document.querySelector('#yildiz-btn .arrow').classList.remove('arrowRotateUp');

    }
    else {
        yildizBody.classList.remove("dropdown-close");
        yildizBody.classList.add("dropdown-open");
        document.querySelector('#yildiz-btn .arrow').classList.add('arrowRotateUp');

    }
})

const renkBtn = document.querySelector('#renk-btn')
const renkBody = document.querySelector('#renk-body')

renkBtn.addEventListener('click', () => {
    if (renkBody.classList.contains("dropdown-open")) {
        renkBody.classList.remove("dropdown-open");
        renkBody.classList.add("dropdown-close");
        document.querySelector('#renk-btn .arrow').classList.remove('arrowRotateUp');

    }
    else {
        renkBody.classList.remove("dropdown-close");
        renkBody.classList.add("dropdown-open");
        document.querySelector('#renk-btn .arrow').classList.add('arrowRotateUp');

    }
})

const filterBtn = document.querySelector('.filter-btn')
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

const malzemeBtn = document.querySelector('#malzeme-btn')
const malzemeBody = document.querySelector('#malzeme-body')

malzemeBtn.addEventListener('click', () => {
    if (malzemeBody.classList.contains("dropdown-open")) {
        malzemeBody.classList.remove("dropdown-open");
        malzemeBody.classList.add("dropdown-close");
        document.querySelector('#malzeme-btn .arrow').classList.remove('arrowRotateUp');
    }
    else {
        malzemeBody.classList.remove("dropdown-close");
        malzemeBody.classList.add("dropdown-open");
        document.querySelector('#malzeme-btn .arrow').classList.add('arrowRotateUp');
    }
})
const parcaBtn = document.querySelector('#parca-btn')
const parcaBody = document.querySelector('#parca-body')
parcaBtn.addEventListener('click', () => {
    if (parcaBody.classList.contains("dropdown-open")) {
        parcaBody.classList.remove("dropdown-open");
        parcaBody.classList.add("dropdown-close");
        document.querySelector('#parca-btn .arrow').classList.remove('arrowRotateUp');
    }
    else {
        parcaBody.classList.remove("dropdown-close");
        parcaBody.classList.add("dropdown-open");
        document.querySelector('#parca-btn .arrow').classList.add('arrowRotateUp');

    }
})