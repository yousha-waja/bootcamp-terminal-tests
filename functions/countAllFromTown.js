export default function allFromTown (string,town){
    let items = string.split(',');
    let answer = [];
    for (let i=0;i<items.length;i++){
     if(items[i].includes(town)){
      answer.push(items[i].trim());
     }
    }
    return (answer);
    
    
   }