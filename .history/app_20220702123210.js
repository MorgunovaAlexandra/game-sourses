const startBtn=document.querySelector('#start')
const screens=document.querySelectorAll('.screen')
const timeList=document.querySelector('#time-list');
let timeEl=document.querySelector('#time')
let time=0
startBtn.addEventListener('click',(event)=>{
event.preventDefault();
screens[0].classList.add('up')
})

timeList.addEventListener('click',(event)=>{
if(event.target.classList.contains('time-btn')){
    time=parseInt(event.target.getAttribute('data-time'))
    startGame(time)

}
})

function startGame(time){
screens[1].classList.add('up')   
setInterval(decriceTime,1000)

}
function decriceTime(){
let current=--time
if(current<10){
    current=
}
timeEl.innerHTML=`00:${current}`
}