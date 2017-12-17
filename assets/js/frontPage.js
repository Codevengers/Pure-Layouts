$(document).ready(function() {


/////////////////////////////////////////////// /* SVG */ //////////////////////////////////////////////////////////

//
// delay = anime({
//   targets: '#pixprienceSVG',
//   translateX: 100,
//   translateX: 100,
//   delay: 3000
// });



// Activate Drop Down Menu
$(".dropdown-button").dropdown();

// Activate Youtube modal
$('.youtubeModal').modal();

// Changes the main page background. 8 images every 5 seconds
function run(interval, frames) {
    var int = 1;

    function func() {
        document.body.id = "bg"+int;
        int++;
        if(int === frames) { int = 1; }
    }

    var swap = window.setInterval(func, interval);
}

run(20000, 9); //milliseconds, frames

});
