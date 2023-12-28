const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const  six = document.getElementById("six");
const seven = document.getElementById("seven");
const slept = true;
const Day = true;
const Noon = true;
const Evening = true;
const Night = true;
const Midnight = true;
const Morn = true;
// const Rose = (Arr,Drr) =>{
//   return new Promise((resolve, reject)=>{
//     if(slept){resolve(setTimeout(()=>{one.innerHTML = Arr},Drr))
//  } 
//  else{reject(one.innerHTML = "Sleep at 10'O clock")}
// })
// }

// const Roses = (Arrs,Drrs) =>{
//   return new Promise((resolve, reject)=>{
//     if(Day){resolve(setTimeout(()=>{two.innerHTML = Arrs},Drrs))
//  } 
//  else{reject(two.innerHTML = "Sleep at 10'O clock")}
// })
// }

// const Rosess = (Arrss,Drrss) =>{
//   return new Promise((resolve, reject)=>{
//     if(Noon){resolve(setTimeout(()=>{three.innerHTML = Arrss},Drrss))
//  } 
//  else{reject(two.innerHTML = "Sleep at 10'O clock")}
// })
// }

// const Rosesss = (Arrsss,Drrsss) =>{
//   return new Promise((resolve, reject)=>{
//     if(Evening){resolve(setTimeout(()=>{four.innerHTML = Arrsss},Drrsss))
//  } 
//  else{reject(four.innerHTML = "Sleep at 10'O clock")}
// })
// }

// const Rosessss = (Arrssss,Drrssss) =>{
//   return new Promise((resolve, reject)=>{
//     if(Night){resolve(setTimeout(()=>{five.innerHTML = Arrssss},Drrssss))
//  } 
//  else{reject(five.innerHTML = "Sleep at 10'O clock")}
// })
// }

// const Rosesssss = (Arrssss,Drrssss) =>{
//   return new Promise((resolve, reject)=>{
//     if(Midnight){resolve(setTimeout(()=>{six.innerHTML = Arrssss},Drrssss))
//  } 
//  else{reject(six.innerHTML = "Sleep at 10'O clock")}
// })
// }
// const Rosessssss = (Arrssss,Drrssss) =>{
//   return new Promise((resolve, reject)=>{
//     if(Morn){resolve(setTimeout(()=>{seven.innerHTML = Arrssss},Drrssss))
//  } 
//  else{reject(seven.innerHTML = "Sleep at 10'O clock")}
// })
// }
// try{
// Rose("Wake up at 5'O clock", 1000)

// }
// .then(()=>{return Roses("Meditate 15min in a day",2000)})
// .then(()=>{return Rosess("Exercise Atleast 45 min",3000)})
// .then(()=>{return Rosesss("Maintain a Healthy diet",4000)})
// .then(()=>{return Rosessss("Dont Think about Women" ,5000)})
// .then(()=>{return Rosesssss("Eager to learn s/t always intend to put a new skill",6000)})
// .then(()=>{return Rosessssss("Sleep atleast 7 to 8 hrs in a day",7000)})

// .catch(()=>{console.log("DO NOT GET EASILY IN SOCIAL MEDIA")})
// .catch(()=>{console.log("IGNORE DWELLING IN PAST")})
// .catch(()=>{console.log("STOP BLAMING THE SITUATION CHANGE THE PLAN ACCORDING THE SITUATION")})

// .finally(()=>{console.log("Everything will be OK dear ");})



async function Routine(Fish){
  const Morn = true;
if(Morn){
  await new Promise(()=>{
 
    setTimeout(()=>{
    one.innerHTML = "Learn untill die"; Fish()},1000)});
}
else{
  setInterval(()=>{six.innerHTML = "Learn From the past mistake";},2000)
}
}
async function activity(){
  try{
   setTimeout(()=>{two.innerHTML = "Intend to Break bad habit as well as Configure good one"}, 8000);
   setTimeout(()=>{three.innerHTML = "Wake up early and meditate"}, 3000);
   setTimeout(()=>{four.innerHTML = "Exercise atleast 30min weightlift 30min"}, 4000);
   setTimeout(()=>{five.innerHTML = "Learn something new skill as well as enhance the skill which was learnt"}, 5000)
   setTimeout(()=>{six.innerHTML = "Always Have a Positive attitude"}, 6000)
   setTimeout(()=>{seven.innerHTML= "Spent time with the person who likes me as well as whom i like"}, 7000)
  }
  catch(past){
console.error("Hello",past);
  }
}
Routine(activity)

























