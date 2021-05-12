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


function game(){ 
    num += npc;
    var numbers = document.getElementById("soldi");
    numbers.innerHTML = num +"$"

    if(num >= 1000){
        numbers.innerHTML = (num/1000).toFixed(1) + " Mila $"
    }
    if(num >= 1000000){
        numbers.innerHTML = (num/1000000).toFixed(1) + " Milioni di $"
    }
    if(num >= 1000000000){
        numbers.innerHTML = (num/1000000000).toFixed(1) + " Miliardo di  $"
    }
    if(num >= 1000000000000){
        numbers.innerHTML = (num/1000000000000).toFixed(1) + " Bilioni di $"
    }
    if(num >= 1000000000000000){
        numbers.innerHTML = (num/1000000000000000).toFixed(1) + " Trilioni di $"
    }
    if(num >= 1000000000000000000){
        numbers.innerHTML = (num/1000000000000000000).toFixed(1) + " Quadrilioni di $"
    }
    if(num >= 1000000000000000000000){
        numbers.innerHTML = (num/1000000000000000000000).toFixed(1) + " Quintilioni di $"
    }
    if(num >= 1000000000000000000000000){
        numbers.innerHTML = (num/1000000000000000000000000).toFixed(1) + " Sestilioni di $"
    }
    if(num >= 1000000000000000000000000000){
        numbers.innerHTML = (num/1000000000000000000000000000).toFixed(1) + " Settilioni di $"
    }
    if(num >= 1000000000000000000000000000000){
        numbers.innerHTML = (num/1000000000000000000000000000000).toFixed(1) + " Ottilioni di $"
    }
    if(num >= 1000000000000000000000000000000000){
        numbers.innerHTML = (num/1000000000000000000000000000000000).toFixed(1) + " Nonilioni di $"
    }
    if(num >= 1000000000000000000000000000000000000){
        numbers.innerHTML = (num/1000000000000000000000000000000000000).toFixed(1) + " Decilioni di $"
    }
    if(num >= 1000000000000000000000000000000000000000){
        numbers.innerHTML = (num/1000000000000000000000000000000000000000).toFixed(1) + " Undecilioni di $"
    }
    if(num >= 1000000000000000000000000000000000000000000){
        numbers.innerHTML = (num/1000000000000000000000000000000000000000000).toFixed(1) + " Dodecilioni di $"
    }
    if(num >= 1000000000000000000000000000000000000000000000){
        numbers.innerHTML = (num/1000000000000000000000000000000000000000000000).toFixed(1) + " Tridecilioni di $"
    }
    if(num >= 1000000000000000000000000000000000000000000000000){
        numbers.innerHTML = (num/1000000000000000000000000000000000000000000000000).toFixed(1) + " Quadrecilioni di $"
    }
    if(num >= 1000000000000000000000000000000000000000000000000000){
        numbers.innerHTML = (num/1000000000000000000000000000000000000000000000000000).toFixed(1) + " Quindecilioni di $"
    }
    if(num >= 1000000000000000000000000000000000000000000000000000000){
        numbers.innerHTML = (num/1000000000000000000000000000000000000000000000000000000).toFixed(1) + " Sestidecilioni di $"
    }
    if(num >= 1000000000000000000000000000000000000000000000000000000000){
        numbers.innerHTML = (num/1000000000000000000000000000000000000000000000000000000000).toFixed(1) + " Settidecilioni di $"
    }
    if(num >= 1000000000000000000000000000000000000000000000000000000000000){
        numbers.innerHTML = (num/1000000000000000000000000000000000000000000000000000000000000).toFixed(1) + " Ottidecilioni di $"
    }
    if(num >= 1000000000000000000000000000000000000000000000000000000000000000){
        numbers.innerHTML = (num/1000000000000000000000000000000000000000000000000000000000000000).toFixed(1) + " Nonidecilioni di $"
    }
    if(num >= 1000000000000000000000000000000000000000000000000000000000000000000){
        numbers.innerHTML = (num/1000000000000000000000000000000000000000000000000000000000000000000).toFixed(1) + " Ventilioni di $"
    }
    if(num >= 1000000000000000000000000000000000000000000000000000000000000000000000){
        numbers.innerHTML = (num/1000000000000000000000000000000000000000000000000000000000000000000000).toFixed(1) + " Unventilioni di $"
    }
    if(num >= 1000000000000000000000000000000000000000000000000000000000000000000000000){
        numbers.innerHTML = (num/1000000000000000000000000000000000000000000000000000000000000000000000000).toFixed(1) + " Doventilioni di $"
    }
    if(num >= 1000000000000000000000000000000000000000000000000000000000000000000000000000){
        numbers.innerHTML = (num/1000000000000000000000000000000000000000000000000000000000000000000000000000).toFixed(1) + " Triventilioni di $"
    }
    if(num >= 1000000000000000000000000000000000000000000000000000000000000000000000000000000){
        numbers.innerHTML = (num/1000000000000000000000000000000000000000000000000000000000000000000000000000000).toFixed(1) + " Quadriventilioni di $"
    }
    if(num >= 1000000000000000000000000000000000000000000000000000000000000000000000000000000000){
        numbers.innerHTML = (num/1000000000000000000000000000000000000000000000000000000000000000000000000000000000).toFixed(1) + " Quintiventilioni di $"
    }
    if(num >= 1000000000000000000000000000000000000000000000000000000000000000000000000000000000000){
        numbers.innerHTML = (num/1000000000000000000000000000000000000000000000000000000000000000000000000000000000000).toFixed(1) + " Sestiventilioni di $"
    }
    if(num >= 1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000){
        numbers.innerHTML = (num/1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000).toFixed(1) + " Settiventilioni di $"
    }
    if(num >= 1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000){
        numbers.innerHTML = (num/1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000).toFixed(1) + " Ottiventilioni di $"
    }
    if(num >= 1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000){
        numbers.innerHTML = (num/1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000).toFixed(1) + " Noniventilioni di $"
    }
    if(num >= 1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000){
        numbers.innerHTML = (num/1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000).toFixed(1) + " Trentilioni di $"
    }
    if(num < 20){
        num += 0
    }
    localStorage.setItem("num",num)
}

var soldi2 = document.getElementById("soldi-2");
var numeretto = localStorage.getItem("num")

function money(){
    soldi2.innerHTML = numeretto + "$"
}

function Mario(){
    var autoclick = document.getElementById("AutoClicker")
    if(num >= 35){
        setInterval(game , 10000)
        num = num - 35
    }
    else{
        alert("Sei troppo povero per assumere il cuoco Mario")
    }
}
/**    if(num >= 500){
        setInterval(game , 7500)
        num = num - 500
        autoclick.innerHTML = "AutoClicker <br> 1$/7.5s <br> lvl:2"
    }
    if(num >= 10000){
        setInterval(game , 5000)
        num = num - 1000
        autoclick.innerHTML = "AutoClicker <br> 1$/5s <br> lvl:3"
    }
    if(num >= 50000){
        setInterval(game , 2500)
        num = num - 50000
        autoclick.innerHTML = "AutoClicker <br> 1$/2.5s <br> lvl:4"
    }
    if(num >= 500000){
        setInterval(game , 500)
        num = num - 500000
        autoclick.innerHTML = "AutoClicker <br> 1$/0.5s <br> lvl:5"
    }
    if(num >= 5000000){
        setInterval(game , 250)
        num = num - 5000000
        autoclick.innerHTML = "AutoClicker <br> 1$/0.25s <br> lvl:6"
    }
    if(num >= 100000000){
        setInterval(game , 100)
        num = num - 100000000
        autoclick.innerHTML = "AutoClicker <br> 1$/0.1s <br> lvl:7"
    }
    if(num >= 5000000000){
        setInterval(game , 50)
        num = num - 5000000000
        autoclick.innerHTML = "AutoClicker <br> 1$/0.05s <br> lvl:8"
    }
    if(num >= 100000000000){
        setInterval(game , 25)
        num = num - 100000000000
        autoclick.innerHTML = "AutoClicker <br> 1$/0.025s <br> lvl:9"
    }
    if(num >= 100000000000000){
        setInterval(game , 10)
        num = num - 100000000000000
        autoclick.innerHTML = "AutoClicker <br> 1$/0.01s <br> lvl:9"
    }
    if(num >= 1000000000000000000000){
        setInterval(game , 0.1)
        num = num - 1000000000000000000000
        autoclick.innerHTML = "AutoClicker <br> 1$/0,1ms <br> lvl:11"
    }
    if(num >= 1000000000000000000000000){
        setInterval(game , 0.01)
        num = num - 1000000000000000000000000
        autoclick.innerHTML = "AutoClicker <br> 1$/0,01ms <br> lvl:11"
    }
    if(num >= 1000000000000000000000000000){
        setInterval(game , 0.001)
        num = num - 1000000000000000000000000000
        autoclick.innerHTML = "AutoClicker <br> 1$/0,001ms <br> lvl:12"
    }
    if(num >= 1000000000000000000000000000000){
        setInterval(game , 0.0001)
        num = num - 1000000000000000000000000000000
        autoclick.innerHTML = "AutoClicker <br> 1$/0,0001ms <br> lvl:13"
    }
    if(num >= 1000000000000000000000000000000000){
        setInterval(game , 0.00001)
        num = num - 1000000000000000000000000000000000
        npc = npc * 2
        autoclick.innerHTML = "AutoClicker <br> 2$/0,00001ms <br> lvl:13"
    }
    if(num >= 1000000000000000000000000000000000000){
        setInterval(game , 0.00001)
        num = num - 1000000000000000000000000000000000000
        npc = npc * 3
        autoclick.innerHTML = "AutoClicker <br> 3$/1μs <br> lvl:14"
    }**/

function redirect(){
    location.href("Autoclicker")
}



alert("Se hai già giocato una volta a questo gioco e vuoi recuperare gli ultimi guadagni,clicca in alto a destra su Riprendi dalla scorsa volta;Il tasto non funzionerà se voi premete sull'immagine per guadagnare altri soldi perciò attenzione")


function upgrade(){
    if(num >= 20){
        var compra = document.getElementById("Marco")
        compra.style.display = "none"
        num = num - 20
        npc = 2;
        loadup1 = true
    }
    else{
        loadup1 = false
        alert("Sei troppo povero per comprare i biscotti buoni")
    }
}
function up2(){
    if(num >= 200){
        var compra = document.getElementById("Uranio")
        compra.style.display = "none"
        num = num - 200
        npc = 10;
        loadup2 = true
    }
    else{
        loadup2 = false
        alert("Sei troppo povero per comprare i biscotti all'uranio")
    }
}
function up3(){
    if(num >= 3000){
        var compra = document.getElementById("Fagioli")
        compra.style.display = "none"
        num = num - 3000
        npc = 50;
        loadup3 = true
    }
    else{
        loadup3 = false
        alert("Sei troppo povero per comprare i biscotti ai fagioli")
    }
}
function up4(){
    if(num >= 25000){
        var compra = document.getElementById("Formaggio")
        compra.style.display = "none"
        num = num - 25000
        npc = 100;
        loadup4 = true
    }
    else{
        loadup4 = false
        alert("Sei troppo povero per comprare i biscotti al formaggio")
    }
}
function up5(){
    if(num >= 75000){
        var compra = document.getElementById("Prosciutto")
        compra.style.display = "none"
        num = num - 75000
        npc = 500;
        loadup5 = true
    }
    else{loadup5 = false
        alert("Sei troppo povero per comprare i biscotti al prosciutto")
    }
}
function up6(){
    if(num >= 500000){
        var compra = document.getElementById("Peperoncino")
        compra.style.display = "none"
        num = num - 500000
        npc = 5000;
        loadup6 = true
    }
    else{
        loadup6 = false
        alert("Sei troppo povero per comprare i biscotti al peperoncino")
    }
}
function up7(){
    if(num >= 10000000){
        var compra = document.getElementById("Cloro")
        compra.style.display = "none"
        num = num - 10000000
        npc = 10000;
        loadup7 = true
    }
    else{
        loadup7 = false
        alert("Sei troppo povero per comprare i biscotti al cloro")
    }
}
function up8(){
    if(num >= 30000000){
        var compra = document.getElementById("Erba")
        compra.style.display = "none"
        num = num - 30000000
        npc = 50000;
        loadup8 = true
    }
    else{
        loadup8 = false
        alert("Sei troppo povero per comprare i biscotti all'erba")
    }
}
function up9(){
    if(num >= 200000000){
        var compra = document.getElementById("Cemento")
        compra.style.display = "none"
        num = num - 200000000
        npc = 200000;
        loadup9 = true
    }
    else{
        loadup9 = false
        alert("Sei troppo povero per comprare i biscotti al cemento")
    }
}
function up10(){
    if(num >= 1000000000){
        var compra = document.getElementById("Bronzo")
        compra.style.display = "none"
        num = num - 1000000000
        npc = 1000000;
        loadup10 = true
    }
    else{
        loadup10 = false
        alert("Sei troppo povero per comprare i biscotti al bronzo")
    }
}

function up11(){
    if(num >= 6000000000){
        var compra = document.getElementById("Argento")
        compra.style.display = "none"
        num = num - 6000000000
        npc = 5000000;
        loadup11 = true
    }
    else{
        loadup11 = false
        alert("Sei troppo povero per comprare i biscotti all'argento")
    }
}
function up12(){
    if(num >= 35000000000){
        var compra = document.getElementById("Oro")
        compra.style.display = "none"
        num = num - 35000000000
        npc = 100000000;
        loadup12 = true
    }
    else{
        loadup12 = false
        alert("Sei troppo povero per comprare i biscotti all'oro")
    }
}
function up13(){
    if(num >= 800000000000){
        var compra = document.getElementById("Diamante")
        compra.style.display = "none"
        num = num - 800000000000
        npc = 1000000000;
        loadup13 = true
    }
    else{
        loadup13 = false
        alert("Sei troppo povero per comprare i biscotti al diamante")
    }
}
function up14(){
    if(num >= 9000000000000){
        var compra = document.getElementById("Amuchina")
        compra.style.display = "none"
        num = num - 9000000000000
        npc = 5000000000
        loadup14 = true;
    }
    else{
        loadup14 = false;
        alert("Sei troppo povero per comprare i biscotti all'amuchina")
    }
}
function up15(){
    if(num >= 50000000000000){
        var compra = document.getElementById("Olive")
        compra.style.display = "none"
        num = num - 50000000000000
        npc = 10000000000;
        loadup15 = true
    }
    else{
        loadup15 = false
        alert("Sei troppo povero per comprare i biscotti alle olive")
    }
}
function up16(){
    if(num >= 110000000000000){
        var compra = document.getElementById("Pizza")
        compra.style.display = "none"
        num = num - 110000000000000
        npc = 1000000000000; //Un Bilione
        loadup16 = true
    }
    else{
        loadup16 = false
        alert("Sei troppo povero per comprare i biscotti alla pizza")
    }
}
function up17(){
    if(num >= 12000000000000000){
        var compra = document.getElementById("Ketchup")
        compra.style.display = "none"
        num = num - 12000000000000000
        npc = 20000000000000; //20 Bilioni
        loadup17 = true
    }
    else{
        loadup17 = false
        alert("Sei troppo povero per comprare i biscotti al ketchup")
    }
}
function up18(){
    if(num >= 260000000000000000){
        var compra = document.getElementById("Maionese")
        compra.style.display = "none"
        num = num - 260000000000000000
        npc = 100000000000000; //100 Bilioni
        loadup18 = true
    }
    else{
        loadup18 = false
        alert("Sei troppo povero per comprare i biscotti al maionese")
    }
}
function load(){
    num = localStorage.getItem("num");
    num = parseInt(num)
    document.getElementById("soldi").innerHTML = num + "$"
    alert("Il bottone riprendi dall'ultima volta non è molto preciso,infatti ti resteranno solo i soldi che avevi guadagnato senza upgrades")
}

function hack(){
    var cheat = document.getElementById("cheat")
    if(cheat.value == "/give money"){
        num = 1000000000 //Un Miliardo
        cheat.value = ""
    }
    if(cheat.value == "/ruin"){
        num = 999999999999999999999999999999999999999999999999999999999999 //Un Miliardo
        npc = 99999999999999999999999999999999999999999999999999999999999999
        cheat.value = ""
    }
    if(cheat.value == "/clear"){
        num = 0
        cheat.value == ""
    }
    if(cheat.value == "/marco"){
        num = "NON PUOI MARCO CATTIVO"
        cheat.value = ""
    }
    if(cheat.value == "/autoclicker"){
        setInterval(game , 0.00001)
        npc = npc * 999999999999999999999999999999999
        cheat.value = ""
    }
    if(cheat.value == undefined){
        cheat.value = ""
    }
}
