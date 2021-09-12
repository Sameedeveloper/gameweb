let items = document.querySelectorAll('.carousel .carousel-item')
var count = 0

items.forEach((el) => {
  const minPerSlide = 5
  let next = el.nextElementSibling
  for (var i = 1; i < minPerSlide; i++) {
    if (!next) {
      // wrap carousel by using first child
      next = items[0]
    }
    let cloneChild = next.cloneNode(true)
    el.appendChild(cloneChild.children[0])
    next = next.nextElementSibling
  }
})

$(document).ready(function () {
  if (localStorage.getItem('popState') != 'shown') {
    $('#popup').delay(2000).fadeIn()
    localStorage.setItem('popState', 'shown')
  }

  $('#popup-close').click(function (
    e // You are clicking the close button
  ) {
    $('#popup').fadeOut() // Now the pop up is hiden.
  })
  $('#popup').click(function (e) {
    $('#popup').fadeOut()
  })
})
