//1. tehtävä
function parilliset() {
  var arvo = parseInt(document.getElementById('parillinenLuku').value);
  var jono = "<p>";
  for (var i = 2; i <= arvo; i= i+2) {
    jono+=i;
    jono+=" ";
  }
  jono+="</p>";
  document.getElementById('parilliset').innerHTML = jono;
}
//2.tehtävä
function muutaSana() {
  var ksana = document.getElementById('ksana').value;
  var salasana = "<p>";
  for(var j = 0; j < ksana.length; j++)
  {
    salasana += ksana[j] + 'Ö';
  }
  salasana += "</p>";
  document.getElementById('salasana').innerHTML = salasana;
}
//3.tehtävä
function tarkista() {
  var annettuSana = document.getElementById('sana').value;
  var vastaus = "Ei ole";
  for(var k = 0; k < annettuSana.length; k++)
  {
    if (annettuSana[k] == "ö" || annettuSana[k] == "Ö")
    {
      vastaus= "On";
    }
  }
  document.getElementById('vastaus').innerHTML = "<p>" + vastaus + "</p>";
}
//4.Tehtävä
function kerto() {
  var kertoma = document.getElementById('luku').value;
  var lasku = 1;
  for(var z = 1; z <= kertoma; z++)
  {
    lasku*=z;
  }
  document.getElementById('kertoVastaus').innerHTML = "<p>Luvun " + kertoma + " kertoma on " + lasku + "</p>";
}
//tehtävä 5
function hipHeijaa(){
  var tulos = "";
  for(var y = 1; y <= 100; y++) {
    if (y%3==0 && y%5==0) {
      tulos+="Hip Heijaa";
    }
    else if (y%5 == 0){
      tulos+="Heijaa ";
    }
    else if (y%3 == 0){
      tulos+="Hip ";
    }
    else {
      tulos+=y+" ";
    }
    document.getElementById('tulostus').innerHTML = tulos;
  }
}
//tehtävä 6
function numerot(){
  var kymmenen = "<p>";
  for(var e = 1; e <=10; e++)
  {
    kymmenen += e + " ";
  }
  kymmenen += "</p>";
  document.getElementById('numeroidenTulostus').innerHTML = kymmenen;
}
//tehtävä 7
function yhteenLasku(){
  yhteensä = 0;
  for(var y = 1; y <=10; y++){
    yhteensä += y;
  }
  document.getElementById('yhteenLasku').innerHTML = "<p>" + yhteensä + "</p>";
}
//tehtävä 8
function potenssiLasku(){
  var korotus = document.getElementById('korotettava').value;
  var pot = document.getElementById('potenssi').value;
  yhteensä = korotus;
  for(var p = 1; p < pot; p++)
  {
    yhteensä *= korotus;
  }
  document.getElementById('lasku').innerHTML = "<p>" + yhteensä + "</p>";
}
//tehtävä 9
function etsi(){
  var taulu = [], temp;
  for (var x = 0; x < 5; x++)
  {
    temp = document.getElementById('taulukko['+x+']').value;
    temp = parseInt (temp);
    taulu.push(temp);
  }
  taulu = taulu.sort((a,b) => a-b);
  document.getElementById('isoinPienin').innerHTML = "<p>Pienin luku: " + taulu[0] + " ja suurin luku: " + taulu[taulu.length-1];
}
//tehtävä 10
function muokkaaSalasana(){
  var pw = "";
  var eka, toka;
  pw = document.getElementById('ss').value;
  var taulu = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "z", "å", "ä", "ö"];
  var temp = [];
  var lop="";
  for(var s = 0; s < pw.length; s++)
  {
    eka = pw[s];
    temp.push(eka);
    var lisää = Math.floor(Math.random()*taulu.length);
    toka = taulu[lisää];
    temp.push(toka);
  }
  lop = temp.join("");
  document.getElementById('muokattu').innerHTML = lop;
}
//tehtävä 11
function summat(){
  var nro1, nro2, palku, ralku, psumma=0, rsumma=0, pluvut="", rluvut="";
nro1 = parseInt(document.getElementById('pienempi').value);
nro2 = document.getElementById('isompi').value;
if (nro1%2 == 0){
  palku = nro1
}
else {
  palku = nro1+1;
}
for(var b = palku; b<=nro2; b+=2)
{
  pluvut += b + " ";
  psumma += b;
}
if(nro1%2 == 0)
{
  ralku = nro1+1;
}
else{
  ralku = nro1;
}
for(var r = ralku; r<=nro2; r+=2)
{
  rluvut += r + " ";
  rsumma += r;
}
document.getElementById('numerot').innerHTML = "<p>Parilliset numerot: " + pluvut + "ja niiden summa: " + psumma + "</p><p>Parittomat luvut: " + rluvut + "ja niiden summa: " + rsumma + "</p>";
}
