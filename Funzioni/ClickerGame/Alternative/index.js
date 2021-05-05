var ore=0;
var minuti=0;
var secondi=0;
var decimi=0;
var visualizzazione="";
var contatore_intertempi=0;
var stop=1; //0=attivo 1=fermo

function cronometro()
{
decimi+=1;
if (decimi>9) {decimi=0;secondi+=1;}
if (secondi>59) {secondi=0;minuti+=1;}
if (minuti>59) {minuti=0;ore+=1;}

if (ore<10) {visualizzazione="0" + ore;} else {visualizzazione=ore;}
if (minuti<10) {visualizzazione=visualizzazione + ":0" + minuti;} else {visualizzazione=visualizzazione + ":" + minuti;}
if (secondi<10) {visualizzazione=visualizzazione + ":0" + secondi;} else {visualizzazione=visualizzazione + ":" + secondi;}
visualizzazione=visualizzazione + ":" + decimi;

document.getElementById("mostra_cronometro").value=visualizzazione;
setTimeout("cronometro()", 100);
}

var numbers = document.getElementById("soldi");
num = 0;
npc = 1;

function game(){ 
    num += npc;
    var numbers = document.getElementById("soldi");
    numbers.innerHTML = num + "$";

    if(num > 1000){
        numbers.innerHTML = (num/1000).toFixed(1) + " Mila $"
    }
    if(num > 1000000){
        numbers.innerHTML = (num/1000000).toFixed(1) + " Milioni di $"
    }
    if(num > 1000000000){
        numbers.innerHTML = (num/1000000000).toFixed(1) + " Miliardo di  $"
    }
    if(num > 1000000000000){
        numbers.innerHTML = (num/1000000000000).toFixed(1) + " Bilioni di $"
    }
    

    if(num < 20){
        num += 0
    }
    console.log(num)
}
function upgrade(){
    if(num >= 20){
        var compra = document.getElementById("Marco")
        compra.style.display = "none"
        num = num - 20
        npc = 2;
    }
    else{
        alert("Sei troppo povero per comprare i biscotti buoni")
    }
}
function up2(){
    if(num >= 200){
        var compra = document.getElementById("Uranio")
        compra.style.display = "none"
        num = num - 200
        npc = 10;
    }
    else{
        alert("Sei troppo povero per comprare i biscotti all'uranio")
    }
}
function up3(){
    if(num >= 3000){
        var compra = document.getElementById("Fagioli")
        compra.style.display = "none"
        num = num - 3000
        npc = 50;
    }
    else{
        alert("Sei troppo povero per comprare i biscotti ai fagioli")
    }
}
function up4(){
    if(num >= 25000){
        var compra = document.getElementById("Formaggio")
        compra.style.display = "none"
        num = num - 25000
        npc = 100;
    }
    else{
        alert("Sei troppo povero per comprare i biscotti al formaggio")
    }
}
function up5(){
    if(num >= 75000){
        var compra = document.getElementById("Prosciutto")
        compra.style.display = "none"
        num = num - 75000
        npc = 500;
    }
    else{
        alert("Sei troppo povero per comprare i biscotti al prosciutto")
    }
}
function up6(){
    if(num >= 500000){
        var compra = document.getElementById("Peperoncino")
        compra.style.display = "none"
        num = num - 500000
        npc = 5000;
    }
    else{
        alert("Sei troppo povero per comprare i biscotti al peperoncino")
    }
}
function up7(){
    if(num >= 10000000){
        var compra = document.getElementById("Cloro")
        compra.style.display = "none"
        num = num - 10000000
        npc = 10000;
    }
    else{
        alert("Sei troppo povero per comprare i biscotti al cloro")
    }
}
function up8(){
    if(num >= 30000000){
        var compra = document.getElementById("Erba")
        compra.style.display = "none"
        num = num - 30000000
        npc = 50000;
    }
    else{
        alert("Sei troppo povero per comprare i biscotti all'erba")
    }
}