function checkBrackets(expr){
    const holder = []
    const openBrackets = ['(','{','[']
    const closedBrackets = [')','}',']']

    for (let letter of expr) { 

        if(openBrackets.includes(letter)){ 
            holder.push(letter)
        }else if(closedBrackets.includes(letter)){ 
            const openPair = openBrackets[closedBrackets.indexOf(letter)] 
            if(holder[holder.length - 1] === openPair){ 
                holder.splice(-1,1) 
            }else{ 
                holder.push(letter)
                break 
            }
        }
        
    }
    
    return (holder.length === 0) 
}

let brackets = '{([)]}';

if (checkBrackets(brackets)) {
    console.log('yes')
} else {
    console.log('no');
}