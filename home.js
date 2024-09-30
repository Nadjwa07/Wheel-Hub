var counter = 1;

setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 5){
        counter = 1;
    }
},5000)

let currentIndex = 0;
const slides = document.querySelector('.content-slides');
const totalSlides = document.querySelectorAll('.content-slide').length;

document.querySelector('.prev').addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalSlides - 1; // loop back to the last slide
    }
    updateSlidePosition();
});

document.querySelector('.next').addEventListener('click', () => {
    if (currentIndex < totalSlides - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; // loop back to the first slide
    }
    updateSlidePosition();
});

function updateSlidePosition() {
    const newTransformValue = `translateX(-${currentIndex * 100 / totalSlides}%)`;
    slides.style.transform = newTransformValue;
}

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;
    const radioButtons = document.querySelectorAll('[name="radio-btn"]');

    const updateSlides = () => {
        slides.forEach((slide, index) => {
            const text = slide.querySelector('.slide-text');
            if (index === currentSlide) {
                text.style.animation = `fadeIn 2s forwards`;
            } else {
                text.style.opacity = 0;
                text.style.animation = 'none';
            }
        });
    };

    const autoSlide = () => {
        currentSlide = (currentSlide + 1) % slides.length;
        radioButtons[currentSlide].checked = true; // Update radio button
        updateSlides();
    };

    const handleRadioChange = () => {
        radioButtons.forEach((radioButton, index) => {
            if (radioButton.checked) {
                currentSlide = index;
                updateSlides();
            }
        });
    };

    setInterval(autoSlide, 5000); // Adjust timing as needed
    updateSlides();

    radioButtons.forEach(radioButton => {
        radioButton.addEventListener('change', handleRadioChange);
    });
});
