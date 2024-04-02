


const text_chip = "<span class='textChip'>";
const text_mult = "<span class='textMult'>";
const text_prod = "<span class='textProd'>";
const text_num = "<span class='textNum'>";
const text_money = "<span class='textMoney'>";
const text_prob = "<span class='textProb'>";

const text_more = "<span class='textMore'>";
const text_mini = "<span class='textMini'>";

const text_heart = "<span class='textHeart'>";
const text_club = "<span class='textClub'>";
const text_diamond = "<span class='textDiamond'>";
const text_spade = "<span class='textSpade'>";

const text_tarot = "<span class='textTarot'>";
const text_planet = "<span class='textPlanet'>";
const text_spectral = "<span class='textSpectral'>";

const text_negative = "<span class='textNegative'>";

const text_end = "</span>";



const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];

const hands = ["High Card", "Pair", "Two Pair", "Three of a Kind", "Straight", "Flush", "Full House", "Four of a Kind", "Straight Flush", "Five of a Kind", "Flush House", "Flush Five"];

const rarities = ["Common", "Uncommon", "Rare", "Legendary"];



const jokerValue = 0;
const toggleJokerc = 0;


let random_number = "<span id='randNum'></span>";
let random_mult = "<span id='randMult'></span>";
const arrayRand = ["&nbsp;Mult","&nbsp;Mult","&nbsp;Mult","&nbsp;Mult","&nbsp;Mult","&nbsp;Mult","&nbsp;Mult","&nbsp;Mult","&nbsp;Mult","&nbsp;Mult","&nbsp;Mult","&nbsp;Mult","&nbsp;Mult","&nbsp;Mult","&nbsp;Mult","&nbsp;Mult","&nbsp;Mult","&nbsp;Mult","&nbsp;Mult","&nbsp;Mult","&nbsp;Mult","&nbsp;Mult",`${text_more}rand()${text_end}`,`${text_mult}#@11D${text_end}`];

setInterval(function(){
    document.querySelector("#randNum").innerHTML = Math.floor(Math.random()*24); // Between 0 and 23
}, 500);
setInterval(function(){
    document.querySelector("#randMult").innerHTML = arrayRand[Math.floor(Math.random() * arrayRand.length)];
}, 100);





const jokers = [
    {
        id:1,
        name:"Joker",
        text:`${text_mult}+4${text_end} Mult`,
        rarity:1,
        price:2
    },
    {
        id:2,
        name:"Greedy Joker",
        text:`Played cards with<br>${text_diamond}Diamond${text_end} suit give<br>${text_mult}+4${text_end} Mult when scored`,
        rarity:1,
        price:5
    },
    {
        id:3,
        name:"Lusty Joker",
        text:`Played cards with<br>${text_heart}Heart${text_end} suit give<br>${text_mult}+4${text_end} Mult when scored`,
        rarity:1,
        price:5
    },
    {
        id:4,
        name:"Wrathful Joker",
        text:`Played cards with<br>${text_spade}Spade${text_end} suit give<br>${text_mult}+4${text_end} Mult when scored`,
        rarity:1,
        price:5
    },
    {
        id:5,
        name:"Gluttonous Joker",
        text:`Played cards with<br>${text_club}Club${text_end} suit give<br>${text_mult}+4${text_end} Mult when scored`,
        rarity:1,
        price:5
    },
    {
        id:6,
        name:"Jolly Joker",
        text:`${text_mult}+8${text_end} Mult if played<br>hand contains<br>a ${text_num}Pair${text_end}`,
        rarity:1,
        price:3
    },
    {
        id:7,
        name:"Zany Joker",
        text:`${text_mult}+12${text_end} Mult if played<br>hand contains<br>a ${text_num}Three of a Kind${text_end}`,
        rarity:1,
        price:4
    },
    {
        id:8,
        name:"Mad Joker",
        text:`${text_mult}+20${text_end} Mult if played<br>hand contains<br>a ${text_num}Four of a Kind${text_end}`,
        rarity:1,
        price:4
    },
    {
        id:9,
        name:"Crazy Joker",
        text:`${text_mult}+12${text_end} Mult if played<br>hand contains<br>a ${text_num}Straight${text_end}`,
        rarity:1,
        price:4
    },
    {
        id:10,
        name:"Droll Joker",
        text:`${text_mult}+10${text_end} Mult if played<br>hand contains<br>a ${text_num}Flush${text_end}`,
        rarity:1,
        price:4
    },
    {
        id:11,
        name:"Sly Joker",
        text:`${text_chip}+50${text_end} Chips if played<br>hand contains<br>a ${text_num}Pair${text_end}`,
        rarity:1,
        price:3
    },
    {
        id:12,
        name:"Wily Joker",
        text:`${text_chip}+100${text_end} Chips if played<br>hand contains<br>a ${text_num}Three of a Kind${text_end}`,
        rarity:1,
        price:4
    },
    {
        id:13,
        name:"Clever Joker",
        text:`${text_chip}+150${text_end} Chips if played<br>hand contains<br>a ${text_num}Four of a Kind${text_end}`,
        rarity:1,
        price:4
    },
    {
        id:14,
        name:"Devious Joker",
        text:`${text_chip}+100${text_end} Chips if played<br>hand contains<br>a ${text_num}Straight${text_end}`,
        rarity:1,
        price:4
    },
    {
        id:15,
        name:"Crafty Joker",
        text:`${text_chip}+80${text_end} Chips if played<br>hand contains<br>a ${text_num}Flush${text_end}`,
        rarity:1,
        price:4
    },
    {
        id:16,
        name:"Half Joker",
        text:`${text_mult}+20${text_end} Mult if played<br>hand contains<br>${text_num}3${text_end} or fewer cards`,
        rarity:1,
        price:5
    },
    {
        id:17,
        name:"Joker Stencil",
        text:`${text_prod}X1${text_end} Mult for each<br>empty ${text_num}Joker${text_end} slot<br>${text_mini}Joker stencil included${text_end}<br>${text_more}(Currently ${text_prod}X${1 + jokerValue}${text_end})${text_end}`,
        rarity:2,
        price:8
    },
    {
        id:18,
        name:"Four Fingers",
        text:`All ${text_num}Flushes${text_end} and<br>${text_num}Straights${text_end} can be<br>made with ${text_num}4${text_end} cards`,
        rarity:2,
        price:7
    },
    {
        id:19,
        name:"Mime",
        text:`Retrigger all<br>card ${text_num}held in<br>hand${text_end} abilities`,
        rarity:2,
        price:5
    },
    {
        id:20,
        name:"Credit Card",
        text:`Go up to<br>${text_mult}-$20${text_end} in debt`,
        rarity:1,
        price:1
    },
    {
        id:21,
        name:"Ceremonial Dagger",
        text:`When ${text_num}Blind${text_end} is selected,<br>destroy Joker to the right<br>and permanently add ${text_num}double${text_end}<br>its sell value to this ${text_mult}Mult${text_end}<br>${text_more}(Currently ${text_mult}+${jokerValue * 2}${text_end} Mult)${text_end}`,
        rarity:2,
        price:6
    },
    {
        id:22,
        name:"Banner",
        text:`${text_chip}+40${text_end} Chips for<br>each remaining<br>${text_num}discard${text_end}`,
        rarity:1,
        price:5
    },
    {
        id:23,
        name:"Mystic Summit",
        text:`${text_mult}+15${text_end} Mult when<br>${text_num}0${text_end} discards<br>remaining`,
        rarity:1,
        price:5
    },
    {
        id:24,
        name:"Marble Joker",
        text:`Adds one ${text_num}Stone${text_end} card<br>to deck when<br>${text_num}Blind${text_end} is selected`,
        rarity:2,
        price:6
    },
    {
        id:25,
        name:"Loyalty Card",
        text:`${text_prod}X4${text_end} Mult every<br>${text_num}6${text_end} hands played<br>${text_more}5 remaining${text_end}`,
        rarity:2,
        price:5
    },
    {
        id:26,
        name:"8 Ball",
        text:`Create a ${text_planet}Planet${text_end} card<br>if played hand contains<br>2 or more ${text_num}8s${text_end}<br>${text_more}(Must have room)${text_end}`,
        rarity:1,
        price:5
    },
    {
        id:27,
        name:"Misprint",
        text:`${text_mult}+${random_number}${text_end}${random_mult}`,
        rarity:1,
        price:4
    },
    {
        id:28,
        name:"Dusk",
        text:`Retrigger all played<br>cards in ${text_num}final<br>hand${text_end} of round`,
        rarity:2,
        price:5
    },
    {
        id:29,
        name:"Raised Fist",
        text:`Adds ${text_num}double${text_end} the rank<br>of ${text_num}lowest${text_end} card held<br>in hand to Mult`,
        rarity:1,
        price:5
    },
    {
        id:30,
        name:"Chaos the Clown",
        text:`${text_num}1${text_end} free ${text_prob}Reroll${text_end}<br>per shop`,
        rarity:1,
        price:4
    },
    {
        id:31,
        name:"Fibonacci",
        text:`Each plaed ${text_num}Ace${text_end},<br>${text_num}2${text_end}, ${text_num}3${text_end}, ${text_num}5${text_end}, or ${text_num}8${text_end} gives<br>${text_mult}+8${text_end} Mult when scored`,
        rarity:2,
        price:7
    },
    {
        id:32,
        name:"Steel Joker",
        text:`This Joker gains ${text_prod}X0.25${text_end} Mult<br>for each ${text_num}Steel Card${text_end}<br>in your full deck<br>${text_more}(Currently ${text_prod}X${1 + jokerValue * 0.25}${text_end} Mult)${text_end}`,
        rarity:2,
        price:7
    },
    {
        id:33,
        name:"Scary Face",
        text:`Played ${text_num}face${text_end} cards<br>give ${text_chip}+30${text_end} Chips<br>when scored`,
        rarity:1,
        price:4
    },
    {
        id:34,
        name:"Abstract Joker",
        text:`${text_mult}+3${text_end} Mult for<br>each ${text_num}Joker${text_end} card<br>${text_more}(Currently ${text_mult}+${jokerValue * 3}${text_end} Mult)${text_end}`,
        rarity:1,
        price:4
    },
    {
        id:35,
        name:"Delayed Gratification",
        text:`Earn ${text_money}$2${text_end} per ${text_num}discard${text_end} if<br>no discards are used<br>by end of the round`,
        rarity:1,
        price:4
    },
    {
        id:36,
        name:"Hack",
        text:`Retrigger<br>each played<br>${text_num}2${text_end}, ${text_num}3${text_end}, ${text_num}4${text_end}, or ${text_num}5${text_end}`,
        rarity:2,
        price:6
    },
    {
        id:37,
        name:"Pareidolia",
        text:`All cards are<br>considered<br>${text_num}Face${text_end} cards`,
        rarity:2,
        price:5
    },
    {
        id:38,
        name:"Gros Michel",
        text:`${text_mult}+15${text_end} Mult<br>${text_prob}1 in 4${text_end} chance this<br>card is destroyed<br>at end of round`,
        rarity:1,
        price:5
    },
    {
        id:39,
        name:"Even Steven",
        text:`Played cards with<br>${text_num}even${text_end} rank give<br>${text_mult}+4${text_end} Mult when scored<br>${text_more}(10, 8, 6, 4, 2)${text_end}`,
        rarity:1,
        price:4
    },
    {
        id:40,
        name:"Odd Todd",
        text:`Played cards with<br>${text_num}odd${text_end} rank give<br>${text_chip}+30${text_end} Chips when scored<br>${text_more}(A, 9, 7, 5, 3)${text_end}`,
        rarity:1,
        price:4
    },
    {
        id:41,
        name:"Scholar",
        text:`Played ${text_num}Aces${text_end}<br>give ${text_chip}+20${text_end} Chips<br>and ${text_mult}+4${text_end} Mult<br>when scored`,
        rarity:1,
        price:4
    },
    {
        id:42,
        name:"Business Card",
        text:`Played ${text_num}face${text_end} cards have<br>a ${text_prob}1 in 2${text_end} chance to<br>give ${text_money}$2${text_end} when scored`,
        rarity:1,
        price:4
    },
    {
        id:43,
        name:"Supernova",
        text:`Adds the number of<br>times ${text_num}poker hand${text_end} has<br>been played to Mult`,
        rarity:1,
        price:5
    },
    {
        id:44,
        name:"Ride the Bus",
        text:`${text_mult}+1${text_end} Mult per<br>consecutive hand<br>played without a<br>scoring ${text_num}face${text_end} card<br>${text_more}(Currently ${text_mult}+${jokerValue}${text_end} Mult)${text_end}`,
        rarity:1,
        price:6
    },
    {
        id:45,
        name:"Space Joker",
        text:`${text_prob}1 in 4${text_end} chance to<br>upgrade level of<br>played ${text_num}poker hand${text_end}`,
        rarity:2,
        price:5
    },
    {
        id:46,
        name:"Egg",
        text:`Gains ${text_money}$3${text_end} of<br>${text_num}sell value${text_end} at<br>end of round`,
        rarity:1,
        price:4
    },
    {
        id:47,
        name:"Burglar",
        text:`When ${text_num}Blind${text_end} is selected,<br>gain ${text_chip}+3${text_end} Hands and<br>${text_num}lose all discards${text_end}`,
        rarity:2,
        price:6
    },
    {
        id:48,
        name:"Blackboard",
        text:`${text_prod}X3${text_end} Mult if all<br>cards held in hand<br>are ${text_spade}Spades${text_end} or ${text_club}Clubs${text_end}`,
        rarity:2,
        price:6
    },
    {
        id:49,
        name:"Runner",
        text:`Gains ${text_chip}+10${text_end} Chips<br>if played hand<br>contains a ${text_num}Straight${text_end}<br>${text_more}(Currently ${text_chip}+${20 + jokerValue * 10}${text_end} Chips)${text_end}`,
        rarity:1,
        price:5
    },
    {
        id:50,
        name:"Ice Cream",
        text:`${text_chip}${jokerValue > 20 ? "" : "+"}${Math.max(0, 100 - jokerValue * 5)}${text_end} Chips<br>${text_chip}-5${text_end} Chips for<br>every hand played`,
        rarity:1,
        price:5
    },
    {
        id:51,
        name:"DNA",
        text:`If ${text_num}first hand${text_end} of round<br>has only ${text_num}1${text_end} card, add a<br>permanent copy to deck<br>and draw it to ${text_num}hand${text_end}`,
        rarity:3,
        price:8
    },
    {
        id:52,
        name:"Splash",
        text:`Every ${text_num} played card${text_end}<br>counts in scoring`,
        rarity:1,
        price:3
    },
    {
        id:53,
        name:"Blue Joker",
        text:`${text_chip}+2${text_end} Chips for each<br>remaining card in ${text_num}Deck${text_end}<br>${text_more}(Currently ${text_chip}+${104 + jokerValue * 2}${text_end} Chips)${text_end}`,
        rarity:1,
        price:5
    },
    {
        id:54,
        name:"Sixth Sense",
        text:`If ${text_num}first hand${text_end} of round is<br>a single ${text_num}6${text_end}, destroy it and<br>create a ${text_spectral}Spectral${text_end} card<br>${text_more}(Must have room)${text_end}`,
        rarity:3,
        price:6
    },
    {
        id:55,
        name:"Constellation",
        text:`Gains ${text_prod}X0.1${text_end} Mult<br>per ${text_planet}Planet${text_end} card used<br>${text_more}(Currently ${text_prod}X${(Math.max(0, 10 + jokerValue))/10}${text_end} Mult)${text_end}`,
        rarity:2,
        price:6
    },
    {
        id:56,
        name:"Hiker",
        text:`Every played ${text_num}card${text_end}<br>permanently gains<br>${text_chip}+4${text_end} Chips when scored`,
        rarity:2,
        price:5
    },
    {
        id:57,
        name:"Faceless Joker",
        text:`Earn ${text_money}$5${text_end} if ${text_num}3${text_end} or<br>more ${text_num}face cards${text_end}<br>are discarded<br>at the same time`,
        rarity:1,
        price:4
    },
    {
        id:58,
        name:"Green Joker",
        text:`${text_mult}+1${text_end} Mult per hand played<br>${text_mult}-1${text_end} Mult per discard<br>${text_more}(Currently ${text_mult}${jokerValue >= 0 ? "+" : ""}${jokerValue}${text_end} Mult)${text_end}`,
        rarity:1,
        price:4
    },
    {
        id:59,
        name:"Superposition",
        text:`Create a ${text_tarot}Tarot${text_end} card if<br>poker hand contains an<br>${text_num}Ace${text_end} and a ${text_num}Straight${text_end}<br>${text_more}(Must have room)${text_end}`,
        rarity:1,
        price:4
    },
    {
        id:60,
        name:"To Do List",
        text:`Earn ${text_money}$5${text_end} if ${text_num}poker hand${text_end}<br>is a ${text_num}${hands[Math.abs(jokerValue % 12)]}${text_end},<br>poker hand changes<br>on every payout`,
        rarity:1,
        price:4
    },
    {
        id:61,
        name:"Cavendish",
        text:`${text_prod}X3${text_end} Mult<br>${text_prob}1 in 1000${text_end} chance this<br>card is destroyed<br>at end of round`,
        rarity:1,
        price:4
    },
    {
        id:62,
        name:"Card Sharp",
        text:`${text_prod}X3${text_end} Mult if played<br>${text_num}poker hand${text_end} has already<br>been played this round`,
        rarity:2,
        price:6
    },
    {
        id:63,
        name:"Red Card",
        text:`Gains ${text_mult}+3${text_end} Mult when any<br>${text_num}Booster Pack${text_end} is skipped<br>${text_more}(Currently ${text_mult}+${jokerValue * 3}${text_end} Mult)${text_end}`,
        rarity:1,
        price:5
    },
    {
        id:64,
        name:"Madness",
        text:`When ${text_num}Blind${text_end} is selected,<br>gain ${text_prod}X0.5${text_end} Mult and<br>${text_num}destroy${text_end} a random Joker<br>${text_more}(Currently ${text_prod}X${1 + jokerValue * 0.5}${text_end} Mult)${text_end}`,
        rarity:2,
        price:7
    },
    {
        id:65,
        name:"Square Joker",
        text:`Gain ${text_chip}+4${text_end} Chips if<br>played hand has<br>exactly ${text_num}4${text_end} cards<br>${text_more}(Currently ${text_chip}+${16 + jokerValue * 4}${text_end} Chips)${text_end}`,
        rarity:1,
        price:5
    },
    {
        id:66,
        name:"Séance",
        text:`If ${text_num}poker hand${text_end} is a<br>${text_num}Straight Flush${text_end}, create a<br>random ${text_spectral}Spectral${text_end} card<br>${text_more}(Must have room)${text_end}`,
        rarity:3,
        price:7
    },
    {
        id:67,
        name:"Riff-Raff",
        text:`When ${text_num}Blind${text_end} is selected,<br>create ${text_num}2${text_end} ${text_chip}Common${text_end} ${text_num}Jokers${text_end}<br>${text_more}(Must have room)${text_end}`,
        rarity:1,
        price:4
    },
    {
        id:68,
        name:"Vampire",
        text:`Gains ${text_prod}X0.2${text_end} Mult per<br>${text_num}Enhanced card${text_end} played,<br>removes card ${text_num}Enhancement${text_end}<br>${text_more}(Currently ${text_prod}X${(10 + jokerValue * 2) / 10}${text_end} Mult)${text_end}`,
        rarity:2,
        price:7
    },
    {
        id:69,
        name:"Shortcut",
        text:`Allows ${text_num}Straights${text_end} to be<br>made with gaps of ${text_num}1 rank${text_end}<br>${text_more}(ex: ${text_num}2 3 5 7 8${text_end})${text_end}`,
        rarity:2,
        price:7
    },
    {
        id:70,
        name:"Hologram",
        text:`Gains ${text_prod}X0.25${text_end} Mult<br> per ${text_num}playing card${text_end} added<br>to your deck<br>${text_more}(Currently ${text_prod}X${1 + jokerValue * 0.25}${text_end} Mult)${text_end}`,
        rarity:2,
        price:7
    },
    {
        id:71,
        name:"Vagabond",
        text:`Create a ${text_tarot}Tarot${text_end} card<br>if hand is played<br>with ${text_money}$3${text_end} or less`,
        rarity:2,
        price:6
    },
    {
        id:72,
        name:"Baron",
        text:`Each ${text_num}King${text_end}<br>held in hand<br>gives ${text_prod}X1.5${text_end} Mult`,
        rarity:3,
        price:8
    },
    {
        id:73,
        name:"Cloud 9",
        text:`Earn ${text_money}$1${text_end} for each<br>${text_num}9${text_end} in your ${text_num}full deck${text_end}<br>at end of round<br>${text_more}(Currently ${text_money}$${jokerValue}${text_end})${text_end}`,
        rarity:2,
        price:6
    },
    {
        id:74,
        name:"Rocket",
        text:`Earn ${text_money}$${1 + jokerValue * 2}${text_end} at end of<br>round. Gains ${text_money}$2${text_end} when<br>${text_num}Boss Blind${text_end} is defeated`,
        rarity:2,
        price:6
    },
    {
        id:75,
        name:"Obelisk",
        text:`${text_prod}X0.2${text_end} Mult per<br>consecutive hand played<br>without playing your<br>most played ${text_num}poker hand${text_end}<br>${text_more}(Currently ${text_prod}X${(10 + jokerValue * 2) / 10}${text_end} Mult)${text_end}`,
        rarity:3,
        price:8
    },
    {
        id:76,
        name:"Midas Mask",
        text:`All ${text_num}face${text_end} cards<br>become ${text_num}Gold${text_end} cards<br>when played`,
        rarity:2,
        price:6
    },
    {
        id:77,
        name:"Luchador",
        text:`Sell this card to<br>disable the current<br>${text_num}Boss Blind${text_end}`,
        rarity:2,
        price:5
    },
    {
        id:78,
        name:"Photograph",
        text:`First played ${text_num}face${text_end}<br>card gives ${text_prod}X2${text_end} Mult<br>when scored`,
        rarity:1,
        price:5
    },
    {
        id:79,
        name:"Gift Card",
        text:`Add ${text_money}$1${text_end} of ${text_num}sell value${text_end}<br>to every ${text_num}Joker${text_end} and<br>${text_num}Consumable${text_end} card at<br>end of round`,
        rarity:2,
        price:6
    },
    {
        id:80,
        name:"Turtle Bean",
        text:`${text_num}${5 - jokerValue >= 0 ? "+" : ""}${5 - jokerValue}${text_end} hand size,<br>reduces by<br>${text_mult}1${text_end} every round`,
        rarity:2,
        price:6
    },
    {
        id:81,
        name:"Erosion",
        text:`${text_mult}+4${text_end} Mult for each<br>card below ${text_num}52${text_end}<br>in your full deck<br>${text_more}(Currently ${text_mult}${jokerValue >= 0 ? "+" : ""}${jokerValue * 4}${text_end} Mult)${text_end}`,
        rarity:2,
        price:6
    },
    {
        id:82,
        name:"Reserved Parking",
        text:`Each ${text_num}face${text_end} card<br>held in hand has<br>a ${text_prob}1 in 2${text_end} chance<br>to give ${text_money}$1${text_end}`,
        rarity:2,
        price:6
    },
    {
        id:83,
        name:"Mail-In Rebate",
        text:`Earn ${text_money}$3${text_end} for each<br>discarded ${text_num}${ranks[Math.abs(jokerValue % 13)]}${text_end}, rank<br>changes every round`,
        rarity:1,
        price:4
    },
    {
        id:84,
        name:"To the Moon",
        text:`Earn an extra ${text_money}$1${text_end} of<br>${text_num}interest${text_end} for every ${text_money}$5${text_end} you<br>have at end of round`,
        rarity:2,
        price:5
    },
    {
        id:85,
        name:"Hallucination",
        text:`${text_prob}1 in 2${text_end} chance to create<br>a ${text_tarot}Tarot${text_end} card when any<br>${text_num}Booster Pack${text_end} is opened<br>${text_more}(Must have room)${text_end}`,
        rarity:1,
        price:4
    },
    {
        id:86,
        name:"Fortune Teller",
        text:`${text_mult}+1${text_end} Mult per ${text_tarot}Tarot${text_end}<br>card used this run<br>${text_more}(Currently ${text_mult}+${jokerValue}${text_end})${text_end}`,
        rarity:1,
        price:6
    },
    {
        id:87,
        name:"Juggler",
        text:`${text_num}+1${text_end} hand size`,
        rarity:1,
        price:4
    },
    {
        id:88,
        name:"Drunkard",
        text:`${text_mult}+1${text_end} discard`,
        rarity:1,
        price:4
    },
    {
        id:89,
        name:"Stone Joker",
        text:`This Joker gains ${text_chip}+25${text_end} Chips<br>for each ${text_num}Stone Card${text_end}<br>in your full deck<br>${text_more}(Currently ${text_chip}+${25*jokerValue}${text_end} Chips)${text_end}`,
        rarity:2,
        price:6
    },
    {
        id:90,
        name:"Golden Joker",
        text:`Earn ${text_money}$4${text_end} at<br>end of round`,
        rarity:1,
        price:6
    },
    {
        id:91,
        name:"Lucky Cat",
        text:`Gains ${text_prod}X0.2${text_end} Mult each<br>time a ${text_num}Lucky${text_end} card<br>${text_prob}successfully${text_end} triggers<br>${text_more}(currently ${text_prod}X${(10 + jokerValue * 2) / 10}${text_end} Mult)${text_end}`,
        rarity:2,
        price:6
    },
    {
        id:92,
        name:"Baseball Card",
        text:`${text_prob}Uncommon${text_end} Jokers<br>each give ${text_prod}X1.5${text_end} Mult`,
        rarity:3,
        price:8
    },
    {
        id:93,
        name:"Bull",
        text:`${text_chip}+2${text_end} Chips for each<br>${text_money}dollar${text_end} you have<br>${text_more}(Currently ${text_chip}+${Math.max(0, jokerValue * 2)}${text_end} Chips)${text_end}`,
        rarity:2,
        price:6
    },
    {
        id:94,
        name:"Diet Cola",
        text:`Sell this card to<br>create a free<br>${text_num}Double Tag${text_end}`,
        rarity:2,
        price:6
    },
    {
        id:95,
        name:"Trading Card",
        text:`If ${text_num}first discard${text_end} of round<br>has only ${text_num}1${text_end} card, destroy<br>it and earn ${text_money}$3${text_end}`,
        rarity:2,
        price:5
    },
    {
        id:96,
        name:"Flash Card",
        text:`${text_mult}+2${text_end} Mult per<br>${text_num}reroll${text_end} in the shop<br>${text_more}(Currently ${text_mult}+${jokerValue * 2}${text_end} Mult)${text_end}`,
        rarity:2,
        price:5
    },
    {
        id:97,
        name:"Popcorn",
        text:`${text_mult}${jokerValue <= 5 ? "+" : ""}${Math.max(0, 20 - jokerValue * 4)}${text_end} Mult<br>${text_mult}-4${text_end} Mult per<br>round played`,
        rarity:1,
        price:5
    },
    {
        id:98,
        name:"Spare Trousers",
        text:`Gain ${text_mult}+2${text_end} Mult if<br>played hand contains<br>a ${text_num}Two Pair${text_end}<br>${text_more}(Currently ${text_mult}+${jokerValue * 2}${text_end} Mult)${text_end}`,
        rarity:2,
        price:6
    },
    {
        id:99,
        name:"Ancient Joker",
        text:`Each played card with<br>${[`${text_heart}Heart${text_end}`, `${text_club}Club${text_end}`, `${text_diamond}Diamond${text_end}`, `${text_spade}Spade${text_end}`][Math.abs(jokerValue) % 4]} suit gives<br>${text_prod}X1.5${text_end} Mult when scored,<br>${text_mini}suit changes at end of round${text_end}`,
        rarity:3,
        price:8
    },
    {
        id:100,
        name:"Ramen",
        text:`${text_prod}X${(Math.max(0, 200 - jokerValue)) / 100}${text_end} Mult,<br>loses ${text_prod}X0.01${text_end} Mult<br>per ${text_num}card${text_end} discarded`,
        rarity:2,
        price:6
    },
    {
        id:101,
        name:"Walkie Talkie",
        text:`Each played ${text_num}10${text_end} or ${text_num}4${text_end}<br>gives ${text_chip}+10${text_end} Chips and<br>${text_mult}+4${text_end} Mult when scored`,
        rarity:1,
        price:4
    },
    {
        id:102,
        name:"Seltzer",
        text:`Retrigger all<br>cards played for<br>the next ${text_num}10${text_end} hands`,
        rarity:2,
        price:6
    },
    {
        id:103,
        name:"Castle",
        text:`This Joker gains ${text_chip}+3${text_end} Chips<br>per discarded ${[`${text_heart}Heart${text_end}`, `${text_club}Club${text_end}`, `${text_diamond}Diamond${text_end}`, `${text_spade}Spade${text_end}`][Math.abs(jokerValue) % 4]} card,<br>suit changes every round<br>${text_more}(Currently ${text_chip}+${jokerValue * 3}${text_end} Chips)${text_end}`,
        rarity:2,
        price:6
    },
    {
        id:104,
        name:"Smiley Face",
        text:`Played ${text_num}face${text_end} cards<br>give ${text_mult}+4${text_end} Mult<br>when scored`,
        rarity:1,
        price:4
    },
    {
        id:105,
        name:"Campfire",
        text:`This Joker gains ${text_prod}X0.5${text_end} Mult<br>for each card ${text_num}sold${text_end}, resets<br>when ${text_num}Boss Blind${text_end} is defeated<br>${text_more}(Currently ${text_prod}X${1 + jokerValue * 0.5}${text_end} Mult)${text_end}`,
        rarity:3,
        price:9
    },
    {
        id:106,
        name:"Golden Ticket",
        text:`Played ${text_money}Gold${text_end} cards<br>earn ${text_money}$3${text_end} when scored`,
        rarity:1,
        price:5
    },
    {
        id:107,
        name:"Mr. Bones",
        text:`Prevents Death<br>if chips scored<br>are at least ${text_num}25%${text_end}<br>of required chips<br>${text_mult}self destructs${text_end}`,
        rarity:2,
        price:5
    },
    {
        id:108,
        name:"Acrobat",
        text:`${text_prod}X3${text_end} Mult on ${text_num}final<br>hand${text_end} of round`,
        rarity:2,
        price:6
    },
    {
        id:109,
        name:"Sock and Buskin",
        text:`Retrigger all<br>played ${text_num}face${text_end} cards`,
        rarity:2,
        price:6
    },
    {
        id:110,
        name:"Swashbuckler",
        text:`Adds the sell value of<br>all owned ${text_num}Jokers${text_end} left<br>of this card to Mult<br>${text_more}(Currently ${text_mult}+${jokerValue + 1}${text_end} Mult)${text_end}`,
        rarity:1,
        price:4
    },
    {
        id:111,
        name:"Troubadour",
        text:`${text_num}+2${text_end} hand size,<br>${text_mult}-1${text_end} hands per round`,
        rarity:2,
        price:6
    },
    {
        id:112,
        name:"Certificate",
        text:`When round begins,<br>add a random ${text_num}playing<br>card${text_end} with a random<br>${text_num}seal${text_end} to your hand`,
        rarity:2,
        price:6
    },
    {
        id:113,
        name:"Smeared Joker",
        text:`${text_heart}Hearts${text_end} and ${text_diamond}Diamonds${text_end}<br>count as the same suit,<br>${text_spade}Spades${text_end} and ${text_club}Clubs${text_end}<br>count as the same suit`,
        rarity:2,
        price:7
    },
    {
        id:114,
        name:"Throwback",
        text:`${text_prod}X0.25${text_end} Mult for each<br>${text_num}Blind${text_end} skipped this run<br>${text_more}(Currently ${text_prod}X${1 + jokerValue * 0.25}${text_end} Mult)${text_end}`,
        rarity:2,
        price:6
    },
    {
        id:115,
        name:"Hanging Chad",
        text:`Retrigger ${text_num}first${text_end} played<br>card used in scoring`,
        rarity:1,
        price:4
    },
    {
        id:116,
        name:"Rough Gem",
        text:`Played cards with<br>${text_diamond}Diamond${text_end} suit earn<br>${text_money}$1${text_end} when scored`,
        rarity:2,
        price:7
    },
    {
        id:117,
        name:"Bloodstone",
        text:`${text_prob}1 in 3${text_end} chance for<br>played cards with<br>${text_heart}Heart${text_end} suit to give<br>${text_prod}X2${text_end} Mult when scored`,
        rarity:2,
        price:7
    },
    {
        id:118,
        name:"Arrowhead",
        text:`Played cards with<br>${text_spade}Spade${text_end} suit give<br>${text_chip}+50${text_end} Chips when scored`,
        rarity:2,
        price:7
    },
    {
        id:119,
        name:"Onyx Agate",
        text:`Played cards with<br>${text_club}Club${text_end} suit give<br>${text_mult}+8${text_end} Mult when scored`,
        rarity:2,
        price:7
    },
    {
        id:120,
        name:"Glass Joker",
        text:`Gains ${text_prod}X0.5${text_end} Mult<br>for every ${text_num}Glass Card${text_end}<br>that is destroyed<br>${text_more}(Currently ${text_prod}X${1 + jokerValue * 0.5}${text_end} Mult)${text_end}`,
        rarity:2,
        price:6
    },
    {
        id:121,
        name:"Showman",
        text:`${text_num}Joker${text_end}, ${text_tarot}Tarot${text_end}, ${text_planet}Planet${text_end},<br>and ${text_spectral}Spectral${text_end} cards may<br>appear multiple times`,
        rarity:2,
        price:5
    },
    {
        id:122,
        name:"Flower Pot",
        text:`${text_prod}X3${text_end} Mult if played<br>hand has a scoring<br>${text_diamond}Diamond${text_end} card, ${text_club}Club${text_end} card,<br>${text_heart}Heart${text_end} card, and ${text_spade}Spade${text_end} card`,
        rarity:2,
        price:6
    },
    {
        id:123,
        name:"Blueprint",
        text:`Copies ability of<br>${text_num}Joker${text_end} to the right`,
        rarity:3,
        price:10
    },
    {
        id:124,
        name:"Wee Joker",
        text:`This Joker gains<br>${text_chip}+8${text_end} Chips when each<br>played ${text_num}2${text_end} is scored<br>${text_more}(Currently ${text_chip}+${10 + jokerValue * 8}${text_end} Chips)${text_end}`,
        rarity:3,
        price:8
    },
    {
        id:125,
        name:"Merry Andy",
        text:`${text_mult}+3${text_end} discards,<br>${text_mult}-1${text_end} hand size`,
        rarity:2,
        price:7
    },
    {
        id:126,
        name:"Oops! All 6s",
        text:`Doubles all ${text_num}listed${text_end}<br>${text_prob}probabilities${text_end}<br>${text_more}(ex: ${text_prob}1 in 3${text_end} -> ${text_prob}2 in 3${text_end})${text_end}`,
        rarity:2,
        price:4
    },
    {
        id:127,
        name:"The Idol",
        text:`Each played ${text_num}${ranks[Math.abs(jokerValue % 13)]}${text_end}<br>of ${[`${text_heart}Hearts${text_end}`, `${text_club}Clubs${text_end}`, `${text_diamond}Diamonds${text_end}`, `${text_spade}Spades${text_end}`][Math.abs(jokerValue) % 4]} gives<br>${text_prod}X2${text_end} Mult when scored<br>${text_mini}Card changes every round${text_end}`,
        rarity:2,
        price:6
    },
    {
        id:128,
        name:"Seeing Double",
        text:`${text_prod}X2${text_end} Mult if played<br>hand has a scoring<br>${text_club}Clubs${text_end} card and a scoring<br>card of any other ${text_num}suit${text_end}`,
        rarity:2,
        price:6
    },
    {
        id:129,
        name:"Matador",
        text:`Earn ${text_money}$8${text_end} if played<br>hand triggers the<br>${text_num}Boss Blind${text_end} ability`,
        rarity:2,
        price:7
    },
    {
        id:130,
        name:"Hit the Road",
        text:`Gains ${text_prod}X0.5${text_end} Mult<br>per discarded<br>${text_num}Jack${text_end} this round<br>${text_more}(Currently ${text_prod}X${1 + jokerValue * 0.5}${text_end} Mult)${text_end}`,
        rarity:3,
        price:8
    },
    {
        id:131,
        name:"The Duo",
        text:`${text_prod}X2${text_end} Mult if played<br>hand contains<br>a ${text_num}Pair${text_end}`,
        rarity:3,
        price:8
    },
    {
        id:132,
        name:"The Trio",
        text:`${text_prod}X3${text_end} Mult if played<br>hand contains<br>a ${text_num}Three of a Kind${text_end}`,
        rarity:3,
        price:8
    },
    {
        id:133,
        name:"The Family",
        text:`${text_prod}X4${text_end} Mult if played<br>hand contains<br>a ${text_num}Four of a Kind${text_end}`,
        rarity:3,
        price:8
    },
    {
        id:134,
        name:"The Order",
        text:`${text_prod}X3${text_end} Mult if played<br>hand contains<br>a ${text_num}Straight${text_end}`,
        rarity:3,
        price:8
    },
    {
        id:135,
        name:"The Tribe",
        text:`${text_prod}X2${text_end} Mult if played<br>hand contains<br>a ${text_num}Flush${text_end}`,
        rarity:3,
        price:8
    },
    {
        id:136,
        name:"Stuntman",
        text:`${text_chip}+300${text_end} Chips,<br>${text_num}-2${text_end} hand size`,
        rarity:2,
        price:6
    },
    {
        id:137,
        name:"Invisible Joker",
        text:`After 3 rounds,<br>sell this card to<br>${text_num}duplicate${text_end} a random Joker<br>${text_more}(Currently ${text_num}${jokerValue}${text_end}/3)${text_end}`,
        rarity:3,
        price:10
    },
    {
        id:138,
        name:"Brainstorm",
        text:`Copies the ability<br>of leftmost ${text_num}Joker${text_end}`,
        rarity:3,
        price:10
    },
    {
        id:139,
        name:"Satellite",
        text:`Earn ${text_money}$1${text_end} at end of<br>round per unique ${text_planet}Planet${text_end}<br>card used this run<br>${text_more}(Currently ${text_money}$${jokerValue}${text_end})${text_end}`,
        rarity:2,
        price:6
    },
    {
        id:140,
        name:"Shoot the Moon",
        text:`${text_mult}+13${text_end} Mult for<br>each ${text_num}Queen${text_end}<br>held in hand`,
        rarity:1,
        price:5
    },
    {
        id:141,
        name:"Driver's License",
        text:`${text_prod}X3${text_end} Mult if you have<br>at least ${text_num}16${text_end} Enhanced<br>cards in your full deck<br>${text_more}(Currently ${text_num}${jokerValue}${text_end})${text_end}`,
        rarity:3,
        price:7
    },
    {
        id:142,
        name:"Cartomancer",
        text:`Create a ${text_tarot}Tarot${text_end} card<br>when ${text_num}Blind${text_end} is selected<br>${text_more}(Must have room)${text_end}`,
        rarity:2,
        price:6
    },
    {
        id:143,
        name:"Astronomer",
        text:`All ${text_planet}Planet${text_end} cards and<br>${text_planet}Celestial Packs${text_end} in<br>the shop are ${text_num}free${text_end}`,
        rarity:2,
        price:8
    },
    {
        id:144,
        name:"Burnt Joker",
        text:`Upgrade the level of<br>the first ${text_num}discarded${text_end}<br>poker hand each round`,
        rarity:2,
        price:6
    },
    {
        id:145,
        name:"Bootstraps",
        text:`${text_mult}+2${text_end} Mult for every<br>${text_money}$5${text_end} you have`,
        rarity:2,
        price:7
    },
    {
        id:146,
        name:"Canio",
        text:`Gains ${text_prod}X1${text_end} Mult when<br>a ${text_num}face${text_end} card<br>is destroyed<br>${text_more}(Currently ${text_prod}X${1 + jokerValue}${text_end} Mult)${text_end}`,
        rarity:4,
        price:0
    },
    {
        id:147,
        name:"Triboulet",
        text:`Played ${text_num}Kings${text_end} and<br>${text_num}Queens${text_end} each give<br>${text_prod}X2${text_end} Mult when scored`,
        rarity:4,
        price:0
    },
    {
        id:148,
        name:"Yorick",
        text:`${text_prod}X5${text_end} Mult only after<br>using ${text_num}23${text_end} discards<br>${text_more}(Discards left: ${text_num}${23 - jokerValue}${text_end})${text_end}`,
        rarity:4,
        price:0
    },
    {
        id:149,
        name:"Chicot",
        text:`Disables effect of<br>every ${text_num}Boss Blind${text_end}`,
        rarity:4,
        price:0
    },
    {
        id:150,
        name:"Perkeo",
        text:`Creates a ${text_negative}Negative${text_end} copy of<br>${text_num}1${text_end} random ${text_num}consumable${text_end}<br>card in your possession<br>at the end of the ${text_num}shop${text_end}`,
        rarity:4,
        price:0
    }
];








const planets = [
    {
        id:1,
        name:"Mercury",
        text:``,
        tag:"Planet"
    },
    {
        id:2,
        name:"Venus",
        text:``,
        tag:"Planet"
    },
    {
        id:3,
        name:"Earth",
        text:``,
        tag:"Planet"
    },
    {
        id:4,
        name:"Mars",
        text:``,
        tag:"Planet"
    },
    {
        id:5,
        name:"Jupiter",
        text:``,
        tag:"Planet"
    },
    {
        id:6,
        name:"Saturn",
        text:``,
        tag:"Planet"
    },
    {
        id:7,
        name:"Uranus",
        text:``,
        tag:"Planet"
    },
    {
        id:8,
        name:"Neptune",
        text:``,
        tag:"Planet"
    },
    {
        id:9,
        name:"Pluto",
        text:``,
        tag:"Dwarf Planet"
    },
    {
        id:10,
        name:"Planet X",
        text:``,
        tag:"Planet?"
    },
    {
        id:11,
        name:"Ceres",
        text:``,
        tag:"Dwarf Planet"
    },
    {
        id:12,
        name:"Eris",
        text:``,
        tag:"Dwarf Planet"
    }
];


