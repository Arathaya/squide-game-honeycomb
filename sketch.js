var b1 ;
var tri ;
var c1,c2 ,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16,c17,c18,c19,c20;
function setup(){
createCanvas(700,700);
b1 = new Box (100,100,500,300);
ellipseMode(CENTER);

}
function preLoad() {
    
}
function draw() {
    background("pink");
    b1.display();
   triangle(350,150,500,300,190,300);
   fill(0);
  c1 =  circle(357 , 152 , 10);
  c2 =  circle(367 , 164 , 10);
  c3 =  circle(377 , 176 , 10);
  c4 =  circle(387 , 190 , 10);
  c5 =  circle(397 , 201 , 10);
  c6 =  circle(407 , 212 , 10);
  c7 =  circle(417 , 224 , 10);
  c8 =  circle(427 , 236 , 10);
  c9 =  circle(437 , 248 , 10);
 c10 =  circle(447 , 252 , 10);
 c11 =  circle(457 , 262, 10);
 c12 =  circle(467 , 274 , 10);
 c13 =  circle(477 , 286, 10);
 c14 =  circle(487 , 298 , 10);
 c15 =  circle(497 , 310 , 10);
 /*c6 =  circle(407 , 212 , 10);
 c7 =  circle(417 , 224 , 10);
 c8 =  circle(427 , 236 , 10);
 c9 =  circle(437 , 248 , 10);
c10 =  circle(447 , 250 , 10);*/
   mousePressed(c1) ;
    

   
}
function mousePressed(sprite) {
    sprite.remove;
}