// A data de nascimento fornecida no texto (23/01/2009)
const dataNascimento = new Date('2009-01-23');

/**
 * Função para calcular a idade exata com base na data de nascimento.
 * @param {Date} dataNasc - A data de nascimento.
 * @returns {number} A idade atual.
 */
function calcularIdade(dataNasc) {
    const hoje = new Date();
    let idade = hoje.getFullYear() - dataNasc.getFullYear();
    const mes = hoje.getMonth() - dataNasc.getMonth();

    // Se ainda não fez aniversário neste mês ou fez neste mês mas o dia ainda não chegou
    if (mes < 0 || (mes === 0 && hoje.getDate() < dataNasc.getDate())) {
        idade--;
    }
    return idade;
}

// 1. Inserir a idade calculada no HTML
const idadeAtual = calcularIdade(dataNascimento);
// O texto original diz que você tem 16 anos. Se o cálculo acima der 15 ou 17, 
// o script usará o valor calculado, pois a data atual é 17/11/2025.
// A idade calculada para 23/01/2009 em 17/11/2025 é 16 anos.
document.getElementById('idade').textContent = idadeAtual;


// 2. Funcionalidade do botão de motivação
const frasesMotivacionais = [
    "O futuro que você sonha para o seu filho começa com a sua dedicação de hoje.",
    "A alegria e o positivismo são ferramentas poderosas. Use-as para construir seus dois futuros!",
    "Lembre-se: você já superou a frustração da pandemia. Sua força é inegável.",
    "Todo grande futuro foi construído em pequenos passos diários. Continue em frente.",
    "Seu garotinho é sua maior motivação. Pense no mundo que você está criando para ele, uma parcela por vez.",
    "Sua paixão por conhecimento (história, geopolítica) é um superpoder. Aplique essa sede de saber aos seus objetivos.",
    "A coragem não é a ausência de medo (ou ansiedade), mas o triunfo sobre ele. Um passo de cada vez.",
    "O mundo em 12 parcelas é possível. Foco no próximo passo!"
];

const motivateButton = document.getElementById('motivate-button');
const motivationQuote = document.getElementById('motivation-quote');

motivateButton.addEventListener('click', () => {
    // Seleciona uma frase aleatória
    const indiceAleatorio = Math.floor(Math.random() * frasesMotivacionais.length);
    motivationQuote.textContent = frasesMotivacionais[indiceAleatorio];
});

// Inicializa a frase ao carregar a página
motivationQuote.textContent = "Clique para começar a se motivar!";
