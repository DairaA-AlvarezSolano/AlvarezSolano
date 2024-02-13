<script>
document.addEventListener('DOMContentLoaded', function () {
    var musicCarousel = document.getElementById('musicCarousel');
    var carouselItems = musicCarousel.getElementsByClassName('carousel-item');
    var currentIndex =  0;
    var timer; // Variable externa para el temporizador

    // Función para cambiar la diapositiva
    function changeSlide() {
        if (currentIndex >= carouselItems.length) {
            currentIndex =  0;
        }
        for (var i =  0; i < carouselItems.length; i++) {
            carouselItems[i].classList.remove('active');
        }
        carouselItems[currentIndex].classList.add('active');
        currentIndex++;
    }

    // Evento para detectar el movimiento del mouse
    musicCarousel.addEventListener('mousemove', function (event) {
        clearTimeout(timer); // Limpia el temporizador anterior
        timer = setTimeout(changeSlide,  1000); // Inicia un nuevo temporizador
    });
});
</script>
