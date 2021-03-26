function pieninSuurin(taulu){
  taulu.sort((a,b) => a-b);
  var pienin = taulu.shift();
  var suurin = taulu.pop();
  console.log("taulukon pienin oli : " + pienin + " ja suurin oli :" + suurin);
}
pieninSuurin([6,8,2,9,5,4,7,86,99,111]);

function parillinenPariton(luku)
{
  if(luku&2==0)
  {
    console.log("luku on parillinen");
  }
  else {
    console.log("luku on pariton");
  }
}
parillinenPariton(3);

/*function numeroNimeksi(numero)
{
  switch {
    case 1:
  }
}*/

class Osoiterekisteri {
  constructor(etunimi, sukunimi, lahiosoite, postinumero, postitoimipaikka, puhelin, sahkoposti)
  {
    this.etunimi = etunimi;
    this.sukunimi = sukunimi;
    this.lahiosoite = lahiosoite;
    this.postinumero = postinumero;
    this.puhelin = puhelin;
    this.sahkoposti = sahkoposti;
  }
}
var Jyri = new Osoiterekisteri ("Jyri", "Lindroos", "Keskikatu 3", "04200", "Kerava", "0401744562", "jyri.lindroos@keuda.fi");
console.log(Jyri.sukunimi);

function aakkosissa(teksti)
{
  var taulu = Array.from(teksti);
  //console.log(taulu);
  taulu.sort();
  teksti = taulu.join("").toString();
  return teksti;
}
console.log(aakkosissa("webmaster"));

function arviointi(pisteet)
{
  if (pisteet < 50)
  {
    return "Hylätty";
  }
  else if (pisteet < 60)
  {
    return "T1";
  }
  else if (pisteet < 70)
  {
    return "T2";
  }
}
