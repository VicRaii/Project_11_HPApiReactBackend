const questions = [
  {
    question:
      'How does Harry manage to breathe underwater during the second task of the Triwizard Tournament?',
    options: [
      'He transfigures into a shark',
      'He kisses a mermaid',
      'He eats gillyweed',
      'He performs a bubble-head charm'
    ],
    answer: 'He eats gillyweed',
    level: 1,
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
    options: ['Sectumsempra', 'Avada Kedavra', 'Imperius', 'Cruciatus'],
    answer: 'Sectumsempra',
    level: 1,
    points: 15
  },
  {
    question: 'Who played Lord Voldemort in the movies?',
    options: ['Tom Hiddleston', 'Ralph Fiennes', 'Jeremy Irons', 'Gary Oldman'],
    answer: 'Ralph Fiennes',
    level: 1,
    points: 15
  },
  {
    question: 'Who guards the entrance to the Gryffindor common room?',
    options: [
      'The Fat Friar',
      'The Fat Lady',
      'The Bloody Baron',
      'The Grey Lady'
    ],
    answer: 'The Fat Lady',
    level: 1,
    points: 15
  },
  {
    question: 'Who is NOT a member of the Order of the Phoenix?',
    options: [
      'Remus Lupin',
      'Cornelius Fudge',
      'Mad-eye Moody',
      'Professor Snape'
    ],
    answer: 'Cornelius Fudge',
    level: 1,
    points: 15
  },
  {
    question: 'A wizard who cannot do magic is known as a:',
    options: ['Duddle', 'Wizont', 'Bleaker', 'Squib'],
    answer: 'Squib',
    level: 1,
    points: 15
  },
  {
    question: 'What does the spell “Obliviate” do?',
    options: [
      'Destroys objects',
      'Makes objects invisible',
      'Removes parts of someone’s memory',
      'Sends someone to the nether realm'
    ],
    answer: 'Removes parts of someone’s memory',
    level: 1,
    points: 15
  },
  {
    question: 'Where does Hermione brew her first batch of Polyjuice Potion?',
    options: [
      'The Room of Requirement',
      'The Gryffindor Common Room',
      'Moaning Myrtle’s Bathroom',
      'The Hogwarts Kitchen'
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
      'Mischief Managed',
      'All Done',
      'Hello Professor'
    ],
    answer: 'Mischief Managed',
    level: 1,
    points: 15
  },
  {
    question:
      'The three kinds of balls used in Quidditch are Bludgers, Snitches, and…',
    options: ['Foozles', 'Boccis', 'Quaffles', 'Wiffles'],
    answer: 'Quaffles',
    level: 2,
    points: 30
  },
  {
    question:
      'Who has been stealing Harry’s letters from Ron and Hermione at the beginning of ‘Harry Potter and the Chamber of Secrets?',
    options: ['Draco Malfoy', 'The Dursleys', 'Dobby', 'Dumbledore'],
    answer: 'Dobby',
    level: 2,
    points: 30
  },
  {
    question: 'How many Weasley siblings are there?',
    options: ['3', '5', '10', '7'],
    answer: '7',
    level: 2,
    points: 30
  },
  {
    question:
      'Where do Harry and Ron eventually find the missing flying Ford Anglia?',
    options: [
      'In the Room of Requirement',
      'Outside the Dursleys House',
      'In the Forbidden Forest',
      'At the Ministry of Magic'
    ],
    answer: 'In the Forbidden Forest',
    level: 2,
    points: 30
  },
  {
    question:
      'From what King’s Cross platform does the Hogwarts Express leave?',
    options: [
      'Elevenquet',
      'Eight and One-quarter',
      'Nine and Three-quarters',
      'Five and a Half'
    ],
    answer: 'Nine and Three-quarters',
    level: 2,
    points: 30
  },
  {
    question: 'What’s the name of Filch’s cat?',
    options: ['Jones', 'Buttercup', 'Ser Pounce', 'Mrs. Norris'],
    answer: 'Mrs. Norris',
    level: 2,
    points: 30
  },
  {
    question: 'Which professor teaches flying lessons?',
    options: [
      'Professor Grubbly-Plank',
      'Sybill Trelawney',
      'Madam Hooch',
      'Charity Burbage'
    ],
    answer: 'Madam Hooch',
    level: 2,
    points: 30
  },
  {
    question: 'Which is NOT a form of currency in the wizarding world?',
    options: ['Doxies', 'Galleons', 'Knuts', 'Sickles'],
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
    options: ['Dumbledore', 'Professor Snape', 'Mad-eye Moody', 'Dobby'],
    answer: 'Dumbledore',
    level: 2,
    points: 30
  },
  {
    question: 'What is the model of the first broom Harry ever receives?',
    options: ['Nimbus 2000', 'Firebolt', 'Hoover', 'Cleansweep One'],
    answer: 'Nimbus 2000',
    level: 3,
    points: 45
  },
  {
    question: 'What does Mrs. Weasley give Harry for Christmas every year?',
    options: [
      'A new sweater',
      'A fruit cake',
      'Chocolate frogs',
      'Bertie Bott’s every flavour beans'
    ],
    answer: 'A new sweater',
    level: 3,
    points: 45
  },
  {
    question: 'What are the names of Draco Malfoy’s two cronies?',
    options: [
      'Crabbe and Goyle',
      'Pike and Zabini',
      'Flint and Boyle',
      'Huggs and Pucey'
    ],
    answer: 'Crabbe and Goyle',
    level: 3,
    points: 45
  },
  {
    question:
      'Where does Dumbledore’s Army meet in ‘Harry Potter and the Order of the Phoenix’?',
    options: [
      'The Room of Requirement',
      'The Gryffindor Common Room',
      'The Shrieking Shack',
      'Hagrid’s House'
    ],
    answer: 'The Room of Requirement',
    level: 3,
    points: 45
  },
  {
    question: 'How do you summon a Patronus?',
    options: [
      'Expelliarmus Patronicha',
      'Accio Patronus',
      'Expecto Patronum',
      'Patronia Paternus'
    ],
    answer: 'Expecto Patronum',
    level: 3,
    points: 45
  },
  {
    question: "What's the name of the dog guarding the Sorcerer’s Stone?",
    options: ['Fang', 'Padfoot', 'Fluffy', 'The Grim'],
    answer: 'Fluffy',
    level: 3,
    points: 45
  },
  {
    question:
      "What spell does Ron use against the troll in Harry Potter and the Sorcerer's Stone?",
    options: ['Stupefy', 'Wingardium Leviosa', 'Expelliarmus', 'Alohomora'],
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
    options: ['Draco Malfoy', 'Harry Potter', 'Tom Riddle', 'Rubeus Hagrid'],
    answer: 'Tom Riddle',
    level: 3,
    points: 45
  },
  {
    question:
      'Sirius Black escapes on what kind of fantastic beast in the Prisoner of Azkaban?',
    options: ['Dragon', 'Phoenix', 'Unicorn', 'Hippogriff'],
    answer: 'Hippogriff',
    level: 3,
    points: 45
  },
  {
    question: "Who was Harry's love interest before Ginny Weasley?",
    options: [
      'Luna Lovegood',
      'Hermione Granger',
      'Fleur Delacour',
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
      'Peter Pettigrew',
      'Professor McGonagall',
      'Remus Lupin',
      'James Potter'
    ],
    answer: 'Remus Lupin',
    level: 4,
    points: 60
  },
  {
    question:
      'Which composer was nominated for both Academy and Grammy awards for the music in the Harry Potter films?',
    options: [
      'Michael Giacchino',
      'John Williams',
      'Andrew Lloyd Webber',
      'Danny Elfman'
    ],
    answer: 'John Williams',
    level: 4,
    points: 60
  },
  {
    question: 'You can only see a Thestral if you…',
    options: [
      'Have seen death',
      'Bow to them',
      'Believe in the Deathly Hallows',
      'Wear special goggles'
    ],
    answer: 'Have seen death',
    level: 4,
    points: 60
  },
  {
    question: 'Who is the ghost of Gryffindor Tower?',
    options: ['Bloody Baron', 'Sir Nicholas', 'Grey Lady', 'Fat Friar'],
    answer: 'Sir Nicholas',
    level: 4,
    points: 60
  },
  {
    question:
      'What potion does Harry use to get Professor Slughorn to tell his secret?',
    options: ['Amortentia', 'Felix Felicis', 'Veritas Serum', 'Polyjuice'],
    answer: 'Felix Felicis',
    level: 4,
    points: 60
  },
  {
    question:
      'Which Weasley brother marries former Beauxbatons student Fleur Delacour?',
    options: ['Bill', 'Charlie', 'Percy', 'Fred'],
    answer: 'Bill',
    level: 4,
    points: 60
  },
  {
    question:
      "What's the last Horcrux that has to be destroyed in order for Voldemort to die?",
    options: ['Nagini', 'Harry', "Hufflepuff's Cup", "Ravenclaw's Diadem"],
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
      'Severus Snape',
      'Rubeus Hagrid',
      'Draco Malfoy',
      'Lord Voldemort'
    ],
    answer: 'Severus Snape',
    level: 5,
    points: 75
  },
  {
    question:
      'How many pieces does Voldemort divide his soul into, including himself?',
    options: ['Ten', 'Eight', 'Seven', 'Three'],
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
    options: ['Fenix', 'Fawkes', 'Fauntleroy', 'Fortescue'],
    answer: 'Fawkes',
    level: 5,
    points: 75
  },
  {
    question: 'Which of these characters has never been a Death Eater?',
    options: [
      'Horace Slughorn',
      'Lucius Malfoy',
      'Severus Snape',
      'Peter Pettigrew'
    ],
    answer: 'Horace Slughorn',
    level: 5,
    points: 75
  },
  {
    question:
      'Which character is killed by the basilisk in Harry Potter and the Chamber of Secrets?',
    options: [
      'Nearly Headless Nick',
      'Ginny Weasley',
      'Moaning Myrtle',
      'Colin Creevey'
    ],
    answer: 'Moaning Myrtle',
    level: 5,
    points: 75
  },
  {
    question:
      'Who is named Minister of Magic after the Battle of Hogwarts in Harry Potter and the Deathly Hallows?',
    options: [
      'Kingsley Shaklebolt',
      'Arthur Weasley',
      'Rufus Scrimgeour',
      'Cornelius Fudge'
    ],
    answer: 'Kingsley Shaklebolt',
    level: 5,
    points: 75
  }
]

module.exports = questions
