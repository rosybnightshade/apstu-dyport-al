function searchCourses() {
    const searchbar = document.getElementById('class-search');
    const query = searchbar.value.toLowerCase();
    const courseCards = document.querySelectorAll('.class');

    courseCards.forEach(course => {
    const courseText = course.textContent.toLowerCase(); // Gets ALL text inside the card
    if (courseText.includes(query)) {
        course.style.display = 'block';
    } else {
        course.style.display = 'none';
    }
});
}
