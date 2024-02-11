let slider = document.getElementById('slider');
let cards = slider.querySelectorAll('.s_card');
let currentIndex = 0;

function scrollSlider(direction) {
    currentIndex += direction;
    if (currentIndex < 0) {
        currentIndex = cards.length - 1;
    } else if (currentIndex >= cards.length) {
        currentIndex = 0;
    }
    cards[currentIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
}


