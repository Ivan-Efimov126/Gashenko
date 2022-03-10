'use strict'
let counter = 0
let header = Array.from(document.querySelectorAll('header'))
let headerTimer = setInterval(() => {
  if (counter < header.length - 1) {
    ++counter
  } else {
    counter = 0
  }
  header.forEach(element => {
    element.classList.remove('active')
  });
  header[counter].classList.add('active')
}, 3000)

let s03Area12Span = Array.from(document.querySelectorAll('.s03 .area-12 span'))
let s03Area12Img = document.querySelector('.s03 .area-12 img')
s03Area12Span.forEach(element => {
  element.addEventListener('mouseover', () => {
    s03Area12Img.setAttribute('src', './images/feature-' + s03Area12Span.indexOf(element) + '.png')
  })
});