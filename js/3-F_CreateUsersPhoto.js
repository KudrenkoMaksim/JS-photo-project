// ФУНКЦИЯ ДЛЯ ОТОБРАЖЕНИЯ ФОТОГРАФИЙ ПОЛЬЗОВАТЕЛЯ (OBJPHOTOS)
// импорт
import { objPhotos } from "./1-CreateServerData.js" 
// переменные
const classPictures=document.querySelector('.pictures') 
const template=document.querySelector('#picture') 


function createUsersPhoto () { 
   objPhotos.forEach(photo => {
    let cloneTemplate=template.content.cloneNode(true) 
    cloneTemplate.querySelector('.picture__img').src=photo.url 
    cloneTemplate.querySelector('.picture__img').setAttribute('data-id', photo.id) 
    cloneTemplate.querySelector('.picture__comments').textContent=photo.comments.length
    cloneTemplate.querySelector('.picture__comments').setAttribute('data-id', photo.comments.id)
    cloneTemplate.querySelector('.picture__likes').textContent=photo.likes 
    classPictures.appendChild(cloneTemplate)
  })
}
export {createUsersPhoto}