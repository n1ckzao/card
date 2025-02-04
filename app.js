'use strict'

const cidade = [
    {nome:'Jandira', cor:'red', icon: 'jandira.png'},
    {nome:'Itapevi', cor: 'yellow', icon:'itapevi.png'},
    {nome:'Barueri', cor: 'purple', icon:'barueri.png'},
    {nome:'Osasco', cor:'Blue', icon:'osasco.png'}
]

function criarMenu (cidade){
    const novoItem = document.createElement('li')
    const novoLink = document.createElement('a')
    const menu = document.getElementById('menu')
    const novaImagem = document.createElement('img')

    novaImagem.src = `./icon/${cidade.icon}`

    novoLink.href = '#'
    novoLink.textContent = cidade.nome

    novoItem.appendChild(novaImagem)
    novoItem.appendChild(novoLink)
    novoItem.style = `--cor-hover: ${cidade.cor}`

    menu.appendChild(novoItem)
}
cidade.forEach(criarMenu)