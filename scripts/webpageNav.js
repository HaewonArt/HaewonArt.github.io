//-----Navigation bar on small screen-----

function myFunction() {
  var x = document.getElementById("myLinks");
  var y = document.getElementById("mobNavClose");
  var z = document.getElementById("mobNavOpen");
  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "flex";
  } else {
    x.style.display = "block";
    y.style.display = "flex";
    z.style.display = "none";
  }
}

function mySubFunction() {
  var x = document.getElementById("mySubLinks");
  var y = document.getElementById("mobSubNavClose");
  var z = document.getElementById("mobSubNavOpen");
  if (x.style.display === "block") {
    x.style.display = "none";
    y.style.display = "none";
    z.style.display = "flex";
  } else {
    x.style.display = "block";
    y.style.display = "flex";
    z.style.display = "none";
  }
}


//-----The Modal, Naturstudie-----

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var capts = document.getElementsByClassName("pic");

  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  captionText.innerHTML = capts[slideIndex-1].alt;
}