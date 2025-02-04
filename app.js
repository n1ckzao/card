'use strict'

const cidade = [
    {nome:'Jandira', cor:'red', icon: 'jandira.png'},
    {nome:'Itapevi', cor: 'yellow', icon:'itapevi.png'},
    {nome:'Barueri', cor: 'purple', icon:'barueri.png'},
    {nome:'Osasco', cor:'Blue', icon:'osasco.png'}
]
const imagem = [
    {nome: 'gato bombado', imagem: 'gatoBombado.jpg', descricao:'Vendo gato bombado, musculoso e sarado, com mais shape que muito marombeiro! Perfeito pra quem quer um companheiro forte e cheio de atitude. Não é só fofura, é potência felina!'},
    {nome: 'reator ark falso', imagem:'reatorFalso.jpg', descricao:'Vendo reator ARK FALSO do Tony Stark, perfeito pra quem quer se passar de gênio bilionário! Não vai salvar o mundo, mas vai chamar atenção na balada. Bateria ilimitada... mentira, dura 2 horas! Compra por sua conta e risco, herói da quebrada!'},
    {nome: 'cachorro samurai triste', imagem: 'CachorroSamuraiTriste.jpg', descricao:'Vendo cachorro samurai triste, mestre na arte da espada e na tristeza existencial. Ideal pra quem precisa de um guerreiro que medita na solidão. Só não espere alegria, mas muita honra!'},
    {nome: 'outfit', imagem: 'outfit.jpg', descricao:'Vendo outfit do Sung Jin Woo de Solo Leveling, ideal pra quem quer se sentir o rei dos caçadores (mas sem as habilidades, né?). Veste e já se sente mais forte... pelo menos na imaginação! Não vem com poder, só com estilo!'},
    {nome: 'pikachu fofo e raivoso', imagem: 'pikachuFofoRaivoso.jpg', descricao:'Vendo Pikachu fofo e raivoso, uma mistura de charme e fúria elétrica! Ele te dá um abraço e, no segundo seguinte, solta um Thunderbolt sem avisar. Ideal pra quem gosta de emoção... e um pouco de medo! Perfeito pra dar choques de realidade!'}
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
    novaImagem.alt = produto.nome;

    const nomeProduto = document.createElement('h3')
    nomeProduto.textContent = produto.nome

    novoProduto.appendChild(novaImagem)
    novoProduto.appendChild(nomeProduto)
    banner.appendChild(novoProduto)
}
imagem.forEach(criarBanner)