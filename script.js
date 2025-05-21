
const navlElements = [...document.getElementsByClassName('navl')];

function highlightNavElement(element) {
    navlElements.forEach(element => {
        element.classList.remove('active');
    });
    element.classList.add('active');
}
highlightNavElement(navlElements[0]);

navlElements.forEach(element => {
    element.addEventListener('click', function() {
        highlightNavElement(element);
    });
});

const navElement = document.getElementsByTagName('nav')[0];
const articleElement = document.getElementsByTagName('article')[0];
const sectionElements = document.getElementsByTagName('section');

articleElement.addEventListener('scroll', function() {
    if (articleElement.scrollTop >= window.innerHeight) {
        navElement.classList.add('shadowbg');
    } else {
        navElement.classList.remove('shadowbg');
    }

    for (let i = 0; i < sectionElements.length; i++) {
        const section = sectionElements[i];
        if (articleElement.scrollTop >= section.offsetTop && articleElement.scrollTop < section.offsetTop + section.offsetHeight) {
            highlightNavElement(navlElements[i]);
        }
    }
});

function mod(n, m) {
    return ((n % m) + m) % m;
}

const carousels = document.getElementsByClassName('carousel');

for (const carrousel of carousels) {
    (() => {
        const slideContainer = carrousel.getElementsByClassName("slide-container")[0];
        const slides = carrousel.getElementsByClassName('slide');
        let currentSlide = 0;

        const nextButton = document.getElementsByClassName('next')[0];
        const prevButton = document.getElementsByClassName('prev')[0];

        const updateSlide = (delta) => {
            currentSlide = mod(currentSlide + delta, slides.length);
            slideContainer.scrollLeft = slides[currentSlide].offsetLeft;
        }

        nextButton.addEventListener('click', function() {
            updateSlide(1);
        });

        prevButton.addEventListener('click', function() {
            updateSlide(-1);
        });

        const autoplay = () => setInterval(() => updateSlide(1), 3000);
        let interval = autoplay();

        carrousel.addEventListener(
            "mouseenter",
            () => clearInterval(interval)
        );
        carrousel.addEventListener(
            "mouseleave",
            () => interval = autoplay()
        );
    })();
}
