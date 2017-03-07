function randomPosition(low, high)
{
    // Input:
    // Return:
    // Description:
    return Math.floor(Math.random()*(high-low+1)) + low;
}

function characterFromString(str)
{
    return str.charAt(randomPosition(0, str.length-1));
}

function generateWord(len, letters)
{
    var i, seq = "";
    for (i = 1; i <= len; i = i + 1) {
        seq += characterFromString(letters);
    }
    return seq;
}

function generateWords(words, len, letters) {
    // Input: number of words, length of returned word, input string
    /*
    Description:
        Creates a number of words with given length and input characters
        Output to generated words to HTML
        Output number of function counts to HTML
     */
    var multiDimensional = Array.multi(words, 2, 0);
    var sequence = '';
    for (i = 0; i < words; i++) {

        /*
         TODO:
         De woorden die opgeslagen worden zijn nu niet uniek, zorg ervoor dat je meerdere functies aanpast of nieuw maakt.
         */

        sequence += generateWord(len, letters);
        /*
        TODO:
        Er mag geen koppelstreep aan het eind van de uitvoer string aanwezig zijn.
         */
        sequence += '-';
        multiDimensional[i][0] = sequence;

    }
    document.getElementById("wordList").innerHTML = sequence;
    /*
    TODO: //FINSIHED
    Onderstaande waarde moet vervangen woorden door het aantal keren dat de functie is aangeroepen
    om een uniek aantal woorden te genereren.
    */


    document.getElementById("totalFunctionCalls").innerHTML = words + "<br>" + "aangeroepen " + counter++;

    /*
    TODO: //FINISHED
    Probeer of je de boodschap ook op een andere plek in de HTML file en met een andere tag kunt weergeven.
     */
    document.getElementById("message").innerHTML = "TO DO 1";

    //appendMessage("h1", "Bye Bye");
}

var counter ="1";
