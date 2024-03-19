const nav = document.querySelector('nav')
const botaoMenu = nav.querySelector('#menu')
const opcoesMenu = nav.querySelector('#opcoes')


botaoMenu.addEventListener('click', () => {
  if (botaoMenu.classList.contains('ativo')) botaoMenu.classList.remove('ativo')
  else botaoMenu.classList.add('ativo')
  if(opcoesMenu.classList.contains('mostrar')) opcoesMenu.classList.remove('mostrar')
  else opcoesMenu.classList.add('mostrar')
})

window.addEventListener('scroll', () => {
    const altura = window.scrollY
    if (altura < 200) nav.classList.remove('scroll')
    else nav.classList.add('scroll')
})