$(function(){
    $("#tabela input").keyup(function(){
        var index = $(this).parent().index();
        var nth = "#tabela td:nth-child("+(index+1).toString()+")";
        var valor = $(this).val().toUpperCase();
        $("#tabela tbody tr").show();
        $(nth).each(function(){
            if($(this).text().toUpperCase().indexOf(valor)< 0){
                $(this).parent().hide();
            }
        });
    });
    $("tabela input").blur(function(){
        $(this).val(" ");
    });
});

let currentIndex = 0;

function showSlide(index) {
    const carouselImages = document.getElementById('carouselImages');
    const totalImages = carouselImages.children.length;
    if (index >= totalImages) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalImages - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    carouselImages.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}