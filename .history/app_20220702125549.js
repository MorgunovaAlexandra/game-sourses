const startBtn=document.querySelector('#start')
const screens=document.querySelectorAll('.screen')
const timeList=document.querySelector('#time-list');
const board=document.querySelector('#board')
let timeEl=document.querySelector('#time');

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
setTime(time)
CreateRandomCircle()
}
function decriceTime(){
if(time===0){
finishGame()
}
else{
    let current=--time
    if(current<10){
    current=`0${current}`
}
setTime(current)
}


}

function setTime(value){
    timeEl.innerHTML=`00:${value}`
}

function finishGame(){

}
function CreateRandomCircle(){
    const circle=document.createElement('div')
    circle.classList.add('circle')
    circle.style.width='15px'
    circle.style.height='15px'
    board.append(circle)

}
function getRandomNumber(min,max){
    Math.random()*(max-)
}