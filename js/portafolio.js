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
    $('[data-toggle="tooltip"]').tooltip();
    $('#zoomModal').on('show.bs.modal', function (e) {
        $('#navbar').addClass('blur');
        $('.container-fluid').addClass('blur');
    }).on('hide.bs.modal', function (e) {
        $('#navbar').removeClass('blur');
        $('.container-fluid').removeClass('blur');
    });
});