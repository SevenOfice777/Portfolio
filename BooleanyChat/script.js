var input_quest = document.querySelector('#quest');
var chatBot = document.querySelector('.text');
var chatBotandUser = document.querySelector('.chatBot');
var orcamento = document.querySelector('.orcamento');
var duvidas = document.querySelector('.duvidas');
var manutencao = document.querySelector('.manutencao');


function verificaMsg() {
    document.querySelector('#submit_quest').src = 'load.gif'

    if (!input_quest.value) {
        setTimeout(() => {
            document.querySelector('#submit_quest').src = 'botao-enviar.png';
            input_quest.style.borderColor = 'rgba(218, 218, 218, 0.5)';
            input_quest.style.borderColor = 'red';
        }, 1000)
    } else {
        input_quest.style.borderColor = 'rgba(218, 218, 218, 0.5)';
        setTimeout(() => {
            document.querySelector('#submit_quest').src = 'botao-enviar.png';
            enviaMsg();
        }, 1000)

    }

}

function enviaMsg() {
    let quest_user = input_quest.value;
    input_quest.value = '';
    setTimeout(() => {
        atualizaMsg(quest_user);
    }, 500)
}

function atualizaMsg(quest_user_value) {
    if(quest_user_value == 'SITE' || quest_user_value == 'site') {
        playBooleanyChat('SITE');
    } else if(quest_user_value == 'DUVIDAS' || quest_user_value == 'duvidas' || quest_user_value == 'DÚVIDAS' || quest_user_value == 'dúvidas') {
        playBooleanyChat('DUVIDAS');
    } else if(quest_user_value == 'MANUTENÇÃO' || quest_user_value == 'MANUTENCAO' || quest_user_value == 'manutencao' || quest_user_value == 'manutenção' || quest_user_value=='manutençao') {
        playBooleanyChat('MANUTENCAO');
    } else if(quest_user_value == 'voltar' || quest_user_value == 'VOLTAR' || quest_user_value == 'inicio' || quest_user_value == 'INICIO' || quest_user_value == 'RETORNAR AO INICIO' || quest_user_value == 'INÍCIO' ) {
        chatBot.style.display = 'block';
        orcamento.style.display ='none';
        duvidas.style.display = 'none';
        manutencao.style.display = 'none';
    } else {
        playBooleanyChat('INVALIDO');
    }
}

function playBooleanyChat(type_request) {
    if(type_request == 'SITE')  {
        chatBot.style.display = 'none';
        orcamento.style.display ='block'
        
    } else if(type_request == 'DUVIDAS') {
        chatBot.style.display = 'none';
        duvidas.style.display ='block'
    } else if(type_request == 'MANUTENCAO') {
        chatBot.style.display = 'none';
        manutencao.style.display ='block'
    } else {
        chatBot.style.display = 'none';
        chatBotandUser.innerText = 'OPÇÃO INCORRETA';
        voltaInicio();
    }
}

function  voltaInicio() {
    setTimeout(()=> {
        chatBot.style.display = 'block';
        chatBotandUser.innerText = '';
    }, 2000);
}

function voltarSite(){
        window.open('https://google.com');
}

function voltarInicioTela() {
    chatBot.style.display = 'block';
        orcamento.style.display ='none';
        duvidas.style.display = 'none';
        manutencao.style.display = 'none';
}

window.addEventListener('keydown', (evento) => {
    if(evento.key == 'Enter') {
        verificaMsg();
    }
})
document.querySelector('#submit_quest').addEventListener('click', verificaMsg)


