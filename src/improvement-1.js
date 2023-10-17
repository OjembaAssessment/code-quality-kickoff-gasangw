/**
 *  TRY TO IMPROVE THE FOLLOWING FUNCTION.
 *  YOU CAN REPLACE THE CODE INSIDE THE FUNCTIONS, THE FUNCTION NAME, ETC.
 *  PLEASE DO NOT REMOVE `export default function`
 */
const countRepetitionsOfLetterR = (word)=> {
  return word.split('').filter(eachWord => eachWord === "R").length
}
export default countRepetitionsOfLetterR;
