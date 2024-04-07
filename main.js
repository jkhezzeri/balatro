
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
    let tarot_text = document.createElement("span")
    tarot_text.classList.add("tarotText");
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
    let spectral_text = document.createElement("span")
    spectral_text.classList.add("spectralText");
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
    let enhancement_text = document.createElement("span")
    enhancement_text.classList.add("enhancementText");
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
    let seal_text = document.createElement("span")
    seal_text.classList.add("sealText");
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
    let edition_text = document.createElement("span")
    edition_text.classList.add("editionText");
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
    let voucher_text = document.createElement("span")
    voucher_text.classList.add("voucherText");
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
    let booster_text = document.createElement("span")
    booster_text.classList.add("boosterText");
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











