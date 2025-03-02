const presenceEl = document.getElementById('presence');
const nomsEl = document.getElementById('noms');

presenceEl.addEventListener('change', updateLink);
nomsEl.addEventListener('input', updateLink);

function updateLink() {
    const presence = presenceEl.value;
    const noms = nomsEl.value;
    const subject = `RSVP Mariage Sarah & Julien - ${presence}`;
    const body = `Noms: ${noms}\nPrésence: ${presence}`;
    const mailtoLink = `mailto:s.nehme.perso@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    document.getElementById('mailto').setAttribute('href', mailtoLink);
    console.log(mailtoLink);
};

const navlElements = [...document.getElementsByClassName('navl')];

function highlightNavElement(element) {
    navlElements.forEach(element => {
        element.classList.remove('active');
    });
    element.classList.add('active');
}


navlElements.forEach(element => {
    element.addEventListener('click', function() {
        highlightNavElement(element);
    });
});

const navElement = document.getElementsByTagName('nav')[0];
const articleElement = document.getElementsByTagName('article')[0];

articleElement.addEventListener('scroll', function() {
    if (articleElement.scrollTop >= window.innerHeight) {
        navElement.classList.add('shadowbg');

        if (articleElement.scrollTop >= window.innerHeight * 3) {
            highlightNavElement(navlElements[3]);
        } else if (articleElement.scrollTop >= window.innerHeight * 2) {
            highlightNavElement(navlElements[2]);
        } else {
            highlightNavElement(navlElements[1]);
        }

    } else {
        navElement.classList.remove('shadowbg');
        highlightNavElement(navlElements[0]);
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

        const nextButton = carrousel.getElementsByClassName('next')[0];
        const prevButton = carrousel.getElementsByClassName('prev')[0];

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

        const autoplay = () => setInterval(() => updateSlide(1), 4000);
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
