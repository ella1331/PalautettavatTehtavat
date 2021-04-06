//tehtävä 1
function laskePisteet(){
  var pisteet = 0;
  var annettu = document.getElementById('sana').value;
  for(var i = 0; i < annettu.length; i++)
  {
    switch (annettu[i]) {
      case 'a':
      case 'e':
      case 'i':
      case 'n':
      case 's':
      case 't':
      case 'A':
      case 'E':
      case 'I':
      case 'N':
      case 'S':
      case 'T':
      pisteet++;
      break;
    case 'o':
    case 'ä':
    case 'k':
    case 'l':
    case 'O':
    case 'Ä':
    case 'K':
    case 'L':
    pisteet+=2;
    break;
    case 'u':
    case 'm':
    case 'U':
    case 'M':
    pisteet+=3;
    break;
    case 'y':
    case 'h':
    case 'j':
    case 'p':
    case 'r':
    case 'v':
    case 'Y':
    case 'H':
    case 'J':
    case 'P':
    case 'R':
    case 'V':
    pisteet+=4;
    break;
    case 'ö':
    case 'd':
    case 'Ö':
    case 'D':
    pisteet+=7;
    break;
    case 'b':
    case 'f':
    case 'g':
    case 'B':
    case 'F':
    case 'G':
    pisteet+=8;
    break;
    case 'c':
    case'C':
    pisteet+=10;
    break;
    default:
    pisteet+=12;
    }
    document.getElementById('pisteet').innerHTML = "<p>Sanan " + annettu + " pisteet ovat: " + pisteet + "</p>";
  }
}
//tehtävä 2
function lottoArvonta(){
  var lottoNumerot = [];
  var temp;
  for(var lotto = 0; lotto < 7; lotto++)
  {
    temp = Math.floor(Math.random()*40)+1;
    lottoNumerot[lotto] = temp;
  }
  lottoNumerot.sort();
  document.getElementById('arvonta').innerHTML = "<p>" + lottoNumerot + "</p>";
}
//tehtävä 3
function muunnaTaulukoksi(){
  var jono = [];
  jono = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16], [17, 18, 19, 20]];
  var taulu ="<table border='1'>";
  for(var j = 0; j < jono.length; j++) {
    taulu +="<tr>";
    for(var k = 0; k< jono [j].length; k++) {
    taulu += "<td>" + jono[j][k] + "</td>";
  }
  taulu += "</tr>";
  }
  taulu += "</table>";
  document.getElementById('taulukko').innerHTML = taulu;
}
//tehtävä 4
function arvoKortit(){
  var pakka = [''];
 var maat = ['&#9824;', '&#9827;', '&#128312;', '&#128151;'];
 var numerot = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
 laskuri = 0;
 for(m = 0; m < maat.length; m++)
 {
   for(n = 0; n < numerot.length; n++)
   {
     if(m == maat.length-1 && n == numerot.length-1)
     {
       pakka[laskuri] = maat[m] + numerot[n];
     }
     else {
       pakka[laskuri] = maat[m]+numerot[n];
       laskuri++;
     }
   }
 }
 var kortit = [];
 for(l = 0; l < 5; l++)
 {
     temp = pakka[Math.floor(Math.random()*52)];
     kortit[l] = temp;
 }
 document.getElementById('korttiPakka').innerHTML = '<p>'+kortit+'</p>';
}
