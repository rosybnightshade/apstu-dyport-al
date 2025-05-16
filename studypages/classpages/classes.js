function loadClass(className) {
    fetch(`${document.location.origin}/studypages/classpages/classes.json`)
        .then(response => response.json())
        .then(classes => {
            const classFile = classes.find(course => course.class === className);

            sessionStorage.setItem("currentCourse", JSON.stringify(classFile));

            window.location = "/studypages/classpages/apclass.html";
        });
}

