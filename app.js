$(document).ready(function () {
    function changeBackground() {
        return '#' + Math.random().toString(16).slice(2, 8);
    };
    $("#clickMe").on("click", function () {
        $('body').css('background', changeBackground());
    })
})

