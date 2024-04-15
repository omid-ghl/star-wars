//// ACTIVITY DETAILS
//   You be creating a Star Wars portal using SWAPI
//   This portal will users to browse some Star Wars details for 3 different categories

//// DOCUMENTATION & RESOURCES
//   https://swapi.dev/documentation
//   https://blog.hubspot.com/website/api-endpoint

//// ADDITIONAL COMMENTS
//   1. It's very important that you briefly familiarize with the documentation BEFORE beginning as using the
//      documentation is a major part of this activity
//   2. Ensure that you remember to utilize your console.log to preview schemas, structures, and results
//   3. This Activity is not necessarily intended to be complete in 2 hours - so don't rush!
//   4. Thank you for all of your hard work on these Activities this term, good luck!

//// Begin Final Activity

/// 0. Using the documentation as a guide, initialize a const variable with the base URL as the value
//     USE THIS BASEURL to initialize the following endpoints:

const BASE_URL = 'https://swapi.dev/api';

//     Then, initialize another const variable which will serve as the URL endpoint for the Resource "People"
//     Then, initialize another const variable which will serve as the URL endpoint for the Resource "Films"
//     Then, initialize another const variable which will serve as the URL endpoint for the Resource "Planets"

const PEOPLE_URL = `${BASE_URL}/people/`;
const FILMS_URL = `${BASE_URL}/films/`;
const PLANETS_URL = `${BASE_URL}/planets/`;

//     Then, create some lists that will be responsible for holding these endpoint results - you will fill these in steps 2, 3, and 4

let peopleList = [];
let filmsList = [];
let planetsList = [];

/// 1. Initialize a const for each image located in your "assets" folder - these are 3 icons that represent the above endpoint data
//     You will use these later on in steps 5, 6 and 7

const peopleImage = './assets/people.png';
const filmsImage = './assets/films.png';
const planetsImage = './assets/planets.png';

/// 2. XMLHttpRequest & People Class
//     You may want to utilize your console.log to analyze the structure of this response to prepare for the next step
//

//     Create a function that will use XMLHttpRequest to make a call to your People endpoint

function getPeople() {
  const showData = () => {
    displayPeople();
    toggleActiveButton('peopleBtn');
  };

  if (peopleList.length) {
    showData();
    return;
  }

  fetch(PEOPLE_URL)
    .then(response => response.json())
    .then(data => {
      peopleList = data.results;
      showData();
    })
    .catch(error => console.error('Error fetching people data: ', error));
}

//     Then, create a People Class - please read the following carefully!
//     These properties are mandatory properties: name, url, films, homeworld

function displayPeople() {
  const categoryContainer = document.getElementById('categoryContainer');
  categoryContainer.innerHTML = '';

  peopleList.forEach(people => {
    const peopleDiv = document.createElement('div');
    peopleDiv.className = 'people';

    for (let i = 0; i < 2; i++) {
      const lineBreak = document.createElement('br');
      peopleDiv.appendChild(lineBreak);
    }

    const peopleIcon = document.createElement('img');
    peopleIcon.src = peopleImage; // Assuming planetsImage is defined correctly
    peopleIcon.className = 'listIcon'; // Apply appropriate styling
    peopleDiv.appendChild(peopleIcon);

    //     Then, pick 3 other properties of your choice from the response object to add to this Class
    //     In total this Class should have 7 properties

    const keyValueDatas = [
      {
        attr: 'Name',
        value: people.name,
      },
      {
        attr: 'Url',
        value: people.url,
      },
      {
        attr: 'Films',
        value: people.films.map(film => film),
      },
      {
        attr: 'Home World',
        value: people.homeworld,
      },
      {
        attr: 'Eye Color',
        value: people.eye_color,
      },
      {
        attr: 'Gender',
        value: people.gender,
      },
      {
        attr: 'Vehicles',
        value: people.vehicles,
      },
    ];

    keyValueDatas.map(({attr, value}, _i) =>
      peopleDiv.appendChild(createKeyValueSet(attr, value)),
    );
    //     Then, when the response is complete - for now, just fill your people list
    categoryContainer.appendChild(peopleDiv);
  });
}

//     Create a function that will use FetchAPI to make a call to your Films endpoint
//     You may want to utilize your console.log to analyze the structure of this response to prepare for the next step
function getFilms() {
  const showData = () => {
    displayFilms();
    toggleActiveButton('filmsBtn');
  };

  if (filmsList.length) {
    showData();
    return;
  }

  fetch(FILMS_URL)
    .then(response => response.json())
    .then(data => {
      filmsList = data.results;
      console.log('filmsList', data.results);
      showData();
    })
    .catch(error => console.error('Error fetching films data: ', error));
}

//     Then, create a Film Class - please read the following carefully!
function displayFilms() {
  const categoryContainer = document.getElementById('categoryContainer');
  categoryContainer.innerHTML = '';

  filmsList.forEach(film => {
    const filmDiv = document.createElement('div');
    filmDiv.className = 'film';

    for (let i = 0; i < 2; i++) {
      const lineBreak = document.createElement('br');
      filmDiv.appendChild(lineBreak);
    }

    const filmsIcon = document.createElement('img');
    filmsIcon.src = filmsImage; // Assuming planetsImage is defined correctly
    filmsIcon.className = 'listIcon'; // Apply appropriate styling
    filmDiv.appendChild(filmsIcon);

    //     These properties are mandatory properties: title, url, characters, planets
    //     Then, pick 3 other properties of your choice from the response object to add to this Class
    //     In total this Class should have 7 propertie
    const keyValueDatas = [
      {
        attr: 'Title',
        value: film.title,
      },
      {
        attr: 'Url',
        value: film.url,
      },
      {
        attr: 'Characters',
        value: film.characters.map(char => char),
      },
      {
        attr: 'Planets',
        value: film.planets.map(pelanet => pelanet),
      },
      {
        attr: 'Opening_crawl',
        value: film.opening_crawl,
      },
      {
        attr: 'Director',
        value: film.director,
      },
      {
        attr: 'Producer',
        value: film.producer,
      },
    ];

    //     Then, when the response is complete - for now, just fill your films list
    keyValueDatas.map(({attr, value}, _i) =>
      filmDiv.appendChild(createKeyValueSet(attr, value)),
    );

    categoryContainer.appendChild(filmDiv);
  });
}

/// 4. jQuery & Planets Class
//     Create a function that will use jQuery to make a call to your Planets endpoint
//     You may want to utilize your console.log to analyze the structure of this response to prepare for the next step
//
function getPlanets() {
  const showData = () => {
    displayPlanets();
    toggleActiveButton('planetsBtn');
  };

  if (planetsList.length) {
    showData();
    return;
  }

  fetch(PLANETS_URL)
    .then(response => response.json())
    .then(data => {
      planetsList = data.results;
      console.log('planetsList', data.results);
      showData();
    })
    .catch(error => console.error('Error fetching planets data: ', error));
}

//     Then, create a Planet Class - please read the following carefully!
function displayPlanets() {
  const categoryContainer = document.getElementById('categoryContainer');
  categoryContainer.innerHTML = '';

  planetsList.forEach(planet => {
    // Create a container div for each planet
    const planetDiv = document.createElement('div');
    planetDiv.className = 'planet';

    for (let i = 0; i < 2; i++) {
      const lineBreak = document.createElement('br');
      planetDiv.appendChild(lineBreak);
    }

    // Append planet icon
    const planetIcon = document.createElement('img');
    planetIcon.src = planetsImage; // Assuming planetsImage is defined correctly
    planetIcon.className = 'listIcon'; // Apply appropriate styling
    planetDiv.appendChild(planetIcon);

    //     These properties are mandatory properties: name, url, residents, films
    //     Then, pick 3 other properties of your choice from the response object to add to this Class
    //     In total this Class should have 7 properties
    const keyValueDatas = [
      {
        attr: 'Name',
        value: planet.name,
      },
      {
        attr: 'URL',
        value: planet.url,
      },
      {
        attr: 'Residents',
        value: planet.residents.map(residentUrl => {
          console.log(residentUrl);
          return residentUrl;
        }),
      },
      {
        attr: 'Films',
        value: planet.films.map(filmUrl => filmUrl),
      },
      {
        attr: 'Gravity',
        value: planet.gravity,
      },
      {attr: 'Terrain', value: planet.terrain},
      {attr: 'Surface Water', value: planet.surface_water},
      {attr: 'Population', value: planet.population},
    ];

    //     Then, when the response is complete - for now, just fill your planets list

    keyValueDatas.map(({attr, value}, _i) =>
      planetDiv.appendChild(createKeyValueSet(attr, value)),
    );

    categoryContainer.appendChild(planetDiv);
  });
}

/// 5. Using whatever method you'd like, ensure that when a category button is clicked, the Class "active" is added, and all other buttons have this class removed
//     Tip: If you have named your functions for steps 1, 2, and 3 properly they should already be firing on click by now! Check out the HTML if not

function toggleActiveButton(activeBtnId) {
  const buttons = document.querySelectorAll('button');
  buttons.forEach(btn => {
    if (btn.id === activeBtnId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

/// 6. Create a function that will be responsible for inserting People objects on to the screen
//     This function should take in 0 parameters and loop through your People dataset and use createKeyValueSet to create elements for each row
//
//     Create an img element using the people const you defined in part 1 as the src - Add this to the screen before each person's Name is appended
//     This element will need a class named "listIcon"
//
//     Create and add two <br> elements for some spacing between each Person
//
//     Then, add a call to this function after you fill your People list in step 2

/// 7. Create a function that will be responsible for inserting Film objects on to the screen
//     This function should take in 0 parameters and loop through your Film dataset and use createKeyValueSet to create elements for each row
//
//     Create an img element using the film const you defined in part 1 as the src - Add this to the screen before each film's Title is appended
//     This element will need a class named "listIcon"
//
//     Create and add two <br> elements for some spacing between each Film
//
//     Then, add a call to this function after you fill your Film list in step 3

/// 8. Create a function that will be responsible for inserting Planet objects on to the screen
//     This function should take in 0 parameters and loop through your Planet dataset and use createKeyValueSet to create elements for each row
//
//     Create an img element using the planet const you defined in part 1 as the src - Add this to the screen before each Planet's Name is appended
//     This element will need a class named "listIcon"
//
//     Create and add two <br> elements for some spacing between each Planet
//
//     Then, add a call to this function after you fill your Planet list in step 4

/// 9. Finally, ensure that when a user clicks a button only one set of results are visible at a time

//// Complete!

/*  !!!DO NOT MAKE ANY CHANGES TO THIS FUNCTION!!!  */
//
//
//
//  Returns a <span> element containing a <p> key and a <p> value
//  Pre-sets classes
//  Only returns the element - you'll need to add it on screen still
//  Parameter may be an Array or Single value
//
//  Using this function looks something like: var idElement = createKeyValueSet("User ID:", user.id)

function createKeyValueSet(key, value) {
  const elementSet = document.createElement('span');

  const keyElement = document.createElement('p');
  keyElement.className = 'rowkey';
  keyElement.innerText = key;
  elementSet.append(keyElement);

  if (value === undefined || value.length === 0) {
    const valueElement = document.createElement('p');
    valueElement.className = 'rowvalue';
    valueElement.innerText = 'N/A';
    elementSet.append(valueElement);
  } else if (Array.isArray(value)) {
    value.forEach(v => {
      const valueElement = document.createElement('p');
      valueElement.className = 'rowvalue';
      valueElement.innerText = v;
      elementSet.append(valueElement);
    });
  } else {
    const valueElement = document.createElement('p');
    valueElement.className = 'rowvalue';
    valueElement.innerText = value;
    elementSet.append(valueElement);
  }

  return elementSet;
}
