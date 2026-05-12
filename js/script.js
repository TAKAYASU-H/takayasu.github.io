const fadeElements = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {

        if(entry.isIntersecting){

            setTimeout(() => {
                entry.target.classList.add('show');
            }, index * 200);

        }

    });
});

fadeElements.forEach((el) => observer.observe(el));