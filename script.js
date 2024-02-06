const hamburger=document.querySelector('.hamburger')


hamburger.addEventListener('click', ()=>{
    document.querySelector('.bar1').classList.toggle('animationBar1')
    document.querySelector('.bar2').classList.toggle('animationBar2')
    document.querySelector('.bar3').classList.toggle('animationBar3')
})

hamburger.addEventListener('click', ()=>{
    document.querySelector('.nav-links').classList.toggle('openSideBar')
})