/* 10. As a web developer, your task is to build a function that examines a sentence and counts how many times
each unique word appears in it. Using a Map, the function efficiently keeps track of the occurrence of each
word in the sentence.
*/

function wordCounter (sentence){
    const wordFrequencyMap = new Map();

    const words = sentence.split(/\s+/);  //split the sentence into words using withspace as separator.

    for(const word of words){
        const cleanWord = word.toLowerCase().replace(',', ''); //Remove non-alphanumeric characters and convert to lowercase

        if(cleanWord.length > 0){
            wordFrequencyMap.set(cleanWord, (wordFrequencyMap.get(cleanWord) || 0) + 1);
        }
    }

    return wordFrequencyMap;
}

 const sentence = "Please Please sumbit your assignmnet on time , your assignments are important";
 const result = wordCounter(sentence);

 console.log(result);