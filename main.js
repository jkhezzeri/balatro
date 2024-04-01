
const jokers_data = document.querySelector("#jokersData");

// let html = '<ul class="jokersSlide"><li>';

// jokers.forEach(joker => {
//     let img_name = joker.name.replaceAll(" ", "_");

//     if (joker.id % 5 == 1 && joker.id != 1) {
//         html += "</li>";
//         if (joker.id % 15 == 1 && joker.id != 1) {
//             html += '</ul><ul class="jokersSlide">';
//         }
//         html += "<li>";
//     }
    
//     html += '<img src="assets/jokers/'+img_name+'.webp" alt="'+joker.name+'">';

// });

// html += "</li></ul>";
// console.log(html);
// jokers_data.innerHTML = html;

const ul = document.createElement("ul");
ul.classList.add("jokersSlide");
const li = document.createElement("li");
jokers_data.appendChild(ul);
ul.appendChild(li);

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
    popup_rarity.classList.add("popupRarity");
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

    // jokers_data.lastChild.lastChild.appendChild(img);
    // jokers_data.lastChild.lastChild.appendChild(popup);


    joker_div.appendChild(img);
    joker_div.appendChild(popup);

    // jokers_data.appendChild(joker_div);
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











