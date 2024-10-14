// nav
window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem',window.scrollY > 100)
})

class MobileNavbar {
    constructor(mobileMenu, navList, navLinks) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation
          ? (link.style.animation = "")
          : (link.style.animation = `navLinkFade 0.5s ease forwards ${
              index / 7 + 0.3
            }s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
      }
      return this;
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
  );
  mobileNavbar.init();


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




function erro(){
    alert('Desculpe pelo transtorno, mas o filtro de projetos ainda não está funcionando')
}