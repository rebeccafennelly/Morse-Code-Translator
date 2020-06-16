const alpha = { 
  a: ".- ",
  b: "-... ",
  c: "-.-. ",
  d: "-.. ",
  e: ". ",
  f: "..-. ",
  g: "--. ",
  h: ".... ",
  i: ".. ",
  j: ".--- ",
  k: "-.- ",
  l: ".-.. ",
  m: "-- ",
  n: "-. ",
  o: "--- ",
  p: ".--. ",
  q: "--.- ",
  r: ".-. ",
  s: "... ",
  t: "- ",
  u: "..- ",
  v: "...- ",
  w: ".-- ",
  x: "-..- ",
  y: "-.-- ",
  z: "--.. ",
  one: ".---- ",
  two: "..--- ",
  three: "...-- ",
  four: "....- ",
  five: "..... ",
  six: "-.... ",
  seven: "--... ",
  eight: "---.. ",
  nine: "----. ",
  zero: "-----"
  
}

const convertFunction = () => {
    const getInputText = document.getElementById("input").value;
    let characters = getInputText.split("");

    const morseCharacters = characters.map((character) => {
      const morseCharacter = alpha[character];
      return morseCharacter;
    })

  outputWord = morseCharacters.join("");
  document.querySelector("#outputBox").innerHTML += outputWord;
}
  
const submit = document.getElementById('submit');

submit.addEventListener("click", () => {
  convertFunction();
  const soundUrl = "./sounds/morse.mp3";
  new Audio(soundUrl).play();
})