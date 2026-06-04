
// FAQ Accordion

const faqItems =
document.querySelectorAll('.faq-item');

faqItems.forEach(item => {

    const question =
    item.querySelector('.faq-question');

    question.addEventListener(
        'click',
        () => {

            faqItems.forEach(faq => {

                if (faq !== item) {
                    faq.classList.remove('active');
                }

            });

            item.classList.toggle('active');
        }
    );

});


// Navbar Background on Scroll

const navbar =
document.querySelector('.navbar');

window.addEventListener(
    'scroll',
    () => {

        if (window.scrollY > 30) {

            navbar.style.background =
            'rgba(8, 12, 30, 0.88)';

            navbar.style.backdropFilter =
            'blur(24px)';

        }

        else {

            navbar.style.background =
            'rgba(8, 12, 30, 0.65)';

        }

    }
);


// Fade In Animation

const observer =
new IntersectionObserver(

(entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add(
                'show'
            );

        }

    });

},

{
    threshold: 0.12
}

);


const hiddenElements =
document.querySelectorAll(
'.glass-card, .support-box, .section-header, .faq-item'
);


hiddenElements.forEach(el => {

    el.classList.add('hidden');

    observer.observe(el);

});

