
function calculate(){
    let weight= parseFloat(document.querySelector("#weight").value)
let height= parseFloat(document.querySelector("#height").value)
let result=document.querySelector("#BMIRES")
if(weight===''|| weight < 0 || isNaN(weight)){
    result.innerHTML="Please enter valid height or weight"
}
else
if(height===''|| height < 0 || isNaN(height)){
    result.innerHTML="Please enter valid height or height"
}
else{
let BMI=weight/(height*height)
result.innerHTML=`The BMI value is :${BMI}`
}
}
// const form = document.querySelector('form')
// console.log(form)
// form.addEventListener("submit",function(e)){
//     e.preventDef// let BMI=weight/(height/100)

// let result=document.querySelector("#BMIRES")
// result.innerHTML=`${BMI}`ault()
//    let a= parseInt(document.querySelector('#height').value)
// }

