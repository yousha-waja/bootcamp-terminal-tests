export default function totalPhoneBill(string){
    let data = string.split(',');
    let total=0;
     for(let i=0;i<data.length;i++){
      if(data[i].includes('call')){
         total += 2.75;
      }else if(data[i].includes('sms')){
         total += 0.65;
       }
     } return ("R"+total.toFixed(2));
   }