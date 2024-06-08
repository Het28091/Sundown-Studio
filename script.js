const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});


function page4Animation() {
    var elemC = document.querySelector("#elem-container")
    var fixed = document.querySelector("#fixed-image")
    elemC.addEventListener("mouseenter", function () {
        fixed.style.display = "block"
    })
    elemC.addEventListener("mouseleave", function () {
        fixed.style.display = "none"
    })

    var elems = document.querySelectorAll(".elem")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            var image = e.getAttribute("data-image")
            fixed.style.backgroundImage = `url(${image})`
        })
    })
}

function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        // centeredSlides: true,
        spaceBetween: 100,
    });
}
function menuAnimation() {

    var menu = document.querySelector("nav h3")
    var full = document.querySelector("#full-scr")
    var navimg = document.querySelector("nav img")
    var flag = 0
    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        } else {
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
        }
    })
}

function loaderAnimation() {
    var loader = document.querySelector("#loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4200)
}

function d() {
    const d1 = document.querySelector(".d11");
    const d2 = document.querySelector(".d22");
    const d3 = document.querySelector(".d33");
    const p1 = document.querySelector("#d11");
    const p2 = document.querySelector("#d22");
    const p3 = document.querySelector("#d33");
    const imh = document.querySelector("#page3r img");

    function handleOptionClick(selected, pSelected, imageSrc) {
        [d1, d2, d3].forEach(option => option.style.color = option === selected ? "#ffffff" : "#ababab");
        [p1, p2, p3].forEach(p => p.style.display = p === pSelected ? "inline" : "none");
        imh.src = imageSrc;
    }

    d1.addEventListener("click", function () {
        handleOptionClick(d1, p1, "./64d3dd9edfb41666c35b15e1_Project-p-1080.webp");
    });

    d2.addEventListener("click", function () {
        handleOptionClick(d2, p2, "./2.webp");
    });

    d3.addEventListener("click", function () {
        handleOptionClick(d3, p3, "./3.webp");
    });
}

document.addEventListener("DOMContentLoaded", function () {
    swiperAnimation();
    page4Animation();
    menuAnimation();
    loaderAnimation();
    d();
});