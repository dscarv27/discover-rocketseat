//getElementById() > retorna elemento
const element0 = document.getElementById('blog-title');

//getElementByClassName() > retorna htmlcollection
const element1 = document.getElementsByClassName('one');

//getElementByTagName() > retorna htmlcollection
const element2 = document.getElementsByTagName('meta')

//querySelector() > retorna elemento
const element3 = document.querySelector('.one')
const element4 = document.querySelector('#blog-title')

//querySelectorAll() > retorna nodelist
const elements = document.querySelectorAll('[src]')
elements.forEach(el => console.log(el))

//manipulando conteúdo
const element = document.querySelector('h1')

//textContent
// element.textContent = "Olá Devs!"

//innerText
// element.innerText = "Oi Devs!"

//innerHTML
// element.innerHTML = "Ei Devs! <small>!!!</small>"

//value
const element5 = document.querySelector('input')
// element5.value = "valor que eu quiser"

//add e remover atributos
// const header = document.querySelector('header')
// header.setAttribute('id', 'header')

// const headerID = document.querySelector('#header')

// console.log(headerID.getAttribute('class'))

// header.removeAttribute('id')
// // header.removeAttribute('class')

// header.setAttribute('class', 'bg header')

//alterando estilos
const element6 = document.querySelector('body')

//style
element.style.backgroundColor = "#f9f3D2"

//classList
element.classList.add('active', 'green')
element.classList.remove('active')
element.classList.toggle('active') //se tiver, retira, se não tiver, add