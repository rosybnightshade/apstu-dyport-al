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

const completedCourses = [];

let courseCompletion = document.getElementById('checked');

if (courseCompletion.style.backgroundColor == 'green') {
  completedCourses.push()
}



for (const [key, value] of Object.entries(flashcardDatabase)) {
  localStorage.setItem(key, JSON.stringify(value));
}
