export default function countAllPaarl (string) {
    let items = string.split(",");
    let newArr= [];
    for (let i=0;i<items.length;i++){
     if(items[i].includes('CJ')){
      newArr.push(items[i].trim())
     }
    }
     return (newArr);
   }