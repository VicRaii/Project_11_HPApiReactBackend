const characters = [
  {
    name: 'Harry Potter',
    image:
      'https://www.bloghogwarts.com/wp-content/uploads/2011/02/harry-potter-209x300.jpg',
    alternate_names: 'The Boy Who Lived',
    dateOfBirth: '31/07/80',
    ancestry: 'Half-blood',
    actor: 'Daniel Radcliffe',
    alive: true,
    house: 'Gryffindor'
  },
  {
    name: 'Hermione Granger',
    image:
      'http://bloghogwarts.com/wp-content/uploads/2007/10/hermione-granger.jpg',
    alternate_names: "Harry's best friend",
    dateOfBirth: '19/09/79',
    ancestry: 'Muggle-born',
    actor: 'Emma Watson',
    alive: true,
    house: 'Gryffindor'
  },
  {
    name: 'Ronald Weasley',
    image:
      'https://i.pinimg.com/736x/3c/6c/37/3c6c37f765ce8cf3cfc92cb89949e099.jpg',
    alternate_names: 'Ron',
    dateOfBirth: '01/03/80',
    ancestry: 'Pure-blood',
    actor: 'Rupert Grint',
    alive: true,
    house: 'Gryffindor'
  },
  {
    name: 'Albus Dumbledore',
    image:
      'https://i.pinimg.com/736x/c4/5b/56/c45b565ad39b0011b8224d4a8778db97.jpg',
    alternate_names: 'The Headmaster',
    dateOfBirth: '1881',
    ancestry: 'Half-blood',
    actor: 'Richard Harris / Michael Gambon',
    alive: false,
    house: 'Gryffindor'
  },
  {
    name: 'Severus Snape',
    image:
      'https://i.pinimg.com/736x/ef/e4/55/efe4554b4f1a7025a2c347795886b98c.jpg',
    alternate_names: 'The Half-Blood Prince',
    dateOfBirth: '09/01/60',
    ancestry: 'Half-blood',
    actor: 'Alan Rickman',
    alive: false,
    house: 'Slytherin'
  },
  {
    name: 'Rubeus Hagrid',
    image:
      'http://bloghogwarts.com/wp-content/uploads/2007/12/rubeus-hagrid.jpg',
    alternate_names: 'Hagrid',
    dateOfBirth: '06/12/28',
    ancestry: 'Half-blood',
    actor: 'Robbie Coltrane',
    alive: true,
    house: 'Gryffindor'
  },
  {
    name: 'Lord Voldemort',
    image:
      'https://i.pinimg.com/736x/41/6b/07/416b07bfab7e403d2bb9909a152b0232.jpg',
    alternate_names: 'Tom Riddle',
    dateOfBirth: '31/12/26',
    ancestry: 'Half-blood',
    actor: 'Ralph Fiennes',
    alive: false,
    house: 'Slytherin'
  },
  {
    name: 'Minerva McGonagall',
    image:
      'http://bloghogwarts.com/wp-content/uploads/2007/12/minerva-mcgonagall.jpg',
    alternate_names: 'Professor McGonagall',
    dateOfBirth: '04/10/28',
    ancestry: 'Half-blood',
    actor: 'Maggie Smith',
    alive: true,
    house: 'Gryffindor'
  },
  {
    name: 'Draco Malfoy',
    image:
      'https://i.pinimg.com/736x/e1/5a/27/e15a27fd8188d66122d17d9cf3cc6537.jpg',
    alternate_names: 'Draco',
    dateOfBirth: '05/06/80',
    ancestry: 'Pure-blood',
    actor: 'Tom Felton',
    alive: true,
    house: 'Slytherin'
  },
  {
    name: 'Neville Longbottom',
    image:
      'https://i.pinimg.com/736x/2d/aa/be/2daabe94f510f832feda54ebca395f15.jpg',
    alternate_names: 'Nev',
    dateOfBirth: '30/07/80',
    ancestry: 'Pure-blood',
    actor: 'Matthew Lewis',
    alive: true,
    house: 'Gryffindor'
  },
  {
    name: 'Luna Lovegood',
    image:
      'https://i.pinimg.com/736x/aa/4b/00/aa4b0017c0a4430a6f41b6ab1c134559.jpg',
    alternate_names: 'Loony Lovegood',
    dateOfBirth: '13/02/81',
    ancestry: 'Pure-blood',
    actor: 'Evanna Lynch',
    alive: true,
    house: 'Ravenclaw'
  },
  {
    name: 'Ginny Weasley',
    image: 'http://bloghogwarts.com/wp-content/uploads/2008/09/ginny.jpg',
    alternate_names: 'Gin',
    dateOfBirth: '11/08/81',
    ancestry: 'Pure-blood',
    actor: 'Bonnie Wright',
    alive: true,
    house: 'Gryffindor'
  },
  {
    name: 'Sirius Black',
    image:
      'http://bloghogwarts.com/wp-content/uploads/2007/12/sirius-black.jpg',
    alternate_names: 'Padfoot',
    dateOfBirth: '03/11/59',
    ancestry: 'Pure-blood',
    actor: 'Gary Oldman',
    alive: false,
    house: 'Gryffindor'
  },
  {
    name: 'Remus Lupin',
    image: 'https://www.bloghogwarts.com/wp-content/uploads/2009/03/lupin.jpg',
    alternate_names: 'Moony',
    dateOfBirth: '10/03/60',
    ancestry: 'Half-blood',
    actor: 'David Thewlis',
    alive: false,
    house: 'Gryffindor'
  },
  {
    name: 'Bellatrix Lestrange',
    image:
      'https://i.pinimg.com/736x/49/a5/2b/49a52b6f4f15fa04c3e97f65c50f2294.jpg',
    alternate_names: 'Bella',
    dateOfBirth: '1951',
    ancestry: 'Pure-blood',
    actor: 'Helena Bonham Carter',
    alive: false,
    house: 'Slytherin'
  },
  {
    name: 'Lucius Malfoy',
    image:
      'http://bloghogwarts.com/wp-content/uploads/2008/01/lucius-malfoy.jpg',
    alternate_names: 'Lucius',
    dateOfBirth: '1954',
    ancestry: 'Pure-blood',
    actor: 'Jason Isaacs',
    alive: true,
    house: 'Slytherin'
  },
  {
    name: 'Nymphadora Tonks',
    image:
      'https://i.pinimg.com/736x/4d/0b/2c/4d0b2c0a16ec15db1f5957ad9d4d4cd2.jpg',
    alternate_names: 'Tonks',
    dateOfBirth: '1973',
    ancestry: 'Half-blood',
    actor: 'Natalia Tena',
    alive: false,
    house: 'Hufflepuff'
  },
  {
    name: 'Dolores Umbridge',
    image:
      'https://i.pinimg.com/736x/0b/32/cb/0b32cbf8cef5529d5a3217b42c4481b2.jpg',
    alternate_names: 'Toad',
    dateOfBirth: '26/08/65',
    ancestry: 'Half-blood',
    actor: 'Imelda Staunton',
    alive: true,
    house: 'Slytherin'
  },
  {
    name: 'James Potter',
    image:
      'https://i.pinimg.com/736x/d4/41/a4/d441a431ace5aa94353d5a0da398ddbd.jpg',
    alternate_names: 'Prongs',
    dateOfBirth: '27/03/60',
    ancestry: 'Pure-blood',
    actor: 'Adrian Rawlins',
    alive: 'false',
    house: 'Gryffindor'
  },
  {
    name: 'Lily Potter',
    image:
      'https://i.pinimg.com/736x/ea/43/24/ea4324012732b7a6d353b75ba2998da6.jpg',
    alternate_names: 'Lily Evans',
    dateOfBirth: '30/01/60',
    ancestry: 'Muggle-born',
    actor: 'Geraldine Somerville',
    alive: 'false',
    house: 'Gryffindor'
  },
  {
    name: 'Filius Flitwick',
    image:
      'https://i.pinimg.com/736x/b6/92/00/b692001ff6b0346be6234dbe25e4f4e5.jpg',
    alternate_names: 'Professor Flitwick',
    dateOfBirth: '17/10/1958',
    ancestry: 'Half-blood',
    actor: 'Warwick Davis',
    alive: 'true',
    house: 'Ravenclaw'
  },
  {
    name: 'Horace Slughorn',
    image:
      'https://i.pinimg.com/736x/c4/52/44/c45244228330a398f2815ea1c4960df9.jpg',
    alternate_names: 'Professor Slughorn',
    dateOfBirth: '28/04/1881',
    ancestry: 'Half-blood',
    actor: 'Jim Broadbent',
    alive: 'true',
    house: 'Slytherin'
  },
  {
    name: 'Molly Weasley',
    image:
      'https://i.pinimg.com/736x/b6/b5/0a/b6b50ad2fc71e250ade1b4d9c93133db.jpg',
    alternate_names: 'Mrs. Weasley',
    dateOfBirth: '30/09/1949',
    ancestry: 'Pure-blood',
    actor: 'Julie Walters',
    alive: 'true',
    house: 'Gryffindor'
  },
  {
    name: 'Arthur Weasley',
    image:
      'https://i.pinimg.com/736x/70/c2/82/70c2827d445a7f4ddc3f5ecdc1a2f674.jpg',
    alternate_names: 'Mr. Weasley',
    dateOfBirth: '06/02/1950',
    ancestry: 'Pure-blood',
    actor: 'Mark Williams',
    alive: 'true',
    house: 'Gryffindor'
  },
  {
    name: 'Fred Weasley',
    image:
      'https://i.pinimg.com/736x/b6/59/68/b65968d48eabffd1a82b026a365b1913.jpg',
    alternate_names: 'Fred',
    dateOfBirth: '01/04/1978',
    ancestry: 'Pure-blood',
    actor: 'James Phelps',
    alive: 'false',
    house: 'Gryffindor'
  },
  {
    name: 'George Weasley',
    image:
      'https://i.pinimg.com/736x/ac/39/24/ac392493672b744284425e1e0edaaf6f.jpg',
    alternate_names: 'George',
    dateOfBirth: '01/04/1978',
    ancestry: 'Pure-blood',
    actor: 'Oliver Phelps',
    alive: 'true',
    house: 'Gryffindor'
  },
  {
    name: 'Bill Weasley',
    image:
      'https://i.pinimg.com/736x/ca/18/5b/ca185b12f91b17cf14eceb5692a1e5b5.jpg',
    alternate_names: 'William',
    dateOfBirth: '29/11/1970',
    ancestry: 'Pure-blood',
    actor: 'Domhnall Gleeson',
    alive: 'true',
    house: 'Gryffindor'
  },
  {
    name: 'Charlie Weasley',
    image:
      'https://i.pinimg.com/736x/0a/47/a4/0a47a48f74860538e0c3e9236adab6ec.jpg',
    alternate_names: 'Charles',
    dateOfBirth: '12/12/1972',
    ancestry: 'Pure-blood',
    actor: 'Josh Herdman',
    alive: 'true',
    house: 'Gryffindor'
  },
  {
    name: 'Kingsley Shacklebolt',
    image:
      'https://i.pinimg.com/736x/bc/52/e5/bc52e5215d4f8cbdfe3aafb7c8713fb0.jpg',
    alternate_names: 'Minister for Magic',
    dateOfBirth: '1960',
    ancestry: 'Half-blood',
    actor: 'George Harris',
    alive: 'true',
    house: 'Gryffindor'
  },
  {
    name: 'Colin Creevey',
    image:
      'https://i.pinimg.com/736x/cc/78/03/cc7803f3a91a7514fc8150f7a8a93ea6.jpg',
    alternate_names: "Harry's Fan",
    dateOfBirth: 'unknown',
    ancestry: 'Muggle-born',
    actor: 'Devon Murray',
    alive: 'false',
    house: 'Gryffindor'
  },
  {
    name: 'Dennis Creevey',
    image:
      'https://i.pinimg.com/736x/c6/f1/17/c6f1174a9cc8c5315ea4fa10cdf35d27.jpg',
    alternate_names: "Colin's Brother",
    dateOfBirth: 'unknown',
    ancestry: 'Muggle-born',
    actor: 'Hugh Mitchell',
    alive: 'true',
    house: 'Gryffindor'
  },
  {
    name: 'Vincent Crabbe',
    image:
      'https://i.pinimg.com/736x/aa/7b/df/aa7bdf3cf09ef7aaf901482adc5e5ec0.jpg',
    alternate_names: 'Crabbe',
    dateOfBirth: '1980',
    ancestry: 'Pure-blood',
    actor: 'Jamie Waylett',
    alive: 'false',
    house: 'Slytherin'
  },
  {
    name: 'Gregory Goyle',
    image:
      'https://i.pinimg.com/736x/11/73/d2/1173d2a770fa5f1d1ba0b3db1d749e0c.jpg',
    alternate_names: 'Goyle',
    dateOfBirth: 'unknown',
    ancestry: 'Pure-blood',
    actor: 'Josh Herdman',
    alive: 'true',
    house: 'Slytherin'
  },
  {
    name: 'Marcus Flint',
    image:
      'https://i.pinimg.com/736x/4d/56/80/4d5680fb228e96542318bf4e8519310d.jpg',
    alternate_names: 'Quidditch Captain',
    dateOfBirth: '1974',
    ancestry: 'Pure-blood',
    actor: 'Sam Beazley',
    alive: 'true',
    house: 'Slytherin'
  },
  {
    name: 'Pansy Parkinson',
    image:
      'https://i.pinimg.com/736x/09/05/14/090514faef78f102f8cdf66fd792ffd7.jpg',
    alternate_names: 'Slytherin Girl',
    dateOfBirth: '1979',
    ancestry: 'Pure-blood',
    actor: 'Scarlett Byrne',
    alive: 'true',
    house: 'Slytherin'
  },
  {
    name: 'Narcissa Malfoy',
    image:
      'https://i.pinimg.com/736x/5f/05/ea/5f05ea203fc8f8ae9473dc63f476670e.jpg',
    alternate_names: "Draco's Mother",
    dateOfBirth: '1955',
    ancestry: 'Pure-blood',
    actor: 'Helen McCrory',
    alive: 'true',
    house: 'Slytherin'
  },
  {
    name: 'Myrtle Warren',
    image:
      'https://i.pinimg.com/736x/e2/fe/e6/e2fee657ce52fca07eab8e5490875e06.jpg',
    alternate_names: 'Moaning Myrtle',
    dateOfBirth: '1929',
    ancestry: 'Muggle-born',
    actor: 'Shirley Henderson',
    alive: 'false',
    house: 'Ravenclaw'
  },
  {
    name: 'Cho Chang',
    image:
      'https://i.pinimg.com/736x/89/75/c7/8975c72933f256e5252d60d742566372.jpg',
    alternate_names: null,
    dateOfBirth: '01/09/1978',
    ancestry: 'Half-blood',
    actor: 'Katie Leung',
    alive: 'true',
    house: 'Ravenclaw'
  },
  {
    name: 'Padma Patil',
    image:
      'https://i.pinimg.com/736x/1f/64/b4/1f64b4cdee970094a208a1e06c5c095a.jpg',
    alternate_names: null,
    dateOfBirth: '1980',
    ancestry: 'Pure-blood',
    actor: 'Afshan Azad',
    alive: 'true',
    house: 'Gryffindor'
  },
  {
    name: 'Parvati Patil',
    image:
      'https://i.pinimg.com/736x/d8/90/4e/d8904e1963bcb6b80c3dcaca088f9ec6.jpg',
    alternate_names: null,
    dateOfBirth: '1980',
    ancestry: 'Pure-blood',
    actor: 'Shefali Chowdhury',
    alive: 'true',
    house: 'Gryffindor'
  },
  {
    name: 'Michael Corner',
    image:
      'https://i.pinimg.com/736x/7a/c4/40/7ac44000c052e53ce4f8a02c9bfa7204.jpg',
    alternate_names: null,
    dateOfBirth: '01/09/1979',
    ancestry: 'Half-blood',
    actor: 'Robert Knox',
    alive: 'false',
    house: 'Ravenclaw'
  },
  {
    name: 'Roger Davies',
    image:
      'https://i.pinimg.com/736x/11/dc/fc/11dcfcccf7098a70fa4b10b03ea50214.jpg',
    alternate_names: null,
    dateOfBirth: '1978',
    ancestry: 'unknown',
    actor: 'Jamie Waylett',
    alive: 'true',
    house: 'Ravenclaw'
  },
  {
    name: 'Hannah Abbott',
    image:
      'https://i.pinimg.com/736x/f7/7a/69/f77a6921da36af4fc585d712841046e4.jpg',
    alternate_names: null,
    dateOfBirth: '1980',
    ancestry: 'Half-blood',
    actor: 'Charlotte Skeoch',
    alive: 'true',
    house: 'Hufflepuff'
  },
  {
    name: 'Susan Bones',
    image:
      'https://i.pinimg.com/736x/79/86/84/798684ee59635adce30c2cb838f1c173.jpg',
    alternate_names: null,
    dateOfBirth: '1980',
    ancestry: 'Half-blood',
    actor: 'Eleanor Columbus',
    alive: 'true',
    house: 'Hufflepuff'
  },
  {
    name: 'Ernie Macmillan',
    image:
      'https://i.pinimg.com/736x/59/7e/6b/597e6bfd1278cd1039a7f26df9ef7765.jpg',
    alternate_names: null,
    dateOfBirth: '02/03/1980',
    ancestry: 'Pure-blood',
    actor: 'Grint',
    alive: 'true',
    house: 'Hufflepuff'
  },
  {
    name: 'Zacharias Smith',
    image:
      'https://i.pinimg.com/736x/fb/4e/c9/fb4ec9ff52b86084e8f1775363da763e.jpg',
    alternate_names: null,
    dateOfBirth: '1980',
    ancestry: 'Pure-blood',
    actor: 'Nick Shirm',
    alive: 'true',
    house: 'Hufflepuff'
  },
  {
    name: 'Justin Fletchley',
    image:
      'https://i.pinimg.com/736x/18/b1/bf/18b1bf63c3c9dc198324a0816e276e24.jpg',
    alternate_names: null,
    dateOfBirth: '1980',
    ancestry: 'Muggle-born',
    actor: 'Edward Randell',
    alive: 'true',
    house: 'Hufflepuff'
  },
  {
    name: 'Seamus Finnigan',
    image:
      'https://i.pinimg.com/736x/44/b0/3e/44b03e988a1dc94281e9b275269c460c.jpg',
    alternate_names: null,
    dateOfBirth: 'unknown',
    ancestry: 'Half-blood',
    actor: 'Devon Murray',
    alive: 'true',
    house: 'Gryffindor'
  },
  {
    name: 'Wayne Hopkins',
    image:
      'https://i.pinimg.com/736x/aa/fe/70/aafe70bccb5de06f81819cba5e47dc06.jpg',
    alternate_names: null,
    dateOfBirth: '1980',
    ancestry: 'Half-blood',
    actor: 'unknown',
    alive: 'true',
    house: 'Hufflepuff'
  },
  {
    name: 'Leanne',
    image:
      'https://i.pinimg.com/736x/2b/53/df/2b53dfcd67ebe5f7f38600771b3e9009.jpg',
    alternate_names: null,
    dateOfBirth: '1980',
    ancestry: 'Pure-blood',
    actor: 'unknown',
    alive: 'true',
    house: 'Hufflepuff'
  },
  {
    name: 'Cedric Diggory',
    image:
      'https://i.pinimg.com/736x/90/c0/fb/90c0fb72d99e16e8b9ba4027b8d8ab6c.jpg',
    alternate_names: 'Cedric',
    dateOfBirth: '01/09/1977',
    ancestry: 'Pure-blood',
    actor: 'Robert Pattinson',
    alive: 'true',
    house: 'Hufflepuff'
  }
]

module.exports = characters
