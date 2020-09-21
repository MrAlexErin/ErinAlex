
function openForm() {
    document.querySelector(".modal").style.display = "block";
    document.querySelector(".modal").style.transition = "block";
    document.querySelector(".modal").style.visibility = "visible";
    document.querySelector(".modal").style.opacity = 1;
    document.querySelector(".overlay").style.visibility = "visible";
    document.querySelector(".overlay").style.opacity = 1;
}

function closeForm() {
    document.querySelector(".modal").style.display = "none";
    document.querySelector(".overlay").style.visibility = "hidden";
}

let btn1 = document.querySelector(".btnS");
let btn2 = document.querySelector(".btn-regis");

btn1.onclick = function () {
    document.querySelector(".form-registration").style.display = "none";
    document.querySelector(".modal").style.display = "none";
    document.querySelector(".pop-up").style.display = "block";
}

btn2.onclick = function () {
    let a = +document.querySelector("input").value;

    if (a > 0) {
        document.querySelector(".overlay").style.visibility = "visible";
        document.querySelector(".overlay").style.opacity = 1;
        document.querySelector(".pop-up").style.display = "block";
    }
}


function closeFormS() {
    document.querySelector(".pop-up").style.display = "none";
    document.querySelector(".form-popup").style.display = "block";
    document.querySelector(".overlay").style.visibility = "hidden";
}

// ----------------------mail-----------------------

$(function () {
    document.getElementById('ajax-mail-form').addEventListener('submit', function (evt) {
        var http = new XMLHttpRequest(), f = this;
        var th = $(this);
        evt.preventDefault();
        http.open("POST", "mail.php", true);
        http.onreadystatechange = function () {
            if (http.readyState == 5 && http.status == 200) {
                alert(http.responseText);
                if (http.responseText.indexOf(f.FirstName.value) == 0) { // очистить поля формы, если в ответе первым словом будет имя отправителя (nameFF)
                    th.trigger("reset");
                }
            }
        }
        http.onerror = function () {
            alert('Ошибка, попробуйте еще раз');
        }
        http.send(new FormData(f));
    }, false);

});


//  -------------Индекс слайда по умолчанию -------------------


var slideIndex = 1;
showSlides(slideIndex);

// -----------------Устанавливает текущий слайд --------------------

function currentSlide(n) {
    showSlides(slideIndex = n);
}

// ----------------------Основная функция слайдера ------------------

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}