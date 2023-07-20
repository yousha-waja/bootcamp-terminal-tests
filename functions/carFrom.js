//q1
export default{
mostPopularCar:(cars)=>{
 let mpcObj={};
  for (let i=0; i<cars.length;i++){
   if(mpcObj[cars[i].make]===undefined){
     mpcObj[cars[i].make] = 0;
   }else{
     mpcObj[cars[i].make]++;
   }
  }
  let popularCar='';
  let carCount=0;
  for(let i in mpcObj){
   if(mpcObj[i]>carCount){
      carCount = mpcObj[i];
      popularCar = i;
   }
  }return(popularCar)
},

//q2
nissansFromCK:(cars)=>{
  return cars.filter((i)=>i.make==="Nissan").filter(i=>i.reg_number.startsWith("CK")).length;
  /*nissanArr =[];
  for(let i=0;i<cars.length;i++){
    if(cars[i].make==="Nissan"){
       nissanArr.push(cars[i].reg_number);
    }
  }
  let nissanCars = 0;
  for(let i =0; i<nissanArr.length;i++){
    if(nissanArr[i].startsWith("CK")){
       nissanCars ++;
    }
  }return(nissanCars); */
},

//q3
mostBlueCars:(cars) =>{
let towns ={};
for(let i=0;i<cars.length;i++){
    if(cars[i].color==="blue"){
       if(towns[cars[i].reg_number.slice(0,2)]===undefined){
          towns[cars[i].reg_number.slice(0,2)]=0;
       }  towns[cars[i].reg_number.slice(0,2)]++;
    }
} 
  let total=0;
  let name='';
  for(let i in towns){
     if(towns[i]>total){
       total= towns[i];
       name=i;
     }
  }
  return name;
},

//q4
fewestOrangeCars:(cars)=>{
let towns ={};
  for(let i=0;i<cars.length;i++){
     if(cars[i].color==="orange"){
        if(towns[cars[i].reg_number.slice(0,2)]===undefined){
           towns[cars[i].reg_number.slice(0,2)]=0;
        }  towns[cars[i].reg_number.slice(0,2)]++;
     }  
  }

  let total=Infinity;
  let answer='';
  for(let i in towns){
     if(towns[i]<total){
       total = towns[i];
       answer=i;
     }
  }return(answer);
},

//q5
mostPopularModel:(cars)=>{
 let models={};
  for(let i=0;i<cars.length;i++){
      if(models[cars[i].model]===undefined){
         models[cars[i].model]=0;
      } models[cars[i].model]++;
  }
  let total=0;
  let carName='';
  for(let i in models){
     if(models[i]>total){
       total=models[i];
       carName = i;
     }
  }
  return carName;
},

//q6
mostPopularCL:(cars)=>{
let popularCL={};
  for(let i=0;i<cars.length;i++){
     if(cars[i].reg_number.startsWith("CL")){
       if(popularCL[cars[i].model]===undefined){
         popularCL[cars[i].model]=0;
       } popularCL[cars[i].model]++;
     }
  }
  
  let answer='';
  let total=0;
  for(let i in popularCL){
     if(popularCL[i]>total){
       total=popularCL[i];
       answer=i;
     }
  }
  
  return answer;
},

//q7
leastPopularCF:(cars) =>{
let leastCF={};
  for(let i=0;i<cars.length;i++){
     if(cars[i].reg_number.startsWith("CF")){
       if(leastCF[cars[i].model]===undefined){
         leastCF[cars[i].model]=0;
       } leastCF[cars[i].model]++;
     }
  }
  let answer='';
  let total=Infinity;
  for(let i in leastCF){
     if(leastCF[i]<=total){
       total=leastCF[i];
       answer=i;
     }
  }
  
  return answer;
},

carsForTown:(cars, townName)=>{
  let townCars = [];
  let townCode='';
  
  if(townName==="Paarl"){
    townCode = "CJ";
  }
  else if(townName==="Bellville"){
    townCode = "CY";
  }
  else if(townName==="Stellenbosch"){
    townCode = "CL";
  }
  else if(townName==="Malmesbury"){
    townCode = "CK";
  }
  else if(townName==="Cape Town"){
    townCode = "CA";
  }
  else if(townName==="Kuilsriver"){
    townCode = "CF";
  }
  
  for(let i=0;i<cars.length;i++){
     if(cars[i].reg_number.slice(0,2)===townCode){
        townCars.push(cars[i])
     }
  }
  return(townCars); 
},

//q9
numberOfCars:(cars,color,townName)=>{
 let townCars = [];
  let townCode='';
  
  if(townName==="Paarl"){
    townCode = "CJ";
  }
  else if(townName==="Bellville"){
    townCode = "CY";
  }
  else if(townName==="Stellenbosch"){
    townCode = "CL";
  }
  else if(townName==="Malmesbury"){
    townCode = "CK";
  }
  else if(townName==="Cape Town"){
    townCode = "CA";
  }
  else if(townName==="Kuilsriver"){
    townCode = "CF";
  }
  
  for(let i=0;i<cars.length;i++){
     if(cars[i].reg_number.slice(0,2)===townCode){
        townCars.push(cars[i])
     }
  }
  
  let townCarColors=[];
  for(let i=0;i<townCars.length;i++){
     if(townCars[i].color==color){
       townCarColors.push(townCars[i]);
     }
  }
  return (townCarColors);
},

//q10
 numberOfCarsPerModel:(cars, color, model, townName)=>{
 let townCars = [];
  let townCode='';
  
  if(townName==="Paarl"){
    townCode = "CJ";
  }
  else if(townName==="Bellville"){
    townCode = "CY";
  }
  else if(townName==="Stellenbosch"){
    townCode = "CL";
  }
  else if(townName==="Malmesbury"){
    townCode = "CK";
  }
  else if(townName==="Cape Town"){
    townCode = "CA";
  }
  else if(townName==="Kuilsriver"){
    townCode = "CF";
  }
  
  for(let i=0;i<cars.length;i++){
     if(cars[i].reg_number.slice(0,2)===townCode){
        townCars.push(cars[i])
     }
  }
  let townCarColorModel=[];
  for(let i=0;i<townCars.length;i++){
     if(townCars[i].color==color&&townCars[i].model==model){
       townCarColorModel.push(townCars[i]);
     }
  }
  return(townCarColorModel);
},

//q11
mostPopularColor:(townName)=>{
 let townCode='';
  
  if(townName==="Paarl"){
    townCode = "CJ";
  }
  else if(townName==="Bellville"){
    townCode = "CY";
  }
  else if(townName==="Stellenbosch"){
    townCode = "CL";
  }
  else if(townName==="Malmesbury"){
    townCode = "CK";
  }
  else if(townName==="Cape Town"){
    townCode = "CA";
  }
  else if(townName==="Kuilsriver"){
    townCode = "CF";
  }
  
  let popularColor = {};
  for(let i=0;i<cars.length;i++){
     if(cars[i].reg_number.slice(0,2)===townCode){
        if(popularColor[cars[i].color]===undefined){
           popularColor[cars[i].color]=0;
        }  popularColor[cars[i].color]++;
     }
  }
  let answer='';
  let total=0;
  for(let i in popularColor){
      if(popularColor[i]>total){
         total= popularColor[i];
         answer=i;
      }
  }
  return answer;
}
}