const startBtn=document.querySelector('#start')
const screens=document.querySelectorAll('.screen')
console.log()
startBtn.addEventListener('click',(event)=>{
event.preventDefault();
screens[0].classList.add('up')
})