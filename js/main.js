// CAMPO MINATO

/*
    
    L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
    Ogni cella ha un numero progressivo, da 1 a 100.
    Ci saranno quindi 10 caselle per ognuna delle 10 righe.
    Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro 
    ed emetto un messaggio in console con il numero della cella cliccata.

*/

// Elementi DOM
const playButtonDom = document.getElementById("play"); 
const squaresContainerDom = document.querySelector(".squares-container");

 //Livelli
/*   
    facile = 100
    medio = 81
    difficile = 49  
*/

// Creo la griglia di squares al clic sul bottone play

playButtonDom.addEventListener('click',
    
    function() {

        // Reset quadro
        squaresContainerDom.innerHTML = "";
        
        // Creo griglia
        let gridCells = 100;

        for (let i = 1; i <= gridCells; i++) {
            
            const currentSquare = createNewSquare(i);
            
            currentSquare.addEventListener('click',
                function() {
                    this.classList.toggle('clicked');
                    console.log(i);
                }
            )

            squaresContainerDom.append(currentSquare);
            
        } 
        
    })



// FUNZIONI

function createNewSquare(content) {
    const currentSquare = document.createElement("div");
    currentSquare.classList.add('square');
    currentSquare.innerHTML = content;
    return currentSquare;
}


