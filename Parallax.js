window.addEventListener("scroll", function () {
        const scrollValue = window.scrollY;
        const rocket = document.querySelector(".rocket-container");
        const content = document.querySelector(".content-container");

        rocket.style.transform = `translateY(-${scrollValue * 0.5}px)`; 
        content.style.transform = `translateY(${scrollValue * 0.5}px)`; 
});

