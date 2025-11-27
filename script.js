//===================================================================
// 1.Alternador de Textos
//===================================================================
const textoAlternavel = document.getElementById('texto-alternavel');
const alternarTextoBtn = document.getElementById('alternar-texto-btn');

const textos = ["Texto inicial.", "segundo texto.", "terceiro texto."];
let indiceTexto = 0;

alternarTextoBtn.addEventListener('click', function() {
    indiceTexto = (indiceTexto + 1) % textos.length;
    textoAlternavel.textContent = textos[indiceTexto];
});

//===================================================================
//2. Alternador de imagens 
//===================================================================
const imagem = document.getElementById('imagem');
const alternarImagemBtn = document.getElementById('alternar-imagem-btn');

const urlsImagens = ["imagem1.jpg", "imagem2.jpg", "imagem3.jpg"];
let indiceImagem = 0;

alternarImagemBtn.addEventListener('click', function(){
    indiceImagem = (indiceImagem + 1) % urlsImagens.length;
    imagem.src = urlsImagens[indiceImagem];
});

//=====================================================================
//3. alternador de temas
//=====================================================================
const alternarTemaBtn = document.getElementById('alternar-tema-btn');
let temaAtual = 'claro';

alternarTemaBtn.addEventListener('click', function() {
    const body = document.body;
    if (temaAtual === 'claro') {
        body.classList.remove('tema-claro');
        body.classList.add('tema-escuro');
        alternarTemaBtn.textContent = 'Ativar tema claro';
        temaAtual = 'escuro';
    } else {
        body.classList.remove('tema-escuro');
        body.classList.add('tema-claro');
        alternarTemaBtn.textContent = 'Ativar tema escuro';
        temaAtual = 'claro';
    }
});
document.body.classList.add('tema-claro');

//==================================================================
//4. Contador de cliques
//==================================================================
const contadorDisplay =  document.getElementById('Contador');
const contadorBtn = document.getElementById('contador-btn');
let contador = 0;

contadorBtn.addEventListener('click', function() {
    contador++;
    contadorDisplay.textContent = contador;
});

//==================================================================
//5.barra de progresso
//==================================================================
const progressoAtual = document.getElementById('progresso-atual');
const avancarProgressoBtn = document.getElementById('avancar-progresso-btn');
let progresso = 0;

avancarProgressoBtn.addEventListener(click, function() {
    progresso += 1;
    if (progresso > 100) {
        progresso = 100;
    }
    progressoAtual.style.width = progresso + '%';
});
