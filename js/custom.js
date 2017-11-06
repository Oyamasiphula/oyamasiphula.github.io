// nav bar 
var personalStatement = document.getElementById("personalStatement");
var projectsContent = document.getElementById("projectsSection");
var selector = ".topnav li"

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



// <tab function>
 $( function() {
    $( "#tabs" ).tabs();
  } );
// <tab function>
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
$(function() {
	var message = {

		message: [
			'web development;', 
			'eye candy design;', 
			'good movie and popcorn;', 
      		'javascript, html, css, nodejs...;'
		],
		counterS: 0,
		counterL: 0,
		deleteS: false,

		init: function() {
			this.cacheElem();
			this.type();
		},

		cacheElem: function() {
			this.$text = $('.text');
		},

		type: function() {
			var message = this.message[this.counterS],
				  that = this,
				  speed = 0;

			message = !this.deleteS ? message.slice(0, ++this.counterL) : message.slice(0, --this.counterL);
			if(this.message[this.counterS] != message && !this.deleteS) {
				this.$text.text(message);
				speed = 90;
			}
			else {
				this.deleteS = true;
				speed = this.message[this.counterS] == message ? 1000 : 40;
				this.$text.text(message);
				if (message == '') {
					this.deleteS = false;
					this.counterS = this.counterS < this.message.length - 1 ? this.counterS + 1 : 0;
				}
			}
			setTimeout(function(){that.type()}, speed);
		}
	};
	message.init();
});