function validacaoEmail(email) {
    const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return pattern.test(email);
}

$(document).on('click', '#btnEmail', function (e) {
    var btn = $(this);
    var input = $("#inputEmail");
    var valor = input.val();

   
    if (validacaoEmail(valor)) {
        input.css("border", "2px solid green");
        alert("Enviado!");
        input.val("");
        //swal('Boa!', 'Deu tudo certo!', 'success');
        } else {
        input.css("border", "2px solid red");
        input.focus();

    }
});
let slideIndex = 0;

showSlides();

function showSlides() {
  let i;
  var slides = $(".mySlides");
  var dots = $(".dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].css("display", "none");  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}