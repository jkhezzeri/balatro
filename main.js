

const jokers_slide = document.querySelectorAll(".jokersSlide");
const page_jokers = document.querySelector("#pageJokers");
const pages_jokers = document.querySelector("#pagesJokers");


jokers_slide.forEach(slide => {
    slide.style.display = "none";
});
jokers_slide[0].style.display = "flex";
page_jokers.innerHTML = 1;
pages_jokers.innerHTML = jokers_slide.length;


function changeJokersSlide(page) {
    let current_page_jokers = parseInt(page_jokers.innerHTML);
    jokers_slide[current_page_jokers-1].style.display = "none";
    if (current_page_jokers + page == 0) {
        current_page_jokers = jokers_slide.length;
    } else if (current_page_jokers + page > jokers_slide.length) {
        current_page_jokers = 1;
    } else {
        current_page_jokers = current_page_jokers + page;
    }
    page_jokers.innerHTML = current_page_jokers;
    jokers_slide[current_page_jokers-1].style.display = "flex";
}

