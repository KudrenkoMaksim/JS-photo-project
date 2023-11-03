// ПЕРВОНАЧАЛЬНЫЕ ДАННЫЕ ВМЕСТО СЕРВЕРНЫХ ДАННЫХ
import { createRandomNumber,createIdComment } from "./2-F_RandomNumber.js"

// объявление переменных
const avatarNumberMax=6 
const avatarNumberMin=1 
const arrDescriptionPhoto=['globe man','girl','ghost man','incubator','Darth Vader','soldier man','spaceship','cyborg','Darth Maul',  'spaceship crash','touch','black woman','supercar','spaceship','Ilay','soldier woman','Ukrainian robots','traine','robot mashine', 'military base','future','samurai woman','laboratory','Moon base','Jedi'] 
const likesNumberMax=200 
const likesNumberMin=15 

const arrCommentsMassages =[ 
   'Все відмінно!',
   'Загалом все непогано. Але не всі.',
   'Коли ви робите фотографію, добре б прибирати палець із кадру. Зрештою, це просто непрофесійно.',
   'Моя бабуся випадково чхнула з фотоапаратом у руках і у неї вийшла фотографія краща.',
   'Я послизнувся на банановій шкірці і впустив фотоапарат на кота і у мене вийшла фотографія краще.',
   'Обличчя людей на фотці перекошені, ніби їх побивають. Як можна було зловити такий невдалий момент?',
]
const arrCommentatorsName=['Катерина','Дарина','Ярослав','Світлана','Микита','Іштван','Юрій','Максим','Володимир','Оксана','Олеся','Ірина','Богдан'] 
const idCommentNumberMax=999 
const idCommentNumberMin=1 


// функции
// создание объекта комментариев
function createObjComment () {
   const obj=
      {
      id: createIdComment(idCommentNumberMin, idCommentNumberMax), 
      avatar: `img/avatar-${createRandomNumber(avatarNumberMin, avatarNumberMax)}.svg`, 
      massage: arrCommentsMassages[createRandomNumber(0,arrCommentsMassages.length-1 )], 
      name: arrCommentatorsName[createRandomNumber(0,arrCommentatorsName.length-1 )] 
      }
   return obj 
}


// создание массива объектов комментариев 
const usersComments= new Array(100).fill(null).map((_,i)=>createObjComment()) 

// создание объекта с фотками
function createObjPhoto (i) { 
 const obj=
   {
      id: parseFloat(i), 
      url: `photos/${i+1}.jpg`, 
      description: arrDescriptionPhoto[i], 
      likes:createRandomNumber(likesNumberMin, likesNumberMax),
      comments:usersComments.slice(createRandomNumber(1,usersComments.length)) 
   }
   return obj
}
// создание массива объектов с фотками
const objPhotos= new Array(25).fill(null).map((_,i)=>createObjPhoto(i))


export {objPhotos}