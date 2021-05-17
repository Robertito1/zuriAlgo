const convertFahrToCelsius = (param) => {
    if(Array.isArray(param)) return `${JSON.stringify(param)} is not a valid number but a/an array.`; 
    if(isNaN(parseInt(param))) return `${JSON.stringify(param)} is not a valid number but a/an ${typeof param}.`;
    const result = parseFloat(((param - 32) * (5/9)).toFixed(4))
    console.log(result)
    return result
}

console.log(convertFahrToCelsius(0))
const checkYuGiOh = (n) => {
    let result = []
    if(isNaN(parseInt(n))){
        return `Invalid Parameter: ${JSON.stringify(n)}`
    }
   for (let i = 1; i <= n; i++){
      if(i % 2 === 0 && i % 3 === 0 && i % 5 === 0){
        result.push("yu-gi-oh")
        continue;
      }else if(i % 2 === 0 && i % 3 === 0){
        result.push("yu-gi")
        continue;
      }else if(i % 2 === 0 && i % 5 === 0){
        result.push("yu-oh")
        continue;
      }else if(i % 3 === 0 && i % 5 === 0){
        result.push("gi-oh")
        continue;
      }else if(i % 2 === 0){
        result.push("yu")
        continue;
      }else if(i % 3 === 0){
        result.push("gi")
        continue;
      }else if(i % 5 === 0){
        result.push("oh")
        continue;
      }else{
          result.push(i)
      }
   }
   console.log(result)
   return result
}

module.exports = {
    convertFahrToCelsius,
    checkYuGiOh
}