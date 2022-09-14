//Переменные

var link = document.querySelector(".login-link")
var popup = document.querySelector(".modal-login")
var close = document.querySelector(".modal-close")
var linkMap = document.querySelector(".js-button-map")
var popupMap = document.querySelector(".modal-map")
var closeMap = document.querySelector(".modal-close-map")
var login = popup.querySelector("[name = login]")
var password = popup.querySelector("[name = password]")
var form = popup.querySelector("form")
var storage = localStorage.getItem("login")


//Открытие модального окна

function openModal(el){
    el.preventDefault()
    popup.classList.add("modal-show")
    login.focus()
    if(storage){
        login.value = storage
        password.focus()
    }else{
        login.focus()
    }
}

link.addEventListener("click", openModal)



//Закрытие модального окна

function closeModal(el){
    el.preventDefault()
    popup.classList.remove("modal-show")
}

close.addEventListener("click", closeModal)

function closeModalEsc(el){
    if(el.keyCode == 27){
        el.preventDefault()
        if(popup.classList.contains("modal-show")){
            popup.classList.remove("modal-show")
        }
    }
}

window.addEventListener("keydown", closeModalEsc)


//Открытие карты

function openModalMap(el){
    el.preventDefault()
    popupMap.classList.add("modal-show")
}

linkMap.addEventListener("click", openModalMap)


//Закрытие карты

function closeModalMap(el){
    el.preventDefault()
    popupMap.classList.remove("modal-show")
}

closeMap.addEventListener("click", closeModalMap)

function closeModalEscMap(el){
    if(el.keyCode == 27){
        el.preventDefault()
        if(popupMap.classList.contains("modal-show")){
            popupMap.classList.remove("modal-show")
        }
    }
}

window.addEventListener("keydown", closeModalEscMap)


//Проверка заполнения формы

function checkForm(el){
    if(!login.value || !password.value){
        el.preventDefault()
        alert("Введите логин и пароль")
    }else{
        localStorage.setItem("login", login.value)
    }
}

form.addEventListener("submit", checkForm)


//Слайдер фото


//Переменные фото

var prev = document.querySelector(".gallery-button-back")
var next = document.querySelector(".gallery-button-next")
var slides = document.querySelectorAll(".slide")
var index = 0


//Проверка нахождения на слайде

function activeSlide(n){
    for(slide of slides){
        slide.classList.remove("active")
    }
    slides[n].classList.add("active")
}

function nextSlide(){
    if(index==slides.length-1){
        index=0
        activeSlide(index)
    }else{
        index++
        activeSlide(index)
    }
}

function prevSlide(){
    if(index==0){
        index=slides.length-1
        activeSlide(index)
    }else{
        index--
        activeSlide(index)
    }
}


next.addEventListener("click", nextSlide)

prev.addEventListener("click", prevSlide)