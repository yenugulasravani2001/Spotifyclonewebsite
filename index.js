console.log("welcome to spotify");
//intiliase the varaibles
let songIndex=0;
let audioElement=new Audio('1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myprogressbar=document.getElementById('myprogressbar');
let gif=document.getElementById('gif');
let songs=[
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs\1.mp3", coverPath:"covers\1.jpg"},
//     {songName:"salam-e-ishq",filepath:"songs/1.mp3",coverPath:"covers/1.jpg"},
//     {songName:"salam-e-ishq",filepath:"songs/1.mp3",coverPath:"covers/1.jpg"},
//     {songName:"salam-e-ishq",filepath:"songs/1.mp3",coverPath:"covers/1.jpg"},
//     {songName:"salam-e-ishq",filepath:"songs/1.mp3",coverPath:"covers/1.jpg"},
//     {songName:"salam-e-ishq",filepath:"songs/1.mp3",coverPath:"covers/1.jpg"},
//     {songName:"salam-e-ishq",filepath:"songs/1.mp3",coverPath:"covers/1.jpg"},
//     {songName:"salam-e-ishq",filepath:"songs/1.mp3",coverPath:"covers/1.jpg"},
//     {songName:"salam-e-ishq",filepath:"songs/1.mp3",coverPath:"covers/1.jpg"},
//     {songName:"salam-e-ishq",filepath:"songs/1.mp3",coverPath:"covers/1.jpg"}
 ]

//handle play/pause/click
masterPlay.addEventListener('click',()=>{
if(audioElement.paused || audioElement.currentTime<=0){
    audioElement.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    gif.style.opacity=1;
}
else{
    audioElement.pause();
    masterPlay.classList.remove('fa-pause');
    masterPlay.classList.add('fa-play');
    gif.style.opacity=0;
}
})
//listen to the events
audioElement.addEventListener('timeupdate',()=>{
progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
myprogressbar.value=progress;
})
myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressbar.value*audioElement.duration/100; 
})