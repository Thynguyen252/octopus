//miniOctopus class - similar to Octobus Boss but cannot sing or change skin color
class miniOctopus{
  constructor(newxPos,newyPos,newSize){
      this.xPos = newxPos;
      this.yPos = newyPos;
      this.size = newSize;
  }
  display(){
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
  //console.log("mic level " + mic.getLevel());
    
  push();
  translate(this.xPos,this.yPos);
  scale(this.size);
  
  headContour();
  beanie();
  // beanieStroke();
  orangetag();
  body();
  bodyContour();
  bodyShade();
  face();
  pop();
  
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

    /*function beanieStroke(){
        push();
        fill(62,117,40);
      for(i = 0; i < 7; i++){
        rect(80+i*33.5, 120, var1, var2);
      }
        pop();
    }
    */ 
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

      /*if (mouseX > width * .125 && mouseX < var04) {
      console.log(fill (201, 85, 255));
      } else {
        console.log(fill(181, 232, 224))
      }*/

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
     /* if (mouseX > width * .125 && mouseX < var04) {
      console.log(fill (224,166,255));
      } else {
        console.log(fill(126, 170, 163))
      }*/
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
      //micLevel = mic.getLevel();
      let y = var2 + 1 * width;//var2 + micLevel * width;
      let x = var1 + 1 * width;
      let a = var1 - 1 * width;
      fill(0);
      rect(var3,var5,var1,var1);
      rect(var05,var5,var1,var1);

      pop();
    }
  
  
  endShape(CLOSE);
  
  }
}