const athletes = [
  {
    img: '../images/person1.jpg',
    name: 'Maia Nebrod',
    location: 'Apulia, Italy',
    description: `Extremely athletic woman with her 
    own clothing brand and advocate of women's rights.`,
  },
  {
    img: '../images/person2.jpg',
    name: 'Arduino Godiva',
    location: 'Sardinia, Italy',
    description: `Well known for his impressive tricks on the bars and his explosive
     strength owner of "Power Supplements".`,
  },
  {
    img: '../images/person3.jpg',
    name: 'Elizabete Gervas',
    location: 'Mozambique',
    description: `Extremely athletic woman with her 
    own clothing brand and advocate of women's rights.`,
  },
  {
    img: '../images/person5.jpg',
    name: 'Andrejs Dov',
    location: 'Latvia',
    description: `Well known for his impressive tricks on the bars and his explosive
     strength owner of "Power Supplements".`,
  },
  {
    img: '../images/person6.jpg',
    name: 'Kazuko Airi',
    location: 'Fukuoka, Japan',
    description: `Extremely athletic woman with her 
    own clothing brand and advocate of women's rights.`,
  },
  {
    img: 'https://thispersondoesnotexist.com/image',
    name: 'Matéo Perez',
    location: 'México',
    description: `Well known for his impressive tricks on the bars and his explosive
     strength owner of "Power Supplements".`,
  },
];

const cardsAthletes = document.querySelectorAll('.featured-athlete');
const card = cardsAthletes[0];
const list = document.querySelector('#list-athlete');

athletes.forEach((athlete) => {
  const cardClone = card.cloneNode(true);
  cardClone.classList.remove('d-none');
  cardClone.querySelector('.athlete-img').src = athlete.img;
  const info = cardClone.querySelector('.info-athlete');
  info.firstElementChild.innerText = athlete.name;
  info.querySelector('h4').innerText = athlete.location;
  info.querySelector('p').innerText = athlete.description;

  list.appendChild(cardClone);
});