// ФУНКЦИЯ ДОБАВЛЕНИЯ КОММЕНТАРИЕВ В ОКНЕ ПРОСМОТРА ФОТОГРАФИЙ
// импорт
import { actualData } from "./4-F_ShowBigPicture.js"
// переменные
const socialComments=document.querySelector('.social__comments')
const commentsShown=document.querySelector('.comments-shown')
const buttonCommentsLoader=document.querySelector('.comments-loader')

let count=5 

function addComments() {
  count+=5 
   if (count<actualData.comments.length) { 
     const commentsMore=actualData.comments.slice(0,count).map((el) => { 
     
         return  `<li class="social__comment">
             <img class="social__picture" src="${el.avatar}" alt="Аватар на коментарі фотографії" width="35" height="35">
             <div>
               <p class="social__author">${el.name}</p>
               <p class="social__text">${el.massage}</p>
             </div>
           </li>`
     
       }).join('') 
     
     socialComments.innerHTML=commentsMore
     commentsShown.textContent=count 
   } else { 
     
     const commentsAll=actualData.comments.map((el) => { 
       return  `<li class="social__comment">
           <img class="social__picture" src="${el.avatar}" alt="Аватар на коментарі фотографії" width="35" height="35">
           <div>
             <p class="social__author">${el.name}</p>
             <p class="social__text">${el.massage}</p>
           </div>
         </li>`
   
     }).join('')
     socialComments.innerHTML=commentsAll 
     commentsShown.textContent=actualData.comments.length 
     buttonCommentsLoader.classList.add('hidden') 
   }
 }


function resetCount () { 
  count=5 
  commentsShown.textContent=count 
}
 
 export {addComments, resetCount}