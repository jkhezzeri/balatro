


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

const text_legendary = "<span class='textLegendary'>";
const text_enhancement = "<span class='textEnhancement'>";
const text_voucher = "<span class='textVoucher'>";
const text_negative = "<span class='textNegative'>";

const text_end = "</span>";



const ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"];

const poker_hands = ["High Card", "Pair", "Two Pair", "Three of a Kind", "Straight", "Flush", "Full House", "Four of a Kind", "Straight Flush", "Five of a Kind", "Flush House", "Flush Five"];

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
        text:`Earn ${text_money}$5${text_end} if ${text_num}poker hand${text_end}<br>is a ${text_num}${poker_hands[Math.abs(jokerValue % 12)]}${text_end},<br>poker hand changes<br>on every payout`,
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



const cards = [
    {
        id:1,
        name:"Ace of Spades",
    },
    {
        id:2,
        name:"King of Spades",
    },
    {
        id:3,
        name:"Queen of Spades",
    },
    {
        id:4,
        name:"Jack of Spades",
    },
    {
        id:5,
        name:"10 of Spades",
    },
    {
        id:6,
        name:"9 of Spades",
    },
    {
        id:7,
        name:"8 of Spades",
    },
    {
        id:8,
        name:"7 of Spades",
    },
    {
        id:9,
        name:"6 of Spades",
    },
    {
        id:10,
        name:"5 of Spades",
    },
    {
        id:11,
        name:"4 of Spades",
    },
    {
        id:12,
        name:"3 of Spades",
    },
    {
        id:13,
        name:"2 of Spades",
    },
    {
        id:14,
        name:"Ace of Hearts",
    },
    {
        id:15,
        name:"King of Hearts",
    },
    {
        id:16,
        name:"Queen of Hearts",
    },
    {
        id:17,
        name:"Jack of Hearts",
    },
    {
        id:18,
        name:"10 of Hearts",
    },
    {
        id:19,
        name:"9 of Hearts",
    },
    {
        id:20,
        name:"8 of Hearts",
    },
    {
        id:21,
        name:"7 of Hearts",
    },
    {
        id:22,
        name:"6 of Hearts",
    },
    {
        id:23,
        name:"5 of Hearts",
    },
    {
        id:24,
        name:"4 of Hearts",
    },
    {
        id:25,
        name:"3 of Hearts",
    },
    {
        id:26,
        name:"2 of Hearts",
    },
    {
        id:27,
        name:"Ace of Clubs",
    },
    {
        id:28,
        name:"King of Clubs",
    },
    {
        id:29,
        name:"Queen of Clubs",
    },
    {
        id:30,
        name:"Jack of Clubs",
    },
    {
        id:31,
        name:"10 of Clubs",
    },
    {
        id:32,
        name:"9 of Clubs",
    },
    {
        id:33,
        name:"8 of Clubs",
    },
    {
        id:34,
        name:"7 of Clubs",
    },
    {
        id:35,
        name:"6 of Clubs",
    },
    {
        id:36,
        name:"5 of Clubs",
    },
    {
        id:37,
        name:"4 of Clubs",
    },
    {
        id:38,
        name:"3 of Clubs",
    },
    {
        id:39,
        name:"2 of Clubs",
    },
    {
        id:40,
        name:"Ace of Diamonds",
    },
    {
        id:41,
        name:"King of Diamonds",
    },
    {
        id:42,
        name:"Queen of Diamonds",
    },
    {
        id:43,
        name:"Jack of Diamonds",
    },
    {
        id:44,
        name:"10 of Diamonds",
    },
    {
        id:45,
        name:"9 of Diamonds",
    },
    {
        id:46,
        name:"8 of Diamonds",
    },
    {
        id:47,
        name:"7 of Diamonds",
    },
    {
        id:48,
        name:"6 of Diamonds",
    },
    {
        id:49,
        name:"5 of Diamonds",
    },
    {
        id:50,
        name:"4 of Diamonds",
    },
    {
        id:51,
        name:"3 of Diamonds",
    },
    {
        id:52,
        name:"2 of Diamonds",
    }
];



const hands = [
    {
        id:1,
        name:"High Card",
        text:`If the played hand is not any of the above<br>hands, only the highest ranked card scores`,
        chips:5,
        mult:1,
        example:[
            {
                card:"Ace of Spades",
                active:true
            },
            {
                card:"Queen of Diamonds",
                active:false
            },
            {
                card:"9 of Diamonds",
                active:false
            },
            {
                card:"4 of Clubs",
                active:false
            },
            {
                card:"3 of Diamonds",
                active:false
            }
        ],
        planet:
            {
                name:"Pluto",
                chip:10,
                mult:1
            }
    },
    {
        id:2,
        name:"Pair",
        text:`2 cards that share the same rank. They may<br>be played with up to 3 other unscored cards`,
        chips:10,
        mult:2,
        example:[
            {
                card:"King of Spades",
                active:false
            },
            {
                card:"9 of Spades",
                active:true
            },
            {
                card:"9 of Diamonds",
                active:true
            },
            {
                card:"6 of Hearts",
                active:false
            },
            {
                card:"3 of Diamonds",
                active:false
            }
        ],
        planet:
            {
                name:"Mercury",
                chip:15,
                mult:1
            }
    },
    {
        id:3,
        name:"Two Pair",
        text:`2 pairs of cards with different ranks, may<br>be played with 1 other unscored card`,
        chips:20,
        mult:2,
        example:[
            {
                card:"Ace of Hearts",
                active:true
            },
            {
                card:"Ace of Diamonds",
                active:true
            },
            {
                card:"Queen of Clubs",
                active:false
            },
            {
                card:"4 of Hearts",
                active:true
            },
            {
                card:"4 of Clubs",
                active:true
            }
        ],
        planet:
            {
                name:"Uranus",
                chip:20,
                mult:1
            }
    },
    {
        id:4,
        name:"Three of a Kind",
        text:`3 cards with the same rank. They may be<br>played with up to 2 other unscored cards`,
        chips:30,
        mult:3,
        example:[
            {
                card:"10 of Spades",
                active:true
            },
            {
                card:"10 of Clubs",
                active:true
            },
            {
                card:"10 of Diamonds",
                active:true
            },
            {
                card:"6 of Hearts",
                active:false
            },
            {
                card:"5 of Diamonds",
                active:false
            }
        ],
        planet:
            {
                name:"Venus",
                chip:20,
                mult:2
            }
    },
    {
        id:5,
        name:"Straight",
        text:`5 cards in a row (consecutive ranks)`,
        chips:30,
        mult:4,
        example:[
            {
                card:"Jack of Diamonds",
                active:true
            },
            {
                card:"10 of Clubs",
                active:true
            },
            {
                card:"9 of Clubs",
                active:true
            },
            {
                card:"8 of Spades",
                active:true
            },
            {
                card:"7 of Hearts",
                active:true
            }
        ],
        planet:
            {
                name:"Saturn",
                chip:30,
                mult:2
            }
    },
    {
        id:6,
        name:"Flush",
        text:`5 cards that share the same suit`,
        chips:35,
        mult:4,
        example:[
            {
                card:"Ace of Hearts",
                active:true
            },
            {
                card:"King of Hearts",
                active:true
            },
            {
                card:"10 of Hearts",
                active:true
            },
            {
                card:"5 of Hearts",
                active:true
            },
            {
                card:"4 of Hearts",
                active:true
            }
        ],
        planet:
            {
                name:"Jupiter",
                chip:15,
                mult:2
            }
    },
    {
        id:7,
        name:"Full House",
        text:`A Three of a Kind and a Pair`,
        chips:40,
        mult:4,
        example:[
            {
                card:"King of Hearts",
                active:true
            },
            {
                card:"King of Clubs",
                active:true
            },
            {
                card:"King of Diamonds",
                active:true
            },
            {
                card:"2 of Spades",
                active:true
            },
            {
                card:"2 of Diamonds",
                active:true
            }
        ],
        planet:
            {
                name:"Earth",
                chip:25,
                mult:2
            }
    },
    {
        id:8,
        name:"Four of a Kind",
        text:`4 cards with the same rank. They may<br>be played with 1 other unscored card`,
        chips:60,
        mult:7,
        example:[
            {
                card:"Jack of Spades",
                active:true
            },
            {
                card:"Jack of Hearts",
                active:true
            },
            {
                card:"Jack of Clubs",
                active:true
            },
            {
                card:"Jack of Diamonds",
                active:true
            },
            {
                card:"3 of Clubs",
                active:false
            }
        ],
        planet:
            {
                name:"Mars",
                chip:30,
                mult:3
            }
    },
    {
        id:9,
        name:"Straight Flush",
        text:`5 cards in a row (consecutive ranks) with<br>all cards sharing the same suit`,
        chips:100,
        mult:8,
        example:[
            {
                card:"Queen of Spades",
                active:true
            },
            {
                card:"Jack of Spades",
                active:true
            },
            {
                card:"10 of Spades",
                active:true
            },
            {
                card:"9 of Spades",
                active:true
            },
            {
                card:"8 of Spades",
                active:true
            }
        ],
        planet:
            {
                name:"Neptune",
                chip:40,
                mult:3
            }
    },
    {
        id:10,
        name:"Five of a Kind",
        text:`5 cards with the same rank`,
        chips:120,
        mult:12,
        example:[
            {
                card:"Ace of Spades",
                active:true
            },
            {
                card:"Ace of Hearts",
                active:true
            },
            {
                card:"Ace of Hearts",
                active:true
            },
            {
                card:"Ace of Clubs",
                active:true
            },
            {
                card:"Ace of Diamonds",
                active:true
            }
        ],
        planet:
            {
                name:"Planet X",
                chip:35,
                mult:3
            }
    },
    {
        id:11,
        name:"Flush House",
        text:`A Three of a Kind and a Pair with<br>all cards sharing the same suit`,
        chips:140,
        mult:14,
        example:[
            {
                card:"7 of Diamonds",
                active:true
            },
            {
                card:"7 of Diamonds",
                active:true
            },
            {
                card:"7 of Diamonds",
                active:true
            },
            {
                card:"4 of Diamonds",
                active:true
            },
            {
                card:"4 of Diamonds",
                active:true
            }
        ],
        planet:
            {
                name:"Ceres",
                chip:40,
                mult:3
            }
    },
    {
        id:12,
        name:"Flush Five",
        text:`5 cards with the same rank and suit`,
        chips:160,
        mult:16,
        example:[
            {
                card:"Ace of Spades",
                active:true
            },
            {
                card:"Ace of Spades",
                active:true
            },
            {
                card:"Ace of Spades",
                active:true
            },
            {
                card:"Ace of Spades",
                active:true
            },
            {
                card:"Ace of Spades",
                active:true
            }
        ],
        planet:
            {
                name:"Eris",
                chip:40,
                mult:3
            }
    }
];



const tarots = [
    {
        id:1,
        name:"The Fool",
        text:`Creates the last<br>${text_tarot}Tarot${text_end} or ${text_planet}Planet${text_end} card<br>used during this run<br>${text_mini}${text_tarot}The Fool${text_end} excluded${text_end}`
    },
    {
        id:2,
        name:"The Magician",
        text:`Enhances ${text_num}1${text_end} selected<br>card into a<br>${text_num}Lucky Card${text_end}`
    },
    {
        id:3,
        name:"The High Priestess",
        text:`Creates up to 2<br>random ${text_planet}Planet${text_end} cards<br>${text_more}(Must have room)${text_end}`
    },
    {
        id:4,
        name:"The Empress",
        text:`Enhances ${text_num}2${text_end}<br>selected cards to<br>${text_num}Mult Cards${text_end}`
    },
    {
        id:5,
        name:"The Emperor",
        text:`Creates up to 2<br>random ${text_tarot}Tarot${text_end} cards<br>${text_more}(Must have room)${text_end}`
    },
    {
        id:6,
        name:"The Hierophant",
        text:`Enhances ${text_num}2${text_end}<br>selected cards to<br>${text_num}Bonus Cards${text_end}`
    },
    {
        id:7,
        name:"The Lovers",
        text:`Enhances ${text_num}1${text_end} selected<br>card into a<br>${text_num}Wild Card${text_end}`
    },
    {
        id:8,
        name:"The Chariot",
        text:`Enhances ${text_num}1${text_end} selected<br>card into a<br>${text_num}Steel Card${text_end}`
    },
    {
        id:9,
        name:"Justice",
        text:`Enhances ${text_num}1${text_end} selected<br>card into a<br>${text_num}Glass Card${text_end}`
    },
    {
        id:10,
        name:"The Hermit",
        text:`Doubles money<br>${text_more}(Max of ${text_money}$20${text_end})${text_end}`
    },
    {
        id:11,
        name:"The Wheel of Fortune",
        text:`${text_prob}1 in 4${text_end} chance to add<br>${text_negative}Foil${text_end}, ${text_negative}Holographic${text_end}, or<br>${text_negative}Polychrome${text_end} edition<br>to a random ${text_num}Joker${text_end}`
    },
    {
        id:12,
        name:"Strength",
        text:`Increases rank of<br>up to ${text_num}2${text_end} selected<br>cards by ${text_num}1${text_end}`
    },
    {
        id:13,
        name:"The Hanged Man",
        text:`Destroys up to<br>${text_num}2${text_end} selected cards`
    },
    {
        id:14,
        name:"Death",
        text:`Select ${text_num}2${text_end} cards,<br>convert the ${text_num}left${text_end} card<br>into the ${text_num}right${text_end} card<br>${text_more}(Drag to rearrange)${text_end}`
    },
    {
        id:15,
        name:"Temperance",
        text:`Gives the total sell<br>value of all current<br>Jokers ${text_more}(Max of ${text_money}$50${text_end})${text_end}<br>${text_more}(Currently ${text_money}$0${text_end})${text_end}`
    },
    {
        id:16,
        name:"The Devil",
        text:`Enhances ${text_num}1${text_end} selected<br>card into a<br>${text_num}Gold Card${text_end}`
    },
    {
        id:17,
        name:"The Tower",
        text:`Enhances ${text_num}1${text_end} selected<br>card into a<br>${text_num}Stone Card${text_end}`
    },
    {
        id:18,
        name:"The Star",
        text:`Converts up to<br>3 selected cards<br>to ${text_diamond}Diamonds${text_end}`
    },
    {
        id:19,
        name:"The Moon",
        text:`Converts up to<br>3 selected cards<br>to ${text_club}Clubs${text_end}`
    },
    {
        id:20,
        name:"The Sun",
        text:`Converts up to<br>3 selected cards<br>to ${text_heart}Hearts${text_end}`
    },
    {
        id:21,
        name:"Judgement",
        text:`Creates a random<br>${text_num}Joker${text_end} card<br>${text_more}(Must have room)${text_end}`
    },
    {
        id:22,
        name:"The World",
        text:`Converts up to<br>3 selected cards<br>to ${text_spade}Spades${text_end}`
    }
];



const planets = [
    {
        id:1,
        name:"Mercury",
        text:`(lvl1) Level up<br>${text_num}Pair${text_end}<br>${text_mult}+1${text_end} Mult and<br>${text_chip}+15${text_end} chips`,
        tag:"Planet"
    },
    {
        id:2,
        name:"Venus",
        text:`(lvl1) Level up<br>${text_num}Three of a Kind${text_end}<br>${text_mult}+2${text_end} Mult and<br>${text_chip}+20${text_end} chips`,
        tag:"Planet"
    },
    {
        id:3,
        name:"Earth",
        text:`(lvl1) Level up<br>${text_num}Full House${text_end}<br>${text_mult}+2${text_end} Mult and<br>${text_chip}+25${text_end} chips`,
        tag:"Planet"
    },
    {
        id:4,
        name:"Mars",
        text:`(lvl1) Level up<br>${text_num}Four of a Kind${text_end}<br>${text_mult}+3${text_end} Mult and<br>${text_chip}+30${text_end} chips`,
        tag:"Planet"
    },
    {
        id:5,
        name:"Jupiter",
        text:`(lvl1) Level up<br>${text_num}Flush${text_end}<br>${text_mult}+2${text_end} Mult and<br>${text_chip}+15${text_end} chips`,
        tag:"Planet"
    },
    {
        id:6,
        name:"Saturn",
        text:`(lvl1) Level up<br>${text_num}Straight${text_end}<br>${text_mult}+2${text_end} Mult and<br>${text_chip}+30${text_end} chips`,
        tag:"Planet"
    },
    {
        id:7,
        name:"Uranus",
        text:`(lvl1) Level up<br>${text_num}Two Pair${text_end}<br>${text_mult}+1${text_end} Mult and<br>${text_chip}+20${text_end} chips`,
        tag:"Planet"
    },
    {
        id:8,
        name:"Neptune",
        text:`(lvl1) Level up<br>${text_num}Straight Flush${text_end}<br>${text_mult}+3${text_end} Mult and<br>${text_chip}+40${text_end} chips`,
        tag:"Planet"
    },
    {
        id:9,
        name:"Pluto",
        text:`(lvl1) Level up<br>${text_num}High Card${text_end}<br>${text_mult}+1${text_end} Mult and<br>${text_chip}+10${text_end} chips`,
        tag:"Dwarf Planet"
    },
    {
        id:10,
        name:"Planet X",
        text:`(lvl1) Level up<br>${text_num}Five of a Kind${text_end}<br>${text_mult}+3${text_end} Mult and<br>${text_chip}+35${text_end} chips`,
        tag:"Planet?"
    },
    {
        id:11,
        name:"Ceres",
        text:`(lvl1) Level up<br>${text_num}Flush House${text_end}<br>${text_mult}+3${text_end} Mult and<br>${text_chip}+40${text_end} chips`,
        tag:"Dwarf Planet"
    },
    {
        id:12,
        name:"Eris",
        text:`(lvl1) Level up<br>${text_num}Flush Five${text_end}<br>${text_mult}+3${text_end} Mult and<br>${text_chip}+40${text_end} chips`,
        tag:"Dwarf Planet"
    }
];



const spectrals = [
    {
        id:1,
        name:"Familiar",
        text:`Destroy ${text_num}1${text_end} random<br>card in your hand, add<br>${text_num}3${text_end} random ${text_num}Enhanced face<br>cards${text_end} to your hand`
    },
    {
        id:2,
        name:"Grim",
        text:`Destroy ${text_num}1${text_end} random<br>card in your hand,<br>add ${text_num}2${text_end} random ${text_num}Enhanced<br>Aces${text_end} to your hand`
    },
    {
        id:3,
        name:"Incantation",
        text:`Destroy ${text_num}1${text_end} random<br>card in your hand, add ${text_num}4${text_end}<br>random ${text_num}Enhanced numbered<br>cards${text_end} to your hand`
    },
    {
        id:4,
        name:"Talisman",
        text:`Add a ${text_num}Gold Seal${text_end}<br>to ${text_num}1${text_end} selected<br>card in your hand`
    },
    {
        id:5,
        name:"Aura",
        text:`Add ${text_negative}Foil${text_end}, ${text_negative}Holographic${text_end},<br>or ${text_negative}Polychrome${text_end} effect to<br>${text_num}1${text_end} selected card in hand`
    },
    {
        id:6,
        name:"Wraith",
        text:`Creates a random<br>${text_mult}Rare${text_end} ${text_num}Joker${text_end},<br>sets money to ${text_money}$0${text_end}`
    },
    {
        id:7,
        name:"Sigil",
        text:`Converts all cards<br>in hand to a single<br>random ${text_num}suit${text_end}`
    },
    {
        id:8,
        name:"Ouija",
        text:`Converts all cards<br>in hand to a single<br>random ${text_num}rank${text_end}<br>${text_mult}-1${text_end} hand size`
    },
    {
        id:9,
        name:"Ectoplasm",
        text:`Add ${text_negative}Negative${text_end} to<br>a random ${text_num}Joker${text_end},<br>${text_mult}-1${text_end} hand size`
    },
    {
        id:10,
        name:"Immolate",
        text:`Destroys ${text_num}5${text_end} random<br>cards in hand,<br>gain ${text_money}$20${text_end}`
    },
    {
        id:11,
        name:"Ankh",
        text:`Create a copy of a<br>random ${text_num}Joker${text_end}, destroy<br>all other Jokers`
    },
    {
        id:12,
        name:"Deja Vu",
        text:`Add a ${text_mult}Red${text_end} Seal<br>to ${text_num}1${text_end} selected<br>card in your hand`
    },
    {
        id:13,
        name:"Hex",
        text:`Add ${text_negative}Polychrome${text_end} to a<br>random ${text_num}Joker${text_end}, destroy<br>all other Jokers`
    },
    {
        id:14,
        name:"Trance",
        text:`Add a ${text_chip}Blue Seal${text_end}<br>to ${text_num}1${text_end} selected<br>card in your hand`
    },
    {
        id:15,
        name:"Medium",
        text:`Add a ${text_legendary}Purple Seal${text_end}<br>to ${text_num}1${text_end} selected<br>card in your hand`
    },
    {
        id:16,
        name:"Cryptid",
        text:`Create ${text_num}2${text_end} copies of<br>${text_num}1${text_end} selected card<br>in your hand`
    },
    {
        id:17,
        name:"The Soul",
        text:`Creates a<br>${text_legendary}Legendary${text_end} Joker<br>${text_more}(Must have room)${text_end}`
    },
    {
        id:18,
        name:"Black Hole",
        text:`Upgrade every<br>${text_legendary}poker hand${text_end}<br>by ${text_num}1${text_end} level`
    }
];



const enhancements = [
    {
        id:1,
        name:"Bonus Card",
        text:`${text_chip}+30${text_end} extra chips`
    },
    {
        id:2,
        name:"Mult Card",
        text:`${text_mult}+4${text_end} Mult`
    },
    {
        id:3,
        name:"Wild Card",
        text:`Can be used<br>as any suit`
    },
    {
        id:4,
        name:"Glass Card",
        text:`${text_prod}X2${text_end} Mult<br>${text_prob}1 in 4${text_end} chance to<br>destroy card`
    },
    {
        id:5,
        name:"Steel Card",
        text:`${text_prod}X1.5${text_end} Mult<br>while this card<br>stays in hand`
    },
    {
        id:6,
        name:"Stone Card",
        text:`${text_chip}+50${text_end} Chips<br>no rank or suit`
    },
    {
        id:7,
        name:"Gold Card",
        text:`${text_money}$3${text_end} if this<br>card is held in hand<br>at end of round`
    },
    {
        id:8,
        name:"Lucky Card",
        text:`${text_prob}1 in 5${text_end} chance<br>for ${text_mult}+20${text_end} Mult<br>${text_prob}1 in 15${text_end} chance<br>to win ${text_money}$20${text_end}`
    }
];



const seals = [
    {
        id:1,
        name:"Gold Seal",
        text:`Earn ${text_money}$3${text_end} when this<br>card is played<br>and scores`
    },
    {
        id:2,
        name:"Red Seal",
        text:`Retrigger this<br>card ${text_num}1${text_end} time`
    },
    {
        id:3,
        name:"Blue Seal",
        text:`Creates a ${text_planet}Planet${text_end} card<br>if this card is ${text_num}held${text_end} in<br>hand at end of round`
    },
    {
        id:4,
        name:"Purple Seal",
        text:`Creates a ${text_tarot}Tarot${text_end} card<br>when ${text_num}discarded${text_end}<br>${text_more}(Must have room)${text_end}`
    }
];



const editions = [
    {
        id:1,
        name:"Base",
        text:`No extra effects`
    },
    {
        id:2,
        name:"Foil",
        text:`${text_chip}+50${text_end} chips`
    },
    {
        id:3,
        name:"Holographic",
        text:`${text_mult}+10${text_end} Mult`
    },
    {
        id:4,
        name:"Polychrome",
        text:`${text_prod}x1.5${text_end} Mult`
    },
    {
        id:5,
        name:"Negative",
        text:`${text_negative}+1${text_end} Joker slot`
    }
];



const decks = [
    {
        id:1,
        name:"Red Deck",
        text:`${text_mult}+1${text_end} discard<br>every round`
    },
    {
        id:2,
        name:"Blue Deck",
        text:`${text_chip}+1${text_end} hand<br>every round`
    },
    {
        id:3,
        name:"Yellow Deck",
        text:`Start with<br>extra ${text_money}$10${text_end}`
    },
    {
        id:4,
        name:"Green Deck",
        text:`At end of each Round:<br>${text_money}$2${text_end} ${text_mini}per remaining${text_end} ${text_chip}Hand${text_end}<br>${text_money}$1${text_end} ${text_mini}per remaining${text_end} ${text_mult}Discard${text_end}<br>Earn no ${text_num}Interest${text_end}`
    },
    {
        id:5,
        name:"Black Deck",
        text:`${text_num}+1${text_end} Joker slot<br>${text_chip}-1${text_end} hand<br>every round`
    },
    {
        id:6,
        name:"Magic Deck",
        text:`Start run with the<br>${text_tarot}Crystal Ball${text_end} voucher<br>and ${text_num}2${text_end} copies<br>of ${text_tarot}The Fool${text_end}`
    },
    {
        id:7,
        name:"Nebula Deck",
        text:`Start run with the<br>${text_planet}Telescope${text_end} voucher<br>${text_mult}-1${text_end} consumable slot`
    },
    {
        id:8,
        name:"Ghost Deck",
        text:`${text_spectral}Spectral${text_end} cards may<br>appear in the shop,<br>start with a ${text_spectral}Hex${text_end} card`
    },
    {
        id:9,
        name:"Abandoned Deck",
        text:`Start run with<br>no ${text_num}Face Cards${text_end}<br>in your deck`
    },
    {
        id:10,
        name:"Checkered Deck",
        text:`Start run with<br>${text_num}26${text_end} ${text_spade}Spades${text_end} and<br>${text_num}26${text_end} ${text_heart}Hearts${text_end} in deck`
    },
    {
        id:11,
        name:"Zodiac Deck",
        text:`Start run with<br>${text_tarot}Tarot Merchant${text_end},<br>${text_planet}Planet Merchant${text_end},<br>and ${text_num}Overstock${text_end}`
    },
    {
        id:12,
        name:"Painted Deck",
        text:`${text_num}+2${text_end} hand size,<br>${text_mult}-1${text_end} Joker slot`
    },
    {
        id:13,
        name:"Anaglyph Deck",
        text:`After defeating each<br>${text_num}Boss Blind${text_end}, gain a<br>${text_num}Double Tag${text_end}`
    },
    {
        id:14,
        name:"Plasma Deck",
        text:`Balance ${text_chip}Chips${text_end} and<br>${text_mult}Mult${text_end} when calculating<br>score for played hand<br>${text_mult}X2${text_end} base Blind size`
    },
    {
        id:15,
        name:"Erratic Deck",
        text:`All ${text_num}Ranks${text_end} and<br>${text_num}Suits${text_end} in deck<br>are randomized`
    }
];



const stakes = [
    {
        id:1,
        name:"White Stake",
        text:`Base Difficulty`
    },
    {
        id:2,
        name:"Red Stake",
        text:`${text_num}Small Blind${text_end} gives<br>no reward money<br>${text_mini}Applies all previous Stakes${text_end}`
    },
    {
        id:3,
        name:"Green Stake",
        text:`Required score scales<br>faster for each ${text_num}Ante${text_end}<br>${text_mini}Applies all previous Stakes${text_end}`
    },
    {
        id:4,
        name:"Black Stake",
        text:`Shop can have ${text_num}Eternal${text_end} Jokers<br>${text_more}${text_mini}(Can't be sold or destroyed)${text_end}${text_end}<br>${text_mini}Applies all previous Stakes${text_end}`
    },
    {
        id:5,
        name:"Blue Stake",
        text:`${text_mult}-1${text_end} Discard<br>${text_mini}Applies all previous Stakes${text_end}`
    },
    {
        id:6,
        name:"Purple Stake",
        text:`Required score scales<br>faster for each ${text_num}Ante${text_end}<br>${text_mini}Applies all previous Stakes${text_end}`
    },
    {
        id:7,
        name:"Orange Stake",
        text:`${text_num}Booster Packs${text_end} cost<br>${text_money}$1${text_end} more per Ante<br>${text_mini}Applies all previous Stakes${text_end}`
    },
    {
        id:8,
        name:"Gold Stake",
        text:`${text_mult}-1${text_end} hand size<br>${text_mini}Applies all previous Stakes${text_end}`
    }
];



const stickers = [
    {
        id:1,
        name:"White Sticker",
        text:`Used this Joker<br>to win on ${text_num}White<br>Stake${text_end} difficulty`
    },
    {
        id:2,
        name:"Red Sticker",
        text:`Used this Joker<br>to win on ${text_num}Red<br>Stake${text_end} difficulty`
    },
    {
        id:3,
        name:"Green Sticker",
        text:`Used this Joker<br>to win on ${text_num}Green<br>Stake${text_end} difficulty`
    },
    {
        id:4,
        name:"Black Sticker",
        text:`Used this Joker<br>to win on ${text_num}Black<br>Stake${text_end} difficulty`
    },
    {
        id:5,
        name:"Blue Sticker",
        text:`Used this Joker<br>to win on ${text_num}Blue<br>Stake${text_end} difficulty`
    },
    {
        id:6,
        name:"Purple Sticker",
        text:`Used this Joker<br>to win on ${text_num}Purple<br>Stake${text_end} difficulty`
    },
    {
        id:7,
        name:"Orange Sticker",
        text:`Used this Joker<br>to win on ${text_num}Orange<br>Stake${text_end} difficulty`
    },
    {
        id:8,
        name:"Gold Sticker",
        text:`Used this Joker<br>to win on ${text_num}Gold<br>Stake${text_end} difficulty`
    },
    {
        id:9,
        name:"Eternal Sticker",
        text:`Can't be sold<br>or destroyed`
    }
];



const vouchers = [
    {
        id:1,
        name:"Overstock",
        text:`${text_num}+1${text_end} card slot<br>available in shop`
    },
    {
        id:2,
        name:"Overstock Plus",
        text:`${text_num}+1${text_end} card slot<br>available in shop`
    },
    {
        id:3,
        name:"Clearance Sale",
        text:`All cards and packs in<br>shop are ${text_num}25%${text_end} off`
    },
    {
        id:4,
        name:"Liquidation",
        text:`All cards and packs in<br>shop are ${text_num}50%${text_end} off`
    },
    {
        id:5,
        name:"Hone",
        text:`${text_negative}Foil${text_end}, ${text_negative}Holographic${text_end}, and<br>${text_negative}Polychrome${text_end} cards<br>appear ${text_num}2X${text_end} more often`
    },
    {
        id:6,
        name:"Glow Up",
        text:`${text_negative}Foil${text_end}, ${text_negative}Holographic${text_end}, and<br>${text_negative}Polychrome${text_end} cards<br>appear ${text_num}4X${text_end} more often`
    },
    {
        id:7,
        name:"Reroll Surplus",
        text:`Rerolls cost<br> ${text_money}$2${text_end} less`
    },
    {
        id:8,
        name:"Reroll Glut",
        text:`Rerolls cost<br> ${text_money}$2${text_end} less`
    },
    {
        id:9,
        name:"Crystal Ball",
        text:`${text_num}+1${text_end} consumable slot`
    },
    {
        id:10,
        name:"Omen Globe",
        text:`${text_spectral}Spectral${text_end} cards may<br>appear in any of<br>the ${text_num}Arcana Packs${text_end}`
    },
    {
        id:11,
        name:"Telescope",
        text:`${text_num}Celestial Packs${text_end} always<br>contain the ${text_planet}Planet${text_end}<br>card for your most<br>played ${text_num}poker hand${text_end}`
    },
    {
        id:12,
        name:"Observatory",
        text:`${text_planet}Planet${text_end} cards in your<br>${text_num}consumable${text_end} area give<br>${text_prod}X1.5${text_end} Mult for their<br>specified ${text_num}poker hand${text_end}`
    },
    {
        id:13,
        name:"Grabber",
        text:`Permanently<br>gain ${text_chip}+1${text_end} hand<br> per round`
    },
    {
        id:14,
        name:"Nacho Tong",
        text:`Permanently<br>gain ${text_chip}+1${text_end} hand<br> per round`
    },
    {
        id:15,
        name:"Wasteful",
        text:`Permanently<br>gain ${text_mult}+1${text_end} discard<br> per round`
    },
    {
        id:16,
        name:"Recyclomancy",
        text:`Permanently<br>gain ${text_mult}+1${text_end} discard<br> per round`
    },
    {
        id:17,
        name:"Tarot Merchant",
        text:`${text_tarot}Tarot${text_end} cards appear<br>${text_num}2X${text_end} more frequently<br> in the shop`
    },
    {
        id:18,
        name:"Tarot Tycoon",
        text:`${text_tarot}Tarot${text_end} cards appear<br>${text_num}4X${text_end} more frequently<br> in the shop`
    },
    {
        id:19,
        name:"Planet Merchant",
        text:`${text_planet}Planet${text_end} cards appear<br>${text_num}2X${text_end} more frequently<br> in the shop`
    },
    {
        id:20,
        name:"Planet Tycoon",
        text:`${text_planet}Planet${text_end} cards appear<br>${text_num}4X${text_end} more frequently<br> in the shop`
    },
    {
        id:21,
        name:"Seed Money",
        text:`Raise the cap on<br>interest earned<br>per round to ${text_money}$10${text_end}`
    },
    {
        id:22,
        name:"Money Tree",
        text:`Raise the cap on<br>interest earned<br>per round to ${text_money}$20${text_end}`
    },
    {
        id:23,
        name:"Blank",
        text:`${text_more}Does nothing?${text_end}`
    },
    {
        id:24,
        name:"Antimatter",
        text:`${text_negative}+1${text_end} Joker Slot`
    },
    {
        id:25,
        name:"Magic Trick",
        text:`${text_num}Playing cards${text_end} can<br>be purchased<br> from the ${text_num}shop${text_end}`
    },
    {
        id:26,
        name:"Illusion",
        text:`${text_num}Playing cards${text_end} in shop<br>may have an ${text_enhancement}Enhancement${text_end},<br>${text_negative}Edition${text_end}, and/or a ${text_num}Seal${text_end}`
    },
    {
        id:27,
        name:"Hieroglyph",
        text:`${text_num}-1${text_end} Ante,<br>${text_chip}-1${text_end} hand<br>per round`
    },
    {
        id:28,
        name:"Petroglyph",
        text:`${text_num}-1${text_end} Ante,<br>${text_mult}-1${text_end} discard<br>per round`
    },
    {
        id:29,
        name:"Director's Cut",
        text:`Reroll Boss Blind<br>${text_num}1${text_end} time per Ante,<br>${text_money}$10${text_end} per roll`
    },
    {
        id:30,
        name:"Retcon",
        text:`Reroll Boss Blind<br>${text_num}unlimited${text_end} times,<br>${text_money}$10${text_end} per roll`
    },
    {
        id:31,
        name:"Paint Brush",
        text:`${text_num}+1${text_end} hand size`
    },
    {
        id:32,
        name:"Palette",
        text:`${text_num}+1${text_end} hand size`
    }
];



const boosters = [
    {
        id:1,
        name:"Arcana Pack",
        text:`Choose ${text_num}1${text_end} of up to<br>${text_num}3${text_end} ${text_tarot}Tarot${text_end} cards to<br>be used immediately`
    },
    {
        id:2,
        name:"Arcana Pack",
        text:`Choose ${text_num}1${text_end} of up to<br>${text_num}3${text_end} ${text_tarot}Tarot${text_end} cards to<br>be used immediately`
    },
    {
        id:3,
        name:"Arcana Pack",
        text:`Choose ${text_num}1${text_end} of up to<br>${text_num}3${text_end} ${text_tarot}Tarot${text_end} cards to<br>be used immediately`
    },
    {
        id:4,
        name:"Arcana Pack",
        text:`Choose ${text_num}1${text_end} of up to<br>${text_num}3${text_end} ${text_tarot}Tarot${text_end} cards to<br>be used immediately`
    },
    {
        id:5,
        name:"Jumbo Arcana Pack",
        text:`Choose ${text_num}1${text_end} of up to<br>${text_num}5${text_end} ${text_tarot}Tarot${text_end} cards to<br>be used immediately`
    },
    {
        id:6,
        name:"Jumbo Arcana Pack",
        text:`Choose ${text_num}1${text_end} of up to<br>${text_num}5${text_end} ${text_tarot}Tarot${text_end} cards to<br>be used immediately`
    },
    {
        id:7,
        name:"Mega Arcana Pack",
        text:`Choose ${text_num}2${text_end} of up to<br>${text_num}5${text_end} ${text_tarot}Tarot${text_end} cards to<br>be used immediately`
    },
    {
        id:8,
        name:"Mega Arcana Pack",
        text:`Choose ${text_num}2${text_end} of up to<br>${text_num}5${text_end} ${text_tarot}Tarot${text_end} cards to<br>be used immediately`
    },
    {
        id:9,
        name:"Celestial Pack",
        text:`Choose ${text_num}1${text_end} of up to<br>${text_num}3${text_end} ${text_planet}Planet${text_end} cards to<br>be used immediately`
    },
    {
        id:10,
        name:"Celestial Pack",
        text:`Choose ${text_num}1${text_end} of up to<br>${text_num}3${text_end} ${text_planet}Planet${text_end} cards to<br>be used immediately`
    },
    {
        id:11,
        name:"Celestial Pack",
        text:`Choose ${text_num}1${text_end} of up to<br>${text_num}3${text_end} ${text_planet}Planet${text_end} cards to<br>be used immediately`
    },
    {
        id:12,
        name:"Celestial Pack",
        text:`Choose ${text_num}1${text_end} of up to<br>${text_num}3${text_end} ${text_planet}Planet${text_end} cards to<br>be used immediately`
    },
    {
        id:13,
        name:"Jumbo Celestial Pack",
        text:`Choose ${text_num}1${text_end} of up to<br>${text_num}5${text_end} ${text_planet}Planet${text_end} cards to<br>be used immediately`
    },
    {
        id:14,
        name:"Jumbo Celestial Pack",
        text:`Choose ${text_num}1${text_end} of up to<br>${text_num}5${text_end} ${text_planet}Planet${text_end} cards to<br>be used immediately`
    },
    {
        id:15,
        name:"Mega Celestial Pack",
        text:`Choose ${text_num}2${text_end} of up to<br>${text_num}5${text_end} ${text_planet}Planet${text_end} cards to<br>be used immediately`
    },
    {
        id:16,
        name:"Mega Celestial Pack",
        text:`Choose ${text_num}2${text_end} of up to<br>${text_num}5${text_end} ${text_planet}Planet${text_end} cards to<br>be used immediately`
    },
    {
        id:17,
        name:"Standard Pack",
        text:`Choose ${text_num}1${text_end} of up to<br>${text_num}3 Playing${text_end} cards to<br>add to your deck`
    },
    {
        id:18,
        name:"Standard Pack",
        text:`Choose ${text_num}1${text_end} of up to<br>${text_num}3 Playing${text_end} cards to<br>add to your deck`
    },
    {
        id:19,
        name:"Standard Pack",
        text:`Choose ${text_num}1${text_end} of up to<br>${text_num}3 Playing${text_end} cards to<br>add to your deck`
    },
    {
        id:20,
        name:"Standard Pack",
        text:`Choose ${text_num}1${text_end} of up to<br>${text_num}3 Playing${text_end} cards to<br>add to your deck`
    },
    {
        id:21,
        name:"Jumbo Standard Pack",
        text:`Choose ${text_num}1${text_end} of up to<br>${text_num}5 Playing${text_end} cards to<br>add to your deck`
    },
    {
        id:22,
        name:"Jumbo Standard Pack",
        text:`Choose ${text_num}1${text_end} of up to<br>${text_num}5 Playing${text_end} cards to<br>add to your deck`
    },
    {
        id:23,
        name:"Mega Standard Pack",
        text:`Choose ${text_num}2${text_end} of up to<br>${text_num}5 Playing${text_end} cards to<br>add to your deck`
    },
    {
        id:24,
        name:"Mega Standard Pack",
        text:`Choose ${text_num}2${text_end} of up to<br>${text_num}5 Playing${text_end} cards to<br>add to your deck`
    },
    {
        id:25,
        name:"Buffoon Pack",
        text:`Choose ${text_num}1${text_end} of up to<br>${text_num}2${text_end} Joker cards`
    },
    {
        id:26,
        name:"Buffoon Pack",
        text:`Choose ${text_num}1${text_end} of up to<br>${text_num}2${text_end} Joker cards`
    },
    {
        id:27,
        name:"Jumbo Buffoon Pack",
        text:`Choose ${text_num}1${text_end} of up to<br>${text_num}4${text_end} Joker cards`
    },
    {
        id:28,
        name:"Mega Buffoon Pack",
        text:`Choose ${text_num}2${text_end} of up to<br>${text_num}4${text_end} Joker cards`
    },
    {
        id:29,
        name:"Spectral Pack",
        text:`Choose ${text_num}1${text_end} of up to<br>${text_num}2${text_end} ${text_spectral}Spectral${text_end} cards to<br>be used immediately`
    },
    {
        id:30,
        name:"Spectral Pack",
        text:`Choose ${text_num}1${text_end} of up to<br>${text_num}2${text_end} ${text_spectral}Spectral${text_end} cards to<br>be used immediately`
    },
    {
        id:31,
        name:"Jumbo Spectral Pack",
        text:`Choose ${text_num}1${text_end} of up to<br>${text_num}4${text_end} ${text_spectral}Spectral${text_end} cards to<br>be used immediately`
    },
    {
        id:32,
        name:"Mega Spectral Pack",
        text:`Choose ${text_num}2${text_end} of up to<br>${text_num}4${text_end} ${text_spectral}Spectral${text_end} cards to<br>be used immediately`
    }
];



const tags = [
    {
        id:1,
        name:"Uncommon Tag",
        text:`Shop has an<br>${text_prob}Uncommon Joker${text_end}`
    },
    {
        id:2,
        name:"Rare Tag",
        text:`Shop has a<br>${text_mult}Rare Joker${text_end}`
    },
    {
        id:3,
        name:"Negative Tag",
        text:`Next base edition shop<br>Joker becomes ${text_negative}Negative${text_end}`
    },
    {
        id:4,
        name:"Foil Tag",
        text:`Next base edition shop<br>Joker becomes ${text_negative}Foil${text_end}`
    },
    {
        id:5,
        name:"Holographic Tag",
        text:`Next base edition shop<br>Joker becomes ${text_negative}Holographic${text_end}`
    },
    {
        id:6,
        name:"Polychrome Tag",
        text:`Next base edition shop<br>Joker becomes ${text_negative}Polychrome${text_end}`
    },
    {
        id:7,
        name:"Investment Tag",
        text:`After defeating<br>the Boss Blind,<br>gain ${text_money}$15${text_end}`
    },
    {
        id:8,
        name:"Voucher Tag",
        text:`Adds one Voucher<br>to the next shop`
    },
    {
        id:9,
        name:"Boss Tag",
        text:`Rerolls the<br>${text_num}Boss Blind${text_end}`
    },
    {
        id:10,
        name:"Standard Tag",
        text:`Gives a free<br>${text_num}Mega Standard Pack${text_end}`
    },
    {
        id:11,
        name:"Charm Tag",
        text:`Gives a free<br>${text_tarot}Mega Arcana Pack${text_end}`
    },
    {
        id:12,
        name:"Meteor Tag",
        text:`Gives a free<br>${text_planet}Mega Celestial Pack${text_end}`
    },
    {
        id:13,
        name:"Buffoon Tag",
        text:`Gives a free<br>${text_num}Mega Buffoon Pack${text_end}`
    },
    {
        id:14,
        name:"Handy Tag",
        text:`Gives ${text_money}$1${text_end} per played<br>${text_chip}hand${text_end} this run<br>${text_more}(Will give ${text_money}$0${text_end})${text_end}`
    },
    {
        id:15,
        name:"Garbage Tag",
        text:`Gives ${text_money}$1${text_end} per unused<br>${text_mult}discard${text_end} this run<br>${text_more}(Will give ${text_money}$0${text_end})${text_end}`
    },
    {
        id:16,
        name:"Ethereal Tag",
        text:`Gives a free<br>${text_spectral}Spectral Pack${text_end}`
    },
    {
        id:17,
        name:"Coupon Tag",
        text:`Initial cards and<br>booster packs in next<br>shop are free`
    },
    {
        id:18,
        name:"Double Tag",
        text:`Gives a copy of the<br>next selected ${text_num}Tag${text_end}<br>${text_mini}${text_num}Double Tag${text_end} excluded${text_end}`
    },
    {
        id:19,
        name:"Juggle Tag",
        text:`${text_num}+3${text_end} hand size<br>next round`
    },
    {
        id:20,
        name:"D6 Tag",
        text:`Rerolls in next shop<br>start at ${text_money}$0${text_end}`
    },
    {
        id:21,
        name:"Top-up Tag",
        text:`Create up to ${text_num}2${text_end}<br>${text_chip}Common${text_end} Jokers<br>${text_more}(Must have room)${text_end}`
    },
    {
        id:22,
        name:"Speed Tag",
        text:`Gives ${text_money}$5${text_end} per skipped<br>Blind this run<br>${text_more}(Will give ${text_money}$5${text_end})${text_end}`
    },
    {
        id:23,
        name:"Orbital Tag",
        text:`Upgrade ${text_num}[poker hand]${text_end}<br>by ${text_num}3 levels${text_end}`
    },
    {
        id:24,
        name:"Economy Tag",
        text:`Doubles your money<br>${text_more}(Max of ${text_money}$40${text_end})${text_end}`
    },
];



const blinds = [
    {
        id:1,
        name:"Small Blind",
        text:``,
        color:"2240a3"
    },
    {
        id:2,
        name:"Big Blind",
        text:``,
        color:"df9822"
    },
    {
        id:3,
        name:"The Hook",
        text:`Discards 2 random<br>cards per hand played`,
        color:"9f2909"
    },
    {
        id:4,
        name:"The Ox",
        text:`Playing a (most played hand)<br>sets money to $0`,
        color:"b24700"
    },
    {
        id:5,
        name:"The House",
        text:`First hand is<br>drawn face down`,
        color:"3c789f"
    },
    {
        id:6,
        name:"The Wall",
        text:`Extra large blind`,
        color:"7d459c"
    },
    {
        id:7,
        name:"The Wheel",
        text:`1 in 7 cards get<br>drawn face down`,
        color:"3bb96d"
    },
    {
        id:8,
        name:"The Arm",
        text:`Decrease level of<br>played poker hand`,
        color:"5653f5"
    },
    {
        id:9,
        name:"The Club",
        text:`All Club cards<br>are debuffed`,
        color:"b2c786"
    },
    {
        id:10,
        name:"The Fish",
        text:`Cards drawn face down<br>after each hand played`,
        color:"2677b7"
    },
    {
        id:11,
        name:"The Psychic",
        text:`Must play 5 cards`,
        color:"f0ba24"
    },
    {
        id:12,
        name:"The Goad",
        text:`All Spade cards<br>are debuffed`,
        color:"b2488b"
    },
    {
        id:13,
        name:"The Water",
        text:`Start with<br>0 discards`,
        color:"c1dfec"
    },
    {
        id:14,
        name:"The Window",
        text:`All Diamond cards<br>are debuffed`,
        color:"a09889"
    },
    {
        id:15,
        name:"The Manacle",
        text:`-1 Hand Size`,
        color:"434343"
    },
    {
        id:16,
        name:"The Eye",
        text:`No repeat hand<br>types this round`,
        color:"3560e3"
    },
    {
        id:17,
        name:"The Mouth",
        text:`Play only 1 hand<br>type this round`,
        color:"a66081"
    },
    {
        id:18,
        name:"The Plant",
        text:`All face cards<br>are debuffed`,
        color:"5f8676"
    },
    {
        id:19,
        name:"The Serpent",
        text:`After Play or Discard,<br>always draw 3 cards`,
        color:"2c8f3a"
    },
    {
        id:20,
        name:"The Pillar",
        text:`Cards played previously<br>this Ante are debuffed`,
        color:"6f553d"
    },
    {
        id:21,
        name:"The Needle",
        text:`Play only 1 hand`,
        color:"485d17"
    },
    {
        id:22,
        name:"The Head",
        text:`All Heart cards<br>are debuffed`,
        color:"a493ad"
    },
    {
        id:23,
        name:"The Tooth",
        text:`Lose $1 per<br>card played`,
        color:"ae1313"
    },
    {
        id:24,
        name:"The Flint",
        text:`Base Chips and<br>Mult are halved`,
        color:"e55815"
    },
    {
        id:25,
        name:"The Mark",
        text:`All face cards are<br>drawn face down`,
        color:"581f30"
    },
    {
        id:26,
        name:"Amber Acorn",
        text:`Flips and shuffles<br>all Joker cards`,
        color:"ff9800"
    },
    {
        id:27,
        name:"Verdant Leaf",
        text:`All cards debuffed<br>until 1 Joker sold`,
        color:"429e78"
    },
    {
        id:28,
        name:"Violet Vessel",
        text:`Very large blind`,
        color:"7d60e0"
    },
    {
        id:29,
        name:"Crimson Heart",
        text:`One random Joker<br>disabled every hand`,
        color:"a41919"
    },
    {
        id:30,
        name:"Cerulean Bell",
        text:`Forces 1 card to<br>always be selected`,
        color:"0091ff"
    }
];



const antes = [
    {
        id:1,
        base:300,
        green:300,
        purple:300
    },
    {
        id:2,
        base:800,
        green:1000,
        purple:1200
    },
    {
        id:3,
        base:2800,
        green:3200,
        purple:3600
    },
    {
        id:4,
        base:6000,
        green:9000,
        purple:10000
    },
    {
        id:5,
        base:11000,
        green:18000,
        purple:25000
    },
    {
        id:6,
        base:20000,
        green:32000,
        purple:50000
    },
    {
        id:7,
        base:35000,
        green:56000,
        purple:90000
    },
    {
        id:8,
        base:50000,
        green:90000,
        purple:180000
    },
    {
        id:9,
        base:110000,
        green:200000,
        purple:410000
    },
    {
        id:10,
        base:560000,
        green:1000000,
        purple:2000000
    },
    {
        id:11,
        base:7200000,
        green:13000000,
        purple:26000000
    },
    {
        id:12,
        base:300000000,
        green:540000000,
        purple:1000000000
    },
    {
        id:13,
        base:47000000000,
        green:84000000000,
        purple:1.600e11
    },
    {
        id:14,
        base:2.900e13,
        green:5.300e13,
        purple:1.000e14
    },
    {
        id:15,
        base:7.700e16,
        green:1.300e17,
        purple:2.700e17
    },
    {
        id:16,
        base:8.600e20,
        green:1.500e21,
        purple:3.100e21
    }
];



const achievements = [
    {
        id:1,
        name:"Ante Up!",
        text:`Reach ${text_num}Ante 4${text_end}`
    },
    {
        id:2,
        name:"Ante Upper!",
        text:`Reach ${text_num}Ante 8${text_end}`
    },
    {
        id:3,
        name:"Heads Up",
        text:`Win a Run`
    },
    {
        id:4,
        name:"Low Stakes",
        text:`Win a run on at least<br>${text_num}Red Stake${text_end} difficulty`
    },
    {
        id:5,
        name:"Mid Stakes",
        text:`Win a run on at least<br>${text_num}Black Stake${text_end} difficulty`
    },
    {
        id:6,
        name:"High Stakes",
        text:`Win a run on at least<br>${text_num}Gold Stake${text_end} difficulty`
    },
    {
        id:7,
        name:"Card Player",
        text:`Play at least<br>${text_num}2500${text_end} Cards`
    },
    {
        id:8,
        name:"Card Discarder",
        text:`Discard at least<br>${text_num}2500${text_end} Cards`
    },
    {
        id:9,
        name:"Nest Egg",
        text:`Have ${text_money}$400${text_end} or more<br>during a single run`
    },
    {
        id:10,
        name:"Flushed",
        text:`Play a ${text_num}Flush${text_end}<br>with ${text_num}5 Wild Cards${text_end}`
    },
    {
        id:11,
        name:"Speedrunner",
        text:`Win a run in<br>${text_num}12${text_end} or fewer rounds`
    },
    {
        id:12,
        name:"ROI",
        text:`Buy ${text_num}5${text_end} ${text_voucher}Vouchers${text_end}<br>by the end of ${text_num}Ante 4${text_end}`
    },
    {
        id:13,
        name:"Shattered",
        text:`Break ${text_num}2 Glass Cards${text_end}<br>in a single hand`
    },
    {
        id:14,
        name:"Royale",
        text:`Play a ${text_num}Royal Flush${text_end}`
    },
    {
        id:15,
        name:"Retrograde",
        text:`Get any ${text_num}poker hand${text_end}<br>to level ${text_num}10${text_end}`
    },
    {
        id:16,
        name:"10K",
        text:`Score ${text_mult}10,000${text_end} Chips<br>in a single hand`
    },
    {
        id:17,
        name:"1,000K",
        text:`Score ${text_mult}1,000,000${text_end} Chips<br>in a single hand`
    },
    {
        id:18,
        name:"100,000K",
        text:`Score ${text_mult}100,000,000${text_end} Chips<br>in a single hand`
    },
    {
        id:19,
        name:"Tiny Hands",
        text:`Thin your deck down<br>to ${text_num}20${text_end} or fewer cards`
    },
    {
        id:20,
        name:"Big Hands",
        text:`Have ${text_num}80${text_end} or more<br>cards in your deck`
    },
    {
        id:21,
        name:"You Get What You Get",
        text:`Win a run without<br>${text_prob}rerolling${text_end} the shop`
    },
    {
        id:22,
        name:"Rule Bender",
        text:`Complete any<br>challenge run`
    },
    {
        id:23,
        name:"Rule Breaker",
        text:`Complete every<br>challenge run`
    },
    {
        id:24,
        name:"Legendary",
        text:`Discover a<br>${text_legendary}Legendary${text_end} Joker`
    },
    {
        id:25,
        name:"Astronomy",
        text:`Discover every<br>${text_planet}Planet${text_end} card`
    },
    {
        id:26,
        name:"Cartomancy",
        text:`Discover every<br>${text_tarot}Tarot${text_end} card`
    },
    {
        id:27,
        name:"Clairvoyance",
        text:`Discover every<br>${text_spectral}Spectral${text_end} card`
    },
    {
        id:28,
        name:"Extreme Couponer",
        text:`Discover every ${text_voucher}Voucher${text_end}`
    },
    {
        id:29,
        name:"Completionist",
        text:`Discover ${text_num}100%${text_end}<br>of your collection`
    },
    {
        id:30,
        name:"Completionist+",
        text:`Win with every deck<br>on ${text_num}Gold Stake${text_end} difficulty`
    },
    {
        id:31,
        name:"Completionist++",
        text:`Earn a Gold Sticker<br>on every ${text_num}Joker${text_end}`
    }
];


