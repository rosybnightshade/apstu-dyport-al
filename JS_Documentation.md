# JavaScript Documentation for Capstone

## Variable Naming / Indentation

**handleAllPages.js**
```js
const themeBtn = document.getElementsByClassName('themeBtn');
const body = document.body;
const span = document.getElementById('welcome');
const accent = document.getElementById('accent');
const courses = document.getElementsByClassName('class');
```

## Array Usage
**flashcards.js**
```js
humanGeography: [
      { question: "Rectilinear township", answer: "A(n) ______ and range survey system based upon lines of latitude and longitude." },
      { question: "City location", answer: "______ and the level of urban economic exchange could be analyzed using central places within hexagonal market areas, which overlapped at different scales." },
      { question: "Long lot patterns", answer: "______ have a narrow frontage along a road or waterway with a very long lot shape behind." },
      { question: "Three types of regions", answer: "Formal, functional, and vernacular." },
      { question: "Place", answer: "A specific point on earth with human and physical characteristics that distinguish it from other places." },
      { question: "Sequent occupancy", answer: "The succession of groups and cultural influences throughout a place's history." }
    ],
```

## Object Usage
**flashcards.js**
```js
const state = {
  numCards: singularFlashcards.length,
  currentIndex: 0,
  flashcards: singularFlashcards
};
```

## Loops
**handleHome.js**
```js
for (let i = 0; i < localStorage.length; i++) {
        let num = localStorage.key(i);
        if (num.startsWith("username") && localStorage.getItem(num) === username.value) {
            alert("Username already taken");
            return;
        }
    }
```

## JSON
**classes.json**
```json
[
    {
        "class" : "humanGeography",
        "flashcards" : true,
        "notes" : true
    },

    {
        "class" : "seminar",
        "flashcards" : true,
        "notes" : true
    },

    {
        "class" : "worldHistory",
        "flashcards" : true,
        "notes" : true
    },

    {
        "class" : "USHistory",
        "flashcards" : true,
        "notes" : true
    },

    {
        "class" : "languageAndComposition",
        "flashcards" : true,
        "notes" : true
    }
]
```

## Web Storage
**handleHome.js**
```js
for (let i = 0; i < localStorage.length; i++) {
    let num = localStorage.key(i);
    if (num.startsWith("username") && localStorage.getItem(num) === username.value) {
        alert("Username already taken");
        return;
    }
}

let randomUserId;
do {
    randomUserId = Math.floor(Math.random() * 1000); 
} while (localStorage.getItem(`username${randomUserId}`) !== null);

// Store the new user
localStorage.setItem(`username${randomUserId}`, username.value);
localStorage.setItem(`password${randomUserId}`, password.value);

alert("Account created");
```

## Saving / Getting User Data
**handleHome.js**
```js
function createAccStorage() {
    const usernameRegex = /^.{1,10}$/;

    if (!usernameRegex.test(username.value)) {
        alert("Username must be 10 characters or fewer");
        return;
    }

    if (password.value !== passwordConfirmed.value) {
        alert("Ensure Your Password Matches");
        return;
    }

    for (let i = 0; i < localStorage.length; i++) {
        let num = localStorage.key(i);
        if (num.startsWith("username") && localStorage.getItem(num) === username.value) {
            alert("Username already taken");
            return;
        }
    }

    let randomUserId;
    do {
        randomUserId = Math.floor(Math.random() * 1000); 
    } while (localStorage.getItem(`username${randomUserId}`) !== null);

    // Store the new user
    localStorage.setItem(`username${randomUserId}`, username.value);
    localStorage.setItem(`password${randomUserId}`, password.value);

    alert("Account created");

    username.value = '';
    password.value = '';
    passwordConfirmed.value = '';
}
```

## Cookies With Expiry
**handleAllPages.js**
```js
function setCookie(name, value, days = 365) {
    const date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}

function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (const c of cookies) {
        const [key, val] = c.split('=');
        if (key === name) return val;
    }
    return 0;
}
```

## DOM Manipluation
**flashcards.js**
```js
flashcardDisplay.innerHTML = `
<div class="flashcard" id="current-flashcard">
    <div class="flashcard-front">
        <p>${card.question}</p>
    </div>
    <div class="flashcard-back">
        <p>${card.answer}</p>
    </div>
</div>
`;

document.getElementById('current-flashcard').addEventListener('click', flipCurrentCard);
```

## CSS Manipulation
**flashcards.js**
```js
if (courseText.includes(query)) {
    course.style.display = 'block';
} else {
    course.style.display = 'none';
}
```

## Theme Preference
**handleAllPages.js**
```js
const themeBtn = document.getElementsByClassName('themeBtn');
const body = document.body;
const span = document.getElementById('welcome');
const accent = document.getElementById('accent');
const courses = document.getElementsByClassName('class')

for (let btn of themeBtn){ 
    btn.addEventListener('click', () => {
        const current = getCookie('preference') || 'light';
        const newTheme = current === 'dark' ? 'light' : 'dark';
        invertTheme(newTheme);
        alert(`Theme is now: ${newTheme.toUpperCase()} `);
});}

function setDarkTheme() {
    body.style.backgroundColor = 'var(--inverse-color)';

    styleElements('h1, h2, h3, h4, label, a', elements => {
        elements.style.color = 'var(--inverse-accent)';
    });

    styleElements('input, button', elements => {
        elements.style.border = '1px solid var(--inverse-color)';
    });

    if (accent == true) {
    accent.style.backgroundColor = 'var(--inverse-accent)';
    accent.style.color = 'var(--inverse-color)';
    }

    if (courses == true) {
    courses.style.backgroundColor = 'var(--inverse-accent)';
    courses.style.color = 'var(--inverse-color)';
    }
}

function setLightTheme() {
    body.style.backgroundColor = 'var(--inverse-accent)';

    styleElements('h1, h2, h3, h4, label, a', elements => {
        elements.style.color = 'var(--inverse-color)';
    });

    styleElements('input, button', elements => {
        elements.style.border = '1px solid var(--inverse-color)';
    });

    if (accent == true) {
    accent.style.backgroundColor = 'var(--inverse-color)';
    accent.style.color = 'var(--inverse-accent)';
    }
}

function styleElements(selector, callback) {
    document.querySelectorAll(selector).forEach(callback);
}

function setCookie(name, value, days = 365) {
    const date = new Date();
    date.setTime(date.getTime() + (days*24*60*60*1000));
    document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}

function getCookie(name) {
    const cookies = document.cookie.split('; ');
    for (const c of cookies) {
        const [key, val] = c.split('=');
        if (key === name) return val;
    }
    return 0;
}

function invertTheme(pageTheme) {
    if (pageTheme === 'dark') {
        setDarkTheme();
    } else {
        setLightTheme();
    }

    setCookie('preference', pageTheme);
}

document.addEventListener('DOMContentLoaded', () => {
    const saved = getCookie('preference') || 'light';
    invertTheme(saved);
});
```

## Comments
**handleSearch.js**
```js
// allows for live searching
function searchCourses() {
    // searchbar input element
    const searchbar = document.getElementById('class-search');
    // user input
    const query = searchbar.value.toLowerCase();
    // all course cards
    const courseCards = document.querySelectorAll('.class');

    courseCards.forEach(course => {
    const courseText = course.textContent.toLowerCase(); 
    // Gets ALL text inside the card
    if (courseText.includes(query)) {
        // if text match is found
        course.style.display = 'block';
    } else {
        // if text match is not found
        course.style.display = 'none';
    }
});
}
```

## Error Handling
**handleHome.js**
```js
try {
    for (let i=1;i<=1000;i++) {
    if (username.value == localStorage.getItem(`username${i}`) && password.value == localStorage.getItem(`password${i}`)) {
        window.location.href = "studypages/userstart.html";
        sessionStorage.setItem("loggedIn", username.value);
    } else { 
        console.error("error");
    }
}} catch {
    console.error("error");
}
```

## RegEx
**handleHome.js**
```js
const usernameRegex = /^.{1,10}$/;

if (!usernameRegex.test(username.value)) {
    alert("Username must be 10 characters or fewer");
    return;
}
```

## Timer Object
**apclass.html**
```js
function addTimer() {
    let sessionSeconds = 0;

    let timerInterval = setInterval(() => {
        sessionSeconds++;
        updateDisplay(sessionSeconds)

        sessionStorage.setItem('timeStudying', sessionSeconds.toString());

        if(sessionSeconds === 1200) {
            displayAlert();
        }
    }, 1000)

    function updateDisplay(totalSeconds) {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        let alertMessage = `Study Time: `;

        if (hours > 0) alertMessage += `${hours}hrs `;
        if (hours > 0 || minutes > 0) alertMessage += `${minutes}mins `;
        alertMessage += `${seconds}secs`;

        document.getElementById('timer').innerHTML = alertMessage;
}


    function displayAlert() {
        alert("You've Been Studying for 20 Minutes...Review The Content if Unsure");
    }
}

