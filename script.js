
let typedText = ''
const letters = document.getElementById("lettersDiv");

const button = document.getElementById("countButton");
button.addEventListener("click", function () {
    letters.innerHTML = ''
    // teu código vai aqui ... 
    typedText = document.getElementById("textInput").value;
    

    typedText = typedText.toLowerCase();
    // Isto muda todas as letras para minúsculas

    typedText = typedText.replace(/[^a-z'\s]+/g, "");
    

    // Isso se livra de todos os caracteres exceto letras comuns, espaços e apóstrofos. 
    // Iremos aprender mais sobre como usar a função replace numa lição mais à frente.
    const wordsCounts = {};
    typedTextSplit = typedText.split(' ')
    
    
    //contador de palavras
    for (let i = 0; i < typedText.length; i++) {
        currentWords = typedTextSplit[i]
        // faça algo com cada palavra
        // Ao encontrar uma palavra pela primeira vez, você irá definir a contagem dela como 1. Caso contrário, adicionará um à contagem.
        if (wordsCounts[currentWords] !== undefined) {
            wordsCounts[currentWords]++;
        } else {
            wordsCounts[currentWords] = 1;
        }
    }
    console.log(wordsCounts)
    
    
    for (let word in wordsCounts) {
        const span = document.createElement("span");
        if (word === 'undefined'){
        }
        if (word !== 'undefined'){
            const textContentW = `"${word}": ${wordsCounts[word]}, `;
            //console.log(wordsCounts[word]);

            span.innerText = textContentW;
            const words = document.getElementById("lettersDiv");
            words.appendChild(span);
        }
        
    }
    
    

    

    
    const letterCounts = {};
    
    // contador de letras
    for (let i = 0; i < typedText.length; i++) {
        currentLetter = typedText[i];
        // faça algo com cada letra 
        
        
        // Ao encontrar uma letra pela primeira vez, você irá definir a contagem dela como 1. Caso contrário, adicionará um à contagem.
        if (letterCounts[currentLetter] === undefined) {
            letterCounts[currentLetter] = 1;
        } else {
            letterCounts[currentLetter]++;
        }
    }
    

    for (let letter in letterCounts) {
        const span = document.createElement("span");
        const textContent = `"${letter}": ${letterCounts[letter]}, `;
        span.innerText = textContent;
        
        letters.appendChild(span);
    }
    // separar a string de entrada em palavras separando-a nos espaços
    words = typedText.split(/\s/);


});




