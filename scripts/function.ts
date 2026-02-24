

export const TwoLetter = (word : string)=>{
    const wordUpdate = word.split("");
    const newWord = wordUpdate[0] + wordUpdate[1];
    return newWord;
}