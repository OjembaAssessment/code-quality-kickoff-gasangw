/**
 * Calculates the sum of penalty points for a given password.
 * Double characters like `aa` count as 1 penalty point, triples and more are 2 points.
 * It returns the sum of penalty points for a password or 0.
 * @param {string} password
 * @returns {number}
 */
export default function penaltyPoints(password = "") {
  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  if (typeof password !== "string") password = String(password);

  // * * * * * * * * * * * * * * * * * * * * * * * * * * * *
  // * * * INSERT YOUR CODE HERE * * * * * * * * * * * * * *
  // * * * * * * * * * * * * * * * * * * * * * * * * * * * *
    //
    if(password === '') return 0;
    let regex = (/([a-z0-9])\1+/gi)
    let count = 0;
   let matchArr = (password.match(regex) || 0)
     if(matchArr === 0) return 0;
   for(let cha of matchArr){
      if(cha.length === 2) count+=1
      if(cha.length > 2) count+=2
   }
   return count
}
