//Smoothscroll et Selection menu
const navLinks = [...document.querySelectorAll("nav a")];
const sections = [...document.querySelectorAll("section")];

let sectionsPosition;

//Calcul de la position du haut de la section en fonction du haut du doc
function positionCalculation() {
    sectionsPosition = sections.map(section => section.offsetTop)
}
positionCalculation();

navLinks.forEach(link => link.addEventListener("click", addSmoothScroll))


function addSmoothScroll(e) {
    const linkIndex = navLinks.indexOf(e.target);
    console.log(linkIndex);
    window.scrollTo({
        top: sectionsPosition[linkIndex],
        behavior: "smooth"
    })
}

window.addEventListener("resize",positionCalculation)

//Animation du tetx page accueil
const textAnim = document.querySelector("#loadText");
console.log(textAnim);
new Typewriter(textAnim,{
    deletespeed: 70
})
.changeDelay(70)
.typeString('Hey ! Moi c\'est Raphaël Diop, ')
.pauseFor(300)
.typeString('<span style="color:orange;">étudiant Dev Full-Stack.</span>')
.pauseFor(300)
.typeString('<br>')
.typeString('Bienvenue sur mon site !')
.start()

//Apparetion des éléments avec le scroll-listening
const imgPres = document.querySelector(".imgPres");
const textPres = document.querySelector(".textPres");
const carrouselImg = document.querySelector(".carrousel_img");
const projet = document.querySelectorAll("article");
const nav1 = document.querySelector("#link1");
const nav2 = document.querySelector("#link2");
const nav3 = document.querySelector("#link3");
console.log(nav1);
console.log(textPres);

window.addEventListener("scroll", (e) =>{
    if(window.scrollY > 550){
        imgPres.classList.add("reveal-visible");
        textPres.classList.add("reveal-visible");
        
    }
    if(window.scrollY > 1400){
        carrouselImg.classList.add("carrouselSlide");
    }
    if(window.scrollY > 2100){
        projet.forEach(projet => {
            projet.classList.add("reveal-visibleArt");
        });
    }
})


//Carrousel de compétences
const carrouselImages = document.querySelector(".carrousel_img");
const carrouselButtons = document.querySelectorAll("button");
const numberOfImages = document.querySelectorAll(".carrousel_img img").length;
let imageIndex = 1;
let translateX = 0;

if (screen.width > 780)
{
    carrouselButtons.forEach(button => {
        button.addEventListener("click", event =>{
            if(event.target.id === 'precedent'){
                if(imageIndex !== 1) {
                    imageIndex--;
                    translateX += 550;
                }
            } else{
                if(imageIndex !== numberOfImages){
                    imageIndex++;
                    translateX -= 550;
                }
            }
        
            carrouselImages.style.transform = `translateX(${translateX}px)`;
        })
    });
}
else
{
    carrouselButtons.forEach(button => {
        button.addEventListener("click", event =>{
            if(event.target.id === 'precedent'){
                if(imageIndex !== 1) {
                    imageIndex--;
                    translateX += 390
                }
            } else{
                if(imageIndex !== numberOfImages){
                    imageIndex++;
                    translateX -= 390;
                }
            }
        
            carrouselImages.style.transform = `translateX(${translateX}px)`;
        })
    });
}


//En cas d'utilisation d'un téléphone 

   

