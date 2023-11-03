// ФУНКЦИЯ ДЛЯ ОТОБРАЖЕНИЯ ОКНА ПРОСМОТРА ИЗОБРАЖЕНИЙ ПОЛЬЗОВАТЕЛЯ
// импорт
import { objPhotos } from "./1-CreateServerData.js"
// переменные
const bigPicture=document.querySelector('.big-picture') 
const bigPictureImg=document.querySelector('.big-picture__img') 
const likesCount=document.querySelector('.likes-count') 
const commentsCount=document.querySelector('.comments-count') 
const socialComments=document.querySelector('.social__comments') 
const socialCaption=document.querySelector('.social__caption') 
const body=document.querySelector('body')
let actualData 



function showBigPicture (event) {
   if (event.target.closest('.picture')) { 
     bigPicture.classList.remove('hidden') 
    
     const id=+event.target.dataset.id
     
     actualData=objPhotos.find((el)=>el.id===id)
     bigPictureImg.innerHTML=`<img src="${actualData.url}" alt="${actualData.description}" width="600" height="600">`
     
     likesCount.textContent=actualData.likes
     
     commentsCount.textContent=actualData.comments.length 
    
     socialCaption.textContent=actualData.description 
 
     // комментарии под фото в размере 5шт с аватаром, автором коммента и с комментом
     const commentsPhoto=actualData.comments.slice(0,5).map((el)=> {  
       return  `<li class="social__comment"> 
         <img class="social__picture" src="${el.avatar}" alt="Аватар на коментарі фотографії" width="35" height="35">
         <div>
           <p class="social__author">${el.name}</p>
           <p class="social__text">${el.massage}</p>
         </div>
       </li>`
     }).join('') 
     socialComments.innerHTML=commentsPhoto 
     
     body.classList.add('modal-open')
   }
 }
 
 export {showBigPicture, actualData}