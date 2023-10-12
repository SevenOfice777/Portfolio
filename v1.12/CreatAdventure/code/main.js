// Seleciona o botão "start" e o container do jogo
const startButton = document.querySelector('.start')
const inicioGame = document.querySelector('.inicio_game')
const infoContainer = document.querySelector('.info')
const setGame = document.querySelector(".seta")
const personGame = document.querySelector(".select_person")
const card_genero = document.querySelectorAll(".card_person");
const game = document.querySelector(".game")
const fundo_music = new Audio('../sprites/fundo_theme.mp3');
const fase_1 = document.querySelector(".fase_1")
const fase_2 = document.querySelector(".fase_2")
const fase_3 = document.querySelector(".fase_3")
const fase_4 = document.querySelector(".fase_4")


const home = document.querySelector(".menu_hidden")
const menu_personagem = document.querySelector(".menu_hidden_personagem")
const criativi = document.querySelector(".menu_hidden_lamp")

var genero = null;

var contset = 0;
var img_sex = [
    'masc.png',
    'fem.png'
]

var bio_per = [
    'Kairos era um jovem artista que sonhava em criar obras incríveis que inspirariam pessoas em todo o mundo.',
    'Alex era uma jovem artista que sonhava em criar obras incríveis que inspirariam pessoas em todo o mundo.'
];

const msg_game = [
    'Olá, meu nome é Kairos, sou um jovem artista com bloqueio CRIATIVO',
    'Estou em uma missão pra liberar a CRIATIVIDADE',
    'Mas o que é a CRIATIVIDADE?',
    'A criatividade é a mágica que acontece quando o cérebro humano',
    'Decide deixar de lado a lógica e o pensamento convencional',
    ' para explorar novas possibilidades.',
    'É como uma chama que queima dentro de nós, ',
    'iluminando o caminho para soluções inovadoras e inesperadas.',
    'A criatividade é a habilidade de ver o mundo de forma única, de encontrar conexões',
    'Onde outros veem apenas caos, de transformar ideias abstratas em realidades tangíveis.',
    'É a faísca que acende a imaginação, o motor que impulsiona a',
    'inovação e a fonte da beleza e da inspiração em todas as suas formas.',
    'PRA MIM ISSO É A CRIATIVIDADE!!!',
    'PERA..............',
    'PARABÉNS!!! VOCÊ LIBERTOU A CRIATIVIDADE'
]


const fundo_src = [
    '../background/cena_7.png',
    '../background/cena_8.png',
    '../background/cena_6.png',
    '../background/cena_5.png',
    '../background/cena_1.png'
]

const hero_src = {
    parado: '../sprites/hero_parado.gif',
    andando: '../sprites/hero_run.gif',
    ataque: '../sprites/hero_attack.gif',
    dead: '../sprites/hero_dead.gif',
    jump: '../sprites/hero_jump.gif',
    defense: '../sprites/hero_defense.gif',
}

// Quando o botão "start" for clicado
startButton.addEventListener('click', function () {
    // Alterna a classe 'hidden' na tela inicial do jogo
    toggleClass(inicioGame, 'hidden')
    fundo_music.play();
    // Alterna a classe 'hidden' no container do jogo
    toggleClass(personGame, 'hidden')
})


for (let i = 0; i < card_genero.length; i++) {
    card_genero[i].addEventListener("click", function () {
        if (card_genero[i].classList[1] == 'masc') {
            genero = "masculino"
            toggleClass(personGame, "hidden")
            toggleClass(infoContainer, 'hidden')

        } else {
            alert('AINDA EM CONSTRUÇÃO! SELECIONE KAIROS!')
        }
    })
}







setGame.addEventListener("click", function () {

    if (genero == "masculino") {
        switch (contset) {
            case 0:
                contset++;
                toggleClass(document.querySelector(".p1"), 'hidden')
                break;
            case 1:
                toggleClass(document.querySelector(".p1"), 'hidden')
                toggleClass(document.querySelector(".p2"), 'hidden')
                contset++;
                break;
            case 2:
                toggleClass(document.querySelector(".p2"), 'hidden')
                toggleClass(document.querySelector(".p3"), 'hidden')
                contset++;
                break;
            case 3:
                toggleClass(document.querySelector(".p3"), 'hidden')
                toggleClass(document.querySelector(".p4"), 'hidden')
                contset++;
                break;
            case 4:
                toggleClass(document.querySelector(".p4"), 'hidden')
                toggleClass(document.querySelector(".p1"), 'hidden')
                toggleClass(infoContainer, 'hidden')
                toggleClass(game, 'hidden')
                toggleClass(fase_1, 'hidden')
                document.querySelector(".icon_per").classList.add("masc_foto")
                document.querySelectorAll(".icon_per")[1].classList.add("masc_foto")
                document.querySelector("#bio_personagem").innerHTML = bio_per[0]
                document.querySelector("#name_personagem").innerHTML = 'Kairos'
                if (!(fase_1.classList.contains('hidden'))) {
                    playGame();
                }

                contset = 0;
                break;
            default:
                break;
        }

    }

})




document.querySelector('.img_home').addEventListener("click", function () {

    toggleClass(document.querySelector(".menu_hidden"), 'hidden')

})

document.querySelector('.opc_continuar').addEventListener("click", function () {

    toggleClass(document.querySelector(".menu_hidden"), 'hidden')

})

document.querySelector(".foto_personagem").addEventListener("click", function () {

    toggleClass(document.querySelector(".menu_hidden_personagem"), 'hidden')

})

document.querySelector(".lamp").addEventListener("click", function () {

    toggleClass(document.querySelector(".menu_hidden_lamp"), 'hidden')

})

var hero = document.querySelector('.hero')
var img_hero = document.querySelector('.hero_img')

var p_msg = document.querySelector('.msg')


function playGame() {

    setInterval(() => {
        p_msg.innerText = msg_game[i]
        if (i >= msg_game.length) {
            p_msg.innerHTML = "CLIQUE NA LÂMPADA PARA IR PARA A CUT-CINE!"
        } else {
            i++;
        }
    }, 4500)

    let isJumping = false;
    let isMovingLeft = false;
    let isMovingRight = false;
    let i = 0;
    let cont_fundo = 0;

    window.addEventListener('keydown', (e) => {
        var hero_position_left = Number(getComputedStyle(hero).left.replace('px', ' '));
        var hero_position_bottom = Number(getComputedStyle(hero).bottom.replace('px', ' '));


        if (e.key === 'w' || e.key === 'W') {
            if (!isJumping) {
                isJumping = true;
                hero.style.bottom = `${hero_position_bottom + 150}px`;
                hero.style.left = `${hero_position_left + 150}px`;

                img_hero.src != hero_src.jump ? img_hero.src = hero_src.jump : null;

                setTimeout(() => {
                    hero.style.bottom = `${hero_position_bottom}px`;

                    img_hero.src != hero_src.parado ? img_hero.src = hero_src.parado : null;
                    isJumping = false;
                }, 500); // 500 milissegundos = 1/2 segundo
            }
        }

        if (e.key === 'a' || e.key === 'A') {
            isMovingLeft = true;
            hero.style.left = `${hero_position_left - 10}px`;
            hero.style.transform = 'scaleX(-1)'; // Inverte a imagem horizontalmente
            img_hero.src != hero_src.andando ? img_hero.src = hero_src.andando : null;

        }

        if (e.key === 'd' || e.key === 'D') {
            isMovingRight = true;
            if (!(hero.style.transform == 'scaleX(1)')) {
                hero.style.transform = 'scaleX(1)';
            }
            hero.style.left = `${hero_position_left + 10}px`;
            img_hero.src != hero_src.andando ? img_hero.src = hero_src.andando : null;
            if (hero.style.left >= '99.9%') {
                fase_1.style.backgroundImage = 'url(' + fundo_src[cont_fundo+1] + ')';
                cont_fundo < fundo_src.length-2 ? cont_fundo++ : cont_fundo = 0;
                hero.style.left = `0px`;
                console.log(hero.style.backgroundImage.url)

            }

        }
    });

    window.addEventListener('keyup', (e) => {

        if (e.key === 'a' || e.key === 'A') {
            isMovingLeft = false;
            img_hero.src = hero_src.parado;
        }

        if (e.key === 'd' || e.key === 'D') {
            isMovingRight = false;
            img_hero.src = hero_src.parado;
        }
    });


}



setInterval(() => {
    let criatividade = document.querySelector(".criati").clientWidth
    let life_criatividade = document.querySelector(".criati_cont").clientWidth

    let percent = Math.floor(((life_criatividade * 100) / (criatividade * 100) * 100))

    document.querySelector(".criati_contador").innerHTML = percent + '%'


    let criatividade_libert = document.querySelector('.criati_cont')
    if (life_criatividade <= 400) {
        life_criatividade++;
        criatividade_libert.style.width = `${life_criatividade}px`
    } 

    if(life_criatividade >= 400) {
        document.querySelector('.stop_game').addEventListener('click', () => {
            toggleClass(game, 'hidden')
            fundo_music.pause();
            toggleClass(credits, 'hidden')
        })
    }




}, 165);

var notCriati = false;
const credits = document.querySelector('.credits')


// Define a função toggleClass() para alternar a classe de um elemento
function toggleClass(element, className) {
    if (element.classList.contains(className)) {
        element.classList.remove(className)
    } else {
        element.classList.add(className)
    }
}