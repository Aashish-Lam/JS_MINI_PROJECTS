let buttons =document.querySelectorAll('.button')
let body = document.querySelector("body")
buttons.forEach((button)=>{
    // console.log(button)
    button.addEventListener('click',function(e){
        // console.log(e)
        console.log(e.target)
        if(e.target.id==='grey'){
            body.style.background="#949595"
        }
        else if(e.target.id==='yellow'){
            body.style.background="#f9f939" 
        }
        else if(e.target.id==='green'){
            body.style.background="#b1e571" 
        }
        else{
            body.style.background="#dc143c" 
        }
       
    })
})