$(document).ready(function() {
    $("#intro h3").delay(1000).queue(function(n){
        $(this).toggleClass("fuller");
        n();
    });
  
    $("#intro a").delay(1400).queue(function(n){
        $(this).toggleClass("fuller2");
        n();
    });

    $("#menu-button").click(function() {
        $("#intro h3").toggleClass("fuller");
        $("#intro a").toggleClass('fuller2');
        $("#menu-button").toggleClass("animate");
        $("#menu-overlay").toggleClass("reveal");
        $("#nav-container").toggleClass("hidden");
    });
});
