function consecutiveValue(value) {
  let max = 0; 
  let current = 0; 

  for (let i = 0; i < value.length; i++) {
    if (value[i] == 1) {
      current++; 
    } else {
      if (current > max) { 
        max = current;                 
      }
      current = 0;
    }
  }
  return Math.max(max, current); 
}

let value = [1,0,0,1,0,1,1];
console.log(consecutiveValue(value));
