const name = "Przemek";
const age = "46";
const nieDoWiary = "Nie wierzę że aż tyle";
alert("Cześć");
console.log(`Mam na imie ${name} i mam ${age} lat.`);
const emptyParagraph = document.querySelector('.week-summary__title--js');
emptyParagraph.innerHTML = `Nawet uzupełniłem treśc javaScriptem`;

const greet = (age, firstname) =>  {
    console.log(`Witaj drogi odwiedzający, nazwyam się ${firstname} i mam ${age} lat. `);
}

greet (46,'Przemek');