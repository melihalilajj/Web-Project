const navSlide = () => {
    const lines = document.querySelector('.lines');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    lines.addEventListener('click', () => {


        //tpggle nav 
        nav.classList.toggle('nav-active');


        //animate links
        navLinks.forEach((link, aboutUs) => {


            if (link.style.animation) {
                link.style.animation = ''
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${aboutUs / 7 + 0.5}s`;

            }
        });

        //lines animation
        lines.classList.toggle('toggle');
    });

}


navSlide();