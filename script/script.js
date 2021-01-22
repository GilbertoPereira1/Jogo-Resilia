/* Inicio */
function iniciar(){
    var iniciajogo = confirm('Iniciar um novo jogo ?');
    if(iniciajogo == false){
        alert('Você encerrou o jogo !');
    }else{
        faseUm();
    }
}


/* gameover 1 */
function gameOver(){
    var jogarDeNovo = confirm('Game Over! Deseja jogar de novo ?');
    if(jogarDeNovo){
        faseUm();
    }else{
        alert('Fim de jogo.');
    }
}


/* começo da simulacao */
function faseUm(){
    alert('INTRUÇÕES: Utilize OK para opção da direita e CANCEL para a opção da esquerda');
    alert(`Dia 23 de junho de 2004, após um péssimo dia no trabalho você decide dormir, as 3:00AM você acorda assustado com um barulho estrondoso, aparentemente você não se encontra mais no seu quarto... `)
    var respostaUm = confirm('Apenas observar | Levantar e fugir');
    if(respostaUm){
        fugir();
    }else{
        observar();
    }
}


/*   observar  */
function observar(){
    var liga = confirm(`Você decidiu apenas observar e percebe uma comunicação em uma lingua que nunca ouviu antes:
    Ir até a porta e averiguar | Continuar observando`);
    if(liga){
        presoNave()
    }else{
        averiguar();
    }
}


/*   Averiguando   */
function averiguar(){
    averiguandoLocal = confirm(`Ao averiguar na porta você percebe estar preso em algum tipo de nave, o que você deseja fazer?: 
    Deitar novamente e desistir! | Tentar Fugir!`);
    if(averiguandoLocal){
        fugir();
    }else{
        presoNave();
    }
}


/*  Tentando fugir  */
function fugir(){
    var respostaF = confirm(`Você decidiu Fugir: 
    Ir pela esquerda | Ir pela Direita`);
    if(respostaF){
        direita();
    }else{
        esquerda();
    }
}

/*  direita. */
function direita(){
    pelaDireita = confirm(`você decidiu ir pela direita, porém avista vultos na sua frente, deseja virar para esquerda?: 
    Ir para esquerda | Continuar na direita`);
    if(pelaDireita){
        corredorEstreito();
    }else{
        presoNave();
    }
}


/*  esquerda  */
function esquerda(){
    var pelaEsquerda = confirm(`Você decidiu ir pela esquerda e encontrou uma porta :
    Tentar outro caminho | Arrombar a porta`);
    if(pelaEsquerda){
        corredorEstreito();
    }else{
        explorarNave();
    }
}

/*  explora nave  */
function explorarNave(){
    var explorandoNave = confirm(`A nave está cheia de Aliens, deseja tentar outro caminho? 
    Tentar novamente a porta | Prosseguir explorando`)
    if(explorandoNave){
        tentarCaminho();
    }else{
        corredorEstreito();
    }
}

/* outro caminho */
function tentarCaminho(){
    var tentandoCaminho = confirm(`Você Achou outro caminho, porém está muito barulhento, deseja voltar para porta?: 
    Não | Voltar para porta`);
    if(tentandoCaminho){
        corredorEstreito();
    }else{
        presoNave();
    }
}

 /*  casa dos pais */
function corredorEstreito(){
    var loucura = confirm(`Oh não tem alguem vigiando a porta: 
    Jogar algo para Distrair | Ir pra cima igual maluco `);
    if(loucura){
        alert(`Você tentou lutar desarmado contra um alien e morreu!`);
        gameOver();
    }else{
        distracao()
    }
}

/* aliens */
function presoNave(){
    alert('Você foi capturado por forças alienigenas')
    gameOver();
}


/*  Usar distracao */
function distracao(){
    var usarDristracao = confirm(`A distração funcionou, escolha o resultado correto para abrir a tranca: 
     2 + 2 = 5 | 1 + 1 = 2!`)
    if(usarDristracao){
        pistaDosPais();
    }else{
        explorarNave();
    }
}



/********************************************************** 
                        Pista dos pais. 
 **********************************************************/
function pistaDosPais(){
    var montanhas = confirm(`Pelo menos a recuperação da 2ª Série te serviu de algo, abra a porta e fuja antes da nave decolar! 
    Fugir | Explorar a nave`);
    if(montanhas){
        explorarNave();
    }else{
        alert('Ufa, você conseguiu fugir, agora vê se levanta, isso não passou de um sonho xD');
        start();
    }
}