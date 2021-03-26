function tehtava1() {
  var luku = parseInt(document.getElementById("numero").value);
  if (luku >=0){
    document.write("Luku on positiivinen.");
  }
  else{
    document.write("Luku on negatiivinen.");
  }
}

function tehtava2() {
  var luku;
  luku = parseInt(document.getElementById("arvo").value);
  if(luku == 1){
    document.write("Maanantai");
  }
  else if (luku == 2){
    document.write("Tiistai");
  }
  else if (luku == 3){
    document.write("Keskiviikko");
  }
  else if (luku == 4){
    document.write("Torstai");
  }
  else if ( luku == 5){
    document.write("Perjantai");
  }
  else if ( luku == 6){
    document.write("Lauantai");
  }
  else if ( luku == 7){
    document.write("Sunnuntai");
  }
  else{
    document.write("Väärä numero");
  }
}

function tehtava3() {
  var luku;
  luku = parseInt(document.getElementById("vuosiluku").value);
  if(luku%400==0){
    document.write("Vuosi on karkausvuosi!");
  }
  else if (luku%4==0 && luku%100!=0){
    document.write("Vuosi on karkausvuosi!");
  }
  else{
    document.write("Vuosi ei ole karkausvuosi!");
  }
}

function tehtava4() {
  var l1, l2, l3, l4, l5, l6, l7, l8, l9, l10;
  l1 = parseInt(document.getElementById("luku1").value);
  l2 = parseInt(document.getElementById("luku2").value);
  l3 = parseInt(document.getElementById("luku3").value);
  l4 = parseInt(document.getElementById("luku4").value);
  l5 = parseInt(document.getElementById("luku5").value);
  var summa = l1 + l2 + l3 + l4 + l5;
  var keskiarvo = summa / 5;
  document.write("Lukujen summa on : " + (summa));
  document.write("<br/>");
  document.write("Lukujen keskiarvo on : " + (keskiarvo));
}

function tehtava5()
{
  var luku = parseInt(document.getElementById("kerto").value);
  var lausemuuttuja = "";
  for(var k=1;k<=10;k++)
  {
    lausemuuttuja += luku + " x " + k + " = " + luku * k + "\<br>";
  }
document.write(lausemuuttuja);
}
