// ГЛАВНЫЙ ФАЙЛ
// ИМПОРТ
import { createUsersPhoto } from "./3-F_CreateUsersPhoto.js"
import { showBigPicture } from "./4-F_ShowBigPicture.js"
import { addComments} from "./5-F_AddComments.js"
import { closeBigPictureButton, closeBigPictureKey } from "./6-F_CloseBigPicture.js"
import {openUploadWindow, closeUploadWindowClick, closeUploadWindoKey, openPicture} from './7-Functions_UploadWindow.js'
import { validateFormUploadWindow } from "./8_F_ValidateFormUploadWindow.js"
import { createScale, addRemoveClass } from "./9-Functions_TransformImgUpload.js"
import { createRandomUsersPhoto, findDiscussedPhotos, returnAllUsersPhoto, debounce } from "./10_ButtonUsersPhotos.js"

//ПОЛУЧАЕМ ДАННЫЕ ИЗ HTML
const pictures=document.querySelector('.pictures') 
const buttonReset=document.querySelector('#picture-cancel') 
const buttonCommentsLoader=document.querySelector('.comments-loader') 
const uploadFile=document.getElementById('upload-file') 
const uploadCancel=document.getElementById('upload-cancel')
const uploadButton=document.getElementById('upload-submit') 
const scale=document.querySelector('.scale') 
const imgUploadEffects=document.querySelector('.img-upload__effects') 
const filterDefault=document.getElementById('filter-default') 
const filterRandom=document.getElementById('filter-random') 
const filterDiscussed=document.getElementById('filter-discussed') 



// ОТОБРАЖЕНИЕ ФОТОГРАФИЙ ПОЛЬЗОВАТЕЛЯ НА ЭКРАНЕ
createUsersPhoto() 

// ОКНО ПРОСМОТРА ИЗБРАЖЕНИЙ ПОЛЬЗОВАТЕЛЯ
pictures.addEventListener('click', showBigPicture) 
// загрузка остальных комментариев порционно
buttonCommentsLoader.addEventListener('click', addComments)
// код для закрытия окна просмотра фотографий пользователя
buttonReset.addEventListener('click', closeBigPictureButton) 
document.addEventListener('keyup', closeBigPictureKey) 


// ОКНО РЕДАКТИРОВАНИЯ ИЗБРАЖЕНИЯ
uploadFile.addEventListener('change', openUploadWindow) 
uploadCancel.addEventListener('click', closeUploadWindowClick) 
document.addEventListener('keydown', closeUploadWindoKey) 
uploadFile.addEventListener('change', openPicture) 

// ВАЛИДАЦИЯ ХЕШ-ТЕГОВ
uploadButton.addEventListener('click', validateFormUploadWindow) 

// ИЗМЕНЕНИЕ ФОТОК В ОКНЕ РЕДАКТИРОВАНИЯ ИЗОБРАЖЕНИЯ
scale.addEventListener('click', createScale)
imgUploadEffects.addEventListener('click', addRemoveClass) 


// ВСЕ ФОТО
filterDefault.addEventListener('click', debounce(returnAllUsersPhoto,500))
// СЛУЧАЙНЫЕ 10 МАЛЕНЬКИХ ФОТОК
filterRandom.addEventListener('click', debounce(createRandomUsersPhoto,500)) 
// ПОПУЛЯРНЫЕ (ФОТКИ ОТСОРТИРОВАННЫЕ ПО КОЛИЧЕСТВУ КОММЕНТАРИЕВ)
filterDiscussed.addEventListener('click', debounce(findDiscussedPhotos,500)) 