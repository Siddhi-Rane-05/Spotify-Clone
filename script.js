console.log("welcome to spotify");
let songIndex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songs = [
    {songname:"Salam-e-Ishq",filePath:"songs/1.mp3",coberPath:"covers/1.jpg"},
    {songname:"Salam-e-Ishq",filePath:"song/2.mp3",coberPath:"covers/2.jpg"},
    {songname:"Salam-e-Ishq",filePath:"song/3.mp3",coberPath:"covers/3.jpg"},
    {songname:"Salam-e-Ishq",filePath:"song/4.mp3",coberPath:"covers/4.jpg"},
    {songname:"Salam-e-Ishq",filePath:"song/5.mp3",coberPath:"covers/5.jpg"},
    {songname:"Salam-e-Ishq",filePath:"song/6.mp3",coberPath:"covers/6.jpg"},
    {songname:"Salam-e-Ishq",filePath:"song/7.mp3",coberPath:"covers/7.jpg"},
    {songname:"Salam-e-Ishq",filePath:"song/8.mp3",coberPath:"covers/8.jpg"},
    {songname:"Salam-e-Ishq",filePath:"song/9.mp3",coberPath:"covers/9.jpg"},
    {songname:"Salam-e-Ishq",filePath:"song/10.mp3",coberPath:"covers/10.jpg"},
    
]
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }


})

audioElement.addEventListener('timeupdate',()=>{
    console.log('timeupdate');
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value=progress;

})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
