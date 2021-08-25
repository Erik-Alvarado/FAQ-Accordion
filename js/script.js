const accordionBtns = document.querySelectorAll("#accordion");

accordionBtns.forEach(accordion => {
    accordion.addEventListener("click", () => {

        if (accordion.classList.contains("is-open")) {
            accordion.classList.remove("is-open");
        } else {
            const accordionBtnsWithIsOpen = document.querySelectorAll(".is-open");
            accordionBtnsWithIsOpen.forEach((accordionBtnsWithIsOpen) => {
                accordionBtnsWithIsOpen.classList.remove("is-open");
            });
            accordion.classList.add("is-open");
        }
    })
})
accordion[1].click();
