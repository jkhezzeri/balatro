


document.documentElement.setAttribute('data-contrast', localStorage.getItem("contrast"));



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
    let joker_text = document.createElement("span");
    joker_text.classList.add("popupEffect");
    joker_text.innerHTML = joker.text;
    popup_text.appendChild(joker_text);
    popup.appendChild(popup_text);

    let popup_rarity = document.createElement("div");
    popup_rarity.classList.add("tagPrimary");
    popup_rarity.classList.add(rarities[joker.rarity - 1].toLowerCase());
    popup_rarity.innerText = rarities[joker.rarity - 1];
    popup.appendChild(popup_rarity);
    
    if (joker.id % 5 == 1 && joker.id != 1) {
        if (joker.id % 15 == 1) {
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



const cards_data = document.querySelector("#cardsData");

const ul_cards = document.createElement("ul");
ul_cards.classList.add("cardsSlide");
const li_cards = document.createElement("li");
cards_data.appendChild(ul_cards);
ul_cards.appendChild(li_cards);

cards.forEach(card => {
    
    let card_div = document.createElement("div");
    card_div.classList.add("card");
    
    let img = document.createElement("img");
    let img_name = card.name.replaceAll(" ", "_");
    img.src = "assets/cards/" + img_name + ".webp";
    img.alt = card.name;

    let popup = document.createElement("span");
    popup.classList.add("popup");

    let popup_name = document.createElement("div");
    popup_name.classList.add("tagSecondary");

    if (card.name.includes("Spades")) {
        card_tag = card.name.replace(" Spades", `&nbsp;${text_spade}Spades${text_end}`);
    } else if (card.name.includes("Hearts")) {
        card_tag = card.name.replace(" Hearts", `&nbsp;${text_heart}Hearts${text_end}`);
    } else if (card.name.includes("Clubs")) {
        card_tag = card.name.replace(" Clubs", `&nbsp;${text_club}Clubs${text_end}`);
    } else if (card.name.includes("Diamonds")) {
        card_tag = card.name.replace(" Diamonds", `&nbsp;${text_diamond}Diamonds${text_end}`);
    }

    popup_name.innerHTML = card_tag;
    popup.appendChild(popup_name);

    let popup_text = document.createElement("div");
    popup_text.classList.add("popupText");
    let card_text = document.createElement("span");
    card_text.classList.add("popupEffect");

    if (card.name.includes("Ace")) {
        card_text.innerHTML = `${text_chip}+11${text_end} chips`;
    } else if (card.name.includes("King") || card.name.includes("Queen") || card.name.includes("Jack") || card.name.includes("10")) {
        card_text.innerHTML = `${text_chip}+10${text_end} chips`;
    } else {
        card_text.innerHTML = `${text_chip}+` + card.name.charAt(0) + `${text_end} chips`;
    }

    popup_text.appendChild(card_text);
    popup.appendChild(popup_text);
    
    if (card.id % 13 == 1 && card.id != 1) {
        ul_cards.appendChild(document.createElement("li"));
    }

    card_div.appendChild(img);
    card_div.appendChild(popup);

    ul_cards.lastChild.appendChild(card_div);
});



const hands_data = document.querySelector("#handsData");



const ul_hands = document.createElement("ul");
ul_hands.classList.add("handsSlide");
hands_data.appendChild(ul_hands);

hands.forEach(hand => {
    let li_hands = document.createElement("li");
    ul_hands.appendChild(li_hands);
    
    let hand_div = document.createElement("div");
    hand_div.classList.add("hand");

    let hand_stat = document.createElement("div");
    hand_stat.classList.add("handStat");

    hand_stat.innerHTML = "#";

    let hand_count = document.createElement("span");
    hand_count.classList.add("handCount");
    hand_count.innerText = "0";
    hand_stat.appendChild(hand_count);

    let hand_level = document.createElement("span");
    hand_level.classList.add("handLevel");
    hand_level.innerText = "lvl.1";
    hand_stat.appendChild(hand_level);

    let hand_name = document.createElement("div");
    hand_name.classList.add("handName");
    hand_name.innerText = hand.name;
    
    let hand_score = document.createElement("div");
    hand_score.classList.add("handScore");

    let hand_chip = document.createElement("span");
    hand_chip.classList.add("handChip");
    hand_chip.innerText = hand.chips;
    hand_score.appendChild(hand_chip);

    hand_score.innerHTML += "X";

    let hand_mult = document.createElement("span");
    hand_mult.classList.add("handMult");
    hand_mult.innerText = hand.mult;
    hand_score.appendChild(hand_mult);

    hand_div.appendChild(hand_stat);
    hand_div.appendChild(hand_name);
    hand_div.appendChild(hand_score);

    let popup = document.createElement("span");
    popup.classList.add("popup");

    let popup_hand = document.createElement("div");
    popup_hand.classList.add("popupHand");

    let hand_text = document.createElement("div");
    hand_text.classList.add("handText");
    hand_text.innerHTML = hand.text;
    popup_hand.appendChild(hand_text);

    let hand_cards = document.createElement("ul");
    hand_cards.classList.add("handCards");

    for (let i_cards = 0; i_cards < 5; i_cards++) {
        let hand_card = document.createElement("li");

        let card = document.createElement("img");
        let card_name = hand.example[i_cards].card.replaceAll(" ", "_");
        card.src = "assets/cards/"+card_name+".webp";
        card.alt = hand.example[i_cards].card;

        if (!hand.example[i_cards].active) {
            card.classList.add("unscored");
        }

        hand_card.appendChild(card);

        hand_cards.appendChild(hand_card);
    }

    popup_hand.appendChild(hand_cards);

    let popup_planet = document.createElement("div");
    popup_planet.classList.add("popupPlanet");



    let planet_score = document.createElement("div");
    planet_score.classList.add("planetScore");

    let planet_chip = document.createElement("span");
    planet_chip.classList.add("planetChip");
    planet_chip.innerHTML = "+" + hand.planet.chip;

    let planet_mult = document.createElement("span");
    planet_mult.classList.add("planetMult");
    planet_mult.innerHTML = "+" + hand.planet.mult;

    planet_score.appendChild(planet_chip);
    planet_score.appendChild(planet_mult);

    popup_planet.appendChild(planet_score);

    let planet_card = document.createElement("img");
    let planet_name = hand.planet.name.replaceAll(" ", "_");
    planet_card.src = "assets/planets/"+planet_name+".webp";
    planet_card.alt = hand.planet.name;

    popup_planet.appendChild(planet_card);



    popup.appendChild(popup_hand);
    popup.appendChild(popup_planet);
    
    hand_div.appendChild(popup);



    li_hands.appendChild(hand_div);
});



const tarots_data = document.querySelector("#tarotsData");



const ul_tarots = document.createElement("ul");
ul_tarots.classList.add("tarotsSlide");
const li_tarots = document.createElement("li");
tarots_data.appendChild(ul_tarots);
ul_tarots.appendChild(li_tarots);

tarots.forEach(tarot => {
    
    let tarot_div = document.createElement("div");
    tarot_div.classList.add("tarot");
    
    let img = document.createElement("img");
    let img_name = tarot.name.replaceAll(" ", "_");
    img.src = "assets/tarots/"+img_name+".webp";
    img.alt = tarot.name;

    let popup = document.createElement("span");
    popup.classList.add("popup");

    let popup_name = document.createElement("div");
    popup_name.classList.add("popupName");
    popup_name.innerText = tarot.name;
    popup.appendChild(popup_name);

    let popup_text = document.createElement("div");
    popup_text.classList.add("popupText");
    let tarot_text = document.createElement("span");
    tarot_text.classList.add("popupEffect");
    tarot_text.innerHTML = tarot.text;
    popup_text.appendChild(tarot_text);
    popup.appendChild(popup_text);

    let popup_tag = document.createElement("div");
    popup_tag.classList.add("tagPrimary");
    popup_tag.classList.add("tagTarot");
    popup_tag.innerText = "Tarot";
    popup.appendChild(popup_tag);
    
    if (tarot.id == 6 || tarot.id == 12 || tarot.id == 17) {
        if (tarot.id == 12) {
            tarots_data.appendChild(document.createElement("ul"));
            tarots_data.lastChild.classList.add("tarotsSlide");
        }
        tarots_data.lastChild.appendChild(document.createElement("li"));
    }

    tarot_div.appendChild(img);
    tarot_div.appendChild(popup);

    tarots_data.lastChild.lastChild.appendChild(tarot_div);
});



const tarots_slide = document.querySelectorAll(".tarotsSlide");

let tarots_element = document.querySelectorAll(".tarotsSlide li");
const tarots_card = document.querySelectorAll(".tarotsSlide .tarot");

function responsiveTarots() {
    if (window.innerWidth <= 570) {
        if (tarots_element.length == 4) {
            tarots_slide.forEach(tarot_slide => {
                tarot_slide.appendChild(document.createElement("li"));
            });
            tarots_element = document.querySelectorAll(".tarotsSlide li");

            tarots_element[1].prepend(tarots_card[4]);
            tarots_element[2].append(tarots_card[7]);
            tarots_element[2].append(tarots_card[8]);
            tarots_element[2].append(tarots_card[9]);
            tarots_element[2].append(tarots_card[10]);
    
            tarots_element[4].prepend(tarots_card[15]);
            tarots_element[5].append(tarots_card[18]);
            tarots_element[5].append(tarots_card[19]);
            tarots_element[5].append(tarots_card[20]);
            tarots_element[5].append(tarots_card[21]);
        }
    } else {
        if (tarots_element.length == 6) {
            tarots_element[0].append(tarots_card[4]);
            tarots_element[1].append(tarots_card[7]);
            tarots_element[1].append(tarots_card[8]);
            tarots_element[1].append(tarots_card[9]);
            tarots_element[1].append(tarots_card[10]);

            tarots_element[3].append(tarots_card[15]);
            tarots_element[4].append(tarots_card[18]);
            tarots_element[4].append(tarots_card[19]);
            tarots_element[4].append(tarots_card[20]);
            tarots_element[4].append(tarots_card[21]);

            tarots_slide.forEach(tarot_slide => {
                tarot_slide.lastChild.remove();
            });
            tarots_element = document.querySelectorAll(".tarotsSlide li");
        }
    }
}
responsiveTarots();
window.addEventListener("resize", responsiveTarots);



const page_tarots = document.querySelector("#pageTarots");
const pages_tarots = document.querySelector("#pagesTarots");


tarots_slide.forEach(slide => {
    slide.style.display = "none";
});
tarots_slide[0].style.display = "flex";
page_tarots.innerHTML = 1;
pages_tarots.innerHTML = tarots_slide.length;


function changeTarotsSlide(page) {
    let current_page_tarots = parseInt(page_tarots.innerHTML);
    tarots_slide[current_page_tarots-1].style.display = "none";
    if (current_page_tarots + page == 0) {
        current_page_tarots = tarots_slide.length;
    } else if (current_page_tarots + page > tarots_slide.length) {
        current_page_tarots = 1;
    } else {
        current_page_tarots = current_page_tarots + page;
    }
    page_tarots.innerHTML = current_page_tarots;
    tarots_slide[current_page_tarots-1].style.display = "flex";
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
    let planet_text = document.createElement("span");
    planet_text.classList.add("popupEffect");
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



const planets_slide = document.querySelector(".planetsSlide");

let planets_element = document.querySelectorAll(".planetsSlide li");
const planets_card = document.querySelectorAll(".planetsSlide .planet");

function responsivePlanets() {
    if (window.innerWidth <= 570) {
        if (planets_element.length == 2) {
            planets_slide.appendChild(document.createElement("li"));
            planets_element = document.querySelectorAll(".planetsSlide li");

            planets_element[1].prepend(planets_card[5]);
            planets_element[1].prepend(planets_card[4]);
            planets_element[2].append(planets_card[8]);
            planets_element[2].append(planets_card[9]);
            planets_element[2].append(planets_card[10]);
            planets_element[2].append(planets_card[11]);
    
        }
    } else {
        if (planets_element.length == 3) {
            planets_element[0].append(planets_card[4]);
            planets_element[0].append(planets_card[5]);
            planets_element[1].append(planets_card[8]);
            planets_element[1].append(planets_card[9]);
            planets_element[1].append(planets_card[10]);
            planets_element[1].append(planets_card[11]);

            planets_slide.lastChild.remove();
            planets_element = document.querySelectorAll(".planetsSlide li");
        }
    }
}
responsivePlanets();
window.addEventListener("resize", responsivePlanets);



const spectrals_data = document.querySelector("#spectralsData");



const ul_spectrals = document.createElement("ul");
ul_spectrals.classList.add("spectralsSlide");
const li_spectrals = document.createElement("li");
spectrals_data.appendChild(ul_spectrals);
ul_spectrals.appendChild(li_spectrals);

spectrals.forEach(spectral => {
    
    let spectral_div = document.createElement("div");
    spectral_div.classList.add("spectral");
    
    let img = document.createElement("img");
    let img_name = spectral.name.replaceAll(" ", "_");
    img.src = "assets/spectrals/"+img_name+".webp";
    img.alt = spectral.name;

    let popup = document.createElement("span");
    popup.classList.add("popup");

    let popup_name = document.createElement("div");
    popup_name.classList.add("popupName");
    popup_name.innerText = spectral.name;
    popup.appendChild(popup_name);

    let popup_text = document.createElement("div");
    popup_text.classList.add("popupText");
    let spectral_text = document.createElement("span");
    spectral_text.classList.add("popupEffect");
    spectral_text.innerHTML = spectral.text;
    popup_text.appendChild(spectral_text);
    popup.appendChild(popup_text);

    let popup_tag = document.createElement("div");
    popup_tag.classList.add("tagPrimary");
    popup_tag.classList.add("tagSpectral");
    popup_tag.innerText = "Spectral";
    popup.appendChild(popup_tag);
    
    if (spectral.id == 5 || spectral.id == 10 || spectral.id == 14) {
        if (spectral.id == 10) {
            spectrals_data.appendChild(document.createElement("ul"));
            spectrals_data.lastChild.classList.add("spectralsSlide");
        }
        spectrals_data.lastChild.appendChild(document.createElement("li"));
    }

    spectral_div.appendChild(img);
    spectral_div.appendChild(popup);

    spectrals_data.lastChild.lastChild.appendChild(spectral_div);
});



const spectrals_slide = document.querySelectorAll(".spectralsSlide");



let spectrals_element = document.querySelectorAll(".spectralsSlide li");
const spectrals_card = document.querySelectorAll(".spectralsSlide .spectral");

function responsiveSpectrals() {
    if (window.innerWidth <= 570) {
        if (spectrals_element.length == 4) {
            spectrals_slide.forEach(spectral_slide => {
                spectral_slide.appendChild(document.createElement("li"));
            });
            spectrals_element = document.querySelectorAll(".spectralsSlide li");

            spectrals_element[1].prepend(spectrals_card[3]);
            spectrals_element[2].append(spectrals_card[6]);
            spectrals_element[2].append(spectrals_card[7]);
            spectrals_element[2].append(spectrals_card[8]);
    
            spectrals_element[4].prepend(spectrals_card[12]);
            spectrals_element[5].append(spectrals_card[15]);
            spectrals_element[5].append(spectrals_card[16]);
            spectrals_element[5].append(spectrals_card[17]);
        }
    } else {
        if (spectrals_element.length == 6) {
            spectrals_element[0].append(spectrals_card[3]);
            spectrals_element[1].append(spectrals_card[6]);
            spectrals_element[1].append(spectrals_card[7]);
            spectrals_element[1].append(spectrals_card[8]);

            spectrals_element[3].append(spectrals_card[12]);
            spectrals_element[4].append(spectrals_card[15]);
            spectrals_element[4].append(spectrals_card[16]);
            spectrals_element[4].append(spectrals_card[17]);

            spectrals_slide.forEach(spectral_slide => {
                spectral_slide.lastChild.remove();
            });
            spectrals_element = document.querySelectorAll(".spectralsSlide li");
        }
    }
}
responsiveSpectrals();
window.addEventListener("resize", responsiveSpectrals);



const page_spectrals = document.querySelector("#pageSpectrals");
const pages_spectrals = document.querySelector("#pagesSpectrals");


spectrals_slide.forEach(slide => {
    slide.style.display = "none";
});
spectrals_slide[0].style.display = "flex";
page_spectrals.innerHTML = 1;
pages_spectrals.innerHTML = spectrals_slide.length;


function changeSpectralsSlide(page) {
    let current_page_spectrals = parseInt(page_spectrals.innerHTML);
    spectrals_slide[current_page_spectrals-1].style.display = "none";
    if (current_page_spectrals + page == 0) {
        current_page_spectrals = spectrals_slide.length;
    } else if (current_page_spectrals + page > spectrals_slide.length) {
        current_page_spectrals = 1;
    } else {
        current_page_spectrals = current_page_spectrals + page;
    }
    page_spectrals.innerHTML = current_page_spectrals;
    spectrals_slide[current_page_spectrals-1].style.display = "flex";
}




const enhancements_data = document.querySelector("#enhancementsData");



const ul_enhancements = document.createElement("ul");
const li_enhancements = document.createElement("li");
enhancements_data.appendChild(ul_enhancements);
ul_enhancements.appendChild(li_enhancements);



enhancements.forEach(enhancement => {
    
    let enhancement_div = document.createElement("div");
    enhancement_div.classList.add("enhancement");
    
    let img = document.createElement("img");
    let img_name = enhancement.name.replaceAll(" ", "_");
    img.src = "assets/enhancements/"+img_name+".webp";
    img.alt = enhancement.name;

    let popup = document.createElement("span");
    popup.classList.add("popup");

    let popup_text = document.createElement("div");
    popup_text.classList.add("popupText");
    let enhancement_text = document.createElement("span");
    enhancement_text.classList.add("popupEffect");
    enhancement_text.innerHTML = enhancement.text;
    popup_text.appendChild(enhancement_text);
    popup.appendChild(popup_text);

    let popup_tag = document.createElement("div");
    popup_tag.classList.add("tagPrimary");
    popup_tag.classList.add("tagEnhancement");
    popup_tag.innerText = enhancement.name;
    popup.appendChild(popup_tag);
    
    if (enhancement.id == 5) {
        enhancements_data.lastChild.appendChild(document.createElement("li"));
    }

    enhancement_div.appendChild(img);
    enhancement_div.appendChild(popup);

    enhancements_data.lastChild.lastChild.appendChild(enhancement_div);
});




const seals_data = document.querySelector("#sealsData");



const ul_seals = document.createElement("ul");
const li_seals = document.createElement("li");
seals_data.appendChild(ul_seals);
ul_seals.appendChild(li_seals);



seals.forEach(seal => {
    
    let seal_div = document.createElement("div");
    seal_div.classList.add("seal");
    
    let img = document.createElement("img");
    let img_name = seal.name.replaceAll(" ", "_");
    img.src = "assets/seals/"+img_name+".webp";
    img.alt = seal.name;

    let popup = document.createElement("span");
    popup.classList.add("popup");

    let popup_name = document.createElement("div");
    popup_name.classList.add("popupName");
    popup_name.innerText = seal.name;
    popup.appendChild(popup_name);

    let popup_text = document.createElement("div");
    popup_text.classList.add("popupText");
    let seal_text = document.createElement("span");
    seal_text.classList.add("popupEffect");
    seal_text.innerHTML = seal.text;
    popup_text.appendChild(seal_text);
    popup.appendChild(popup_text);

    let popup_tag = document.createElement("div");
    popup_tag.classList.add("tagSecondary");
    switch (seal.id) {
        case 1:
            popup_tag.classList.add("sealGold");
            break;
        case 2:
            popup_tag.classList.add("rare");
            break;
        case 3:
            popup_tag.classList.add("common");
            break;
        case 4:
            popup_tag.classList.add("sealPurple");
            break;
    }
    popup_tag.classList.add("tagSeal");
    popup_tag.innerText = seal.name;
    popup.appendChild(popup_tag);

    seal_div.appendChild(img);
    seal_div.appendChild(popup);

    seals_data.lastChild.lastChild.appendChild(seal_div);
});

const editions_data = document.querySelector("#editionsData");



const ul_editions = document.createElement("ul");
const li_editions = document.createElement("li");
editions_data.appendChild(ul_editions);
ul_editions.appendChild(li_editions);



editions.forEach(edition => {
    
    let edition_div = document.createElement("div");
    edition_div.classList.add("edition");
    
    let img = document.createElement("img");
    let img_name = edition.name.replaceAll(" ", "_");
    img.src = "assets/editions/"+img_name+".webp";
    img.alt = edition.name;

    let popup = document.createElement("span");
    popup.classList.add("popup");

    let popup_name = document.createElement("div");
    popup_name.classList.add("popupName");
    popup_name.innerText = edition.name;
    popup.appendChild(popup_name);

    let popup_text = document.createElement("div");
    popup_text.classList.add("popupText");
    let edition_text = document.createElement("span");
    edition_text.classList.add("popupEffect");
    edition_text.innerHTML = edition.text;
    popup_text.appendChild(edition_text);
    popup.appendChild(popup_text);

    let popup_tag = document.createElement("div");
    popup_tag.classList.add("tagPrimary");
    popup_tag.classList.add("negative");
    popup_tag.innerText = "Edition";
    popup.appendChild(popup_tag);

    if (edition.id != 1) {
        let secondary_tag = document.createElement("div");
        secondary_tag.classList.add("tagSecondary");
        secondary_tag.classList.add("negative");
        secondary_tag.innerText = edition.name;
        popup.appendChild(secondary_tag);
    }

    edition_div.appendChild(img);
    edition_div.appendChild(popup);

    editions_data.lastChild.lastChild.appendChild(edition_div);
});



const decks_data = document.querySelector("#decksData");



const ul_decks = document.createElement("ul");
ul_decks.classList.add("decksSlide");
const li_decks = document.createElement("li");
decks_data.appendChild(ul_decks);
ul_decks.appendChild(li_decks);



decks.forEach(deck => {
    
    let deck_div = document.createElement("div");
    deck_div.classList.add("deck");
    
    let img = document.createElement("img");
    let img_name = deck.name.replaceAll(" ", "_");
    img.src = "assets/decks/"+img_name+".webp";
    img.alt = deck.name;

    let popup = document.createElement("span");
    popup.classList.add("popup");

    let popup_name = document.createElement("div");
    popup_name.classList.add("popupName");
    popup_name.innerText = deck.name;
    popup.appendChild(popup_name);

    let popup_text = document.createElement("div");
    popup_text.classList.add("popupText");
    let deck_text = document.createElement("span");
    deck_text.classList.add("popupEffect");
    deck_text.innerHTML = deck.text;
    popup_text.appendChild(deck_text);
    popup.appendChild(popup_text);

    if (deck.id % 5 == 1 && deck.id != 1) {
        decks_data.lastChild.appendChild(document.createElement("li"));
    }

    deck_div.appendChild(img);
    deck_div.appendChild(popup);

    decks_data.lastChild.lastChild.appendChild(deck_div);
});



const stakes_data = document.querySelector("#stakesData");



const ul_stakes = document.createElement("ul");
ul_stakes.classList.add("stakesSlide");
const li_stakes = document.createElement("li");
stakes_data.appendChild(ul_stakes);
ul_stakes.appendChild(li_stakes);



stakes.forEach(stake => {
    
    let stake_div = document.createElement("div");
    stake_div.classList.add("stake");
    
    let img = document.createElement("img");
    let img_name = stake.name.replaceAll(" ", "_");
    img.src = "assets/stakes/"+img_name+".webp";
    img.alt = stake.name;

    let popup = document.createElement("span");
    popup.classList.add("popup");

    let popup_name = document.createElement("div");
    popup_name.classList.add("popupName");
    popup_name.innerText = stake.name;
    popup.appendChild(popup_name);

    let popup_text = document.createElement("div");
    popup_text.classList.add("popupText");
    let stake_text = document.createElement("span");
    stake_text.classList.add("popupEffect");
    stake_text.innerHTML = stake.text;
    popup_text.appendChild(stake_text);
    popup.appendChild(popup_text);

    if (stake.id % 4 == 1 && stake.id != 1) {
        stakes_data.lastChild.appendChild(document.createElement("li"));
    }

    stake_div.appendChild(img);
    stake_div.appendChild(popup);

    stakes_data.lastChild.lastChild.appendChild(stake_div);
});



const stickers_data = document.querySelector("#stickersData");



const ul_stickers = document.createElement("ul");
ul_stickers.classList.add("stickersSlide");
const li_stickers = document.createElement("li");
stickers_data.appendChild(ul_stickers);
ul_stickers.appendChild(li_stickers);



stickers.forEach(sticker => {
    
    let sticker_div = document.createElement("div");
    sticker_div.classList.add("sticker");
    
    let img = document.createElement("img");
    let img_name = sticker.name.replaceAll(" ", "_");
    img.src = "assets/stickers/"+img_name+".webp";
    img.alt = sticker.name;

    let popup = document.createElement("span");
    popup.classList.add("popup");

    let popup_name = document.createElement("div");
    popup_name.classList.add("popupName");

    if (sticker.id >= 9) {
        popup_name.innerText = sticker.name.replace(" Sticker","");
    } else {
        popup_name.innerText = sticker.name;
    }

    popup.appendChild(popup_name);

    let popup_text = document.createElement("div");
    popup_text.classList.add("popupText");
    let sticker_text = document.createElement("span");
    sticker_text.classList.add("popupEffect");
    sticker_text.innerHTML = sticker.text;
    popup_text.appendChild(sticker_text);
    popup.appendChild(popup_text);

    if (sticker.id % 4 == 1 && sticker.id != 1) {
        stickers_data.lastChild.appendChild(document.createElement("li"));
    }

    sticker_div.appendChild(img);
    sticker_div.appendChild(popup);

    stickers_data.lastChild.lastChild.appendChild(sticker_div);
});



const vouchers_data = document.querySelector("#vouchersData");



const ul_vouchers = document.createElement("ul");
ul_vouchers.classList.add("vouchersSlide");
const li_vouchers = document.createElement("li");
vouchers_data.appendChild(ul_vouchers);
ul_vouchers.appendChild(li_vouchers);

vouchers.forEach(voucher => {
    
    let voucher_div = document.createElement("div");
    voucher_div.classList.add("voucher");
    
    let img = document.createElement("img");
    let img_name = voucher.name.replaceAll(" ", "_");
    img.src = "assets/vouchers/"+img_name+".webp";
    img.alt = voucher.name;

    let popup = document.createElement("span");
    popup.classList.add("popup");

    let popup_name = document.createElement("div");
    popup_name.classList.add("popupName");
    popup_name.innerText = voucher.name;
    popup.appendChild(popup_name);

    let popup_text = document.createElement("div");
    popup_text.classList.add("popupText");
    let voucher_text = document.createElement("span");
    voucher_text.classList.add("popupEffect");
    voucher_text.innerHTML = voucher.text;
    popup_text.appendChild(voucher_text);
    popup.appendChild(popup_text);

    let popup_tag = document.createElement("div");
    popup_tag.classList.add("tagPrimary");
    popup_tag.classList.add("tagVoucher");
    popup_tag.innerText = "Voucher";
    popup.appendChild(popup_tag);
    
    if (voucher.id % 4 == 1 && voucher.id != 1) {
        if (voucher.id % 8 == 1) {
            vouchers_data.appendChild(document.createElement("ul"));
            vouchers_data.lastChild.classList.add("vouchersSlide");
        }
        vouchers_data.lastChild.appendChild(document.createElement("li"));
    }

    voucher_div.appendChild(img);
    voucher_div.appendChild(popup);

    vouchers_data.lastChild.lastChild.appendChild(voucher_div);

    if (voucher.id % 4 == 2) {
        let voucher_separator = document.createElement("div");
        voucher_separator.classList.add("voucherSeparator");
        vouchers_data.lastChild.lastChild.appendChild(voucher_separator);
    }
});



const vouchers_slide = document.querySelectorAll(".vouchersSlide");
const page_vouchers = document.querySelector("#pageVouchers");
const pages_vouchers = document.querySelector("#pagesVouchers");


vouchers_slide.forEach(slide => {
    slide.style.display = "none";
});
vouchers_slide[0].style.display = "flex";
page_vouchers.innerHTML = 1;
pages_vouchers.innerHTML = vouchers_slide.length;


function changeVouchersSlide(page) {
    let current_page_vouchers = parseInt(page_vouchers.innerHTML);
    vouchers_slide[current_page_vouchers-1].style.display = "none";
    if (current_page_vouchers + page == 0) {
        current_page_vouchers = vouchers_slide.length;
    } else if (current_page_vouchers + page > vouchers_slide.length) {
        current_page_vouchers = 1;
    } else {
        current_page_vouchers = current_page_vouchers + page;
    }
    page_vouchers.innerHTML = current_page_vouchers;
    vouchers_slide[current_page_vouchers-1].style.display = "flex";
}



const boosters_data = document.querySelector("#boostersData");



const ul_boosters = document.createElement("ul");
ul_boosters.classList.add("boostersSlide");
const li_boosters = document.createElement("li");
boosters_data.appendChild(ul_boosters);
ul_boosters.appendChild(li_boosters);

let temp_booster_name = "";
let i_booster = 1;

boosters.forEach(booster => {
    
    let booster_div = document.createElement("div");
    booster_div.classList.add("booster");
    
    let img = document.createElement("img");

    if (temp_booster_name == booster.name) {
        i_booster ++;
    } else {
        temp_booster_name = booster.name;
        i_booster = 1;
    }

    let img_name = booster.name.replaceAll(" ", "_");
    img.src = "assets/boosters/"+img_name+"_"+i_booster+".webp";
    img.alt = booster.name;

    let popup = document.createElement("span");
    popup.classList.add("popup");

    let popup_name = document.createElement("div");
    popup_name.classList.add("popupName");
    popup_name.innerText = booster.name;
    popup.appendChild(popup_name);

    let popup_text = document.createElement("div");
    popup_text.classList.add("popupText");
    let booster_text = document.createElement("span");
    booster_text.classList.add("popupEffect");
    booster_text.innerHTML = booster.text;
    popup_text.appendChild(booster_text);
    popup.appendChild(popup_text);

    let popup_tag = document.createElement("div");
    popup_tag.classList.add("tagPrimary");
    popup_tag.classList.add("tagBooster");
    popup_tag.innerText = "Booster";
    popup.appendChild(popup_tag);
    
    if (booster.id % 4 == 1 && booster.id != 1) {
        if (booster.id % 8 == 1) {
            boosters_data.appendChild(document.createElement("ul"));
            boosters_data.lastChild.classList.add("boostersSlide");
        }
        boosters_data.lastChild.appendChild(document.createElement("li"));
    }

    booster_div.appendChild(img);
    booster_div.appendChild(popup);

    boosters_data.lastChild.lastChild.appendChild(booster_div);
});



const boosters_slide = document.querySelectorAll(".boostersSlide");
const page_boosters = document.querySelector("#pageBoosters");
const pages_boosters = document.querySelector("#pagesBoosters");


boosters_slide.forEach(slide => {
    slide.style.display = "none";
});
boosters_slide[0].style.display = "flex";
page_boosters.innerHTML = 1;
pages_boosters.innerHTML = boosters_slide.length;


function changeBoostersSlide(page) {
    let current_page_boosters = parseInt(page_boosters.innerHTML);
    boosters_slide[current_page_boosters-1].style.display = "none";
    if (current_page_boosters + page == 0) {
        current_page_boosters = boosters_slide.length;
    } else if (current_page_boosters + page > boosters_slide.length) {
        current_page_boosters = 1;
    } else {
        current_page_boosters = current_page_boosters + page;
    }
    page_boosters.innerHTML = current_page_boosters;
    boosters_slide[current_page_boosters-1].style.display = "flex";
}



const tags_data = document.querySelector("#tagsData");



const ul_tags = document.createElement("ul");
ul_tags.classList.add("tagsSlide");
const li_tags = document.createElement("li");
tags_data.appendChild(ul_tags);
ul_tags.appendChild(li_tags);

tags.forEach(tag => {
    
    let tag_div = document.createElement("div");
    tag_div.classList.add("tag");
    
    let img = document.createElement("img");
    let img_name = tag.name.replaceAll(" ", "_");
    img.src = "assets/tags/"+img_name+".webp";
    img.alt = tag.name;

    let popup = document.createElement("span");
    popup.classList.add("popup");

    let popup_name = document.createElement("div");
    popup_name.classList.add("popupName");
    popup_name.innerText = tag.name;
    popup.appendChild(popup_name);

    let popup_text = document.createElement("div");
    popup_text.classList.add("popupText");
    let tag_text = document.createElement("span");
    tag_text.classList.add("popupEffect");
    tag_text.innerHTML = tag.text;
    popup_text.appendChild(tag_text);
    popup.appendChild(popup_text);
    
    if (tag.id % 6 == 1 && tag.id != 1) {
        tags_data.lastChild.appendChild(document.createElement("li"));
    }

    tag_div.appendChild(img);
    tag_div.appendChild(popup);

    tags_data.lastChild.lastChild.appendChild(tag_div);
});















const blinds_data = document.querySelector("#blindsData");



const ul_blinds = document.createElement("ul");
ul_blinds.classList.add("blindsSlide");
const li_blinds = document.createElement("li");
blinds_data.appendChild(ul_blinds);
ul_blinds.appendChild(li_blinds);

blinds.forEach(blind => {
    
    let blind_div = document.createElement("div");
    blind_div.classList.add("blind");
    
    let img = document.createElement("img");
    let img_name = blind.name.replaceAll(" ", "_");
    img.src = "assets/blinds/"+img_name+".webp";
    img.alt = blind.name;

    let popup = document.createElement("span");
    popup.classList.add("popup");

    let popup_name = document.createElement("div");
    popup_name.classList.add("tagPrimary");
    popup_name.style.backgroundColor = "#" + blind.color;
    popup_name.innerText = blind.name;
    popup.appendChild(popup_name);

    let popup_text = document.createElement("div");
    popup_text.classList.add("popupText");
    popup_text.innerHTML = "Score at least";

    let blind_score = document.createElement("span");
    blind_score.classList.add("blindScore");

    let img_chip = document.createElement("img");
    img_chip.src = "assets/stakes/White_Stake.webp";
    img_chip.alt = "White Stake";
    blind_score.appendChild(img_chip);

    switch (blind.id) {
        case 1:
            value_score = 1;
            break;
        case 2:
            value_score = 1.5;
            break;
        case 6:
            value_score = 4;
            break;
        case 21:
            value_score = 1;
            break;
        case 28:
            value_score = 6;
            break;
        default:
            value_score = 2;
    }

    blind_score.innerHTML += value_score + "X Base";

    let blind_reward = document.createElement("span");
    blind_reward.classList.add("blindReward");
    blind_reward.innerHTML = "Reward: ";

    let reward = document.createElement("span");
    reward.classList.add("reward");

    switch (blind.id) {
        case 1:
            value_reward = 3;
            break;
        case 2:
            value_reward = 4;
            break;
        case 26:
        case 27:
        case 28:
        case 29:
        case 30:
            value_reward = 8;
            break;
        default:
            value_reward = 5;
    }

    reward.innerHTML = "$".repeat(value_reward);

    blind_reward.appendChild(reward);

    popup_text.appendChild(blind_score);
    popup_text.appendChild(blind_reward);

    if (blind.text != "") {
        let blind_text = document.createElement("span");
        blind_text.classList.add("popupEffect");
        blind_text.style.backgroundImage = "linear-gradient(#"+blind.color+"7f, #"+blind.color+"7f), linear-gradient(var(--background-dark), var(--background-dark))";
        blind_text.innerHTML = blind.text;

        popup_text.appendChild(blind_text);
    }

    popup.appendChild(popup_text);
    
    if (blind.id % 5 == 1 && blind.id != 1) {
        blinds_data.lastChild.appendChild(document.createElement("li"));
    }

    blind_div.appendChild(img);
    blind_div.appendChild(popup);

    blinds_data.lastChild.lastChild.appendChild(blind_div);
});



const antes_data = document.querySelector("#antesData");



const antes_table = document.createElement("table");

const antes_thead = document.createElement("thead");

const antes_tr = document.createElement("tr");

for (let nb_antes_columns = 0; nb_antes_columns < Object.keys(antes[0]).length; nb_antes_columns++) {
    const antes_th = document.createElement("th");

    
    
    const img_chip = document.createElement("img");
    const div_chip = document.createElement("div");
    div_chip.classList.add("thAntes");



    switch (nb_antes_columns) {
        case 0:
            antes_th.innerHTML = "Ante";
            break;
        case 1:
            img_chip.src = "assets/stakes/White_Stake.webp";
            img_chip.alt = "White Stake";
            div_chip.appendChild(img_chip);
            div_chip.innerHTML += "Base";
            antes_th.appendChild(div_chip);
            break;
        case 2:
            img_chip.src = "assets/stakes/Green_Stake.webp";
            img_chip.alt = "Green Stake";
            div_chip.appendChild(img_chip);
            div_chip.innerHTML += "Base";
            antes_th.appendChild(div_chip);
            break;
        case 3:
            img_chip.src = "assets/stakes/Purple_Stake.webp";
            img_chip.alt = "Purple Stake";
            div_chip.appendChild(img_chip);
            div_chip.innerHTML += "Base";
            antes_th.appendChild(div_chip);
            break;
    }

    if (nb_antes_columns != 0) {
        let menu_stakes = document.createElement("div");
        menu_stakes.classList.add("menuStakes");
        for (let nb_stakes = 1; nb_stakes <= 3; nb_stakes++) {
            let img_stake = document.createElement("img");

            switch (nb_stakes) {
                case 1:
                    stake_color = "White";
                    break;
                case 2:
                    stake_color = "Green";
                    break;
                case 3:
                    stake_color = "Purple";
                    break;
            }

            img_stake.src = "assets/stakes/" + stake_color + "_Stake.webp";
            img_stake.alt = stake_color + " Stake";
            
            menu_stakes.appendChild(img_stake);

            antes_th.appendChild(menu_stakes);
        }
    }



    antes_tr.appendChild(antes_th);
}



antes_thead.appendChild(antes_tr);

antes_table.appendChild(antes_thead);

const antes_tbody = document.createElement("tbody");



antes.forEach(ante => {

    const antes_tr = document.createElement("tr");

    for (let nb_antes_columns = 0; nb_antes_columns < Object.keys(ante).length; nb_antes_columns++) {
        const antes_td = document.createElement("td");
        antes_td.innerHTML = convertNumber(Object.values(ante)[nb_antes_columns]);
        antes_tr.appendChild(antes_td);

        if (nb_antes_columns != 0) {
            let popup = document.createElement("span");
            popup.classList.add("popup");

            let popup_datas = document.createElement("div");
            popup_datas.classList.add("popupAntesDatas");

            let popup_ante = document.createElement("div");
            popup_ante.innerHTML = "Ante";
            popup_datas.appendChild(popup_ante);

            let poput_ante_count = document.createElement("div");

            let popup_nb_ante = document.createElement("span");
            popup_nb_ante.classList.add("popupAnte");
            popup_nb_ante.innerHTML = ante.id;
            poput_ante_count.appendChild(popup_nb_ante);

            poput_ante_count.innerHTML += "/8";

            popup_ante.appendChild(poput_ante_count);

            let popup_base = document.createElement("div");

            switch (nb_antes_columns) {
                case 1:
                    color_chip = "White";
                    break;
                case 2:
                    color_chip = "Green";
                    break;
                case 3:
                    color_chip = "Purple";
                    break;
            }

            let popup_img = document.createElement("img");
            popup_img.src = "assets/stakes/" + color_chip + "_Stake.webp";
            popup_img.alt = color_chip + " Stake";
            popup_base.appendChild(popup_img);

            popup_base.innerHTML += "Base<br>" + color_chip + "<br>Stake";

            popup_datas.appendChild(popup_base);

            popup.appendChild(popup_datas);

            let popup_scores = document.createElement("div");
            popup_scores.classList.add("popupAntesScores");

            let popup_small = document.createElement("div");
            popup_small.innerHTML = "Small Blind";
            popup_scores.appendChild(popup_small);

            let popup_score_small = document.createElement("div");
            popup_score_small.classList.add("popupScore");
            popup_score_small.innerHTML = convertNumber(Object.values(ante)[nb_antes_columns]);
            popup_scores.appendChild(popup_score_small);

            let popup_big = document.createElement("div");
            popup_big.innerHTML = "Big Blind";
            popup_scores.appendChild(popup_big);

            let popup_score_big = document.createElement("div");
            popup_score_big.classList.add("popupScore");
            popup_score_big.innerHTML = convertNumber(Object.values(ante)[nb_antes_columns] * 1.5);
            popup_scores.appendChild(popup_score_big);

            let popup_boss = document.createElement("div");
            if (ante.id % 8 == 0) {
                popup_boss.innerHTML = "Finisher Blind";
            } else {
                popup_boss.innerHTML = "Boss Blind";
            }
            popup_scores.appendChild(popup_boss);

            let popup_score_boss = document.createElement("div");
            popup_score_boss.classList.add("popupScore");
            popup_score_boss.innerHTML = convertNumber(Object.values(ante)[nb_antes_columns] * 2);
            popup_scores.appendChild(popup_score_boss);

            popup.appendChild(popup_scores);

            antes_td.appendChild(popup);
        }

    }

    antes_tbody.appendChild(antes_tr);
    
});

antes_table.appendChild(antes_tbody);

antes_data.appendChild(antes_table);



function convertNumber(number) {
    if (Math.ceil(Math.log10(number + 1)) >= 12) {
        return Number(number).toExponential(3).replace("+","");
    } else {
        return number.toLocaleString('en');
    }
}

document.querySelectorAll(".thAntes img").forEach(stake_img => {
    stake_img.addEventListener('click',()=>{
        if (window.innerWidth <= 570) {
            stake_img.parentNode.nextSibling.style.display = "flex";
        }
    });
});

function displayAntesTable() {
    if (window.innerWidth > 570) {
        document.querySelectorAll("th").forEach(th => {
            th.style.removeProperty('display');
        });
        document.querySelectorAll("td").forEach(td => {
            td.style.removeProperty('display');
        });
        document.querySelectorAll(".menuStakes").forEach(menu_stake => {
            menu_stake.style.display = "none";
        });
    }
}
window.addEventListener("resize", displayAntesTable);

document.querySelectorAll(".menuStakes").forEach(menu_stake => {
    menu_stake.children[0].addEventListener('click',()=>{
        document.querySelector("th:nth-of-type(2)").style.display = "block";
        document.querySelector("th:nth-of-type(3)").style.display = "none";
        document.querySelector("th:nth-of-type(4)").style.display = "none";
        document.querySelectorAll("td:nth-of-type(2)").forEach(td => {
            td.style.display = "inline";
        });
        document.querySelectorAll("td:nth-of-type(3)").forEach(td => {
            td.style.display = "none";
        });
        document.querySelectorAll("td:nth-of-type(4)").forEach(td => {
            td.style.display = "none";
        });
        menu_stake.style.display = "none";
    });
    menu_stake.children[1].addEventListener('click',()=>{
        document.querySelector("th:nth-of-type(2)").style.display = "none";
        document.querySelector("th:nth-of-type(3)").style.display = "block";
        document.querySelector("th:nth-of-type(4)").style.display = "none";
        document.querySelectorAll("td:nth-of-type(2)").forEach(td => {
            td.style.display = "none";
        });
        document.querySelectorAll("td:nth-of-type(3)").forEach(td => {
            td.style.display = "inline";
        });
        document.querySelectorAll("td:nth-of-type(4)").forEach(td => {
            td.style.display = "none";
        });
        menu_stake.style.display = "none";
    });
    menu_stake.children[2].addEventListener('click',()=>{
        document.querySelector("th:nth-of-type(2)").style.display = "none";
        document.querySelector("th:nth-of-type(3)").style.display = "none";
        document.querySelector("th:nth-of-type(4)").style.display = "block";
        document.querySelectorAll("td:nth-of-type(2)").forEach(td => {
            td.style.display = "none";
        });
        document.querySelectorAll("td:nth-of-type(3)").forEach(td => {
            td.style.display = "none";
        });
        document.querySelectorAll("td:nth-of-type(4)").forEach(td => {
            td.style.display = "inline";
        });
        menu_stake.style.display = "none";
    });
});



const achievements_data = document.querySelector("#achievementsData");



const ul_achievements = document.createElement("ul");
ul_achievements.classList.add("achievementsSlide");
const li_achievements = document.createElement("li");
achievements_data.appendChild(ul_achievements);
ul_achievements.appendChild(li_achievements);



achievements.forEach(achievement => {
    
    let achievement_div = document.createElement("div");
    achievement_div.classList.add("achievement");
    
    let img = document.createElement("img");
    let img_name = achievement.name.replaceAll(" ", "_");
    img.src = "assets/achievements/"+img_name+".webp";
    img.alt = achievement.name;

    let popup = document.createElement("span");
    popup.classList.add("popup");

    let popup_name = document.createElement("div");
    popup_name.classList.add("popupName");
    popup_name.innerText = achievement.name;
    popup.appendChild(popup_name);

    let popup_text = document.createElement("div");
    popup_text.classList.add("popupText");
    let achievement_text = document.createElement("span");
    achievement_text.classList.add("popupEffect");
    achievement_text.innerHTML = achievement.text;
    popup_text.appendChild(achievement_text);
    popup.appendChild(popup_text);
    
    if (achievement.id == 4 || achievement.id == 8 || achievement.id == 11 || achievement.id == 15 || achievement.id == 18 || achievement.id == 22 || achievement.id == 25 || achievement.id == 29) {
        if (achievement.id == 11 || achievement.id == 22) {
            achievements_data.appendChild(document.createElement("ul"));
            achievements_data.lastChild.classList.add("achievementsSlide");
        }
        achievements_data.lastChild.appendChild(document.createElement("li"));
    }

    achievement_div.appendChild(img);
    achievement_div.appendChild(popup);

    achievements_data.lastChild.lastChild.appendChild(achievement_div);
});



const achievements_slide = document.querySelectorAll(".achievementsSlide");
const page_achievements = document.querySelector("#pageAchievements");
const pages_achievements = document.querySelector("#pagesAchievements");


achievements_slide.forEach(slide => {
    slide.style.display = "none";
});
achievements_slide[0].style.display = "flex";
page_achievements.innerHTML = 1;
pages_achievements.innerHTML = achievements_slide.length;


function changeAchievementsSlide(page) {
    let current_page_achievements = parseInt(page_achievements.innerHTML);
    achievements_slide[current_page_achievements-1].style.display = "none";
    if (current_page_achievements + page == 0) {
        current_page_achievements = achievements_slide.length;
    } else if (current_page_achievements + page > achievements_slide.length) {
        current_page_achievements = 1;
    } else {
        current_page_achievements = current_page_achievements + page;
    }
    page_achievements.innerHTML = current_page_achievements;
    achievements_slide[current_page_achievements-1].style.display = "flex";
}







const check_contrast = document.querySelector("#contrast");

check_contrast.addEventListener('click',()=>{
    changeContrast();
});

function changeContrast() {
    if (check_contrast.checked == true) {
        old_path_cards = "assets/cards/";
        path_cards = "assets/cards/contrast/";
        old_path_icons = "assets/icons/";
        path_icons = "assets/icons/contrast/";
    } else {
        old_path_cards = "assets/cards/contrast/";
        path_cards = "assets/cards/";
        old_path_icons = "assets/icons/contrast/";
        path_icons = "assets/icons/";
    }
    document.documentElement.setAttribute('data-contrast', check_contrast.checked);
    localStorage.setItem("contrast", document.documentElement.getAttribute('data-contrast'));

    let img_cards = document.querySelectorAll("#cardsData img");
    img_cards.forEach(img_card => {
        img_card.src = img_card.src.replace(old_path_cards, path_cards);
    });

    let icon_cards = document.querySelectorAll("#cardsSuits img");
    icon_cards.forEach(icon_card => {
        icon_card.src = icon_card.src.replace(old_path_icons, path_icons);
    });
}

function setContrast() {
    if (document.documentElement.getAttribute('data-contrast') == "true") {
        check_contrast.checked = true;
    } else {
        check_contrast.checked = false;
    }
    changeContrast();
}

setContrast();





