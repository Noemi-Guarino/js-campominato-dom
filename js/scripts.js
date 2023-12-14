// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// seleziono il contenitore
let containercell = document.querySelector(".containercell"); 

let score = 0;

// agg la funzione al bottone
    let btnGenerate = document.getElementById("generate");
    btnGenerate.addEventListener ("click", 
        function (){

            let bombsarray = [];
                for (let x = 0; x < 16; x++){
                    let bombs = rndnumbers(1,100);
                    // console.log(bombs,"numeri bombe");
                    while(bombsarray.includes(bombs)) {
                        bombs = rndnumbers(1,100);
                    }
                    bombsarray.push(bombs);
                }
                console.log(bombsarray);

            // creo un ciclo for per generare i numeri da 1/100
            for (let i = 1; i <= 100; i++){
                console.log(i);
                // creo un div nel conteiner e gli agg una classe
                let cell = document.createElement('div');
                cell.classList.add('cell');
                containercell.append(cell);
                cell.innerHTML = i;

// CONFRONTO SE UNO DEI NUMERI DELLE CELLE è CONTENUTO NEI NUMERI GENERICI DELL ARRAY
                if(bombsarray.includes(i)) {
                    cell.classList.add('is-bomb'); //AGG UNA CLASSE PER RICHIAMARLO
                }

// creo un avvenimento cosi che cliccando sulla cella la colora di blu (aggiungendo la classe che andrò a stilizzare nel css nel caso in cui ci sia bisogno)

                cell.addEventListener("click", function (){
                    //CONDIZIONE IN CUI DICO SE CLICCO LA CELLA CHE HA QUESTA CLASSE MI DICE CHE HO PERSO                                     
                    if(this.classList.contains('is-bomb')) { //CLASSE
                        this.classList.add('red_bomb');
                        alert("Hai perso!")
                    } else {
                        this.classList.add('winner');
                        score++
                        console.log("il tuo punteggio è" + score);
                        if (score == 100 - 16){
                            alert("Hai vinto!");
                            alert("il tuo punteggio è" + score);
                        }
                    }
                });
            } 
        }
    );
                   
    // console.log("il tuo punteggio è" + score);

                    
    // CREO la funzione di numeri random

    function rndnumbers(min, max) {
        const numbers = Math.floor(Math.random() * (max - min + 1)) + min;
     
        return numbers;
    }

