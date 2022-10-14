//VARIABLES DECLARATION AND INITIALIZATION
const classe75 = [
  'Cristian	Antir',
  'Eugenio	Belardinelli',
  'Matteo	Bellomo',
  'Marcello	Bozzuto',
  'Sara Cassandra	Cappelli',
  'Lorenzo	Carelli',
  'Saverio	Cascelli',
  'Riccardo	Civardi',
  'Debora	Cocchi',
  'Paolo	Colombo',
  'Denis	Costantin',
  'Stefania	De Flaviis',
  'Riccardo	De Stefano',
  'Luca 	Fabbozzo',
  'Mirko 	Farina',
  'Cristina Lietti',
  'Riccardo	Lo Presti',
  'Ciro	Meluziis',
  'Manuel	Mena',
  'Enrico	Michelotto',
  'Carmelo 	Miuccio',
  'Ibrahim	Mujagic',
  'Carmelo 	Palumbo',
  'Pasqualino	Pannella',
  'Nicholas	Paparusso',
  'Giorgio	Perez',
  'Andrea	Pinna',
  'Karim	Pucci',
  'Gabriele	Rinciari',
  'Federico	Sainas',
  'Mattia	Stangherlin',
  'Jessica	Tartaglia',
  'Filippo	Toffoletto',
  'Michele	Zancolò',
  'Andrea	Zollini'
];

// CHECK PRIMA DI CHIUDERE

const button = document.querySelector("#btn-input-on");

//random
button.addEventListener('click', function(){
  const randomIndex = Math.floor(Math.random() * classe75.length  );
  document.querySelector('#output').innerHTML = classe75[randomIndex];

});


