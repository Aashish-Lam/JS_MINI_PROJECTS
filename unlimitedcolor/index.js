const bg= document.getElementById("background")
let btn1=document.getElementById("start")
let btn2=document.getElementById("stop")
function begin(){
    
    const random='#'+Math.floor(Math.random() * 16777215).toString(16)
    return random
}
let a
btn1.addEventListener('click',(e)=>{
    console.log("start")
    a=setInterval(()=>{
    bg.style.backgroundColor=begin()
  },3000)
})


btn2.addEventListener('click',(e)=>{
    console.log("end")
    clearInterval(a)
    a=null

})
