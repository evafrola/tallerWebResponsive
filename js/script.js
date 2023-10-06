const myCarouselElement = document.querySelector('#carouselExampleSlidesOnly')

myCarouselElement.addEventListener('slide.bs.carousel', () => {
    const carousel = new bootstrap.Carousel(myCarouselElement, {
        interval: 2000,
        touch: false
      })
  })