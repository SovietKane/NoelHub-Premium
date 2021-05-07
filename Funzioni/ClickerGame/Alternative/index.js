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


console.log("--è molto SUS che stai guardando la console--")


var numbers = document.getElementById("soldi");
var num = 0;
var npc = 1;
var autoclick = 0;

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
    if(num > 1000000000000000){
        numbers.innerHTML = (num/1000000000000000).toFixed(1) + " Trilioni di $"
    }
    if(num > 1000000000000000000){
        numbers.innerHTML = (num/1000000000000000000).toFixed(1) + " Quadrilioni di $"
    }
    if(num > 1000000000000000000000){
        numbers.innerHTML = (num/1000000000000000000000).toFixed(1) + " Quintilioni di $"
    }
    if(num > 1000000000000000000000000){
        numbers.innerHTML = (num/1000000000000000000000000).toFixed(1) + " Sestilioni di $"
    }
    if(num > 1000000000000000000000000000){
        numbers.innerHTML = (num/1000000000000000000000000000).toFixed(1) + " Settilioni di $"
    }
    if(num > 1000000000000000000000000000000){
        numbers.innerHTML = (num/1000000000000000000000000000000).toFixed(1) + " Ottilioni di $"
    }
    if(num > 1000000000000000000000000000000000){
        numbers.innerHTML = (num/1000000000000000000000000000000000).toFixed(1) + " Nonilioni di $"
    }
    if(num > 1000000000000000000000000000000000000){
        numbers.innerHTML = (num/1000000000000000000000000000000000000).toFixed(1) + " Decilioni di $"
    }
    if(num > 1000000000000000000000000000000000000000){
        numbers.innerHTML = (num/1000000000000000000000000000000000000000).toFixed(1) + " Undecilioni di $"
    }
    if(num > 1000000000000000000000000000000000000000000){
        numbers.innerHTML = (num/1000000000000000000000000000000000000000000).toFixed(1) + " Dodecilioni di $"
    }
    if(num > 1000000000000000000000000000000000000000000000){
        numbers.innerHTML = (num/1000000000000000000000000000000000000000000000).toFixed(1) + " Tridecilioni di $"
    }
    if(num > 1000000000000000000000000000000000000000000000000){
        numbers.innerHTML = (num/1000000000000000000000000000000000000000000000000).toFixed(1) + " Quadrecilioni di $"
    }
    if(num > 1000000000000000000000000000000000000000000000000000){
        numbers.innerHTML = (num/1000000000000000000000000000000000000000000000000000).toFixed(1) + " Quindecilioni di $"
    }
    if(num > 1000000000000000000000000000000000000000000000000000000){
        numbers.innerHTML = (num/1000000000000000000000000000000000000000000000000000000).toFixed(1) + " Sestidecilione di $"
    }
    if(num > 1000000000000000000000000000000000000000000000000000000000){
        numbers.innerHTML = (num/1000000000000000000000000000000000000000000000000000000000).toFixed(1) + " Settidecilione di $"
    }
    if(num > 1000000000000000000000000000000000000000000000000000000000000){
        numbers.innerHTML = (num/1000000000000000000000000000000000000000000000000000000000000).toFixed(1) + " Ottidecilione di $"
    }
    if(num > 1000000000000000000000000000000000000000000000000000000000000000){
        numbers.innerHTML = (num/1000000000000000000000000000000000000000000000000000000000000000).toFixed(1) + " Nonidecilione di $"
    }
    if(num > 1000000000000000000000000000000000000000000000000000000000000000000){
        numbers.innerHTML = (num/1000000000000000000000000000000000000000000000000000000000000000000).toFixed(1) + " Ventilione di $"
    }
    if(num < 20){
        num += 0
    }


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
function up9(){
    if(num >= 200000000){
        var compra = document.getElementById("Cemento")
        compra.style.display = "none"
        num = num - 200000000
        npc = 200000;
    }
    else{
        alert("Sei troppo povero per comprare i biscotti al cemento")
    }
}
function up10(){
    if(num >= 1000000000){
        var compra = document.getElementById("Bronzo")
        compra.style.display = "none"
        num = num - 1000000000
        npc = 1000000;
    }
    else{
        alert("Sei troppo povero per comprare i biscotti al bronzo")
    }
}

function up11(){
    if(num >= 6000000000){
        var compra = document.getElementById("Argento")
        compra.style.display = "none"
        num = num - 6000000000
        npc = 5000000;
    }
    else{
        alert("Sei troppo povero per comprare i biscotti all'argento")
    }
}
function up12(){
    if(num >= 35000000000){
        var compra = document.getElementById("Oro")
        compra.style.display = "none"
        num = num - 35000000000
        npc = 100000000;
    }
    else{
        alert("Sei troppo povero per comprare i biscotti all'oro")
    }
}
function up13(){
    if(num >= 800000000000){
        var compra = document.getElementById("Diamante")
        compra.style.display = "none"
        num = num - 800000000000
        npc = 1000000000;
    }
    else{
        alert("Sei troppo povero per comprare i biscotti al diamante")
    }
}
function up14(){
    if(num >= 9000000000000){
        var compra = document.getElementById("Amuchina")
        compra.style.display = "none"
        num = num - 9000000000000
        npc = 5000000000;
    }
    else{
        alert("Sei troppo povero per comprare i biscotti all'amuchina")
    }
}
function up15(){
    if(num >= 50000000000000){
        var compra = document.getElementById("Olive")
        compra.style.display = "none"
        num = num - 50000000000000
        npc = 10000000000;
    }
    else{
        alert("Sei troppo povero per comprare i biscotti alle olive")
    }
}
function up16(){
    if(num >= 110000000000000){
        var compra = document.getElementById("Pizza")
        compra.style.display = "none"
        num = num - 110000000000000
        npc = 1000000000000; //Un Bilione
    }
    else{
        alert("Sei troppo povero per comprare i biscotti alla pizza")
    }
}