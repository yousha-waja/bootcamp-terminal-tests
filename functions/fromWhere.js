export default function fromWhere(reg){
    let answer=reg.slice(0,2);
     switch(answer){
       case "CY":
         return 'Bellville'
         break;
       case "CJ":
         return 'Paarl'
         break;
       case "CA":
         return 'Cape Town'
         break;
       default:
         return "Some other place!";
        
     }
   }
    