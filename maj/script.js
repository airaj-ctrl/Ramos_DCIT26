function showSection(sectionName) {

    // Get both sections
    const quizzes = document.getElementById("quizzes");
    const activities = document.getElementById("activities");

    // Hide both sections first
    quizzes.style.display = "none";
    activities.style.display = "none";

    // Show the section that was clicked
    const selectedSection = document.getElementById(sectionName);

    selectedSection.style.display = "block";

    // Scroll down to the section
    selectedSection.scrollIntoView({
        behavior: "smooth"
    });
}