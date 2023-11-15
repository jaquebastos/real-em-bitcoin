var valorEmBitcoin = 6;
var cotacaoDoBitcoin = 174.762;
var nome = 'Rafaella';

var valorEmReal = valorEmBitcoin * cotacaoDoBitcoin;
valorEmReal = valorEmReal.toFixed(2);

alert(nome + ', esse é o valor em reais de ' + valorEmBitcoin + ' bitcoins: ' + 'R$ ' + valorEmReal);