// ФУНКЦИИ ОТОБРАЖЕНИЯ ФОТОГРАФИЙ ПОЛЬЗОВАТЕЛЯ В ЗАВИСИМОСТИ КНОПОК
// импорт
import { objPhotos } from "./1-CreateServerData.js"
import { createIdComment } from "./2-F_RandomNumber.js"

// данные
const filterDefault=document.getElementById('filter-default') 
const filterRandom=document.getElementById('filter-random') 
const filterDiscussed=document.getElementById('filter-discussed') 
const template=document.querySelector('#picture') 
const classPictures=document.querySelector('.pictures')


// задержка функций во времени
const debounce=(func, wait)=> { 
   let timeout; 
   return () => {
      clearTimeout(timeout) 
      timeout=setTimeout(func,wait); 
   }
}


// СЛУЧАЙНЫЕ 10 МАЛЕНЬКИХ ФОТОК
function createRandomUsersPhoto () {
   const arrRandomNumber= new Array(10).fill(null).map((_,i)=>createIdComment(0, 25)) 
   let arrRandom=[] 
   objPhotos.forEach((el)=>{ 
      for (let i=0; i<=10; i++) { 
         if(el.id===arrRandomNumber[i]){arrRandom.push(el)}
      }
   })

   if (filterDefault.classList.contains('img-filters__button--active')) 
      {filterDefault.classList.remove('img-filters__button--active')} 
   if (filterDiscussed.classList.contains('img-filters__button--active'))
      {filterDiscussed.classList.remove('img-filters__button--active')}
   filterRandom.classList.add('img-filters__button--active')
   removeElem()

   arrRandom.forEach(photo => { 
      let cloneTemplate=template.content.cloneNode(true) 
      cloneTemplate.querySelector('.picture__img').src=photo.url 
      cloneTemplate.querySelector('.picture__img').setAttribute('data-id', photo.id) 
      cloneTemplate.querySelector('.picture__comments').textContent=photo.comments.length 
      cloneTemplate.querySelector('.picture__likes').textContent=photo.likes  
      classPictures.appendChild(cloneTemplate)
   })
}



// функция удаления данных (очистка фоток пользователя перед новой загрузкой)
function removeElem () {
   const pictureCollection=document.getElementsByClassName('picture') 
   const pictureArray=Array.from(pictureCollection) 
   console.log(pictureCollection)
   pictureArray.forEach((el)=>{
      el.remove() 
   })
}


// ОТРИСОВКА ВСЕХ ФОТОГРАФИЙ ПОЛЬЗОВАТЕЛЯ
function returnAllUsersPhoto () {
   if (filterRandom.classList.contains('img-filters__button--active'))
   {filterRandom.classList.remove('img-filters__button--active')} 
   if (filterDiscussed.classList.contains('img-filters__button--active'))
   {filterDiscussed.classList.remove('img-filters__button--active')} 
   filterDefault.classList.add('img-filters__button--active')
   removeElem()/

   objPhotos.forEach(photo => {
    let cloneTemplate=template.content.cloneNode(true) 
    cloneTemplate.querySelector('.picture__img').src=photo.url 
    cloneTemplate.querySelector('.picture__img').setAttribute('data-id', photo.id) 
    cloneTemplate.querySelector('.picture__comments').textContent=photo.comments.length
    cloneTemplate.querySelector('.picture__likes').textContent=photo.likes 
    classPictures.appendChild(cloneTemplate)
  })
}

// ПОПУЛЯРНЫЕ (ФОТКИ ОТСОРТИРОВАННЫЕ ПО КОЛИЧЕСТВУ КОММЕНТАРИЕВ)
function findDiscussedPhotos() {
   if (filterRandom.classList.contains('img-filters__button--active'))
   {filterRandom.classList.remove('img-filters__button--active')} 
   if (filterDefault.classList.contains('img-filters__button--active')) 
   {filterDefault.classList.remove('img-filters__button--active')} 
   filterDiscussed.classList.add('img-filters__button--active')
   removeElem() 

   const arrDiscussed=objPhotos.slice().sort(function(a,b){
      return a.comments.length-b.comments.length
   }).reverse()

   arrDiscussed.forEach(photo => {
      let cloneTemplate=template.content.cloneNode(true)
      cloneTemplate.querySelector('.picture__img').src=photo.url
      cloneTemplate.querySelector('.picture__img').setAttribute('data-id', photo.id)
      cloneTemplate.querySelector('.picture__comments').textContent=photo.comments.length
      cloneTemplate.querySelector('.picture__likes').textContent=photo.likes
      classPictures.appendChild(cloneTemplate) 
   })
}

export {createRandomUsersPhoto, findDiscussedPhotos, returnAllUsersPhoto, debounce}