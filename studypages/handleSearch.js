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
