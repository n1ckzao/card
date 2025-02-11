'use strict'

const cidade = [
    {nome:'Jandira', cor:'red', icon: 'jandira.png'},
    {nome:'Itapevi', cor: 'yellow', icon:'itapevi.png'},
    {nome:'Barueri', cor: 'purple', icon:'barueri.png'},
    {nome:'Osasco', cor:'Blue', icon:'osasco.png'}
]
const imagem = [
    {nome: 'gato bombado', imagem: 'gatoBombado.jpg', descricao:'Vendo gato bombado, musculoso e sarado, com mais shape que muito marombeiro! Perfeito pra quem quer um companheiro forte e cheio de atitude. Não é só fofura, é potência felina!', preco: 'R$ 150.000,00'},
    {nome: 'reator ark falso', imagem:'reatorFalso.jpg', descricao:'Vendo reator ARK FALSO do Tony Stark, perfeito pra quem quer se passar de gênio bilionário! Não vai salvar o mundo, mas vai chamar atenção na balada. Bateria ilimitada... mentira, dura 2 horas! Compra por sua conta e risco, herói da quebrada!', preco: 'R$ 2.000,00'},
    {nome: 'cachorro samurai triste', imagem: 'CachorroSamuraiTriste.jpg', descricao:'Vendo cachorro samurai triste, mestre na arte da espada e na tristeza existencial. Ideal pra quem precisa de um guerreiro que medita na solidão. Só não espere alegria, mas muita honra!', preco: 'R$ 10.000.000,00'},
    {nome: 'outfit', imagem: 'outfit.jpg', descricao:'Vendo outfit do Sung Jin Woo de Solo Leveling, ideal pra quem quer se sentir o rei dos caçadores (mas sem as habilidades, né?). Veste e já se sente mais forte... pelo menos na imaginação! Não vem com poder, só com estilo!', preco: 'R$ 8.000,00'},
    {nome: 'pikachu fofo e raivoso', imagem: 'pikachuFofoRaivoso.jpg', descricao:'Vendo Pikachu fofo e raivoso, uma mistura de charme e fúria elétrica! Ele te dá um abraço e, no segundo seguinte, solta um Thunderbolt sem avisar. Ideal pra quem gosta de emoção... e um pouco de medo!', preco: 'R$ 120.000.000,00'}
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

function criarBanner(produto) {
    const banner = document.getElementById('banner')
    const novoProduto = document.createElement('div')
    novoProduto.classList.add('produto')

    const novaImagem = document.createElement('img')
    novaImagem.src = `./imagem/${produto.imagem}`
    novaImagem.alt = produto.nome

    const nomeProduto = document.createElement('h3')
    nomeProduto.textContent = produto.nome

    const descricaoProduto = document.createElement('p')
    descricaoProduto.textContent = produto.descricao

    const precoProduto = document.createElement('p')
    precoProduto.textContent = produto.preco
    precoProduto.style.color = 'green'

    const botaoComprar = document.createElement('button')
    botaoComprar.textContent = 'Comprar'
    botaoComprar.style.backgroundColor = 'blue'
    botaoComprar.style.color = 'white'
    botaoComprar.style.border = 'none'
    botaoComprar.style.padding = '10px'
    botaoComprar.style.borderRadius = '5px'
    botaoComprar.style.cursor = 'pointer'

    novoProduto.appendChild(novaImagem)
    novoProduto.appendChild(nomeProduto)
    novoProduto.appendChild(descricaoProduto)
    novoProduto.appendChild(precoProduto)
    novoProduto.appendChild(botaoComprar)
    banner.appendChild(novoProduto)
}
imagem.forEach(criarBanner)