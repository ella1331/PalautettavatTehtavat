var luku1 = 2
var luku2 = 3
{
  console.log (luku1 + luku2);
}


/*var taulukkomuuttuja = [34, 566, 71, 89]
{
  console.log (taulukkomuuttuja[0]); //(taulukkomuuttuja.shift());->sama juttu
}
taulukkomuuttuja();*/

function laskeYhteen(a,b)
{
  if ((a+b) > 100) {
      console.log("Lukujen summa on alle 100");
}
else {
  console.log("Luvut ovat liian suuria, että pystyisin laskemaan niitä!")
}
}
laskeYhteen(50, 30);

function tarkista(a,b)
{
  if (a == b) {
    console.log("Samat");
  }
  else {
    console.log("Eri luvut");
  }
}
tarkista(12,12);

function sekunneiksi (a, b, c) {
  return a * 3600 + b * 60 + c;
}
console.log(sekunneiksi(9,0,10));

function paiviksi(spaiva, skuukausi, svuosi)
{
svuosi = svuosi * 365.25;
switch(skuukausi){
  case 1:
  spaiva = spaiva;
  break;
  case 2:
  spaiva = spaiva + 31;
  break;
  case 3:
  spaiva = spaiva + 59;
  break;
  case 4:
  spaiva = spaiva + 90;
  break;
  case 5:
  spaiva = spaiva + 120;
  break;
  case 6:
  spaiva = spaiva + 151;
  break;
  case 7:
  spaiva = spaiva + 181;
  break;
  case 8:
  spaiva = spaiva + 212;
  break;
  case 9:
  spaiva = spaiva + 243;
  break;
  case 10:
  spaiva = spaiva + 273;
  break;
  case 11:
  spaiva = spaiva + 304;
  break;
  case 12:
  spaiva = spaiva + 334;
  break;

}
return svuosi + spaiva;
}
console.log(paiviksi(17,3,2021));
