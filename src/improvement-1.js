/**
 *  TRY TO IMPROVE THE FOLLOWING FUNCTION.
 *  YOU CAN REPLACE THE CODE INSIDE THE FUNCTIONS, THE FUNCTION NAME, ETC.
 *  PLEASE DO NOT REMOVE `export default function`
 */

// FUNCTION 1
const countRepetitionsOfLetterR = (word)=> {
  let count = 0;
  for(let letter of word){
    letter == "R" ? count++ : count
  }
  return count;
}

export default countRepetitionsOfLetterR;
