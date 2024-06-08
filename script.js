function analyzeSentence(sentence) {
    // Initialisation des compteurs
    let length = 0;
    let wordCount = 0;
    let vowelCount = 0;
    
    // Caractères de voyelles
    const vowels = 'aeiouAEIOU';

    // Variable pour vérifier si nous sommes dans un mot
    let inWord = false;

    // Parcourir chaque caractère dans la phrase
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];
        // Incrémenter le compteur de longueur
        length++;

        // Vérifier les limites des mots (espaces ou ponctuation)
        if (char === ' ' || char === '.') {
            if (inWord) {
                // Nous terminons un mot
                wordCount++;
                inWord = false;
            }
        } else {
            inWord = true;
        }

        // Vérifier si le caractère est une voyelle
        if (vowels.includes(char)) {
            vowelCount++;
        }
    }

    // Enlever le point final du compte de longueur
    length--;

    return {
        length,
        wordCount,
        vowelCount
    };
}

// Exemple d'utilisation:
const sentence = "Ceci est une phrase exemple.";
const result = analyzeSentence(sentence);
console.log(`Longueur de la phrase: ${result.length}`);
console.log(`Nombre de mots dans la phrase: ${result.wordCount}`);
console.log(`Nombre de voyelles dans la phrase: ${result.vowelCount}`);
