function bg(){
    var BgCas = ["Immagini/tenor.gif","Immagini/tenor2.gif","Immagini/tenor3.gif","Immagini/tenor4.gif"]
    var Cas = Math.floor(Math.random() * BgCas.length)
    console.log(BgCas[Cas])
    //"url('BgCas[Cas]')"
    document.getElementById("bg").style.backgroundImage = "url('" + BgCas[Cas] + "'" + ')';
}
