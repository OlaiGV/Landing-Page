window.onload = function () {
  let botonMenu = document.querySelector(".logo-menu");
  let imagenFondo = document.querySelector(".imagen-fondo");
  let contenedorEslogan = document.querySelector(".eslogan");
  let cerrarMenu = document.querySelector("#cerrar");

  // Evento que permite abrir el menú de opciones lateral
  botonMenu.addEventListener("click", (event) => {
    let contenedorVelo = document.querySelector(".velo-principal");
    contenedorVelo.classList.toggle("mostrar-velo");

    let menuLateral = document.querySelector(".opciones");
    let redesSociales = document.querySelector(".redes");
    menuLateral.classList.toggle("mostrar-menu-lateral");
    imagenFondo.classList.toggle("mover-contenedor");
    contenedorEslogan.classList.toggle("mover-contenedor");
    redesSociales.classList.toggle("mover-contenedor");
  });

  // Evento que permite cerrar el menú de opciones lateral
  cerrarMenu.addEventListener("click", (event) => {
    let menuLateral = document.querySelector(".opciones");
    menuLateral.classList.toggle("mostrar-menu-lateral");
    imagenFondo.classList.toggle("mover-contenedor");
    contenedorEslogan.classList.toggle("mover-contenedor");
    let redesSociales = document.querySelector(".redes");
    redesSociales.classList.toggle("mover-contenedor");
    let contenedorVelo = document.querySelector(".velo-principal");
    contenedorVelo.classList.toggle("mostrar-velo");
  });
};
