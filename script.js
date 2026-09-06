// ================= MENU ICON =================

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");


// Open / Close Mobile Menu

menuIcon.onclick = () => {

    menuIcon.classList.toggle("bx-x");

    navbar.classList.toggle("active");

};


// ================= SCROLL =================

window.onscroll = () => {

    menuIcon.classList.remove("bx-x");

    navbar.classList.remove("active");

};


// ================= NAVBAR ACTIVE LINK =================

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {

    let top = window.scrollY;

    sections.forEach(section => {

        let offset = section.offsetTop - 150;

        let height = section.offsetHeight;

        let id = section.getAttribute("id");

        if (
            top >= offset &&
            top < offset + height
        ) {

            navLinks.forEach(link => {

                link.classList.remove("active");

                let activeLink =
                    document.querySelector(
                        '.navbar a[href*="' + id + '"]'
                    );

                if (activeLink) {
                    activeLink.classList.add("active");
                }

            });

        }

    });

});
