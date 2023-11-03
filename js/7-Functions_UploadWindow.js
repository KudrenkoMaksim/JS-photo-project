// ОТОБРАЖЕНИЕ ОКНА РЕДАКТИРОВАНИЯ ИЗОБРАЖЕНИЯ (формы редактирования изображения)
// импорт
import { addEffects } from "./9-Functions_TransformImgUpload.js" 

// переменные
const imgUploadOverlay=document.querySelector('.img-upload__overlay') 
const body=document.querySelector('body')
const textHashtags=document.querySelector('.text__hashtags')
const textDescription=document.querySelector('.text__description')
const imgUploadPreview=document.querySelector('.img-upload__preview') 
const effectCollection=document.getElementsByClassName('effects__radio')
const effectArr=['effects__preview--chrome','effects__preview--sepia','effects__preview--marvin','effects__preview--phobos','effects__preview--heat'] 
const objEffectNone={event:'none' ,minValue:0, maxValue:0, step:0}
const preview=document.getElementsByClassName('img-upload__preview')[0].firstElementChild



// показать окно редактирования изображения
function openUploadWindow () { 
   imgUploadOverlay.classList.remove('hidden') 
   if (body.classList.contains('modal-open')===false) {
      body.classList.add('modal-open')
   }
}
// закрыть окно редактирования изображения через кнопку 
function closeUploadWindowClick (event) {
   if(event.target.closest('#upload-cancel'))
   imgUploadOverlay.classList.add('hidden')
   if (body.classList.contains('modal-open')===true) {
      body.classList.remove('modal-open')
   }
   removeChanges() 
}


//  закрыть окно клавишей при неактивных textHashtags & textDescriptions
function closeUploadWindoKey (event) {
   if(event.key=='Escape' && imgUploadOverlay.classList.contains('hidden')==false && document.activeElement!==textHashtags && document.activeElement!==textDescription){ 
      imgUploadOverlay.classList.add('hidden')
      if (body.classList.contains('modal-open')===true) {
      body.classList.remove('modal-open') 
      }
      removeChanges() 
   }
}



// отображение загруженного рисунка
function openPicture(event) {
   const selectedFile=event.target.files[0]
   const reader=new FileReader()
   console.log(reader)
   reader.onload=function(event) {    
      preview.src=event.target.result 
      console.log(preview.src=event.target)
      console.log(preview.src=event.target.result)
   }
   reader.readAsDataURL(selectedFile)
}


// функция для перевода формы редактирования изображения в первоначальное состояние
function removeChanges () { 
   textHashtags.value=''  
   textDescription.value='' 
   preview.src="img/upload-default-image.jpg" 
   effectCollection[0].checked='true'
   addEffects(objEffectNone) 
   removeClass()
}

// функция для удаления класса
function removeClass(){
   document.querySelectorAll('.effects__radio').forEach((_,i)=> {
      if (imgUploadPreview.classList.contains(effectArr[i])) {
         imgUploadPreview.classList.remove(effectArr[i])
      }
   })
}


export {openUploadWindow, closeUploadWindowClick, closeUploadWindoKey, openPicture}