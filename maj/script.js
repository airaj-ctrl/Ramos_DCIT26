function showSection(sectionName) {

    const quizzes = document.getElementById("quizzes");
    const activities = document.getElementById("activities");


    if (sectionName === "about") {

        quizzes.style.display = "block";
        activities.style.display = "block";

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

        return;
    }

    quizzes.style.display = "none";
    activities.style.display = "none";

    const selectedSection = document.getElementById(sectionName);

    if (selectedSection) {
        selectedSection.style.display = "block";

        selectedSection.scrollIntoView({
            behavior: "smooth"
        });
    }
}
