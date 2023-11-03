// ВАЛИДАЦИЯ ФОРМЫ РЕДАКТИРОВАНИЯ ИЗОБРАЖЕНИЯ
 
// получение данных
const textHashtags=document.querySelector('.text__hashtags')

//функция валидации введенных данных в поле хеш-тегов
function validateFormUploadWindow(e) {
   let textHashtagsValueArr=textHashtags.value.toLocaleLowerCase().split(' ')
  
   // 1) проверка на пустое поле
   tegCheck1() 
   function tegCheck1() { 
      if (textHashtags.value==='') { 
         return textHashtags.setCustomValidity('поле обовязкове для заповнення')     
      } else {tegCheck2()} 
      
      
   }
   // 2)проверка на # в начале каждого хеш-тега
   function tegCheck2() { 
      textHashtagsValueArr.forEach(element =>{ 
         if(element.charAt(0)==='#') { 
            textHashtags.setCustomValidity('') 
            tegCheck3() 
         }
         else { 
            return textHashtags.setCustomValidity("перший символ хеш-тегу = #") 
         }   
      });
      
   }
   // 3) проверка на буквы и цифры каждого хеш-тега
   function tegCheck3 () {
      textHashtagsValueArr.forEach(element => { 
      if (/^\w+$/.test(element.substr(1,element.length))===true ){ 
         textHashtags.setCustomValidity('') 
            tegCheck4 ()
         }
         else { 
            return textHashtags.setCustomValidity('окрім першого елементу хеш-тегу, всі інші-числа або букви')
         }
      });
   }

   // 4) проверка на количество символов в хеш-теге
   function tegCheck4 () {
      textHashtagsValueArr.forEach(element => {
         if(element.length>=20) { 
        return textHashtags.setCustomValidity("кількість символів в одному хеш-тегі <= 20")
         }
         else { 
            textHashtags.setCustomValidity('') 
            tegCheck5() 
          }
      })
   }

   // 5) проверка на количество хеш-тегов
   function tegCheck5 () {
      if(textHashtagsValueArr.length>5) { 
      return textHashtags.setCustomValidity("кількість хеш-тегів не більше 5") 
      }
   } 
}


export {validateFormUploadWindow}







