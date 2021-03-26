function tehtava1() {
var luku1, luku2, luku3;
luku1 = parseInt(document.getElementById("ensimmainen").value);
luku2 = parseInt(document.getElementById("toinen").value);
luku3 = parseInt(document.getElementById("kolmas").value);
document.write("Annoit luvut:" + luku1 + " " + luku2 + " " + luku3 + "<br>");
if(luku1< luku2 && luku1 < luku3)
{
  if (luku2 < luku3)
  {
    document.write("Lukujen järjestys:" + luku1 + " " + luku2 + " " + luku3);
  }
  else {
    document.write("Lukujen järjestys:" + luku1 + " " + luku3 + " " + luku2);
  }
}
else if(luku2 < luku1 && luku2 < luku3){
  if(luku1<luku3){
    document.write("Lukujen järjestys:" + luku2 + " " + luku1 + " " + luku3);
  }
  else{
  document.write("Lukujen järjestys:" + luku2 + " " + luku3 + " " + luku1);
  }
}
else if(luku3 < luku1 && luku3 < luku2){
  if(luku1 < luku2){
    document.write("Lukujen järjestys:" + luku3 + " " + luku1 +" " + luku2);
  }
  else{
    document.write("Lukujen järjestys:" + luku3 + " " + luku2 + " " + luku1);
    }
  }
}

function tehtava2() {
    var l1, l2, l3, l4, l5, Suurin;
    l1 = parseInt(document.getElementById("luku1").value);
    l2 = parseInt(document.getElementById("luku2").value);
    l3 = parseInt(document.getElementById("luku3").value);
    l4 = parseInt(document.getElementById("luku4").value);
    l5 = parseInt(document.getElementById("luku5").value);
    if (l1 < l2 && l3 < l2 && l4 < l2 && l5 < l2)
    {
      Suurin = l2;
    }
    else if ( l1 < l3 && l4 < l3 && l5 < l3)
    {
      Suurin = l3;
    }
    else if ( l1 < l4 && l5 < l4)
    {
      Suurin = l4;
    }
    else if (l1 < l5)
     {
      Suurin = l5;
    }
    else {
      Suurin = l1;
    }
    document.write("Annoit luvut: " + l1 + " " + l2 + " " + l3 + " " + l4 + " " + l5);
    document.write("<br> Suurin niistä on: " + Suurin);
}

function tehtava3() {
  var luku;
  luku = parseInt(document.getElementById("arvo").value);
  document.write("Antamasi luku: " + luku);
  if(luku%2 == 0){
    document.write("<br> Antamasi luku on parillinen");
  }
  else{
    document.write("<br> Antamasi luku on pariton");
  }
}

function tehtava4(){
  var ika = parseInt(document.getElementById("age").value);
  if(ika < 16){
    document.write("Voit ajaa polkupyörää");
  }
  else if(ika < 18) {
  document.write("Voit ajaa mopoa");
  }
  else {
    document.write("Voit ajaa autoa");
  }
}

function tehtava5 () {
  var kieli = document.getElementById('language').value;
  if(kieli == "eng") {
    document.write("Hello world!");
  }
  else if(kieli == "swe"){
    document.write("Hej världen!");
  }
  else {
    document.write("Hallo Welt!");
  }
}
