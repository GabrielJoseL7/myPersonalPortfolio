const skillTitle = document.getElementById("skills");
const educationTitle = document.getElementById("Education");
const containerSkills = document.getElementById("skillContainer");
const containerEducation = document.getElementById("educationContainer");

educationTitle.addEventListener("click", function (){
    containerSkills.style.display = "none";
    containerEducation.style.display = "block"
})

skillTitle.addEventListener("click", function(){
    containerEducation.style.display = "none";
    containerSkills.style.display = "flex";
})




