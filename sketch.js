var player = 1;

var game = "intro";
var tie = 0;
var c111 = 0;
var c22 = 0;
var c33 = 0;
var c44 = 0;
var c55 = 0;
var c66 = 0;
var c77 = 0;
var c88 = 0;
var c99 = 0;
var score1 = 0;
var score2 = 0;
var score3 = 0;

function preload() {
    C1Img = loadImage("cross.png");
    C2Img = loadImage("cross.png");
    C3Img = loadImage("cross.png");
    C4Img = loadImage("cross.png");
    C5Img = loadImage("cross.png");
    C6Img = loadImage("cross.png");
    C7Img = loadImage("cross.png");
    C8Img = loadImage("cross.png");
    C9Img = loadImage("cross.png");
    C10Img = loadImage("circle.png");
    C11Img = loadImage("circle.png");
    C12Img = loadImage("circle.png");
    C13Img = loadImage("circle.png");
    C14Img = loadImage("circle.png");
    C15Img = loadImage("circle.png");
    C16Img = loadImage("circle.png");
    C17Img = loadImage("circle.png");
    C18Img = loadImage("circle.png");
    ReplayImg = loadImage("replay.png");
    PlayImg = loadImage("play.png")
}


function setup() {
    createCanvas(500, 400);
    
    c1 = createSprite(100, 100);
    c1.addImage("c1", C1Img);

    c2 = createSprite(200, 100);
    c2.addImage("c2", C2Img);

    c3 = createSprite(300, 100);
    c3.addImage("c3", C3Img);

    c4 = createSprite(100, 200);
    c4.addImage("c4", C4Img);

    c5 = createSprite(200, 200);
    c5.addImage("c5", C5Img);

    c6 = createSprite(300, 200);
    c6.addImage("c6", C6Img);

    c7 = createSprite(100, 300);
    c7.addImage("c7", C7Img);

    c8 = createSprite(200, 300);
    c8.addImage("c8", C8Img);

    c9 = createSprite(300, 300);
    c9.addImage("c9", C9Img);

    c10 = createSprite(100, 100);
    c10.addImage("c10", C10Img);

    c11 = createSprite(200, 100);
    c11.addImage("c11", C11Img);

    c12 = createSprite(300, 100);
    c12.addImage("c12", C12Img);

    c13 = createSprite(100, 200);
    c13.addImage("c13", C13Img);

    c14 = createSprite(200, 200);
    c14.addImage("c14", C14Img);

    c15 = createSprite(300, 200);
    c15.addImage("c15", C15Img);

    c16 = createSprite(100, 300);
    c16.addImage("c16", C16Img);

    c17 = createSprite(200, 300);
    c17.addImage("c17", C17Img);

    c18 = createSprite(300, 300);
    c18.addImage("c18", C18Img);

    replay = createSprite(90, 20);
    replay.addImage("replay", ReplayImg);

    play = createSprite(199, 50)
    play.addImage("play", PlayImg)

    c1.visible = false;
    c2.visible = false;
    c3.visible = false;
    c4.visible = false;
    c5.visible = false;
    c6.visible = false; 
    c7.visible = false;
    c8.visible = false;
    c9.visible = false;
    c10.visible = false;
    c11.visible = false;
    c12.visible = false;
    c13.visible = false;
    c14.visible = false;
    c15.visible = false;
    c16.visible = false;
    c17.visible = false;
    c18.visible = false;
    play.visible = false;
    replay.visible = false;
}

function draw() {
    background("white");
    
    if (game === "tie" || game === "win") {
        line (150,50 ,150 ,350 );
        line (250,50 ,250 ,350 );
        line (50,150 ,350 ,150 );
        line (50,250 ,350 ,250 );
        line (50,50 ,350 ,50 );
        line (50,350 ,350 ,350 );
        line (50,50 ,50 ,350 );
        line (350,50 ,350 ,350 );

        textSize(15)
        fill("black")
        text("Player - X (wins): "+score1, 360, 60)
        text("Player - Y (wins): "+score2, 360, 85)
        text("Draws: "+score3, 360, 110)

        textSize(20)
        fill("black")
        text("Turns: "+tie, 275, 25)
        fill ("black");
        textSize  (20) ;

        if( player === 1){
            text ("X turn",180,25);
        }
            if( player === 2){
            text ("O turn",180,25);
        }
    }

    c1.scale = 0.3;
    c2.scale = 0.3;
    c3.scale = 0.3;
    c4.scale = 0.3;
    c5.scale = 0.3;
    c6.scale = 0.3;
    c7.scale = 0.3;
    c8.scale = 0.3;
    c9.scale = 0.3;
    c10.scale = 0.3;
    c11.scale = 0.3;
    c12.scale = 0.3;
    c13.scale = 0.3;
    c14.scale = 0.3;
    c15.scale = 0.3;
    c16.scale = 0.3;
    c17.scale = 0.3;
    c18.scale = 0.3;
    replay.scale = 0.25;
    play.scale = 0.3;

    if (game === "intro") {
        play.visible = true
        if (mousePressedOver(play)) {
            game = "tie";
            play.visible = false;
            replay.visible = true;
        }
    }
   
   
    if (game === "tie") {
        if (player === 1 && mousePressedOver(c1)&& c111 === 0){
            tie = tie + 1 ;
      
            c1.visible = true;
            c1.scale = 0.17 ;
            c1.visible = true ;
            c111 = 1
            player = 2 ;
          }
          
          if (player === 1 && mousePressedOver(c2)&& c22 === 0 ){
              tie = tie + 1 ;
      
              c2.visible = true
              c2.scale = 0.17 ;
              c2.visible = true ;
              c22 = 1 ;
              player = 2 ;
          }
      
          if (player === 1 && mousePressedOver(c3)&& c33 === 0 ){
              tie = tie + 1 ;
      
              c3.visible = true
              c3.scale = 0.17 ;
              c3.visible = true ;
              c33 = 1 ;
              player = 2 ;
              }
          if (player === 1 && mousePressedOver(c4)&& c44 === 0 ){
            tie = tie + 1 ;
      
            c4.visible = true
            c4.scale = 0.17 ;
            c4.visible = true ;
            c44 = 1 ;
            player = 2 ;
          } 
          if (player === 1 && mousePressedOver(c5)&& c55 === 0 ){
            tie = tie + 1 ;
      
            c5.visible = true
            c5.scale = 0.17 ;
            c5.visible = true ;
            c55 = 1 ;
            player = 2 ;
          }
          if (player === 1 && mousePressedOver(c6)&& c66 === 0 ){
            tie = tie + 1 ;
      
            c6.visible = true;
            c6.scale = 0.17 ;
            c6.visible = true ;
            c66 = 1 ;
            player = 2 ;
          }
          if (player === 1 && mousePressedOver(c7)&& c77 === 0 ){
            tie = tie + 1 ;
      
            c7.visible = true;
            c7.scale = 0.17 ;
            c7.visible = true ;
            c77 = 1 ;
            player = 2 ;
          }  
          if (player === 1 && mousePressedOver(c8)&& c88 === 0 ){
            tie = tie + 1 ;
      
            c8.visible = true
            c8.scale = 0.17 ;
            c8.visible = true ;
            c88 = 1 ;
            player = 2 ;
          }
          if (player === 1 && mousePressedOver(c9)&& c99 === 0 ){
            tie = tie + 1 ;
      
            c9.visible = true;
            c9.scale = 0.17 ;
            c9.visible = true ;
            c99 = 1 ;
            player = 2 ;
          }
          
          
          
          if (player === 2 && mousePressedOver(c10)&& c111 === 0){
            tie = tie + 1 ;
      
            c10.visible = true;
            c10.scale = 0.17 ;
            c10.visible = true ;
            c111 = 2 
            player = 1 ;
          }
          
            if (player === 2 && mousePressedOver(c11)&& c22 === 0 ){
            tie = tie + 1 ;
      
            c11.visible = true
            c11.scale = 0.18 ;
            c11.visible = true ;
            c22 = 2 ;
            player = 1 ;
          }
         if (player === 2 && mousePressedOver(c12)&& c33 === 0 ){
            tie = tie + 1 ;
      
            c12.visible = true;
            c12.scale = 0.18 ;
            c12.visible = true ;
            c33 = 2 ;
            player = 1 ;
          }
          if (player === 2 && mousePressedOver(c13)&& c44 === 0 ){
            tie = tie + 1 ;
      
            c13.visible = true
            c13.scale = 0.18 ;
            c13.visible = true ;
            c44 = 2 ;
            player = 1 ;
          }
          if (player === 2 && mousePressedOver(c14)&& c55 === 0 ){
            tie = tie + 1 ;
      
            c14.visible = true;
            c14.scale = 0.18 ;
            c14.visible = true ;
            c55 = 2 ;
            player = 1 ;
          }
          if (player === 2 && mousePressedOver(c15)&& c66 === 0 ){
            tie = tie + 1 ;
            c15.visible = true;
            c15.scale = 0.18 ;
            c15.visible = true ;
            c66 = 2 ;
            player = 1 ;
          }
          if (player === 2 && mousePressedOver(c16)&& c77 === 0 ){
            tie = tie + 1 ;
      
            c16.visible = true;
            c16.scale = 0.18 ;
            c16.visible = true ;
            c77 = 2 ;
            player = 1 ;
          }  
          if (player === 2 && mousePressedOver(c17)&& c88 === 0 ){
            tie = tie + 1 ;
      
            c17.visible = true;
            c17.scale = 0.18 ;
            c17.visible = true ;
            c88 = 2 ;
            player = 1 ;
          }
          if (player === 2 && mousePressedOver(c18)&& c99 === 0 ){
            tie = tie + 1 ;
      
            c18.visible = true;
            c18.scale = 0.18 ;
            c18.visible = true ;
            c99 = 2 ;
            player = 1 ;
          }
    }

    drawSprites();
   
    if( player === 1){
     text ("X turn",180,25);
   }
    if( player === 2){
     text ("O turn",180,25);
   }
    textSize (50);

  if (c111 === 1 && c22 === 1 && c33 === 1){
    game = "win";
    text ("X WIN",124,220);
    line (100 ,100 ,300,100);
    
  }
  
  if (c111 === 1 && c44 === 1 && c77 === 1){
        game = "win";

    text ("X WIN",124,220);
    line(100,100,100,300);
   
  }
  
  if (c111 === 1 && c55 === 1 && c99 === 1){
        game = "win";

    text ("X WIN",124,220);
    line (100,100,300,300);
   
  }
  
  if (c33 === 1 && c55 === 1 && c77 === 1){
        game = "win";

    text ("X WIN",124,220);
    line (300,100,100,300);
    
  }
  
  if (c22 === 1 && c55 === 1 && c88 === 1){
        game = "win";

    text ("X WIN",124,220);
    line(200,100,200,300);
   
  }
  
  if (c33 === 1 && c66 === 1 && c99 === 1){
        game = "win";

    text ("X WIN",124,220);
    line (300,100,300,300);
    
  }
  
  if (c44 === 1 && c55 === 1 && c66 === 1){
        game = "win";

    text ("X WIN",124,220);
    line (100 ,200,300,200);
    
  }
  
  if (c77 === 1 && c88 === 1 && c99 === 1){
        game = "win";

    text ("X WIN",124,220);
    line (100 ,300 ,300 ,300);
   
  }
  
  
  // O
  
  
  if (c111 === 2 && c22 === 2 && c33 === 2){
        game = "win";

    text ("O WIN",124.5,220);
     line (100 ,100 ,300,100);
  }
  
  if (c111 === 2 && c44 === 2 && c77 === 2){
        game = "win";

    text ("O WIN",124.5,220);
    line (100,100,100,300);
  

  }
  
  if (c111 === 2 && c55 === 2 && c99 === 2){
        game = "win";

    text ("O WIN",124.5,220);
line (100,100,300,300);

  }
  
  if (c33 === 2 && c55 === 2 && c77 === 2){
        game = "win";

    text ("O WIN",124.5,220);
    line(100,300,300,100);
   
  }
  
  if (c22 === 2 && c55 === 2 && c88 === 2){
        game = "win";

    text ("O WIN",124.5,220);
    line (200,100,200,300);

  }
  
  if (c33 === 2 && c66 === 2 && c99 === 2){
        game = "win";

    text ("O WIN",124.5,220);
    line (300,100,300,300);
    
  }
  
  if (c44 === 2 && c55 === 2 && c66 === 2){
        game = "win";

    text ("O WIN",124.5,220);
    line(100,200,300,200);
    
  }
  
  if (c77 === 2 && c88 === 2 && c99 === 2){
        game = "win";

    text ("O WIN",124.5,220);
    line(100,300,300,300);
    
  }
  if ( game === "tie" && tie === 9  ){
     text("TIE",160 ,219);
  }
  
   
   if ( game === "win" ){
      
      if(c111 === 0){
        c111 = 3  ;
      }
      if(c22 === 0){
        c22 = 3  ;
      }
      if(c33 === 0){
        c33 = 3  ;
      }
      if(c44 === 0){
        c44 = 3  ;
      }
      if(c55 === 0){
        c55 = 3  ;
      }
      if(c66 === 0){
        c66 = 3  ;
      }
      if(c77 === 0){
        c77 = 3  ;
      }
      if(c88 === 0){
        c88 = 3  ;
      }
      
      if(c99 === 0){
        c99 = 3  ;
      }
     
   }
    

   if (game === "win" || tie === 9) {
    if (mousePressedOver(replay)) {
        player = 1;
        game = "intro";
        tie = 0;
        c111 = 0;
        c22 = 0;
        c33 = 0;
        c44 = 0;
        c55 = 0;
        c66 = 0;
        c77 = 0;
        c88 = 0;
        c99 = 0;
        c1.visible = false;
        c2.visible = false;
        c3.visible = false;
        c4.visible = false;
        c5.visible = false;
        c6.visible = false;
        c7.visible = false;
        c8.visible = false;
        c9.visible = false;
        c10.visible = false;
        c11.visible = false;
        c12.visible = false;
        c13.visible = false;
        c14.visible = false;
        c15.visible = false;
        c16.visible = false;
        c17.visible = false;
        c18.visible = false;
    }
   }

    console.log(c55);
}