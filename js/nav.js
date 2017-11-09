// nav bar 
var personalStatement = document.getElementById("personalStatement");
var projectsDivContent = document.getElementById("projectsSection");

var selector = ".topnav li"

$(selector).on('click', function(){
    $(selector).removeClass('active');
    $(this).addClass('active');
}); 

home.addEventListener("click", function(){
	personalStatement.classList.remove("hide");
	projectsDivContent.classList.add("hide");

});

projects.addEventListener("click", function(){
	personalStatement.classList.add("hide");
	projectsDivContent.classList.remove("hide");
});

contact.addEventListener("click", function(){

});

about.addEventListener("click", function(){

});
// nav bar 