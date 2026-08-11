// =====================================
// PLAY BUTTON
// =====================================

const playButton =
    document.getElementById("playButton");


playButton.addEventListener("click", () => {

    if (playButton.innerText === "▶") {

        playButton.innerText = "Ⅱ";

    } else {

        playButton.innerText = "▶";

    }

});


// =====================================
// MUSIC CARD BUTTONS
// =====================================

const cardButtons =
    document.querySelectorAll(".play-card");


cardButtons.forEach(button => {

    button.addEventListener("click", () => {

        cardButtons.forEach(btn => {

            btn.innerText = "▶";

        });

        button.innerText = "Ⅱ";

    });

});


// =====================================
// GENRE BUTTONS
// =====================================

const genres =
    document.querySelectorAll(".genre");


genres.forEach(genre => {

    genre.addEventListener("click", () => {

        genres.forEach(item => {

            item.classList.remove("active");

        });

        genre.classList.add("active");

    });

});


// =====================================
// MOBILE MENU
// =====================================

const menuButton =
    document.getElementById("menuButton");


const nav =
    document.querySelector(".nav-menu");


menuButton.addEventListener("click", () => {

    nav.classList.toggle("mobile-open");

});


// =====================================
// SIMPLE SCROLL ANIMATION
// =====================================

const cards =
    document.querySelectorAll(
        ".music-card, .artist-card"
    );


const observer =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },

        {
            threshold: .15
        }

    );


cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform =
        "translateY(20px)";

    card.style.transition =
        "opacity .6s ease, transform .6s ease";

    observer.observe(card);

});
