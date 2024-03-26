let pokemonList = ["Bulbasaur","Ivysaur","Venusaur","Charmander","Charmeleon","Charizard","Squirtle","Wartortle","Blastoise","Caterpie","Metapod","Butterfree","Weedle","Kakuna","Beedrill","Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow","Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran","Nidorina","Nidoqueen","Nidoran","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew"];

// Answers

// Question 1
document.querySelector('#host-name').innerHTML = 'Jacob Ziff';
document.querySelector('#collaborator-name').innerHTML = "Maiara Lewis Cipriano";


// Question 2
// You can also create their own CSS classes in style.css file and use that. 
instr_button = document.querySelector('#instruction_button');
instr_button.addEventListener("click", q2);
questions = document.querySelectorAll('.questions');

function q2 () {
    questions = document.querySelectorAll('.question');
    for (let q of questions) {
        q.classList.toggle("hidden");
    }
    h = "Hide Instructions"
    s = "Show Instructions"
    if (this.innerHTML === h) {
        this.innerHTML = s
    } else {
        this.innerHTML = h
    }
}



// Question 3
// Try change event first
// There is another event which fires for every character. This is what we want to use.
box = document.getElementById('first_name')
box.addEventListener("change", q3)
function q3 () {
    if (this.value === "John") {
        document.getElementById('last_name').value = "Doe"
    }
}

// Question 4
// Try change event first
// There is another event which fires for every character. This is what we want to use.



// Question 5
// Try change event first
// There is another event which fires for every character. This is what we want to use.
let passwordInput = document.querySelector('#password').value;
let passwordConfirmInput = document.querySelector('#confirm_password').value;

console.log(passwordInput);
console.log(passwordConfirmInput);


// if(passwordValue === passwordConfirmValue) {
//     document.querySelector('#password-alert').innerHTML = "Password Matches";
// } else {
//     document.querySelector('#password-alert').innerHTML = "Password does not match";
// }

// const hidePwdButton = document.querySelector('#hide-password');

// hidePwdButton.addEventListener('click', () =>{
    
// })



//Question 6
r_button = document.getElementById('radio-reset-button')
r_button.addEventListener("click", q4)
function q4 () {
    radios = document.querySelectorAll()
}


//Question 7 





//Question 8





//Question 9 

