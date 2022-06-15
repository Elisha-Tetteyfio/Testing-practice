const stringLength = string => {
  try{
    if(string.length <1 ) throw "Too small";
    if(string.length > 10) throw "Too big";
    return(string.length)
  }
  catch (err){
    return (err);
  }
} 

const reverseString = string => string.split("").reverse().join("");

const calculator = {
  add: (a, b) => a+b,
  subtract: (a, b) => a-b,
  multiply: (a, b) => a*b,
  divide: (a, b) => a/b
}

const capitalize = string => {
  let a = string.split("");
  a[0] = a[0].toUpperCase();
  string = a.join("");
  return(string)
}


module.exports = {stringLength, reverseString, calculator, capitalize};