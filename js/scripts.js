// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

// seleziono il contenitore
let containercell = document.querySelector(".containercell"); 

// agg la funzione al bottone
    let btnGenerate = document.getElementById("generate");
    btnGenerate.addEventListener ("click", 
        function (){
            // creo un ciclo for per generare i numeri da 1/100
            for (let i = 0; i < 100 + 1; i++){
                console.log(i);
                // creo un div nel conteiner e gli agg una classe
                let div = document.createElement('div');
                div.classList.add('cell');
                containercell.append(div);
                div.innerHTML = i;

// creo un avvenimento cosi che cliccando sulla cella la colora di blu (aggiungendo la classe che andrò a stilizzare nel css nel caso in cui ci sia bisogno)

                div.addEventListener("click", 
                function (){

                    // let cellcolor = document.getElementsByClassName("cell");
                    if (div.classList.contains('cell')){
                            div.classList.add('change');
                            console.log("hai cliccato la cella:",div.innerHTML)
                    }else{
                            div.classList.remove('change');
                    }
                })
            }        
        
        }
    );