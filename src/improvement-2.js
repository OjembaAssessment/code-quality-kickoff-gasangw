/**
 *  TRY TO IMPROVE THE FOLLOWING FUNCTION.
 *  YOU CAN REPLACE THE CODE INSIDE THE FUNCTIONS, THE FUNCTION NAME, ETC.
 *  PLEASE DO NOT REMOVE `export default function`
 */

// FUNCTION 2
const onlyGetFoods = (items)=> {
  return items.filter(foods => foods.type === "Food")
}

export default onlyGetFoods
