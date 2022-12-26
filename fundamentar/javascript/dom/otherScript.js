//navegando pelos elementos

//parentNode, parentElement > elementos pais

const body = document.querySelector('body')
body.parentElement
body.parentNode

//childNodes children
const el = document.querySelector('body')
el.childNodes //retorna text(vazio), header, text(vazio), script
el.children //retorna header, script

//firstChild firstElementChild
el.firstChild //retorna text(vazio)
el.firstElementChild //retorna header

//lastChild lastElementChild
el.lastChild //retorna script
el.lastElementChild //também retorna script

//nextSibling nextElementSibling
el.nextSibling //retorna text(vazio)
el.nextElementSibling //retorna script

//previousSibling  previousElementSibling
const el1 = document.querySelector('body script')
el1.previusSibling //retorna text(vazio)
el1.previousElementSibling //retorna header