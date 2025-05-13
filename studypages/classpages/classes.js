function searchCourses(query) {
    const searchTerm = document.getElementById('class-search');
    
}

function loadClass(className) {
    fetch(`${document.location.origin}/studypages/classpages/classes.json`)
        .then(response => response.json())
        .then(classes => {
            const classFile = classes.find(course => course.class === className);

            sessionStorage.setItem("currentCourse", JSON.stringify(classFile));

            window.location = "/studypages/classpages/apclass.html";
        });
}

const humanGeography = {
  "rectilinear township": "A(n) ______ and range survey system based upon lines of latitude and longitude.",
  "City location": "______ and the level of urban economic exchange could be analyzed using central places within hexagonal market areas, which overlapped at different scales.",
  "Long lot patterns": "______ have a narrow frontage along a road or waterway with a very long lot shape behind.",
  "Three types of regions": "formal, functional, and vernacular",
  "place": "A specific point on earth with human and physical characteristics that distinguish it from other places",
  "sequent occupancy": "the succession of groups and cultural influences throughout a places history"
}

const seminar = {
  "Primary Source": "Original material or evidence directly related to the topic (e.g., interviews, diaries, original research).",
  "Secondary Source": "Analysis or interpretation of primary sources (e.g., journal articles, reviews).",
  "Academic Journal": "Peer-reviewed scholarly research.",
  "News Article": "Non-scholarly current events coverage; consider bias.",
  "Government Document": "Official data or laws from public institutions."
}

const worldHistory = {
  "American Revolution": "Colonists sought independence from British rule.",
  "French Revolution": "Rebellion against monarchy and aristocracy.",
  "Haitian Revolution": "First successful slave revolt-led republic.",
  "Latin American Revolutions": "Independence movements from Spanish and Portuguese control.",
  "Industrial Revolution": "Shift to mechanized production; began in Britain."
}

const USHistory = {
  "Brown v. Board (1954)": "Desegregated public schools.",
  "Montgomery Bus Boycott": "Rosa Parks sparked boycott led by MLK Jr.",
  "Civil Rights Act (1964)": "Outlawed discrimination based on race, gender, etc.",
  "Voting Rights Act (1965)": "Ended barriers to Black voting rights.",
  "Malcolm X": "Advocated for Black empowerment and self-defense."
}

const langComp = {
  "Anaphora": "Repetition of a word/phrase at the beginning of successive clauses. Ex: 'We shall fight...'",
  "Antithesis": "Juxtaposition of contrasting ideas. Ex: 'It was the best of times, it was the worst of times.'",
  "Ethos": "Appeal to credibility. Ex: 'As a doctor, I recommend...'",
  "Pathos": "Appeal to emotion. Ex: 'Think of the children!'",
  "Logos": "Appeal to logic/reason. Ex: 'Studies show a 60% increase...'",
}