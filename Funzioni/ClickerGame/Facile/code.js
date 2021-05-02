var num = 0;
var nfc = 0;
function game() { 
    num += 1;
    nfc += 1;
    console.log(nfc)
    var numbers = document.getElementById("soldi");
    var rank = document.getElementById("rank")
    var guadagno = document.getElementById("guadagno")
    var mancanti = document.getElementById("mancanti")
    numbers.innerHTML = num + "$";
    if(num < 20){
        num += 0
        rank.innerHTML = "Blyat qualunque"
        guadagno.innerHTML = "1 $/Click"
        mancanti.innerHTML = 20 - num + "$ mancati al prossimo"
    }
    if(num >= 20){
        num += 1;
        rank.innerHTML = "Il cuoco Mario"
        guadagno.innerHTML = "2 $/Click"
        mancanti.innerHTML = 50 - num + "$ mancati al prossimo"
    }
    if(num >= 50){
        num += 4;
        rank.innerHTML = "Carlo Cracco"
        guadagno.innerHTML = "5 $/Click"
        mancanti.innerHTML = 100 - num + "$ mancati al prossimo"
    }
    if(num >= 100){
        num += 9;
        rank.innerHTML = "Il signor Marco che fa la pasta"
        guadagno.innerHTML = "10 $/Click"
        mancanti.innerHTML = 200 - num + "$ mancati al prossimo"
    }
    if(num >= 200){
        num += 19;
        rank.innerHTML = "Bastianich"
        guadagno.innerHTML = "20 $/Click"
        mancanti.innerHTML = 1000 - num + "$ mancati al prossimo"
    }
    if(num >= 1000){
        num += 29;
        rank.innerHTML = "Una cuoca negli anime"
        guadagno.innerHTML = "30 $/Click"
        mancanti.innerHTML = 4000 - num + "$ mancati al prossimo"
    }
    if(num >= 4000){
        num += 49;
        rank.innerHTML = "Hentai lovers"
        guadagno.innerHTML = "50 $/Click"
        mancanti.innerHTML = 9000 - num + "$ mancati al prossimo"
    }
    if(num >= 9000){
        num += 99;
        rank.innerHTML = "Apprendista life hacks"
        guadagno.innerHTML = "100 $/Click"
        mancanti.innerHTML = 29000 - num + "$ mancati al prossimo"
    }
    if(num >= 29000){
        num += 499;
        rank.innerHTML = "Cuoco life hack"
        guadagno.innerHTML = "500 $/Click"
        mancanti.innerHTML = 179000 - num + "$ mancati al prossimo"
    }
    if(num >= 179000){
        num += 999;
        rank.innerHTML = "Apprendista faiv minut"
        guadagno.innerHTML = "1000 $/Click"
        mancanti.innerHTML = 417900 - num + "$ mancati al prossimo"
    }
    if(num >= 57900){
        num += 9999;
        rank.innerHTML = "Cuoco faiv minut"
        guadagno.innerHTML = "10000 $/Click"
    }
    if(num >= 417900){
        num += 9999;
        rank.innerHTML = "Cuoco faiv minut"
        guadagno.innerHTML = "10000 $/Click"
    }
    if(num >= 417900){
        num += 9999;
        rank.innerHTML = "Cuoco faiv minut"
        guadagno.innerHTML = "10000 $/Click"
    }
    if(num >= 417900){
        num += 9999;
        rank.innerHTML = "Cuoco faiv minut"
        guadagno.innerHTML = "10000 $/Click"
    }
    if(num >= 417900){
        num += 9999;
        rank.innerHTML = "Cuoco faiv minut"
        guadagno.innerHTML = "10000 $/Click"
    }
    if(num >= 417900){
        num += 9999;
        rank.innerHTML = "Cuoco faiv minut"
        guadagno.innerHTML = "10000 $/Click"
    }
    if(num >= 417900){
        num += 9999;
        rank.innerHTML = "Cuoco faiv minut"
        guadagno.innerHTML = "10000 $/Click"
    }
}
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