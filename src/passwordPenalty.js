/**
 * Calculates the sum of penalty points for a given password.
 * Double characters like `aa` count as 1 penalty point, triples and more are 2 points.
 * It returns the sum of penalty points for a password or 0.
 * @param {string} password
 * @returns {number}
 */
export default function penaltyPoints(password = "") {
  // The following line ensures, that password is always a string, like the number 128 -> string "128"
  // * * * * * * * * * * * * * * * * * * * * * * * * * * * *

  if(password === null) return 0;
  if (typeof password !== "string") password = String(password);

    // Here this line of code below groups similar characters together
    const regex = (/([a-z0-9])\1+/gi)
   let matchArr = (password.match(regex) || 0)
     if(matchArr === 0) return 0;
    return matchArr.reduce((count, currentValue) => {
     return currentValue.length === 2 ? count += 1 : currentValue.length >= 3 ? count+= 2 : count
    }, 0)
}
