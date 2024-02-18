const signUpBtn = document.getElementById("signUp-btn_before");
const signInbtn = document.getElementById("signin-btn_before");
const mainInner = document.getElementById("main-inner");

signInbtn.addEventListener("click", () => {
    mainInner.classList.toggle("rotate180");
});
signUpBtn.addEventListener("click", () => {
    mainInner.classList.toggle("rotate180");
});

const hamburger = document.querySelector(".hamburger");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");

hamburger.addEventListener("click", () => {
    if (bar1.classList.contains("animationBar1")) {
        bar1.classList.remove("animationBar1");
        bar2.classList.remove("animationBar2");
        bar3.classList.remove("animationBar3");
        bar1.classList.add("animationBar1Close");
        bar2.classList.add("animationBar2Close");
        bar3.classList.add("animationBar3Close");
    } else {
        bar1.classList.remove("animationBar1Close");
        bar2.classList.remove("animationBar2Close");
        bar3.classList.remove("animationBar3Close");
        bar1.classList.add("animationBar1");
        bar2.classList.add("animationBar2");
        bar3.classList.add("animationBar3");
    }
});

const navlinks = document.querySelector(".nav-links");
hamburger.addEventListener("click", () => {
    navlinks.classList.toggle("openSideBar");
});

const mobileLoginBtn = document.getElementById("mobileLoginBtn");
const mobileSignInBtn = document.getElementById("mobileSignUp-Btn");
const backSide = document.getElementById("backSide");
const frontSide = document.getElementById("FrontSide");
mobileLoginBtn.addEventListener("click", () => {
    mainInner.classList.toggle("rotate180");
});
mobileSignInBtn.addEventListener("click", () => {
    mainInner.classList.toggle("rotate180");
});