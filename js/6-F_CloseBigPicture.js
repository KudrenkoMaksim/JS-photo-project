// ФУНКЦИЯ ДЛЯ ЗАКРЫТИЯ ОКНА ОТОБРАЖЕНИЯ ФОТОГРАФИИ ПОЛЬЗОВАТЕЛЯ
// импорт
import {resetCount} from './5-F_AddComments.js' 
// переменные
const bigPicture=document.querySelector('.big-picture') 
const body=document.querySelector('body') 
const buttonCommentsLoader=document.querySelector('.comments-loader') 


//  функции для закрытия окна отображения фотографии пользователя
// при помощи кнопки
function closeBigPictureButton () {
  body.classList.remove('modal-open') 
  bigPicture.classList.add('hidden') 
  buttonCommentsLoader.classList.remove('hidden') 
  resetCount() 
}
// при помощи клавиши
function closeBigPictureKey (event) {
  if (event.code=='Escape'){  
    body.classList.remove('modal-open') 
    bigPicture.classList.add('hidden') 
    buttonCommentsLoader.classList.remove('hidden')
    resetCount()
  }
}


export {closeBigPictureButton, closeBigPictureKey}