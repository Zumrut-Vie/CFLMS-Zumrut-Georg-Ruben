$(document).ready(function() {
    $('.item').on('click', function() {
        var message = $(this).attr("message");
        $("#message").text("You clicked the " + message);
    });
});