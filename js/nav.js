// nav bar
var personalStatement = document.getElementById("personalStatement");
var projectsDivContent = document.getElementById("projectsSection");
var contactDivCont = document.getElementById("contactSection");
var aboutMeDivCont = document.getElementById("aboutMeSection");

var selector = ".topnav li"

$(selector).on('click', function() {
  $(selector).removeClass('active');
  $(this).addClass('active');
});

home.addEventListener("click", function() {
  projectsDivContent.classList.add("hide");
  contactDivCont.classList.add("hide");
  aboutMeSection.classList.add("hide");
  personalStatement.classList.remove("hide");
});

projects.addEventListener("click", function() {
  personalStatement.classList.add("hide");
  contactDivCont.classList.add("hide");
  aboutMeSection.classList.add("hide");
  projectsDivContent.classList.remove("hide");
});

contact.addEventListener("click", function() {
  personalStatement.classList.add("hide");
  projectsDivContent.classList.add("hide");
  aboutMeSection.classList.add("hide");
  contactDivCont.classList.remove("hide");
});

about.addEventListener("click", function() {
  personalStatement.classList.add("hide");
  projectsDivContent.classList.add("hide");
  contactDivCont.classList.add("hide");
  aboutMeSection.classList.remove("hide");
});
// nav bar
