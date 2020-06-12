const newArray = []

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
  
  for (let index = 0; index < characters.length; index++) {
  
  
if (characters[index]=="a"){
    newArray.push(alpha.a);
}
      
if (characters[index]=="b"){
  newArray.push(alpha.b);

}
  
if (characters[index]=="c"){
  newArray.push(alpha.c);

}
  
if (characters[index]=="d"){
  newArray.push(alpha.d);

}
  
if (characters[index]=="e"){
  newArray.push(alpha.e);

}
if (characters[index]=="f"){
  newArray.push(alpha.f);
}
    
if (characters[index]=="g"){
newArray.push(alpha.g);

}

if (characters[index]=="h"){
  newArray.push(alpha.h);

}

if (characters[index]=="i"){
  newArray.push(alpha.i);

}

if (characters[index]=="j"){
  newArray.push(alpha.j);

}
if (characters[index]=="k"){
  newArray.push(alpha.k);
}
    
if (characters[index]=="l"){
newArray.push(alpha.l);

}

if (characters[index]=="m"){
newArray.push(alpha.m);

}

if (characters[index]=="n"){
newArray.push(alpha.n);

}

if (characters[index]=="o"){
newArray.push(alpha.o);

}
if (characters[index]=="p"){
newArray.push(alpha.p);
}
    
if (characters[index]=="q"){
newArray.push(alpha.q);

}

if (characters[index]=="r"){
newArray.push(alpha.r);

}

if (characters[index]=="s"){
newArray.push(alpha.s);

}

if (characters[index]=="t"){
newArray.push(alpha.t);

}   if (characters[index]=="u"){
newArray.push(alpha.u);
}
    
if (characters[index]=="v"){
newArray.push(alpha.v);

}

if (characters[index]=="w"){
newArray.push(alpha.w);

}

if (characters[index]=="x"){
newArray.push(alpha.x);

}

if (characters[index]=="y"){
  newArray.push(alpha.y);

}
if (characters[index]=="z"){
  newArray.push(alpha.z);
}
    
if (characters[index]=="0"){
newArray.push(alpha.zero);

}

if (characters[index]=="1"){
  newArray.push(alpha.one);

}

if (characters[index]=="2"){
  newArray.push(alpha.two);

}

if (characters[index]=="3"){
  newArray.push(alpha.three);

}
if (characters[index]=="4"){
  newArray.push(alpha.four);
}
    
if (characters[index]=="5"){
newArray.push(alpha.five);

}

if (characters[index]=="6"){
  newArray.push(alpha.six);

}

if (characters[index]=="7"){
  newArray.push(alpha.seven);

}

if (characters[index]=="8"){
  newArray.push(alpha.eight);

}
if (characters[index]=="9"){
  newArray.push(alpha.nine);
  
}

}


outputWord = newArray.join("");
document.querySelector("#outputBox").innerHTML += outputWord;
}



// }



const addEventListener = () => {
  const submit = document.getElementById("submit").addEventListener("click", convertFunction);
  
}
addEventListener();

submit.addEventListener("click", () => {
const soundUrl = "./sounds/morse.mp3";
            new Audio(soundUrl).play();
})