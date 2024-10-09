// nav
window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem',window.scrollY > 150)
})


let currentSlide = 0;
const items = document.querySelectorAll('.container-proj');
const totalSlides = items.length;
const visibleItems = 7;
const itemWidth = 240;

document.getElementById('prev').addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
        items.forEach(item => {
            item.style.transform = `translateX(${-currentSlide * itemWidth}px)`;
        });
    }
});

document.getElementById('next').addEventListener('click', () => {
    if (currentSlide < totalSlides - visibleItems) {
        currentSlide++;
        items.forEach(item => {
            item.style.transform = `translateX(${-currentSlide * itemWidth}px)`;
        });
    }
});


// Progrsso 
const progressoHTML = document.querySelectorAll(".barra div")[0];
progressoHTML.setAttribute("style", "width: 90%;");

const progressoCSS = document.querySelectorAll(".barra div")[1];
progressoCSS.setAttribute("style", "width: 90%;");

const progressoJS = document.querySelectorAll(".barra div")[2];
progressoJS.setAttribute("style", "width: 50%;");

const progressoPYTHON = document.querySelectorAll(".barra div")[3];
progressoPYTHON.setAttribute("style", "width: 40%;"); 

const progressoREACT = document.querySelectorAll(".barra div")[4];
progressoREACT.setAttribute("style", "width: 0%;"); 

const progressoMSQL = document.querySelectorAll(".barra div")[5];
progressoMSQL.setAttribute("style", "width: 90%;"); 




