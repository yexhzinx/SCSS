import "./01.scss"

console.log("01-JS")

const btn = document.querySelector('.container2  .btn')
let toggle = false;
btn.addEventListener('click',()=>{

    if(toggle){
        btn.classList.add('active')
    }else{
        btn.classList.remove('active')
    }
    toggle = !toggle
})