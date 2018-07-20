$(document).ready(function() {
    // Se desplaza al lugar deseado suavemente
    $('a[href^="#"]:not([href="#"])').click(function() {
        var destino = $(this.hash);
        $('html, body').animate({ scrollTop: destino.offset().top }, 1000, 'easeInOutExpo');
        return false;
    });
    $('#navegacion a').click(function() {
        $('.navbar-collapse').collapse('hide');
    });
});