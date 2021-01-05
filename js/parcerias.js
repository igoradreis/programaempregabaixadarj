var empresas = [
  "afamar.png",
  "almeida-calcados.png",
  "bemfica.png",
  "benco.png",
  "bergs.png",
  "black-tie.png",
  "blanco.png",
  "botafogo.png",
  "chove-chuva.png",
  "ciee-rj.png",
  "colegio-eden.png",
  "consulvet.png",
  "del-lavoro.png",
  "drogaria-paschoal.png",
  "easymetal.png",
  "easytec.png",
  "easytec-rj.png",
  "ed.png",
  "elemento-base.png",
  "expectativa.png",
  "fabrica-arame.png",
  "farmacia-teixeira.png",
  "grupo-dsrh.png",
  "hotel-taireta.png",
  "jhota.png",
  "jjf-contabilidade.png",
  "leju-informatica.png",
  "lomel.png",
  "maquip.png",
  "metaltec.png",
  "mtc.png",
  "nc.png",
  "neuvoo.png",
  "papelex.png",
  "petiscaria.png",
  "rc-botelho.png",
  "sagatech.png",
  "salao-jo-guimaraes.png",
  "s-construtora.png",
  "transportal-turismo.png",
  "welfar-confeccoes.png",
  "world-media.png"
];

// var i = Math.floor(Math.random() * empresas.length);
// som.src = sons[i];

var contagem = 0;
var total = empresas.length;
var paginas = Math.ceil(total / 5);

var i = 0;
var j = 0;
var parcerias_lista = "";

for (i = 0; i < paginas; i++) {
  if (i === paginas - 1) {
    parcerias_lista += '<li><table class="table" style="margin-right:100px;">';
  } else {
    parcerias_lista += '<li><table class="table">';
  }

  for (j = 0; j < 5; j++) {
    parcerias_lista += '<tr>';

    if (contagem < total) {
      parcerias_lista += '<td><img src="../img/empresa/' + empresas[contagem] + '"></td>';
      ++contagem;
    }

    parcerias_lista += '</tr>';
  }

  parcerias_lista += '</table></li>';
}

document.getElementById("parcerias-lista").innerHTML = parcerias_lista;
