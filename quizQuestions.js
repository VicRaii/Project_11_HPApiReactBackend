const questions = [
  {
    question:
      'How does Harry manage to breathe underwater during the second task of the Triwizard Tournament?',
    options: [
      'He transfigures into a shark',
      'He kisses a mermaid',
      'He performs a bubble-head charm',
      'He eats gillyweed'
    ],
    answer: 'He eats gillyweed',
    level: 10000,
    points: 15
  },
  {
    question: 'What is the name of Fred and George’s joke shop?',
    options: [
      'Weasley Joke Emporium',
      'Fred & George’s Wonder Emporium',
      'Zonko’s Joke Shop',
      'Weasleys’ Wizard Wheezes'
    ],
    answer: 'Weasleys’ Wizard Wheezes',
    level: 1,
    points: 15
  },
  {
    question: 'Which of these is NOT one of the Unforgivable Curses',
    options: ['Cruciatus', 'Imperius', 'Avada Kedavra', 'Sectumsempra'],
    answer: 'Sectumsempra',
    level: 1,
    points: 15
  },
  {
    question: 'Who played Lord Voldemort in the movies?',
    options: ['Gary Oldman', 'Tom Hiddleston', 'Jeremy Irons', 'Ralph Fiennes'],
    answer: 'Ralph Fiennes',
    level: 1,
    points: 15
  },
  {
    question: 'Who guards the entrance to the Gryffindor common room?',
    options: [
      'The Grey Lady',
      'The Fat Friar',
      'The Bloody Baron',
      'The Fat Lady'
    ],
    answer: 'The Fat Lady',
    level: 1,
    points: 15
  },
  {
    question: 'Who is NOT a member of the Order of the Phoenix?',
    options: [
      'Mad-eye Moody',
      'Professor Snape',
      'Remus Lupin',
      'Cornelius Fudge'
    ],
    answer: 'Cornelius Fudge',
    level: 1,
    points: 15
  },
  {
    question: 'A wizard who cannot do magic is known as a:',
    options: ['Bleaker', 'Duddle', 'Wizont', 'Squib'],
    answer: 'Squib',
    level: 1,
    points: 15
  },
  {
    question: 'What does the spell “Obliviate” do?',
    options: [
      'Destroys objects',
      'Sends someone to the nether realm',
      'Makes objects invisible',
      'Removes parts of someone’s memory'
    ],
    answer: 'Removes parts of someone’s memory',
    level: 1,
    points: 15
  },
  {
    question: 'Where does Hermione brew her first batch of Polyjuice Potion?',
    options: [
      'The Hogwarts Kitchen',
      'The Room of Requirement',
      'The Gryffindor Common Room',
      'Moaning Myrtle’s Bathroom'
    ],
    answer: 'Moaning Myrtle’s Bathroom',
    level: 1,
    points: 15
  },
  {
    question:
      'What does one say to close the Marauder’s Map and make it blank again?',
    options: [
      'Nothing to See Here',
      'All Done',
      'Hello Professor',
      'Mischief Managed'
    ],
    answer: 'Mischief Managed',
    level: 1,
    points: 15
  },
  {
    question:
      'The three kinds of balls used in Quidditch are Bludgers, Snitches, and…',
    options: ['Wiffles', 'Boccis', 'Foozles', 'Quaffles'],
    answer: 'Quaffles',
    level: 2,
    points: 30
  },
  {
    question:
      'Who has been stealing Harry’s letters from Ron and Hermione at the beginning of ‘Harry Potter and the Chamber of Secrets’?',
    options: ['Dumbledore', 'Draco Malfoy', 'The Dursleys', 'Dobby'],
    answer: 'Dobby',
    level: 2,
    points: 30
  },
  {
    question: 'How many Weasley siblings are there?',
    options: ['5', '10', '3', '7'],
    answer: '7',
    level: 2,
    points: 30
  },
  {
    question:
      'Where do Harry and Ron eventually find the missing flying Ford Anglia?',
    options: [
      'At the Ministry of Magic',
      'In the Room of Requirement',
      'Outside the Dursleys House',
      'In the Forbidden Forest'
    ],
    answer: 'In the Forbidden Forest',
    level: 2,
    points: 30
  },
  {
    question:
      'From what King’s Cross platform does the Hogwarts Express leave?',
    options: [
      'Eight and One-quarter',
      'Nine and Three-quarters',
      'Five and a Half',
      'Elevenquet'
    ],
    answer: 'Elevenquet',
    level: 2,
    points: 30
  },
  {
    question: 'What’s the name of Filch’s cat?',
    options: ['Ser Pounce', 'Buttercup', 'Jones', 'Mrs. Norris'],
    answer: 'Mrs. Norris',
    level: 2,
    points: 30
  },
  {
    question: 'Which professor teaches flying lessons?',
    options: [
      'Professor Grubbly-Plank',
      'Sybill Trelawney',
      'Charity Burbage',
      'Madam Hooch'
    ],
    answer: 'Madam Hooch',
    level: 2,
    points: 30
  },
  {
    question: 'Which is NOT a form of currency in the wizarding world?',
    options: ['Sickles', 'Knuts', 'Galleons', 'Doxies'],
    answer: 'Doxies',
    level: 2,
    points: 30
  },
  {
    question: 'What does Hermione use to defeat the Devil’s Snare plant?',
    options: ['Expelliarmus!', 'Wind', 'Reducto', 'Lumos Solem'],
    answer: 'Lumos Solem',
    level: 2,
    points: 30
  },
  {
    question: 'Who has given Harry Potter the Invisibility cloak?',
    options: ['Mad-eye Moody', 'Professor Snape', 'Dobby', 'Dumbledore'],
    answer: 'Dumbledore',
    level: 2,
    points: 30
  },
  {
    question: 'What is the model of the first broom Harry ever receives?',
    options: ['Cleansweep One', 'Hoover', 'Firebolt', 'Nimbus 2000'],
    answer: 'Nimbus 2000',
    level: 3,
    points: 45
  },
  {
    question: 'What does Mrs. Weasley give Harry for Christmas every year?',
    options: [
      'Bertie Bott’s every flavour beans',
      'Chocolate frogs',
      'A fruit cake',
      'A new sweater'
    ],
    answer: 'A new sweater',
    level: 3,
    points: 45
  },
  {
    question: 'What are the names of Draco Malfoy’s two cronies?',
    options: [
      'Huggs and Pucey',
      'Flint and Boyle',
      'Pike and Zabini',
      'Crabbe and Goyle'
    ],
    answer: 'Crabbe and Goyle',
    level: 3,
    points: 45
  },
  {
    question:
      'Where does Dumbledore’s Army meet in ‘Harry Potter and the Order of the Phoenix’?',
    options: [
      'The Gryffindor Common Room',
      'Hagrid’s House',
      'The Shrieking Shack',
      'The Room of Requirement'
    ],
    answer: 'The Room of Requirement',
    level: 3,
    points: 45
  },
  {
    question: 'How do you summon a Patronus?',
    options: [
      'Patronia Paternus',
      'Expelliarmus Patronicha',
      'Accio Patronus',
      'Expecto Patronum'
    ],
    answer: 'Expecto Patronum',
    level: 3,
    points: 45
  },
  {
    question: "What's the name of the dog guarding the Sorcerer’s Stone?",
    options: ['Padfoot', 'Fang', 'The Grim', 'Fluffy'],
    answer: 'Fluffy',
    level: 3,
    points: 45
  },
  {
    question:
      "What spell does Ron use against the troll in Harry Potter and the Sorcerer's Stone?",
    options: ['Alohomora', 'Expelliarmus', 'Wingardium Leviosa', 'Stupefy'],
    answer: 'Stupefy',
    level: 3,
    points: 45
  },
  {
    question: 'What kind of monster is released from the Chamber of Secrets?',
    options: ['Voldemort', 'Acromantula', 'Boggart', 'Basilisk'],
    answer: 'Basilisk',
    level: 3,
    points: 45
  },
  {
    question: 'Who is the Heir of Slytherin?',
    options: ['Rubeus Hagrid', 'Harry Potter', 'Draco Malfoy', 'Tom Riddle'],
    answer: 'Tom Riddle',
    level: 3,
    points: 45
  },
  {
    question:
      'Sirius Black escapes on what kind of fantastic beast in the Prisoner of Azkaban?',
    options: ['Phoenix', 'Dragon', 'Unicorn', 'Hippogriff'],
    answer: 'Hippogriff',
    level: 3,
    points: 45
  },
  {
    question: "Who was Harry's love interest before Ginny Weasley?",
    options: [
      'Fleur Delacour',
      'Luna Lovegood',
      'Hermione Granger',
      'Cho Chang'
    ],
    answer: 'Cho Chang',
    level: 4,
    points: 60
  },
  {
    question:
      'Which of these award-winning and celebrated British actors has NOT appeared in a Harry Potter movie?',
    options: ['Emma Thompson', 'Alan Rickman', 'Maggie Smith', 'Judi Dench'],
    answer: 'Judi Dench',
    level: 4,
    points: 60
  },
  {
    question:
      'Which Hogwarts teacher had to be re-cast after the actor playing this character died?',
    options: ['Hagrid', 'Grubblyplank', 'Flitwick', 'Dumbledore'],
    answer: 'Dumbledore',
    level: 4,
    points: 60
  },
  {
    question: 'Which character was NOT an Animagus?',
    options: [
      'James Potter',
      'Peter Pettigrew',
      'Professor McGonagall',
      'Remus Lupin'
    ],
    answer: 'Remus Lupin',
    level: 4,
    points: 60
  },
  {
    question:
      'Which composer was nominated for both Academy and Grammy awards for the music in the Harry Potter films?',
    options: [
      'Danny Elfman',
      'Michael Giacchino',
      'Andrew Lloyd Webber',
      'John Williams'
    ],
    answer: 'John Williams',
    level: 4,
    points: 60
  },
  {
    question: 'You can only see a Thestral if you…',
    options: [
      'Believe in the Deathly Hallows',
      'Bow to them',
      'Have seen death',
      'Wear special goggles'
    ],
    answer: 'Wear special goggles',
    level: 4,
    points: 60
  },
  {
    question: 'Who is the ghost of Gryffindor Tower?',
    options: ['Grey Lady', 'Bloody Baron', 'Fat Friar', 'Sir Nicholas'],
    answer: 'Sir Nicholas',
    level: 4,
    points: 60
  },
  {
    question:
      'What potion does Harry use to get Professor Slughorn to tell his secret?',
    options: ['Polyjuice', 'Veritas Serum', 'Amortentia', 'Felix Felicis'],
    answer: 'Felix Felicis',
    level: 4,
    points: 60
  },
  {
    question:
      'Which Weasley brother marries former Beauxbatons student Fleur Delacour?',
    options: ['Fred', 'Percy', 'Charlie', 'Bill'],
    answer: 'Bill',
    level: 4,
    points: 60
  },
  {
    question:
      "What's the last Horcrux that has to be destroyed in order for Voldemort to die?",
    options: ["Ravenclaw's Diadem", "Hufflepuff's Cup", 'Harry', 'Nagini'],
    answer: 'Nagini',
    level: 4,
    points: 60
  },
  {
    question:
      'The Sorting Hat considers which two houses for Harry before ultimately choosing Gryffindor?',
    options: [
      'Gryffindor and Hufflepuff',
      'Gryffindor and Ravenclaw',
      'Ravenclaw and Hufflepuff',
      'Gryffindor and Slytherin'
    ],
    answer: 'Gryffindor and Slytherin',
    level: 5,
    points: 75
  },
  {
    question: 'Who teaches Harry how to cast a Patronus Charm?',
    options: [
      'Hermione Granger',
      'Albus Dumbledore',
      'Severus Snape',
      'Remus Lupin'
    ],
    answer: 'Remus Lupin',
    level: 5,
    points: 75
  },
  {
    question:
      'Which other character could fulfill the prophecy described in Harry Potter and the Order of the Phoenix?',
    options: [
      'Ron Weasley',
      'Luna Lovegood',
      'Cho Chang',
      'Neville Longbottom'
    ],
    answer: 'Neville Longbottom',
    level: 5,
    points: 75
  },
  {
    question:
      'Who is the Half-Blood Prince featured in the title of the sixth book?',
    options: [
      'Lord Voldemort',
      'Draco Malfoy',
      'Rubeus Hagrid',
      'Severus Snape'
    ],
    answer: 'Severus Snape',
    level: 5,
    points: 75
  },
  {
    question:
      'How many pieces does Voldemort divide his soul into, including himself?',
    options: ['Seven', 'Ten', 'Three', 'Eight'],
    answer: 'Eight',
    level: 5,
    points: 75
  },
  {
    question: 'Which spell is used to summon items, even from across the room?',
    options: ['Reparo', 'Legilimens', 'Alohomora', 'Accio'],
    answer: 'Accio',
    level: 5,
    points: 75
  },
  {
    question: "What is Dumbledore's pet phoenix named:",
    options: ['Fortescue', 'Fenix', 'Fauntleroy', 'Fawkes'],
    answer: 'Fawkes',
    level: 5,
    points: 75
  },
  {
    question: 'Which of these characters has never been a Death Eater?',
    options: [
      'Peter Pettigrew',
      'Severus Snape',
      'Lucius Malfoy',
      'Horace Slughorn'
    ],
    answer: 'Horace Slughorn',
    level: 5,
    points: 75
  },
  {
    question:
      'Which character is killed by the basilisk in Harry Potter and the Chamber of Secrets?',
    options: [
      'Ginny Weasley',
      'Nearly Headless Nick',
      'Colin Creevey',
      'Moaning Myrtle'
    ],
    answer: 'Moaning Myrtle',
    level: 5,
    points: 75
  },
  {
    question:
      'Who is named Minister of Magic after the Battle of Hogwarts in Harry Potter and the Deathly Hallows?',
    options: [
      'Cornelius Fudge',
      'Rufus Scrimgeour',
      'Arthur Weasley',
      'Kingsley Shaklebolt'
    ],
    answer: 'Kingsley Shaklebolt',
    level: 5,
    points: 75
  }
]

module.exports = questions
