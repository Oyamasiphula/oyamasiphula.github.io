// nav bar 
var personalStatement = document.getElementById("personalStatement");
var projectsContent = document.getElementById("projectsSection");
var selector = ".topn0av li"

$(selector).on('click', function(){
    $(selector).removeClass('active');
    $(this).addClass('active');
}); 

home.addEventListener("click", function(){
	personalStatement.classList.remove("hide");
	projectsContent.classList.add("hide");

});

projects.addEventListener("click", function(){
	personalStatement.classList.add("hide");
	projectsContent.classList.remove("hide");
});

contact.addEventListener("click", function(){

});

about.addEventListener("click", function(){

});
// nav bar 