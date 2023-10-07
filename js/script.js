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

  //Seleccionar elemento del nav para ocultar información de la pagina

window.addEventListener("DOMContentLoaded", () => {
    if(window.screen.width < 992){
        myCarouselElement.classList.add("invisibility");
        title.classList.add("invisibility");
        menuOption.classList.add("invisibility");
        search.classList.add("invisibility");
        buttonSearch.classList.add("invisibility");

        newOptionNavbar. innerHTML = `
            <p class="d-inline-flex gap-1">
                <a class="nav-link" data-bs-toggle="collapse" href="#multiCollapseExample1" role="button" aria-expanded="false" aria-controls="multiCollapseExample1">Opciones</a>
            </p>
            <div class="row">
                <div class="col">
                    <div class="collapse multi-collapse" id="multiCollapseExample1">
                        <div class="card card-body">
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
    }

    if (window.screen.width > 992) {
        myCarouselElement.classList.remove("invisibility");
        title.classList.remove("invisibility");
        menuOption.classList.remove("invisibility");
        search.classList.remove("invisibility");
        buttonSearch.classList.remove("invisibility");
        
    }
})
 
  
