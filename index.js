// JavaScript source code
const carousel = document.querySelector("Carosel")
let circles = document.querySelectorAll("#circlepoint")
let infotext = document.querySelectorAll("#infosection div")
let currentSlide = 0;

for (let i = 0; i < circles.length; i++) {

    circles[i].addEventListener('click', function () {

        console.log('clicked' + i)

        


        if (infotext[i].classList.contains("active")) {

            /* infotext[i].classList.toggle("active");*/


        } else {

            for (let u = 0; u < infotext.length; u++) {

                if (infotext[u].classList.contains("active")) {
                    infotext[u].classList.toggle("active");
                }

                if (u == i){
                    infotext[u].classList.toggle("active");
                }
            }
        }
        

        });
}

function setup() {
    console.log(circles.length)
    console.log("connected")
}