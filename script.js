// Your audio objects (example)
const A0 = new Audio("./audio/piano-keys/A0.mp3");
const A1 = new Audio("./audio/piano-keys/A1.mp3");
const A2 = new Audio("./audio/piano-keys/A2.mp3");
const A3 = new Audio("./audio/piano-keys/A3.mp3");
const A4 = new Audio("./audio/piano-keys/A4.mp3");
const A5 = new Audio("./audio/piano-keys/A5.mp3");
const A6 = new Audio("./audio/piano-keys/A6.mp3");
const A7 = new Audio("./audio/piano-keys/A7.mp3");

const C1 = new Audio("./audio/piano-keys/C1.mp3");
const C2 = new Audio("./audio/piano-keys/C2.mp3");
const C3 = new Audio("./audio/piano-keys/C3.mp3");
const C4 = new Audio("./audio/piano-keys/C4.mp3");
const C5 = new Audio("./audio/piano-keys/C5.mp3");
const C6 = new Audio("./audio/piano-keys/C6.mp3");
const C7 = new Audio("./audio/piano-keys/C7.mp3");
const C8 = new Audio("./audio/piano-keys/C8.mp3");

const Ds1 = new Audio("./audio/piano-keys/Ds1.mp3");
const Ds2 = new Audio("./audio/piano-keys/Ds2.mp3");
const Ds3 = new Audio("./audio/piano-keys/Ds3.mp3");
const Ds4 = new Audio("./audio/piano-keys/Ds4.mp3");
const Ds5 = new Audio("./audio/piano-keys/Ds5.mp3");
const Ds6 = new Audio("./audio/piano-keys/Ds6.mp3");
const Ds7 = new Audio("./audio/piano-keys/Ds7.mp3");

const Fs1 = new Audio("./audio/piano-keys/Fs1.mp3");
const Fs2 = new Audio("./audio/piano-keys/Fs2.mp3");
const Fs3 = new Audio("./audio/piano-keys/Fs3.mp3");
const Fs4 = new Audio("./audio/piano-keys/Fs4.mp3");
const Fs5 = new Audio("./audio/piano-keys/Fs5.mp3");
const Fs6 = new Audio("./audio/piano-keys/Fs6.mp3");
const Fs7 = new Audio("./audio/piano-keys/Fs7.mp3");

// Map *all* alphabet keys + a few numbers to notes
const keyMap = {
  // Bottom row – lowest
  z: A0,
  x: C1,
  c: Ds1,
  v: Fs1,
  b: A1,
  n: C2,
  m: Ds2,

  // Home row – middle
  a: Fs2,
  s: A2,
  d: C3,
  f: Ds3,
  g: Fs3,
  h: A3,
  j: C4,
  k: Ds4,
  l: Fs4,

  // Top letters – higher
  q: A4,
  w: C5,
  e: Ds5,
  r: Fs5,
  t: A5,
  y: C6,
  u: Ds6,
  i: Fs6,
  o: A6,
  p: C7,

  // Number row – highest (Fs7 on upper row ✅)
  1: Ds7,
  2: Fs7,
  3: A7,
  4: C8,
};

let allWhiteKeys = document.querySelectorAll(".white-key")
let allBlackKeys = document.querySelectorAll(".black-key")
let displayNotes = document.querySelector(".display textarea");

let speaker = document.querySelectorAll(".speaker img");

// allWhiteKeys.forEach(function(elem){
//  console.log(allWhiteKeys.length);
let key = 

document.addEventListener("keypress", (evt) => {
    speaker.forEach((elem)=>{
            elem.style.scale = '1.04'
        })

    setTimeout(function(){
        speaker.forEach((elem)=>{
            elem.style.scale = '1'
        })
    },100)
    displayNotes.textContent += evt.key;
    displayNotes.textContent = displayNotes.textContent.split(' ')
    console.log(displayNotes.textContent);
    
    


  const key = evt.key.toLowerCase();
  const sound = keyMap[key];

  if (sound) {
    // restart sound so it plays from start if pressed quickly
    sound.currentTime = 0;
    sound.load();
    sound.play();
     
  }
});
