const toggle = document.querySelector(".nav-toggle")
const menu = document.querySelector(".nav-menu")
const incio = document.getElementById("inicio");
const perifericos = document.getElementById("perifericos");
const hardware = document.getElementById("hardware");
const software = document.getElementById("software");
const contacto = document.getElementById("contacto");

// -------------------  HEADER  -------------------
toggle.addEventListener("click", ()  => {
    menu.classList.toggle("nav-menu_visible");
})

inicio.addEventListener("click", ()  => {
    incio.classList.add("nav-menu-link_active");

    perifericos.classList.remove("nav-menu-link_active")
    hardware.classList.remove("nav-menu-link_active")
    software.classList.remove("nav-menu-link_active")
    contacto.classList.remove("nav-menu-link_active")})

perifericos.addEventListener("click", ()  => {
    perifericos.classList.add("nav-menu-link_active");

    incio.classList.remove("nav-menu-link_active")
    hardware.classList.remove("nav-menu-link_active")
    software.classList.remove("nav-menu-link_active")
    contacto.classList.remove("nav-menu-link_active")
})

hardware.addEventListener("click", ()  => {
    hardware.classList.add("nav-menu-link_active");

    incio.classList.remove("nav-menu-link_active")
    perifericos.classList.remove("nav-menu-link_active")
    software.classList.remove("nav-menu-link_active")
    contacto.classList.remove("nav-menu-link_active")
})

software.addEventListener("click", ()  => {
    software.classList.add("nav-menu-link_active");
    
    incio.classList.remove("nav-menu-link_active")
    perifericos.classList.remove("nav-menu-link_active")
    hardware.classList.remove("nav-menu-link_active")
    contacto.classList.remove("nav-menu-link_active")
})

contacto.addEventListener("click", ()  => {
    contacto.classList.add("nav-menu-link_active");

    incio.classList.remove("nav-menu-link_active")
    perifericos.classList.remove("nav-menu-link_active")
    software.classList.remove("nav-menu-link_active")
    hardware.classList.remove("nav-menu-link_active")
})


