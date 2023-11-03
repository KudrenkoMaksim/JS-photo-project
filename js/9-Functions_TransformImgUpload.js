// ФОРМА РЕДАКТИРОВАНИЯ ИЗОБРАЖЕНИЯ
// импорт слайдера
import noUiSlider from '../node_modules/nouislider/dist/nouislider.mjs'

// ПЕРЕМЕННЫЕ
const scaleControlValue=document.querySelector('.scale__control--value')
const imgUploadPreview=document.querySelector('.img-upload__preview')
const effectsCollection=document.querySelectorAll('.effects__radio')
const effectLevelValue=document.getElementsByClassName('effect-level__value')
const effectsArr=['effects__preview--none', 'effects__preview--chrome','effects__preview--sepia','effects__preview--marvin','effects__preview--phobos','effects__preview--heat']

// масштаб фото
function createScale (event) {
   if (event.target.closest('.scale__control--smaller') && Number.parseFloat(scaleControlValue.value)>=50) { 
      const scaleValue=`${Number.parseFloat(scaleControlValue.value)-25} %`
      imgUploadPreview.style.transform=`scale(${Number.parseFloat(scaleValue)/100})`
      scaleControlValue.value=scaleValue
   }
   if (event.target.closest('.scale__control--bigger') && Number.parseFloat(scaleControlValue.value)<=75) {
      const scaleValue2=`${Number.parseFloat(scaleControlValue.value)+25} %`
      imgUploadPreview.style.transform=`scale(${Number.parseFloat(scaleValue2)/100})`
      scaleControlValue.value=scaleValue2
   }
}



// СЛАЙДЕР
// создание объектов для слайдера
const objEffectNone={event:'none' ,minValue:0, maxValue:0, step:0}
const objEffectChrome={filter:'grayscale',units:'',event:'add', minValue:0, maxValue:1, step:0.1}
const objEffectSepia={filter:' sepia',units:'',event:'add', minValue:0, maxValue:1, step:0.1}
const objEffectMarvin={filter:'invert',units:'%',event:'add', minValue:0, maxValue:100, step:1}
const objEffectPhobos={filter:'blur',units:'px',event:'add', minValue:0, maxValue:3, step:0.1}
const objEffectHeat={filter:' brightness',units:'',event:'add', minValue:0, maxValue:3, step:0.1}
// массив с объектами для ползунка
const effectsControllArr=[objEffectNone,objEffectChrome,objEffectSepia,objEffectMarvin,objEffectPhobos,objEffectHeat]
const slider=document.getElementById('slider')


 noUiSlider.create(slider, { 
      start:[objEffectNone.maxValue], 
      connect: [true, false],
      step:objEffectNone.step,
      tooltips: true,
      padding: 0, 
      range: { 
         'min':objEffectNone.minValue, 
         'max': objEffectNone.maxValue
      },
   });
slider.classList.add('hidden')




// НАСТРОЙКИ ПЕРЕКЛЮЧЕНИЯ МЕЖДУ РАДИОКНОПКАМИ + ЗАПУСК ОБНОВЛЕНИЙ СЛАЙДЕРА
function addRemoveClass(e){
   effectsCollection.forEach((_,i)=> {
   if (imgUploadPreview.classList.contains(effectsArr[i])) {
      imgUploadPreview.classList.remove(effectsArr[i])
   }
   if (e.target==effectsCollection[i]) {
      imgUploadPreview.classList.add(effectsArr[i]) 
      addEffects(effectsControllArr[i])
   }
  })
}



function addEffects (obj) {
   if(obj.event==='add') { 
      if(slider.classList.contains('hidden')) {
         slider.classList.remove('hidden')
      }
         slider.noUiSlider.updateOptions({
            start:[obj.maxValue],
            tooltips:true,
            connect: [true,false],
            step:obj.step,
            range: {
               'min':obj.minValue,
               'max': obj.maxValue
            }
         })
      
   } 
   else if  (obj.event==='none' && !slider.classList.contains('hidden')){ 
     slider.classList.add('hidden')
   }
   slider.noUiSlider.on('update',function(value, handle) { 
      effectLevelValue[0].value=`${value[handle]} ${obj.units}`
      if(obj.event==='add') {imgUploadPreview.style.filter=`${obj.filter}(${value[handle]}${obj.units})`}
      else{imgUploadPreview.style=''} 
   })
  
}
export {createScale, addEffects, addRemoveClass}


