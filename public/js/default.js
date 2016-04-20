// Script for media query fix

$(document).ready(function() {
    // run test on initial page load
    checkSize();

    // run test on resize of the window
    $(window).resize(checkSize);
});

//Function to the css rule
function checkSize(){
    if ($(".sampleClass").css("float") == "none" ){
        $('#hd_fl').text('Designer | Developer')
    }
}




