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


//? Função responsável pela movimentação do grid
const containerItem = document.getElementById('container-item');
const itemsWrapper = containerItem.querySelector('.items-wrapper');
const totalItems = document.querySelectorAll('.container-proj').length;
let offset = 0; //! Acompanhando a posição dos itens
const itemWidth = 490; //! Largura do item para deslocamento
const visibleItems = 11; //! mudar para caso acrescente mais projetos sempre 4 a mais que o número do     background-color: pink;
const maxOffset = (totalItems - visibleItems) * itemWidth; 

function next() {
  if (offset > -maxOffset) {
    offset -= itemWidth; 
    itemsWrapper.style.transform = `translateX(${offset}px)`;
  }
}

function prev() {
  if (offset < 0) { 
    offset += itemWidth; 
    itemsWrapper.style.transform = `translateX(${offset}px)`;
  }
}
//? -- FIM -- Função responsável pela movimentação do grid


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
