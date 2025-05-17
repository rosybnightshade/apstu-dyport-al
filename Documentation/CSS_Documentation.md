# CSS Documentation for Capstone

## Global Reset & Box Model
**global.css*
```css
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
```

## CSS Variables
**global.css**
```css
:root {
    --accent-color: #023C40;
    --major-color: #FCFCFF;

    --shadow: #2B3D41;
```

## Organized CSS Structure
**global.css**
```css
/* Global Elements & Variables */
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
:root {
    --accent-color: #023C40;
    --major-color: #FCFCFF;

    --shadow: #2B3D41;

    --inverse-accent: #FCFCFF;
    --inverse-color: #023C40;
}

body {
    background-color: var(--major-color);
}

h1, h2, h3, h4, h5, h6 {
    font-family: "Cal Sans", sans-serif;
    font-weight: 400;
    font-style: normal;
}

/* All Header Styles */
.big-header {
    margin: 17px;
}

/* All Theme Switch Buttons */
#themeBtn {
    width: 38.5%;
    display:flex;
    justify-self: center;
    place-content: center;
}
```
## Typography Styling
**global.css**
```css
h1, h2, h3, h4, h5, h6 {
    font-family: "Cal Sans", sans-serif;
    font-weight: 400;
    font-style: normal;
}

label, input, button[type='submit'], button[type="button"] {
    font-family: "Roboto Condensed", sans-serif;
    font-optical-sizing: auto;
    font-weight: 600;
    font-style: normal;
    font-size: 2em;
}
```

## Color Scheme and Constrast
**global.css**
```css
--accent-color: #023C40;
--major-color: #FCFCFF;
--shadow: #2B3D41;
```

## Flexbox & Grid Styling
**userstart.css**
```css
.class {
    display: flex;
    flex-direction: column;
    place-content: center;
```
**userstart.css**
```css
#all-classes {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}
```

## Button & Input Styling
**global.css**
```css
label, input, button[type='submit'], button[type="button"] {
    font-family: "Roboto Condensed", sans-serif;
    font-optical-sizing: auto;
    font-weight: 600;
    font-style: normal;
    font-size: 2em;
}

input, button[type="submit"], button[type="button"] {
    border: 1px solid  var(--accent-color);
}
```
## Component Reussability 
**userstart.html**
```html
<div class="class" id="HuG">
<div class="class" id="world-history">
<div class="class" id="seminar">
<div class="class" id="us-history">
<div class="class" id="lang-and-comp">
```

## CSS Transition
**userstart.css**
```css
.class:hover {
    box-shadow: 6px 4px 2px var(--shadow);
    transition: all 0.3s ease;
}
```

## Hover/Focus Effects
**global.css**
```css
button[type="submit"]:hover, button[type="button"]:hover {
    background-color: var(--accent-color);
    color: var(--major-color);
    transition: ease-in-out 0.3s;
}
```

## Layout Containers
**indiv-class.css**
```css
.activities {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    text-align: center;
    gap: 30px;
    margin: 10px;
}
.activities > * {
    background-color: var(--accent-color);
    margin: 20px;
    padding: 20px;
    height: 50vh;
}

.activities img {
    width: 45vh;
    height: 45vh;
}
```

## Utility Classes
**activities.css**
```css
.hidden {
    display: none;
}
```

## Use of Pseudo-Elements/Classes
**activities.css**
```css
.flashcard-front::before {
    content: '...';
}
```

## Shadows
**userstart.css**
```css
box-shadow: 6px 4px 2px var(--shadow);
```

## Theme Customization
**handleAllPages.js**
```js
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

    const courses = document.querySelectorAll('.class');

    courses.forEach(course => {
        course.style.border = '1px solid var(--major-color)'; 
        course.style.color = 'var(--major-color)'; 
    });

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

    const courses = document.querySelectorAll('.class');

    courses.forEach(course => {
        course.style.color = 'var(--major-color)'; 
    });
}
```

## Naming Conventions
**indiv-class.css*
```css
.activities {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    text-align: center;
    gap: 30px;
    margin: 10px;
}
.activities > * {
    background-color: var(--accent-color);
    margin: 20px;
    padding: 20px;
    height: 50vh;
}

.activities img {
    width: 45vh;
    height: 45vh;
}
.act {
    display: flex;
    flex-direction: column;
    place-content: center;
    border-radius: 10px;
}
.timer {
    color: var(--accent-color);
}
```

## Responsive Design
**userstart.css**
```css
@media (max-width: 812px) {
    #all-classes {
        grid-template-columns: repeat(2, 1fr);
    }
    header {
        text-align: center;
    }
}

@media (max-width: 424px) {
    #all-classes {
        display: flex;
        flex-direction: column;;
    }
}
```
**indiv-class.css**
```css
@media (max-width: 968px) {
    .activities {
        display: flex;
        flex-direction: column;
    }
    header {
        font-size: 10px;
    }
}
```

## Cleanliness and Commenting
**userstart.css**
```css
/* header */
header {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    color: var(--accent-color)
}
/* search-bar */
#class-search {
    margin-top: 1em;
    margin-bottom: 1em;
    width: 70%;
    padding: 5px;
}
/* course selection */
#all-classes {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
}

.class {
    display: flex;
    flex-direction: column;
    place-content: center;
    text-align: center;
    margin: 10px;
    padding: 10px;
    height: 30vh;
    color: var(--major-color);
    background-color: var(--accent-color);
    justify-content: space-between;
}

.class:hover {
    box-shadow: 6px 4px 2px var(--shadow);
    transition: all 0.3s ease;
}

h3 {
    font-size: 2em;
}

img {
    width: 50%;
    height: 50%;
    place-self: center;
}

p {
    font-size: 1.5em;
}

/* responsiveness */
@media (max-width: 812px) {
    #all-classes {
        grid-template-columns: repeat(2, 1fr);
    }
    header {
        text-align: center;
    }
}

@media (max-width: 424px) {
    #all-classes {
        display: flex;
        flex-direction: column;;
    }
}
```
