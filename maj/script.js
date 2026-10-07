const sectionLinks = document.querySelectorAll(".section-link");

        sectionLinks.forEach(link => {

            link.addEventListener("click", function(event) {

                event.preventDefault();

                const targetId = this.getAttribute("href");
                const targetSection = document.querySelector(targetId);

                if (targetSection) {

                    const sectionTop = targetSection.getBoundingClientRect().top;
                    const sectionHeight = targetSection.offsetHeight;
                    const screenHeight = window.innerHeight;

                    const scrollPosition =
                        window.scrollY +
                        sectionTop +
                        (sectionHeight / 2) -
                        (screenHeight / 2);

                    window.scrollTo({
                        top: scrollPosition,
                        behavior: "smooth"
                    });

                }

            });

        });
