const prompt = require("prompt-sync")();
var time = [
{nome: 'pedro', funcao: 'lider', pontuacao: 2000, estado: true},
{nome: 'ana', funcao: 'granadier', pontuacao: 1000, estado: true},
{nome: 'bruno', funcao: 'rifleman', pontuacao: 900, estado: true},
{nome: 'carlos', funcao: 'AR', pontuacao: 1100, estado: true},
{nome: 'dutra', funcao: 'breacher', pontuacao: 1200, estado: true},
{nome: 'erik', funcao: 'medic', pontuacao: 2000, estado: true},
{nome: 'fabio', funcao: 'AT', pontuacao: 1000, estado: true},
{nome: 'gabriel', funcao: 'sniper', pontuacao: 400, estado: true}]
let canRun = true
// Função para PRINTAR um menu de opções
function menu(){
    console.log('\n-----------------------------------------');
    console.log('Menu de Opções')
    console.log('1 - Registrar usuário')
    console.log('2 - Deletar Usuário')
    console.log('3 - Mostrar equipe')
    console.log('4 - Média da equipe')
    console.log('5 - Atualizar pontos')
    console.log('6 - Buscar jogador')
    console.log('7 - Sair')
}
// Função para EXIBIR dados de um item em uma lista | Exibe nome, funcao e pontuacao dentro de 'time'(line 3-10)
function showteam(){
    console.log('-----------------------------------------');
    if (time.length === 0){
            console.log('Não há usuário cadastrado');
            return;
    } 
    for (let i = 0; i < time.length; i++){
        let player = time[i];
        console.log((i+1), 'Nome: ', player.nome, '|', 'Função: ', player.funcao, '|', 'Pontuação: ', player.pontuacao);
    }
}
// Função para ADICIONAR novos dados na lista 'time'
function cadUser(){
    console.log('-----------------------------------------');
    let nameUser = prompt("Digite o seu nome: ");
    let playerfuncao = prompt('Digite a função do jogador: ');
    let pontplayer = Number(prompt('Digite a pontuação: '));
    if (isNaN (pontplayer)){
        console.log('Pontuação inválida')
        return;
    }
    let playerobj = {
        nome: nameUser, funcao: playerfuncao, pontuacao: pontplayer
    }
    time.push(playerobj); //adiciona o dados dentro do 'playerobj' que atendem aos parametros dentro da lista 'time'
    console.log('O usuário', nameUser, 'foi cadastrado com sucesso!');
}
// Função para DELETAR um item da lista
function delUser(){
    console.log('-----------------------------------------');
    if (time.length === 0){
            console.log('Não há usuário cadastrado');
            return;
        }
    let nameDelete = prompt('Digite o nome a ser deletado: ');
    let indexDelete = -1;
    for (let i = 0; i < time.length; i++){

        if (time[i].nome === nameDelete){
            indexDelete = i;
            break;
        }
    }
        if (indexDelete === -1){
            console.log('Usuário não existe');
            console.log('Lista atual:', time);
            return;
        }
        time.splice(indexDelete, 1);
        console.log('Usuário deletado com sucesso!');
        showteam();
}
// Função para EXIBIR uma MÉDIA das pontuações da lista
function media(){
    if (time.length === 0){
        console.log('Nenhum usuário cadastrado')
        return;
    }
    let totalPontos = 0
    for (let i = 0; i < time.length; i++){
        totalPontos = totalPontos + time[i].pontuacao
    }
    let mediapont = totalPontos / time.length;
    console.log('Média do time: ', Number(mediapont.toFixed(2)));
}
// Função para ALTERAR uma pontuação dentro da lista a partir do 'nome'
function newmedia(){
    console.log('\n')
    let nomebusc = prompt('Digite o nome do jogador: ')
    console.log('Buscando',nomebusc,'...');
    var foundmedia = false
    for (let i = 0; i < time.length; i++){
        let playeratual = time[i];
        if (playeratual.nome === nomebusc){
            console.log('Jogador encontrado!')
            console.log('Nome: ', playeratual.nome, '|', 'Função: ', playeratual.funcao, '|', 'Pontuação: ', playeratual.pontuacao, '|');
        var foundmedia = true
        
        newponts = (prompt('Quantos pontos ele ganhou ou perdeu? '));
        if (isNaN(newponts)){
            console.log("'", newponts,"'",'não é um número, tente novamente')
            newmedia();
            break;
        } 
        playeratual.pontuacao = Number(playeratual.pontuacao) + Number(newponts)
            if (newponts > 0){
                console.log('Pronto! Agora o jogador', playeratual.nome, 'subiu para', playeratual.pontuacao, 'pontos!');
            } else if (newponts < 0){
                console.log('Pronto! Agora o jogador', playeratual.nome, 'desceu para', playeratual.pontuacao, 'pontos!');
            } else if (newponts === 0){
                console.log('A pontuação segue', playeratual.pontuacao);
            } 
        break;
    }
    }
    if (foundmedia === false){
        console.log('O jogador', nomebusc, 'não está na lista do time')
    }
}
// Função para BUSCAR um item específico dentro da lista
function buscador (){
    let nomebusc = prompt('Digite o nome do jogador: ')
    console.log('Buscando',nomebusc,'...');
    var found = false
    for (let i = 0; i < time.length; i++){
        let playeratual = time[i];
        if (playeratual.nome === nomebusc){
            console.log('Jogador encontrado!')
            console.log('Nome: ', playeratual.nome, '|', 'Função: ', playeratual.funcao, '|', 'Pontuação: ', playeratual.pontuacao, '|');
        var found = true
        break;
    }
    }
    if (found === false){
        console.log('O jogador', nomebusc, 'não está no time')
    }
}
// While - enquanto canRun for true, executa um bloco de comandos | while (){}
while (canRun == true){
    menu();
    let option = prompt('Selecione uma opção: ');
    if (option == 1){
        cadUser();
    } else if(option == 2){
        delUser();
    } else if(option == 3){
        showteam();
    } else if(option == 4){
        media();
    } else if (option == 5){
        newmedia();
    } else if (option == 6){
        buscador();
    } else if (option == 7){
        canRun = false
    } else {
        console.log('Opção inválida, digite um número')
    }
}