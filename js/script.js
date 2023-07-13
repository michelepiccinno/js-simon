//dichiaro la variabile e inserisco la data e l'orario di countdown
let countdown = new Date("07 13, 2023, 19:08:10").getTime();

//aggiorno ogni secondo
let clockTime = setInterval(function () {

    //prelevo data e ora attuali
    let actualDate = new Date().getTime();

    //inserisco l'orario di countdown nella variabile clockcalc
    let clockcalc = countdown - actualDate;
console.log(clockcalc);
    //calcolo -ore -minuti -secondi
    let d = Math.floor(clockcalc / (1000 * 60 * 60 * 24));
    let h = Math.floor((clockcalc % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let m = Math.floor((clockcalc % (1000 * 60 * 60)) / (1000 * 60));
    let s = Math.floor((clockcalc % (1000 * 60)) / 1000);

    //inietto il contenuto delle 3 variabili nel html
    document.getElementById("clock-timer").innerHTML = `TEMPO MANCANTE ALLA LEZIONE<br>GIORNI: ${d} <br>MINUTI: ${m} <br>ORE: ${h} <br>MINUTI: ${m} <br>SECONDI: ${s}`;

    //imposto la condizione
    if (clockcalc < 0) {
        clearInterval(clockTime);
        //inietto la stringa nel html
        document.getElementById("clock-timer").innerHTML = "SVEGLIAAAA!!!";
    }
}, 1000);

