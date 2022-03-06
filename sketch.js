let mic;
let myMap = 0;
let angle = 0;

let Oct1;
let Oct2;
let Oct3;
let Oct4; 


function setup() {
  let cnv = createCanvas(400,480);
  cnv.mousePressed(userStartAudio);
   mic = new p5.AudioIn();
   mic.start();
  background(240);  
  noStroke();
  
  Oct1 = new miniOctopus(width*0.1, height*0.025, 0.1);
  Oct2 = new miniOctopus(width*0.8, height*0.025,  0.1);
  Oct3 = new miniOctopus(width*0.1, height*0.85, 0.1);
  Oct4 = new miniOctopus(width*0.8, height*0.85, 0.1);
  
}

function draw() {
  background('#AEB0FC');
  
  //Octopus boss who can sing and transform its skin color - WoW
  let var1 = width * .05;
  let var0 = width * .2;
  let var01 = width * .25;
  let var02 = width * .15;
  let var03 = width * .45;
  let var04 = width * .75;
  let var05 = width * .55;
  let var06 = width * .65;
  let var07 = width * .35;
  let var08 = width * .85;
  let var09 = width * .95;
  let var2 = width * .1;
  let var3 = width * .3;
  let var4 = width * .4;
  let var5 = width * .5;
  let var6 = width * .6;
  let var7 = width * .7;
  let var8 = width * .8;
  let var9 = width * .9;
  
 console.log("mic level " + mic.getLevel());
  
  headContour();
  beanie();
  beanieStroke();
  orangetag();
  body();
  bodyContour();
  bodyShade();
  face();
  
  beginShape ();
  
  
function headContour(){
    push();
    fill(0);
    rect(var01,var02,var03,var1);
    rect(var0,var0,var1,var1);
    rect(var02,var01,var1,var1);
    rect(var2,var3,var1,var2);
    rect(var7,var0,var1,var1);
    rect(var04,var01,var1,var1);
    rect(var8,var3,var1,var2)
    pop();
}
  

function beanie(){
    push();
    fill(115,206,81);
    rect(var01,var0,var03,var0);
    rect(var0,var01,var1,var1);
    rect(var7,var01,var1,var1);
    rect(var02,var3,var2,var2);
    rect(var7,var3,var2,var2);
    pop();
}
  
function beanieStroke(){
    push();
    fill(62,117,40);
  for(i = 0; i < 7; i++){
    rect(80+i*33.5, 120, var1, var2);
  }
    pop();
}
 
function orangetag (){
    push();
    fill(221,93,5);
    rect(var3,var02,var1,var2);
    pop();
}

  
  // endhead
  
  
  // body

function body(){
    push();
    fill(181,232,224);
  
    if (mouseX > width * .125 && mouseX < var04) {
    console.log(fill (201, 85, 255));
  } else {
      console.log(fill(181, 232, 224))
    }
  
    rect(var0,var4,var05,var5);
    rect(var02,var04,var1,var2);
    rect(var2,var8,var1,var2);
    rect(var0,var9,var1,var1);
    rect(var3,var9,var1,var2);
    rect(var4,var9,var2,var2);
    rect(var05,var9,var2,var2);
    rect(var06,var9,var1,var1);
    rect(var04,var8,var2,var2);
    rect(var04,var04,var1,var1);
    pop();
  }
  
function bodyContour(){
    push();
    fill(0);
    rect(var02,var4,var1,var07);
    rect(var04,var4,var1,var07);
    rect(var2,var04,var1,var1);
    rect(var1,var8,var1,var2);
    rect(var2,var9,var2,var1);
    rect(var02,var08,var1,var1);
    rect(var0,var09,var2,var1);
    rect(var01,var08,var1,var2);
    rect(var3,width ,var1,var1);
    rect(var07,var9,var1,var2);
    rect(var4,width,var2,var1);
    rect(var5,var9,var1,var2);
    rect(var05,width,var2,var1);
    rect(var06,var09,var1,var2);
    rect(var06,var08,var1,var1);
    rect(var7,var9,var02,var1);
    rect(var08,var8,var1,var2);
    rect(var8,var04,var1,var1);
    pop();
  }
  
  
  function bodyShade(){
    push();
    fill(126,170,163);
    if (mouseX > width * .125 && mouseX < var04) {
    console.log(fill (224,166,255));
  } else {
      console.log(fill(126, 170, 163))
    }
    rect(var7,var4,var1,var07);
    rect(var04,var04,var1,var1);
    rect(var8,var8,var1,var2);
    rect(var7,var08,var2,var1);
    rect(var06,var9,var1,var1);
    rect(var6,var09,var1,var1);
    pop();
  }
 
   
function face(){
    push();
    micLevel = mic.getLevel();
    let y = var2 + micLevel * width;
    let x = var1 + micLevel * width;
    let a = var1 - micLevel * width;
    fill(0);
    rect(var3,var5,var1,a);
    rect(var05,var5,var1,a);
    rect(width * .375,width * .5875,y,x);
    rect(width * .325,width * .6375,x,x);
    rect(width * .475,width * .6375,x,x);
    rect(width * .375,width * .6875,y,x);
  
    fill(255);
    rect(width * .375,255,y,x);
    pop();
  }
  
  endShape(CLOSE);
  
  
  //move function for mini Octopus
  move();
  
  Oct1.display();
  Oct2.display();

  Oct3.display();
  Oct4.display();
}

function move(){
  
  translate(p5.Vector.fromAngle(millis() / 1000, 10));
  
}
