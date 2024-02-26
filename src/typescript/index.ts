const App = (function () {
    class Toggler {
        static start() {
            const ratingCard: HTMLElement | null = document.getElementById("rating-card");
            const thankCard: HTMLElement | null = document.getElementById("thank");
            const textAfterSelect: HTMLElement | null = document.getElementById("text-after-select");

            const numbers = document.querySelectorAll(".rating-card__numbers__item");

            numbers.forEach(num => {
                num.addEventListener("click", () => {
                    ratingCard?.classList.add("hide");
                    thankCard?.classList.add("show");

                    textAfterSelect!.textContent = `You selected ${num.textContent} out of 5`;
                });
            });
        }
    }

    return {
        init: Toggler.start
    };
})();

App.init();