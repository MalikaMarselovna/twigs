const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};

setTimeout(function (){
    loader.remove();
    section.style.display = 'flex';
    header.style.display = 'flex';
    footer.style.display = ' ';
    order.style.display = 'flex';
    about.style.display = 'flex';
    start.style.display = 'flex';
    advantages.style.display = 'flex';
    partners.style.display = 'flex';
    program.style.display = 'flex';
    mentors.style.display = 'flex';
    form.style.display = 'flex';
}, 2000)



console.log($('.btn'))

