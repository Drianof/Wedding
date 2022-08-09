let contagem = document.getElementById("Five");
let hoje  = new Date();
const dataDoCasamento = new Date('12/09/2022 11:11')
let tempoParaOCasamento = dataDoCasamento - hoje
let dias = Math.floor(tempoParaOCasamento/(1000 * 60 * 60 * 24))
let horas = Math.floor(tempoParaOCasamento/(1000 * 60 * 60)) - dias * 24
contagem.innerHTML = `Faltam ${dias} dias e ${horas} horas para o casamento`