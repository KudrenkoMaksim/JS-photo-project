//СЛУЧАЙНОЕ ЧИСЛО
function createRandomNumber (min, max) {
   return Math.floor(Math.random()*(max-min)+min)
}


// СЛУЧАЙНОЕ НЕПОВТОРЯЮЩЕЕСЯ ЧИСЛО

let arr=[]
function createIdComment (min, max) { 
   let num=Math.floor(Math.random()*(max-min)+min) 
   if (!arr.includes(num)) {
      arr.push(num) 
      arr.reverse() 
      
   } else {createIdComment(min, max)} 
   
   if (arr.length>=(max-min)) { 
      arr=[] 
      createIdComment(min, max) 
   }
   return arr[0] 
}


export {createRandomNumber, createIdComment}