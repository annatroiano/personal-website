// ------------------ HAMBURGER MENU ------------------
const hamburgerIcon = document.querySelector(".hamburger");
const hamburgerMenu = document.querySelector(".navbar");
const bar1 = document.querySelector(".bar1");
const bar2 = document.querySelector(".bar2");
const bar3 = document.querySelector(".bar3");
const hamburgerLinks = document.querySelectorAll("li a");
const heroSection = document.querySelector(".hero-section");
const arrowButton = document.querySelector("button");

//animazione dei link quando si apre l'hamburger menu
function linkAnimation() {
  let animationIncrease = 0;
  for (let i = 0; i < hamburgerLinks.length; i++) {
    if (!hamburgerLinks[i].style.animation) {
      animationIncrease += 0.2;
      hamburgerLinks[i].style.animation = `linkAnimation ${
        0.5 + animationIncrease
      }s ease-in-out forwards`;
    } else {
      hamburgerLinks[i].style.animation = "";
    }
  }
}

//al click sull'icona dell'hamburger menu
function openCloseMenu() {
  hamburgerMenu.classList.toggle("navbar-display");
  bar1.classList.toggle("bar1-open");
  bar2.classList.toggle("bar2-open");
  bar3.classList.toggle("bar3-open");
  linkAnimation();
}

//per chiudere l'hamburger menu con click su hero section
function closeMenu() {
  hamburgerMenu.classList.remove("navbar-display");
  bar1.classList.remove("bar1-open");
  bar2.classList.remove("bar2-open");
  bar3.classList.remove("bar3-open");
  linkAnimation();
  for (let i = 0; i < hamburgerLinks.length; i++) {
    hamburgerLinks[i].style.animation = ""; //reset per nuova animazione cliccando di nuovo su icona dell'hamburger menu
  }
}

hamburgerIcon.addEventListener("click", openCloseMenu);
heroSection.addEventListener("click", closeMenu);

// ------------------ ARROW UP BUTTON ------------------

function showButton() {
  arrowButton.classList.remove("up-display-not");
  arrowButton.classList.add("up-display");
}

function removeButton() {
  let y = window.scrollY;
  if (y < 11) {
    arrowButton.classList.remove("up-display");
  }
}

window.addEventListener("scroll", showButton);
window.addEventListener("scroll", removeButton);
