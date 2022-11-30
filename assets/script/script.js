const navBar = document.getElementById('nav');
const barMenu = document.querySelector('.bars-menu')
const mobileMenu = document.querySelector('.mobile-menu')
const menu = document.querySelector('.menu')

const logo = document.querySelector('.logo')

const icon = document.querySelectorAll(".icon")
const wrapperTitle = document.querySelectorAll(".wrapper-title")
const wrapperContent = document.querySelectorAll(".wrapper-content")

const search = document.querySelector(".search")
const submit = document.querySelector(".submit-btn")
const searchBox = document.querySelector(".search-box")

const projectInfo = document.querySelectorAll(".project-info")
const infoNumber = document.querySelectorAll(".info-number")

mobileMenu.onclick = function(e) {
    mobileMenu.classList.remove('active')
    navBar.classList.add('box-shadow')
}

menu.onclick = function(e) {
    e.stopPropagation()

}

barMenu.onclick = function(e) {
    e.target.preventDefault
    mobileMenu.classList.toggle('active')
    navBar.classList.toggle('box-shadow')
}

searchBox.onclick = function(e) {
    e.target.classList.add("disable")
    search.classList.add("active")
    logo.classList.add('disable')
}

submit.onclick = function(e) {
    logo.classList.remove("disable")
    search.classList.remove("active")
    searchBox.classList.remove("disable")
}

for (let i = 0; i < icon.length; i++) {
    icon[i].onmouseover = function(e) {
        e.target.classList.remove("fs-64")
        e.target.classList.add("fs-128")
        wrapperTitle[i].classList.add("fs-24")
        wrapperContent[i].classList.add("fs-20")
        e.target.style.transition = `font-size 0.3s`
    }

    icon[i].onmouseout = function(e) {
        e.target.classList.add("fs-64")
        e.target.classList.remove("fs-128")
        wrapperTitle[i].classList.remove("fs-24")
        wrapperContent[i].classList.remove("fs-20")
        e.target.style.transition = `font-size 0.3s`
    }
}

for (let i = 0; i < infoNumber.length; i++) {
    infoNumber[i].onmouseover = function(e) {
        e.target.classList.remove("fs-36")
        e.target.classList.add("fs-64")
        projectInfo[i].style.fontSize = '25px'
        e.target.style.transition = `font-size 0.3s`
    }

    infoNumber[i].onmouseout = function(e) {
        e.target.classList.add("fs-36")
        e.target.classList.remove("fs-64")
        projectInfo[i].style.fontSize = '15px'
        e.target.style.transition = `font-size 0.3s`
    }
}

