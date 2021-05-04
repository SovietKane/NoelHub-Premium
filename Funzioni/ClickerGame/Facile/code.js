var num = 0;
var nfc = 0;
function game() { 
    num += 1;
    var numbers = document.getElementById("soldi");
    var rank = document.getElementById("rank")
    var guadagno = document.getElementById("guadagno")
    var mancanti = document.getElementById("mancanti")
    var click = document.getElementById("click")
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
        rank.innerHTML = "Blyat qualunque"
        guadagno.innerHTML = "1 $/Click"
        mancanti.innerHTML = 20 - num + "$ mancati al prossimo"
        click.innerHTML = (20 - num)/1 + " click al prossimo"
    }
    if(num >= 20){
        num += 1;
        rank.innerHTML = "Il cuoco Mario"
        guadagno.innerHTML = "2 $/Click"
        mancanti.innerHTML = 50 - num + "$ mancati al prossimo"
        click.innerHTML = Math.ceil((50 - num)/2) + " click al prossimo"
    }
    if(num >= 50){
        num += 4;
        rank.innerHTML = "Carlo Cracco"
        guadagno.innerHTML = "5 $/Click"
        mancanti.innerHTML = 100 - num + "$ mancati al prossimo"
        click.innerHTML = Math.ceil((100 - num)/5) + " click al prossimo"
    }
    if(num >= 100){
        num += 9;
        rank.innerHTML = "Il signor Marco che fa la pasta"
        guadagno.innerHTML = "10 $/Click"
        mancanti.innerHTML = 200 - num + "$ mancati al prossimo"
        click.innerHTML = Math.ceil((200 - num)/10) + " click al prossimo"
    }
    if(num >= 200){
        num += 19;
        rank.innerHTML = "Bastianich"
        guadagno.innerHTML = "20 $/Click"
        mancanti.innerHTML = 1000 - num + "$ mancati al prossimo"
        click.innerHTML = Math.ceil((1000 - num)/20) + " click al prossimo"
    }
    if(num >= 1000){
        num += 29;
        rank.innerHTML = "Una cuoca negli anime"
        guadagno.innerHTML = "30 $/Click"
        mancanti.innerHTML = 4000 - num + "$ mancati al prossimo"
        click.innerHTML = Math.ceil((4000 - num)/30) + " click al prossimo"
    }
    if(num >= 4000){
        num += 49;
        rank.innerHTML = "Hentai lovers"
        guadagno.innerHTML = "50 $/Click"
        mancanti.innerHTML = 9000 - num + "$ mancati al prossimo"
        click.innerHTML = Math.ceil((9000 - num)/50) + " click al prossimo"
    }
    if(num >= 9000){
        num += 99;
        rank.innerHTML = "Apprendista life hacks"
        guadagno.innerHTML = "100 $/Click"
        mancanti.innerHTML = 29000 - num + "$ mancati al prossimo"
        click.innerHTML = Math.ceil((29000 - num)/100) + " click al prossimo"
    }
    if(num >= 29000){
        num += 499;
        rank.innerHTML = "Cuoco life hack"
        guadagno.innerHTML = "500 $/Click"
        mancanti.innerHTML = 179000 - num + "$ mancati al prossimo"
        click.innerHTML = Math.ceil((179000 - num)/500) + " click al prossimo"
    }
    if(num >= 179000){
        num += 999;
        rank.innerHTML = "Apprendista faiv minut"
        guadagno.innerHTML = "1000 $/Click"
        mancanti.innerHTML = 679000 - num + "$ mancati al prossimo"
        click.innerHTML = Math.ceil((679000 - num)/1000) + " click al prossimo"
    }
    if(num >= 679000){ //1000 click x il prossimo
        num += 9999;
        rank.innerHTML = "Cuoco faiv minut"
        guadagno.innerHTML = "10000 $/Click"
        mancanti.innerHTML = 10000000 - num +"$ mancanti al prossimo"
        click.innerHTML = Math.ceil((10000000 - num)/10000) + " click al prossimo"
    }
    if(num >= 10000000){ //2000 click x il prossimo
        num += 99999;
        rank.innerHTML = "Giovanna d'Arco"
        guadagno.innerHTML = "100 Mila $/Click"
        mancanti.innerHTML = 200000000 - num +"$ mancanti al prossimo"
        click.innerHTML = Math.ceil((200000000 - num)/100000) + " click al prossimo"
    }
    if(num >= 200000000){ //5000 click x il prossimo
        num += 999999;
        rank.innerHTML = "Giovannino d'Arco"
        guadagno.innerHTML = "1 Milione $/Click"
        mancanti.innerHTML = 5000000000 - num +"$ mancanti al prossimo"
        click.innerHTML = Math.ceil((5000000000 - num)/1000000) + " click al prossimo"
    }
    if(num >= 5000000000){
        num += 4999999;
        rank.innerHTML = "Jonhy lo scavatore"
        guadagno.innerHTML = "5 Milioni $/Click"
        mancanti.innerHTML = 1500000 - num +"$ mancanti al prossimo"
        click.innerHTML = Math.ceil((50 - num)/2) + " click al prossimo"
    }
    /*if(num >= 1500000){
        num += 99999;
        rank.innerHTML = "Giovanna d'Arco"
        guadagno.innerHTML = "100 Mila $/Click"
        mancanti.innerHTML = 1500000 - num +"$ mancanti al prossimo"
        click.innerHTML = Math.ceil((50 - num)/2) + " click al prossimo"
    }
    if(num >= 1500000){
        num += 99999;
        rank.innerHTML = "Giovanna d'Arco"
        guadagno.innerHTML = "100 Mila $/Click"
        mancanti.innerHTML = 1500000 - num +"$ mancanti al prossimo"
        click.innerHTML = Math.ceil((50 - num)/2) + " click al prossimo"
    }
    if(num >= 1500000){
        num += 99999;
        rank.innerHTML = "Giovanna d'Arco"
        guadagno.innerHTML = "100 Mila $/Click"
        mancanti.innerHTML = 1500000 - num +"$ mancanti al prossimo"
        click.innerHTML = Math.ceil((50 - num)/2) + " click al prossimo"
    }
    if(num >= 1500000){
        num += 99999;
        rank.innerHTML = "Giovanna d'Arco"
        guadagno.innerHTML = "100 Mila $/Click"
        mancanti.innerHTML = 1500000 - num +"$ mancanti al prossimo"
        click.innerHTML = Math.ceil((50 - num)/2) + " click al prossimo"
    }
    if(num >= 1500000){
        num += 99999;
        rank.innerHTML = "Giovanna d'Arco"
        guadagno.innerHTML = "100 Mila $/Click"
        mancanti.innerHTML = 1500000 - num +"$ mancanti al prossimo"
        click.innerHTML = Math.ceil((50 - num)/2) + " click al prossimo"
    }
    if(num >= 1500000){
        num += 99999;
        rank.innerHTML = "Giovanna d'Arco"
        guadagno.innerHTML = "100 Mila $/Click"
        mancanti.innerHTML = 1500000 - num +"$ mancanti al prossimo"
        click.innerHTML = Math.ceil((50 - num)/2) + " click al prossimo"
    }*/

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