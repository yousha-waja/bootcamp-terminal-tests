export default function isWeekday(date){
    if(date.startsWith("Mon")||date.startsWith("Tues")||date.startsWith("Wed")||date.startsWith("Thurs")||date.startsWith("Fri")){
     return true;
    } else {
      return false;
    }
      
   }