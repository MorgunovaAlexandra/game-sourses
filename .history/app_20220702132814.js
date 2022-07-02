const startBtn=document.querySelector('#start')
const screens=document.querySelectorAll('.screen')
const timeList=document.querySelector('#time-list');
const board=document.querySelector('#board')
let timeEl=document.querySelector('#time');
const colors=['green',]
let time=0
let score=0
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
board.addEventListener('click',(event)=>{
if(event.target.classList.contains('circle')){
    score++;
    event.target.remove()
    CreateRandomCircle()
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
 timeEl.parentNode.classList.add('hide')
 board.innerHTML=`<h1>счет :<span class="primary">${score}</span></h1>`
}
function CreateRandomCircle(){
    const circle=document.createElement('div')
    const {width,height}=board.getBoundingClientRect()
    
    const size=getRandomNumber(10,70)
    const x=getRandomNumber(0,width-size)
    const y=getRandomNumber(0,height-size)
    const color=getRandomColor()
    circle.classList.add('circle')
    circle.style.backgroundColor=`${color}`
    circle.style.width=`${size}px`
    circle.style.height=`${size}px`
    circle.style.top=`${y}px`;
    circle.style.left=`${x}px`
    board.append(circle)

}
function getRandomNumber(min,max){
    return Math.round(Math.random()*(max-min)+min)
}
function getRandomColor(){
    const index=Math.floor(Math.random()*colors.length);
    console.log(index)
    return colors[index]
    
}
