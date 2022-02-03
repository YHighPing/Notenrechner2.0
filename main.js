let note1; //parseInt wird von dem int vom integer wert kommen welcher nur ganze Zahlen umwandelt bzw nur ganze zahlen weitergibt,
let note2;
let note3;
let note4; //float kann auch kommazahlen
let note5;

let summe = 0;
let anzahlNoten = 0 ; //schadet nie wenn man einer variable einen wert übergibt weil der meistens überschrieben wird, wenn man nichts zuweißt rechnet das programm bei einem lehren textfeld mit NaN und der computer kann hier die anzahlNoten nicht erhöhen oder summe nicht erhöhen

let ergebnis;//das ist neu hier hfasfafj

    function tfAuslesen() {
        note1 = parseInt(document.getElementById("tf_note1").value); //parseInt wandelt das ausgegebene Textfeld in eine Zahl um . die variable note bekommt nun einen wert
        note2 = parseInt(document.getElementById("tf_note2").value);
        note3 = parseInt(document.getElementById("tf_note3").value);
        note4 = parseInt(document.getElementById("tf_note4").value);
        note5 = parseInt(document.getElementById("tf_note5").value);
        console.log(note1 + ";" + note2 + ";" + note3 + ";" + note4 + ";" + note5); //zahlen werden getrennt ausgegeben und in der console angezeigt


        punktePruefen(note1); // die Funktion soll ausgeführt werden und für den Parameter Punkte wird später mit dem Wert welchen Note1 im Program annimt weitergerechnet
        punktePruefen(note2);
        punktePruefen(note3);
        punktePruefen(note4);
        punktePruefen(note5);

        ergebnisBerechnung_Ausgabe();
    }

function punktePruefen(punkte){ //Parameter sind Variablen die man in der Funktion verwenden kann so wie hier Puntke , überalls wo ich punkte eingebe wird der wert übergeben da punkte = note 1,2,3,4 oder 5
        if(punkte>15){
            console.log(punkte + "ist zu groß");
            document.getElementById("fehlermeldung").innerHTML = punkte + " ist zu groß. Die Berechnung könnte falsch sein. Überprüfe deine eingegebenen Werte";
        }
        if (isNaN(punkte)){ // mit isNaN wird geprüft ob der Wert für die Note wirklich eine Zahl ist
            console.log(punkte + " ist keine Zahl") //wird ausgegeben wenn isNaN feststellt das punkte kein Zahlenwert ist und mit ihm nicht gerechnet werden kann
            document.getElementById("fehlermeldung").innerHTML = punkte + " ist keine Zahl. Die Berechnung könnte falsch sein. Überprüfe deine eingegebenen Werte."
        }
        else{
            summe = summe  + punkte; //ein neuer wert wird der variable summe zugeschrieben, deklariert wurde summe vorher als 0
            anzahlNoten = anzahlNoten + 1; // bei dem Notendurchschnitt muss man durch die anzahl der noten teilen, daher wird hier für jede punktePruefen funktion die ausgeführt wird die anzahl angehoben

        }

}
function ergebnisBerechnung_Ausgabe(){
ergebnis = summe / anzahlNoten; //hier wird nun das ergebnis berechnet indem die werte die summe und zahl angenommen hat verrechnet werden

document.getElementById("ausgabe").innerHTML = ergebnis;// wir greifen auf das textfeld "ausgabe" zu, mit innerHTML wird das was in dem Textfeld stehen würde mit = ergebnis überschrieben werden

if (ergebnis<5) {
    document.getElementById("ausgabe").style.color ="crimson";//es wird auf den style des elements des textfelds zugegriffen und der style soll geändert werden bzw die farbe
    console.log(summe); // nur zur überprüfung falls des textfeld nicht arbeiten sollte zum sichergehen das schonmal die richtigen zahlen ausgegeben werden
    console.log(anzahlNoten);
    console.log(ergebnis);
}
if( ergebnis<12){
    document.getElementById("ausgabe").style.color = "#008000";
    console.log(summe);
    console.log(anzahlNoten);
    console.log(ergebnis);
}

if(ergebnis<12){ //&& beide verknüpfungen bilden ein UND,|| oder
    document.getElementById("ausgabe").style.color = "orange";
    console.log(summe);
    console.log(anzahlNoten);
    console.log(ergebnis);
}
/* if(tfAuslesen()){
 button.style.backgroundColor = "crimson";
 button.getElementById("buttonAusrechnen").style.backgroundColor ="crimson";

 }
*/
}



