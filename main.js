
const jokers_data = document.querySelector("#jokersData");



const ul_jokers = document.createElement("ul");
ul_jokers.classList.add("jokersSlide");
const li_jokers = document.createElement("li");
jokers_data.appendChild(ul_jokers);
ul_jokers.appendChild(li_jokers);

jokers.forEach(joker => {
    
    let joker_div = document.createElement("div");
    joker_div.classList.add("joker");
    
    let img = document.createElement("img");
    let img_name = joker.name.replaceAll(" ", "_");
    img.src = "assets/jokers/"+img_name+".webp";
    img.alt = joker.name;

    let popup = document.createElement("span");
    popup.classList.add("popup");

    let popup_name = document.createElement("div");
    popup_name.classList.add("popupName");
    popup_name.innerText = joker.name;
    popup.appendChild(popup_name);

    let popup_text = document.createElement("div");
    popup_text.classList.add("popupText");
    let joker_text = document.createElement("span")
    joker_text.classList.add("jokerText");
    joker_text.innerHTML = joker.text;
    popup_text.appendChild(joker_text);
    popup.appendChild(popup_text);

    let popup_rarity = document.createElement("div");
    popup_rarity.classList.add("tagPrimary");
    popup_rarity.classList.add(rarities[joker.rarity - 1].toLowerCase());
    popup_rarity.innerText = rarities[joker.rarity - 1];
    popup.appendChild(popup_rarity);
    
    if (joker.id % 5 == 1 && joker.id != 1) {
        if (joker.id % 15 == 1 && joker.id != 1) {
            jokers_data.appendChild(document.createElement("ul"));
            jokers_data.lastChild.classList.add("jokersSlide");
        }
        jokers_data.lastChild.appendChild(document.createElement("li"));
    }

    joker_div.appendChild(img);
    joker_div.appendChild(popup);

    jokers_data.lastChild.lastChild.appendChild(joker_div);
});



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








const planets_data = document.querySelector("#planetsData");



const ul_planets = document.createElement("ul");
ul_planets.classList.add("planetsSlide");
const li_planets = document.createElement("li");
planets_data.appendChild(ul_planets);
ul_planets.appendChild(li_planets);



planets.forEach(planet => {
    
    let planet_div = document.createElement("div");
    planet_div.classList.add("planet");
    
    let img = document.createElement("img");
    let img_name = planet.name.replaceAll(" ", "_");
    img.src = "assets/planets/"+img_name+".webp";
    img.alt = planet.name;

    let popup = document.createElement("span");
    popup.classList.add("popup");

    let popup_name = document.createElement("div");
    popup_name.classList.add("popupName");
    popup_name.innerText = planet.name;
    popup.appendChild(popup_name);

    let popup_text = document.createElement("div");
    popup_text.classList.add("popupText");
    let planet_text = document.createElement("span")
    planet_text.classList.add("planetText");
    planet_text.innerHTML = planet.text;
    popup_text.appendChild(planet_text);
    popup.appendChild(popup_text);

    let popup_tag = document.createElement("div");
    popup_tag.classList.add("tagPrimary");
    popup_tag.classList.add("tagPlanet");
    popup_tag.innerText = planet.tag;
    popup.appendChild(popup_tag);
    
    if (planet.id % 6 == 1 && planet.id != 1) {
        planets_data.lastChild.appendChild(document.createElement("li"));
    }

    planet_div.appendChild(img);
    planet_div.appendChild(popup);

    planets_data.lastChild.lastChild.appendChild(planet_div);
});



