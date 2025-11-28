const A0 = new Audio("./audio/piano-keys/A0.mp3");
const Bb0 = new Audio("./audio/piano-keys/Bb0.mp3");
const B0 = new Audio("./audio/piano-keys/B0.mp3");

const C1 = new Audio("./audio/piano-keys/C1.mp3");
const Db1 = new Audio("./audio/piano-keys/Db1.mp3");
const D1 = new Audio("./audio/piano-keys/D1.mp3");
const Eb1 = new Audio("./audio/piano-keys/Eb1.mp3");
const E1 = new Audio("./audio/piano-keys/E1.mp3");
const F1 = new Audio("./audio/piano-keys/F1.mp3");
const Gb1 = new Audio("./audio/piano-keys/Gb1.mp3");
const G1 = new Audio("./audio/piano-keys/G1.mp3");
const Ab1 = new Audio("./audio/piano-keys/Ab1.mp3");
const A1 = new Audio("./audio/piano-keys/A1.mp3");
const Bb1 = new Audio("./audio/piano-keys/Bb1.mp3");
const B1 = new Audio("./audio/piano-keys/B1.mp3");

const C2 = new Audio("./audio/piano-keys/C2.mp3");
const Db2 = new Audio("./audio/piano-keys/Db2.mp3");
const D2 = new Audio("./audio/piano-keys/D2.mp3");
const Eb2 = new Audio("./audio/piano-keys/Eb2.mp3");
const E2 = new Audio("./audio/piano-keys/E2.mp3");
const F2 = new Audio("./audio/piano-keys/F2.mp3");
const Gb2 = new Audio("./audio/piano-keys/Gb2.mp3");
const G2 = new Audio("./audio/piano-keys/G2.mp3");
const Ab2 = new Audio("./audio/piano-keys/Ab2.mp3");
const A2 = new Audio("./audio/piano-keys/A2.mp3");
const Bb2 = new Audio("./audio/piano-keys/Bb2.mp3");
const B2 = new Audio("./audio/piano-keys/B2.mp3");

const C3 = new Audio("./audio/piano-keys/C3.mp3");
const Db3 = new Audio("./audio/piano-keys/Db3.mp3");
const D3 = new Audio("./audio/piano-keys/D3.mp3");
const Eb3 = new Audio("./audio/piano-keys/Eb3.mp3");
const E3 = new Audio("./audio/piano-keys/E3.mp3");
const F3 = new Audio("./audio/piano-keys/F3.mp3");
const Gb3 = new Audio("./audio/piano-keys/Gb3.mp3");
const G3 = new Audio("./audio/piano-keys/G3.mp3");
const Ab3 = new Audio("./audio/piano-keys/Ab3.mp3");
const A3 = new Audio("./audio/piano-keys/A3.mp3");
const Bb3 = new Audio("./audio/piano-keys/Bb3.mp3");
const B3 = new Audio("./audio/piano-keys/B3.mp3");

const C4 = new Audio("./audio/piano-keys/C4.mp3");
const Db4 = new Audio("./audio/piano-keys/Db4.mp3");
const D4 = new Audio("./audio/piano-keys/D4.mp3");
const Eb4 = new Audio("./audio/piano-keys/Eb4.mp3");
const E4 = new Audio("./audio/piano-keys/E4.mp3");
const F4 = new Audio("./audio/piano-keys/F4.mp3");
const Gb4 = new Audio("./audio/piano-keys/Gb4.mp3");
const G4 = new Audio("./audio/piano-keys/G4.mp3");
const Ab4 = new Audio("./audio/piano-keys/Ab4.mp3");
const A4 = new Audio("./audio/piano-keys/A4.mp3");
const Bb4 = new Audio("./audio/piano-keys/Bb4.mp3");
const B4 = new Audio("./audio/piano-keys/B4.mp3");

const C5 = new Audio("./audio/piano-keys/C5.mp3");
const Db5 = new Audio("./audio/piano-keys/Db5.mp3");
const D5 = new Audio("./audio/piano-keys/D5.mp3");
const Eb5 = new Audio("./audio/piano-keys/Eb5.mp3");
const E5 = new Audio("./audio/piano-keys/E5.mp3");
const F5 = new Audio("./audio/piano-keys/F5.mp3");
const Gb5 = new Audio("./audio/piano-keys/Gb5.mp3");
const G5 = new Audio("./audio/piano-keys/G5.mp3");
const Ab5 = new Audio("./audio/piano-keys/Ab5.mp3");
const A5 = new Audio("./audio/piano-keys/A5.mp3");
const Bb5 = new Audio("./audio/piano-keys/Bb5.mp3");
const B5 = new Audio("./audio/piano-keys/B5.mp3");

const C6 = new Audio("./audio/piano-keys/C6.mp3");
const Db6 = new Audio("./audio/piano-keys/Db6.mp3");
const D6 = new Audio("./audio/piano-keys/D6.mp3");
const Eb6 = new Audio("./audio/piano-keys/Eb6.mp3");
const E6 = new Audio("./audio/piano-keys/E6.mp3");
const F6 = new Audio("./audio/piano-keys/F6.mp3");
const Gb6 = new Audio("./audio/piano-keys/Gb6.mp3");
const G6 = new Audio("./audio/piano-keys/G6.mp3");
const Ab6 = new Audio("./audio/piano-keys/Ab6.mp3");
const A6 = new Audio("./audio/piano-keys/A6.mp3");
const Bb6 = new Audio("./audio/piano-keys/Bb6.mp3");
const B6 = new Audio("./audio/piano-keys/B6.mp3");

const C7 = new Audio("./audio/piano-keys/C7.mp3");
const Db7 = new Audio("./audio/piano-keys/Db7.mp3");
const D7 = new Audio("./audio/piano-keys/D7.mp3");
const Eb7 = new Audio("./audio/piano-keys/Eb7.mp3");
const E7 = new Audio("./audio/piano-keys/E7.mp3");
const F7 = new Audio("./audio/piano-keys/F7.mp3");
const Gb7 = new Audio("./audio/piano-keys/Gb7.mp3");
const G7 = new Audio("./audio/piano-keys/G7.mp3");
const Ab7 = new Audio("./audio/piano-keys/Ab7.mp3");
const A7 = new Audio("./audio/piano-keys/A7.mp3");
const Bb7 = new Audio("./audio/piano-keys/Bb7.mp3");
const B7 = new Audio("./audio/piano-keys/B7.mp3");

const C8 = new Audio("./audio/piano-keys/C8.mp3");

// Map *all* alphabet keys + a few numbers to notes
const keyNoteMap = [
  { key: "1", note: "A0", audio: A0 },
  { key: "!", note: "Bb0", audio: Bb0 },
  { key: "2", note: "B0", audio: B0 },
  { key: "@", note: "C1", audio: C1 },
  { key: "3", note: "Db1", audio: Db1 },
  { key: "#", note: "D1", audio: D1 },
  { key: "4", note: "Eb1", audio: Eb1 },
  { key: "$", note: "E1", audio: E1 },
  { key: "5", note: "F1", audio: F1 },
  { key: "%", note: "Gb1", audio: Gb1 },
  { key: "6", note: "G1", audio: G1 },
  { key: "^", note: "Ab1", audio: Ab1 },
  { key: "7", note: "A1", audio: A1 },
  { key: "&", note: "Bb1", audio: Bb1 },
  { key: "8", note: "B1", audio: B1 },
  { key: "*", note: "C2", audio: C2 },
  { key: "9", note: "Db2", audio: Db2 },
  { key: "(", note: "D2", audio: D2 },
  { key: "0", note: "Eb2", audio: Eb2 },
  { key: ")", note: "E2", audio: E2 },

  { key: "q", note: "F2", audio: F2 },
  { key: "Q", note: "Gb2", audio: Gb2 },
  { key: "w", note: "G2", audio: G2 },
  { key: "W", note: "Ab2", audio: Ab2 },
  { key: "e", note: "A2", audio: A2 },
  { key: "E", note: "Bb2", audio: Bb2 },
  { key: "r", note: "B2", audio: B2 },
  { key: "R", note: "C3", audio: C3 },
  { key: "t", note: "Db3", audio: Db3 },
  { key: "T", note: "D3", audio: D3 },
  { key: "y", note: "Eb3", audio: Eb3 },
  { key: "Y", note: "E3", audio: E3 },
  { key: "u", note: "F3", audio: F3 },
  { key: "U", note: "Gb3", audio: Gb3 },
  { key: "i", note: "G3", audio: G3 },
  { key: "I", note: "Ab3", audio: Ab3 },
  { key: "o", note: "A3", audio: A3 },
  { key: "O", note: "Bb3", audio: Bb3 },
  { key: "p", note: "B3", audio: B3 },
  { key: "P", note: "C4", audio: C4 },

  { key: "a", note: "Db4", audio: Db4 },
  { key: "A", note: "D4", audio: D4 },
  { key: "s", note: "Eb4", audio: Eb4 },
  { key: "S", note: "E4", audio: E4 },
  { key: "d", note: "F4", audio: F4 },
  { key: "D", note: "Gb4", audio: Gb4 },
  { key: "f", note: "G4", audio: G4 },
  { key: "F", note: "Ab4", audio: Ab4 },
  { key: "g", note: "A4", audio: A4 },
  { key: "G", note: "Bb4", audio: Bb4 },
  { key: "h", note: "B4", audio: B4 },
  { key: "H", note: "C5", audio: C5 },
  { key: "j", note: "Db5", audio: Db5 },
  { key: "J", note: "D5", audio: D5 },
  { key: "k", note: "Eb5", audio: Eb5 },
  { key: "K", note: "E5", audio: E5 },
  { key: "l", note: "F5", audio: F5 },
  { key: "L", note: "Gb5", audio: Gb5 },

  { key: "z", note: "G5", audio: G5 },
  { key: "Z", note: "Ab5", audio: Ab5 },
  { key: "x", note: "A5", audio: A5 },
  { key: "X", note: "Bb5", audio: Bb5 },
  { key: "c", note: "B5", audio: B5 },
  { key: "C", note: "C6", audio: C6 },
  { key: "v", note: "Db6", audio: Db6 },
  { key: "V", note: "D6", audio: D6 },
  { key: "b", note: "Eb6", audio: Eb6 },
  { key: "B", note: "E6", audio: E6 },
  { key: "n", note: "F6", audio: F6 },
  { key: "N", note: "Gb6", audio: Gb6 },
  { key: "m", note: "G6", audio: G6 },
  { key: "M", note: "Ab6", audio: Ab6 },

  { key: ",", note: "A6", audio: A6 },
  { key: "<", note: "Bb6", audio: Bb6 },
  { key: ".", note: "B6", audio: B6 },
  { key: ">", note: "C7", audio: C7 },
  { key: "/", note: "Db7", audio: Db7 },
  { key: "?", note: "D7", audio: D7 },
  { key: "\\", note: "Eb7", audio: Eb7 },
  { key: "|", note: "E7", audio: E7 },
  { key: "[", note: "F7", audio: F7 },
  { key: "{", note: "Gb7", audio: Gb7 },
  { key: "]", note: "G7", audio: G7 },
  { key: "}", note: "Ab7", audio: Ab7 },
  { key: ";", note: "A7", audio: A7 },
  { key: ":", note: "Bb7", audio: Bb7 },
  { key: "'", note: "B7", audio: B7 },
  { key: '"', note: "C8", audio: C8 },
];

const KEY_SEQUENCE = [
  "1",
  "!",
  "2",
  "@",
  "3",
  // "#",
  "4",
  "$",
  "5",
  "%",
  "6",
  "^",
  "7",
  // "&",
  "8",
  "*",
  "9",
  "(",
  "0",
  ")",
  "q",
  "Q",
  "w",
  "W",
  "e",
  "E",
  "r",
  "R",
  "t",
  "T",
  "y",
  "Y",
  "u",
  "U",
  "i",
  "I",
  "o",
  "O",
  "p",
  "P",
  "a",
  "A",
  "s",
  "S",
  "d",
  "D",
  "f",
  "F",
  "g",
  "G",
  "h",
  "H",
  "j",
  "J",
  "k",
  "K",
  "l",
  "L",
  "z",
  "Z",
  "x",
  "X",
  "c",
  "C",
  "v",
  "V",
  "b",
  "B",
  "n",
  "N",
  "m",
  "M",
  "[",
  "{",
  "]",
  "}",
  "\\",
  "|",
  ";",
  ":",
  "'",
  '"',
  ",",
  "<",
  ".",
  ">",
  "/",
  "?",
  "~",
]; // 88 keys

const NOTE_SEQUENCE = [
  "A0",
  "Bb0",
  "B0",

  "C1",
  "Db1",
  "D1",
  "Eb1",
  "E1",
  "F1",
  "Gb1",
  "G1",
  "Ab1",
  "A1",
  "Bb1",
  "B1",

  "C2",
  "Db2",
  "D2",
  "Eb2",
  "E2",
  "F2",
  "Gb2",
  "G2",
  "Ab2",
  "A2",
  "Bb2",
  "B2",

  "C3",
  "Db3",
  "D3",
  "Eb3",
  "E3",
  "F3",
  "Gb3",
  "G3",
  "Ab3",
  "A3",
  "Bb3",
  "B3",

  "C4",
  "Db4",
  "D4",
  "Eb4",
  "E4",
  "F4",
  "Gb4",
  "G4",
  "Ab4",
  "A4",
  "Bb4",
  "B4",

  "C5",
  "Db5",
  "D5",
  "Eb5",
  "E5",
  "F5",
  "Gb5",
  "G5",
  "Ab5",
  "A5",
  "Bb5",
  "B5",

  "C6",
  "Db6",
  "D6",
  "Eb6",
  "E6",
  "F6",
  "Gb6",
  "G6",
  "Ab6",
  "A6",
  "Bb6",
  "B6",

  "C7",
  "Db7",
  "D7",
  "Eb7",
  "E7",
  "F7",
  "Gb7",
  "G7",
  "Ab7",
  "A7",
  "Bb7",
  "B7",

  "C8",
];

let specialKeys = [
  "Shift",
  "Control",
  "Alt",
  "Meta", // Windows key / Command on Mac
  "CapsLock",
  "Tab",
  "Escape",
  "Backspace",
  "Enter",
  "Space",
  "Insert",
  "Delete",
  "Home",
  "End",
  "PageUp",
  "PageDown",
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ContextMenu",
  "NumLock",
  "ScrollLock",
  "Pause",

  // Function keys
  "F1",
  "F2",
  "F3",
  "F4",
  "F5",
  "F6",
  "F7",
  "F8",
  "F9",
  "F10",
  "F11",
  "F12",
];

let keys = document.querySelectorAll(".key");
let piano = document.querySelector(".piano");
let input = document.querySelector("input");
let pianoKeys = document.querySelector(".piano-keys");
let notesText = document.querySelector(".display input");
let speaker = document.querySelectorAll(".speaker img");
let fullMusic = "";

function speakerAnimate() {
  speaker.forEach((elem) => {
    elem.style.scale = "1.04";
  });

  setTimeout(function () {
    speaker.forEach((elem) => {
      elem.style.scale = "1";
    });
  }, 100);
}

keys.forEach((el, index) => {
  const label = KEY_SEQUENCE[index];
  const h3 = document.createElement("h3");
  h3.innerText = label;

  el.appendChild(h3);
});


let mouseDown = false ;
pianoKeys.addEventListener("mousedown",function(){
  console.log("mouse down hua");
  mouseDown = true;
})
pianoKeys.addEventListener("mouseup",function(){
  console.log("mouse up hua");
  mouseDown = false;
})

pianoKeys.addEventListener("mouseover", function (pKey){
  // console.log((mapindex+1)+"pehli key per click hua");
  // console.log(pKey);
  if(mouseDown){
  // console.log(mouseDown);
    // console.log(pKey.target.innerText);

   pKey.target.style.translate = "0 , 20%";
  //  pKey.target.style.background = "red";
   


     keyNoteMap.forEach(function (note) {
      if (pKey.target.innerText === note.key){
        note.audio.currentTime = 0;
        // note.audio.load();
        note.audio.play();
        speakerAnimate();
      }
      
    });
  }

  
});


// let keyPressed = pianoKeys.addEventListener("dragover", (evt) => {
input.addEventListener("input", (evt) => {
  let keypressed = evt.data;
  if (keypressed === null) {
    keypressed = " ";
  }
  // console.log(evt.data);

  if (!specialKeys.includes(keypressed)) {
    // console.log(keypressed);
    fullMusic += keypressed;
    notesText.innerHTML = fullMusic;

    let keyindex;
    // console.log(keyNoteMap[0].key);
    keys.forEach(function (key, index) {
      // console.log(keyindex);
      keyindex = index;
    });
    // console.log(keyindex);

    keyNoteMap.forEach(function (note) {
      // console.log(note, mapindex);

      if (note.key === keypressed) {
        // keys[mapindex].click
        // console.log("pressed key or note mil gye");
        note.audio.load();
        note.audio.play();
        speakerAnimate();
      }
    });
  }
});

function textToNotes() {
  let arr = fullMusic.split("");
  console.log(fullMusic);
  console.log(arr);
  arr.forEach(function () {});

  console.log("text to notes run");
}
function notesToText() {
  console.log("notes to text run");
}

function displayNotes() {
  console.log("displayNotes run");

  let h3 = document.querySelectorAll(".key h3");
  keys.forEach((el, index) => {
    let label = NOTE_SEQUENCE[index];
    h3[index].innerText = label;
  });
}
function displayText() {
  console.log("displayText run");

  let h3 = document.querySelectorAll(".key h3");
  keys.forEach((el, index) => {
    let label = KEY_SEQUENCE[index];
    h3[index].innerText = label;
  });
}
