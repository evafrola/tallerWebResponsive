const myCarouselElement = document.querySelector('#carouselExampleSlidesOnly');
const newOptionNavbar = document.getElementById("opciones");
const title = document.getElementById("title");
const menuOption = document.getElementById("menuOpciones");
const search = document.getElementById("search");
const buttonSearch = document.getElementById("buttonSearch");

//Tiempo de duración del carrusel
myCarouselElement.addEventListener('slide.bs.carousel', () => {
    const carousel = new bootstrap.Carousel(myCarouselElement, {
        interval: 2000,
        touch: false
      })
  })

  //Función que se ejecuta teniendo en cuenta el tamaño del documento del usuario
  function changeDocument () {
    if(document.documentElement.clientWidth < 992){
        //Se les agrega una clase que quita la visualización del elemento en la pagina
        myCarouselElement.classList.add("invisibility");
        title.classList.add("invisibility");
        menuOption.classList.add("invisibility");
        search.classList.add("invisibility");
        buttonSearch.classList.add("invisibility");

        //Se agrega un menu desplegable en la barra de navegación
        newOptionNavbar. innerHTML = `
            <p class="d-inline-flex gap-1">
                <a class="nav-link" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Opciones</a>
            </p>
            <div class="row">
                <div class="col">
                    <div class="collapse multi-collapse" id="multiCollapseExample1">
                        <div class="card card-body w-75">
                            <ul class="list-group">
                            <li class="list-group-item"><a href="#">Opción 1</a></li>
                            <li class="list-group-item"><a href="#">Opción 2</a></li>
                            <li class="list-group-item"><a href="#">Opción 3</a></li>
                            <li class="list-group-item"><a href="#">Opción 4</a></li>
                      </ul>
                        </div>
                    </div>
                </div>
            </div>
        <a class="nav-link d-inline-flex gap-1" id="opciones"></a>
        `
    };
  };

  //Función para remover la clase invisible y devuelve el contenido al documento, se elimina el menu desplegable de la barra de navegación
  function removeChange() {
    if (document.documentElement.clientWidth > 992) {
        myCarouselElement.classList.remove("invisibility");
        title.classList.remove("invisibility");
        menuOption.classList.remove("invisibility");
        search.classList.remove("invisibility");
        buttonSearch.classList.remove("invisibility");
        newOptionNavbar.innerHTML = ``;
    }
  }

  //Evento que detecta un cambio en el tamaño de ventana y ejecuta las funciones
  window.addEventListener("resize", () => {
    changeDocument()
    removeChange()
  })