
bb.Practise = function (game) {
   
   
    var bulletTime; 
    var bullets ;
    var player;
    var cursor;
    var fireButton2;
    var tile;
    var enmBullet;
    var enmB;
    var enmBtime;
    var livingEnem =[];
    var HP;
    var CouHP;
    var Score;
    var ScoreS;
    var ScoreT;
    var ScoreGO;
    var ScoreTPF;
    var GameO;
    var PlayA;
    var Paused;
    var Tank;
    var Tanks;
    var TanksT;
    var Zip;
    var Zips;
    var ZipT;
    var CC;
    var Mh;
    
    var EnmPbusts;
    var EnmPbust;
    var PBusts;
    var PBustp;
    
    var  WindowAbN;
    var SoundTN;
    var SoundB2;
    var Close2;
    var BC;
    var Con2;
    var RockSo;
    var highScore;
    
 
    
    var coin;
    var coins;
    var Plife;
    var Plifes;
    var Effects;
    var Effect;
    var Explosions1;
    var Explosion1;
    var Explosions2;
    var Explosion2;
    var coinTime;
    var lifeTime;
    
    var enemyS;
    var enTime;
    var enm;
    var c;
    var UpTime;
    
    var backPg;
    var count;
    
    var B1back;
    var B2options;
    var B3playPuse;
    
    var leftB;
    var rightB;
    var upB;
    var downB;
    var bulletB;
    var rocketB;
    var left;
    var right;
    var up;
    var down;
    var shoot;
    var rocket;
    var RocketButton;
    var TankBuG;
    var TankBu;
    var TankGT;
    var Rockets;
    var Rocket;
    var RocketT;
    var Rcount;
    var Rc;
    var Rshow;
    var Rshows;
    var Rbullets;
    var Rbullet;
    var RbT;
    
   var PBs;
   var CoinS;
   var PGsound; 
   var bulletHitS;
   var LifeSou;
   var enemyPFs;
    var GaExpS;
    var GamSo;
    var RockSo;
    var SoundT3;
    var SoundB3;

};

bb.Practise.prototype = {

    
   
    
    
    create: function(){
        
         this.game.renderer.roundPixels = true;
          this.physics.startSystem(Phaser.Physics.ARCADE);
        
        
        
        
        
       
     GamSo=this.add.audio('GamSo');
    
        
       if(bb.Sound) {
         GamSo.play();
           
       GamSo.volume=1.5; 
       GamSo.loopFull(); 
       }
        
      CoinS=this.add.audio('CoinS');
      CoinS.volume=3.3;    
        
       PBs= this.add.audio('PBs');
       PBs.volume=3.3;  
        
       PGsound=this.add.audio('PGsound');
        PGsound.volume=2.2;
        
        
         BC=this.add.audio('BCsound');    
         BC.volume=3.1;  
        
        
        RockSo=this.add.audio('RockSo');  
        RockSo.volume=3.3; 
        
        bulletHitS=this.add.audio('bulletHitS');
        bulletHitS.volume=3.3; 
        
          LifeSou=this.add.audio('LifeSou');
        LifeSou.volume=3.3; 
        
            GaExpS=this.add.audio('GaExpS');
           GaExpS.volume=3.3; 
        
        
         backPg=this.add.sprite(0,0,'phaser1');
   
        backPg.scale.setTo(0.7911,1.17);
        backPg.alpha=6;
        
        
       tile = this.add.tileSprite(0,0,800,480,'phaser1');
        tile.tileScale.set(0.7911,1.17);
     
             
       
        bulletTime=0;
        enTime=0;
        c=0;
        UpTime=0;
         b=true;
         count=0;
        enmBtime=0;
        coinTime=0;
        lifeTime=0;
        CouHP=0;
        Score=0;
       TanksT=0;
        ZipT=0;
        left=false;
        right=false;
        up=false;
        down=false;
        shoot=false;
        rocket=false;
        TankGT=0;
        RocketT=0;
        Rcount=0;
        Rc=0;
        RbT=0;
        Con=false;
        CC=0;
        Mh=0;
        highScore=localStorage.getItem('highscore');
        
        
        //added bullets group
        
     bullets = this.add.group();
   
 bullets.enableBody = true;
    
bullets.physicsBodyType = Phaser.Physics.ARCADE;
    
bullets.createMultiple(30, 'bullet');
    
    
bullets.setAll('anchor.x', 0.5);
 
  bullets.setAll('anchor.y', 1);
  
  bullets.setAll('outOfBoundsKill', true);
   
 bullets.setAll('checkWorldBounds', true);   
        
        
     /*Added player sprite */
        
         player = this.add.sprite(70,80,'PlayerP',0);
        player.anchor.set(0.5,0.5);
        this.physics.arcade.enable(player);
        player.scale.set(0.5,0.5);
         player.body.drag.set(100);
         player.body.maxVelocity.set(300);
        player.body.collideWorldBounds=true;
       
        
      /*Added enemys group */
        
        enemyS =this.add.group();
        enemyS.enableBody = true;
    
        enemyS.physicsBodyType = Phaser.Physics.ARCADE;
        
        enemyS.createMultiple(45, 'EnemyP1');
        
        enemyS.setAll('anchor.x', 0.5);
 
        enemyS.setAll('anchor.y', 0.5);
        
     
        
        
        
  
        /*Added Tanks group */
         
        
          Tanks =this.add.group();
        Tanks.enableBody = true;
    
        Tanks.physicsBodyType = Phaser.Physics.ARCADE;
        
        Tanks.createMultiple(45, 'Tank');
        
        Tanks.setAll('anchor.x', 0.5);
 
        Tanks.setAll('anchor.y', 0.5);
        
        
        
        
          
    /*Added vehicles group */
             
        Zips =this.add.group();
        Zips.enableBody = true;
    
        Zips.physicsBodyType = Phaser.Physics.ARCADE;
        
        Zips.createMultiple(45, 'Zip');
        
        Zips.setAll('anchor.x', 0.5);
 
        Zips.setAll('anchor.y', 0.5);
        
        
       
        
        
        
        //enemys bullet group
        
        enmBullet=this.add.group();
        enmBullet.enableBody = true;
        enmBullet.physicsBodyType = Phaser.Physics.ARCADE;
       enmBullet.createMultiple(30, 'EnemyB');
        enmBullet.setAll('anchor.x', 0.5);
        enmBullet.setAll('anchor.y', 1);
        enmBullet.setAll('outOfBoundsKill', true);
        enmBullet.setAll('checkWorldBounds', true); 
        
        
        //tanks bullet group
        TankBuG=this.add.group();
        TankBuG.enableBody = true;
        TankBuG.physicsBodyType = Phaser.Physics.ARCADE;
       TankBuG.createMultiple(30, 'TankBu');
       TankBuG.setAll('anchor.x', 0.5);
        TankBuG.setAll('anchor.y', 1);
        TankBuG.setAll('outOfBoundsKill', true);
        TankBuG.setAll('checkWorldBounds', true);  
        
        
        //rocket launcher group which will touch player plane for store a new launcher
        Rockets=this.add.group();
        Rockets.enableBody = true;
        Rockets.physicsBodyType = Phaser.Physics.ARCADE;
        Rockets.createMultiple(30, 'Rocket2');
        Rockets.setAll('anchor.x', 0.5);
        Rockets.setAll('anchor.y', 0.5);
        Rockets.setAll('outOfBoundsKill', true);
        Rockets.setAll('checkWorldBounds', true);
        
        
        //rocket launcher group which will fire  player plane for damage tanks
        Rbullets=this.add.group();
        Rbullets.enableBody = true;
        Rbullets.physicsBodyType = Phaser.Physics.ARCADE;
        Rbullets.createMultiple(3, 'Rbullet');
        Rbullets.setAll('anchor.x', 0.5);
        Rbullets.setAll('anchor.y', 0.5);
        Rbullets.setAll('outOfBoundsKill', true);
        Rbullets.setAll('checkWorldBounds', true);
        
        //rocket launcher group which will count and show 
         Rshows=this.add.group();
        Rshows.enableBody = true;
        Rshows.physicsBodyType = Phaser.Physics.ARCADE;
        Rshows.createMultiple(3, 'Rocket');
        
       
        
        
        
      //coins group
        coins=this.add.group();
        coins.enableBody = true;
        coins.physicsBodyType = Phaser.Physics.ARCADE;
        coins.createMultiple(30, 'CoinP');
        coins.setAll('anchor.x', 0.5);
        coins.setAll('anchor.y', 0.5);
        coins.setAll('outOfBoundsKill', true);
        coins.setAll('checkWorldBounds', true);
        coins.forEach(function(coinp){
            
            coinp.animations.add('CoinP');
            
        });
        
      
        //player lifes group
        Plifes=this.add.group();
        Plifes.enableBody = true;
       Plifes.physicsBodyType = Phaser.Physics.ARCADE;
       Plifes.createMultiple(30, 'Plife');
        Plifes.setAll('anchor.x', 0.5);
        Plifes.setAll('anchor.y', 0.5);
        Plifes.setAll('outOfBoundsKill', true);
        Plifes.setAll('checkWorldBounds', true);
        Plifes.forEach(function(Pl){
            
            Pl.animations.add('Plife');
            
        });   
        
        
        
        
        
        Effects=this.add.group();
        Effects.enableBody = true;
        Effects.physicsBodyType = Phaser.Physics.ARCADE;
        Effects.createMultiple(30, 'EffectS');
        Effects.setAll('anchor.x', 0.5);
        Effects.setAll('anchor.y', 0.5);
        Effects.setAll('outOfBoundsKill', true);
        Effects.setAll('checkWorldBounds', true);
        Effects.forEach(function(EffectA){
            
            EffectA.animations.add('EffectS');
            
        });
        
        
     
        //enemy damage animation group
        
        EnmPbusts=this.add.group();
        EnmPbusts.enableBody = true;
        EnmPbusts.physicsBodyType = Phaser.Physics.ARCADE;
        EnmPbusts.createMultiple(30, 'EnemyPbust');
        EnmPbusts.setAll('anchor.x', 0.5);
        EnmPbusts.setAll('anchor.y', 0.5);
        EnmPbusts.setAll('outOfBoundsKill', true);
        EnmPbusts.setAll('checkWorldBounds', true);
        EnmPbusts.forEach(function(EPBust){
            
            EPBust.animations.add('EnemyPbust');
            
        });
        
      
        
        
        
        Explosions1=this.add.group();
         Explosions1.enableBody = true;
         Explosions1.physicsBodyType = Phaser.Physics.ARCADE;
         Explosions1.createMultiple(30, 'Explosion');
         Explosions1.setAll('anchor.x', 0.5);
         Explosions1.setAll('anchor.y', 0.5);
         Explosions1.setAll('outOfBoundsKill', true);
         Explosions1.setAll('checkWorldBounds', true);
         Explosions1.forEach(function(Exp1){
            
            Exp1.animations.add('Explosion');
            
        });
        
        
        
        
     
        
        
         Explosions2=this.add.group();
        Explosions2.enableBody = true;
        Explosions2.physicsBodyType = Phaser.Physics.ARCADE;
        Explosions2.createMultiple(1, 'Explosion2');
        Explosions2.setAll('anchor.x', 0.5);
        Explosions2.setAll('anchor.y', 0.5);
      
        Explosions2.forEach(function(Exp2){
            
            Exp2.animations.add('Explosion2');
            
        });
        
        
        
  
        
        //player damage animation group
        PBusts=this.add.group();
        PBusts.enableBody = true;
        PBusts.physicsBodyType = Phaser.Physics.ARCADE;
        PBusts.createMultiple(30, 'PBust');
        PBusts.setAll('anchor.x', 0.5);
        PBusts.setAll('anchor.y', 0.5);
        PBusts.setAll('outOfBoundsKill', true);
        PBusts.setAll('checkWorldBounds', true);
        PBusts.forEach(function(Pb){
            
            Pb.animations.add('PBust');
            
        });
        
        
           //healthbar sprite
        
        HP=this.add.sprite(20,2,'H0');
        HP.scale.set(0.12,0.12);
        
        
        ScoreS=this.add.sprite(150,12,'Score');
        ScoreS.scale.set(0.3,0.3);
       
        Paused=this.add.sprite(this.world.width/2,this.world.height/2,'Paused');
        Paused.anchor.set(0.5,0.5);
        Paused.visible=false;
        
        
        GameO=this.add.sprite(this.world.width/2,this.world.height/2-40,'GameO');
        GameO.anchor.set(0.5,0.5);
        GameO.scale.set(1.2,1.2);
        GameO.visible=false;
        
        
        ScoreT=this.add.sprite(this.world.width/2-40,this.world.height/2+35,'Yscore');
        ScoreT.anchor.set(0.5,0.5);
        ScoreT.scale.set(0.5,0.5);
        ScoreT.visible=false;
        
        
        ScoreTPF=this.add.text(250,5,Score, { font: '30px Arial', fill: '#fff' });
        
        
         

        
         ScoreGO=this.add.text(this.world.width/2+167,this.world.height/2+8,Score, { font: '50px Arial', fill: '#fff' });
         ScoreGO.visible=false;
            
          PlayA=this.add.button(this.world.width/2,340, 'PlayA', actionOnClickPlay, this);
         PlayA.anchor.set(0.5,0.5);
          PlayA.scale.set(0.4,0.4);
          PlayA.visible=false;
        
        function actionOnClickPlay(){
             
            PBs.play();
            GamSo.stop();
            this.state.start('Practise');
            
        }
        
       
    //back button    
 
          B1back=this.add.button(this.world.width - 170,0, 'B1back', actionOnClick1B, this);
          B1back.scale.set(0.74,0.74);
        
        function actionOnClick1B(){
            
            PBs.play();
            GamSo.stop();
            this.state.start('Menu');
        }
        
        
       //options button
        
          B2options=this.add.button(this.world.width - 64,0, 'B2options',actionOnClick2B,this);
          B2options.scale.set(0.74,0.74);
        
          function actionOnClick2B(){
            
           PBs.play();
              
               WindowAbN.visible=true;
            Close2.visible=true;
            SoundB2.visible=true;
            SoundTN.visible=true;
            SoundT3.visible=true; 
             SoundB3.visible=true;
              
          }
        
        //play pause button
         
           B3playPuse =this.add.button(this.world.width - 117,0, 'B3playPuse',actionOnClick3B, this,0,0,0);
        B3playPuse.scale.set(0.58,0.58);
        
        var c=false;
        
        function actionOnClick3B(){
            
          
            Paused.visible=true;
             B3playPuse.setFrames(1,1,1);
            
              this.game.paused=true;  
            
           
            
            if( GameO.visible==true &&  ScoreGO.visible==true && ScoreT.visible==true &&  PlayA.visible==true ){
            GameO.visible=false;
            ScoreT.visible=false;
            ScoreGO.visible=false;
            PlayA.visible=false;
            c=true;
            }
            
       
            
             this.input.onTap.addOnce( function changeMummy(){ this.game.paused=false;  
                   
                                                              
                PBs.play();                                              
                                                              
                Paused.visible=false;
                 B3playPuse.setFrames(0,0,0);                                               
                                                              
                  if(c==true){                                         
          
              GameO.visible=true;
            ScoreT.visible=true;
            ScoreGO.visible=true;
            PlayA.visible=true; }
                    },this);
          
          
        }
        
             
   
  
    
        
        
         this.gamepad = this.game.plugins.add(Phaser.Plugin.VirtualGamepad);
        
        // Added a joystick in the game world(only one is allowed right now)
        this.joystick = this.gamepad.addJoystick(100, 380, 0.7, 'gamepad');
        
        
        
        
        
       //Player bullet  button
        
        bulletB=this.add.button(this.world.width/2+256,400, 'bulletB');
        bulletB.scale.set(0.15,0.15);
        bulletB.anchor.set(0.5,0.5);
        bulletB.events.onInputDown.add(function b1(){ shoot=true; },this);
        bulletB.events.onInputUp.add(function b2(){ shoot=false; },this);
        
        
        
        //rocket launcher firing button
        rocketB=this.add.button(this.world.width/2+330,360, 'rocketB');
        rocketB.scale.set(0.15,0.15);
        rocketB.anchor.set(0.5,0.5);
        rocketB.events.onInputDown.add(function r1(){ rocket=true; },this);
        rocketB.events.onInputUp.add(function r2(){ rocket=false; },this);     
        
     
        
        // window
      WindowAbN=this.add.sprite(this.world.width/2,this.world.height/2,'Window1');
        WindowAbN.anchor.set(0.5,0.5);
        WindowAbN.scale.set(0.6,0.6);
        
       WindowAbN.visible=false;
        
        //music text image
        
        SoundTN=this.add.sprite(this.world.width/2-25,this.world.height/2-10,'MusicT');
        SoundTN.anchor.set(0.5,0.5);
        SoundTN.scale.set(0.35,0.35);
        SoundTN.visible=false;      
        
       
      
        //sound button part
        SoundB2=this.add.button(this.world.width/2+65,this.world.height/2-10,'SoundB',ActionOnBS); 
        SoundB2.anchor.set(0.5,0.5);
        SoundB2.scale.set(0.7,0.7);
        SoundB2.visible=false;
        
        
        function ActionOnBS(){
            
            if(GamSo.isPlaying ){
                GamSo.pause();
                bb.Sound=false;
                 SoundB2.loadTexture('SoundOf');
                
            }
            
            
            
            
            else if (GamSo.paused){
                GamSo.resume();
                bb.Sound=true;
                 SoundB2.loadTexture('SoundB'); 
            }
            
            
            else{
                
               GamSo.play();
                bb.Sound=true;
                 SoundB2.loadTexture('SoundB');  
                
                
                
            }
            
            
        }
        
    //sound text image
      SoundT3=this.add.image(this.world.width/2-30,this.world.height/2+40,'SoundT');
       SoundT3.anchor.set(0.5,0.5);
        SoundT3.scale.set(0.35,0.35);
        SoundT3.visible=false; 
        
        
           //sound button 2 part
           SoundB3=this.add.button(this.world.width/2+65,this.world.height/2+40,'SoundB',ActionOnBM4);
        
        SoundB3.anchor.set(0.5,0.5);
        SoundB3.scale.set(0.7,0.7);
        SoundB3.visible=false;
        
        
        function ActionOnBM4(){
            
            
            if(bb.Sound2){
                
                
                bb.Sound2=false;
                SoundB3.loadTexture('SoundOf');
            }
            else {
              
                bb.Sound2=true;
                 SoundB3.loadTexture('SoundB');    
                
            }
            
         
         
            
        }
        
        
        //close button part
    
     Close2 =this.add.button(this.world.width/2+100,this.world.height/2-70,'Close',ActionOnBC,this);
        Close2.anchor.set(0.5,0.5);
        Close2.scale.set(0.6,0.6);
        Close2.visible=false;
        
        function ActionOnBC(){
            BC.play();
            
            Close2.visible=false;
            WindowAbN.visible=false;
            SoundB2.visible=false;
            SoundTN.visible=false;  
            SoundT3.visible=false; 
             SoundB3.visible=false;
            
        }    
        
        
        
      
         cursor = this.input.keyboard.createCursorKeys();
  
       fireButton2 = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        RocketButton=this.input.keyboard.addKey(Phaser.Keyboard.SHIFT);
       
        
    },




update: function(){
    
    
    
    if(bb.Sound)
SoundB2.loadTexture('SoundB'); 
    else
    SoundB2.loadTexture('SoundOf');
    
    
    
    if(bb.Sound2)
    SoundB3.loadTexture('SoundB'); 
    
    
    else
     SoundB3.loadTexture('SoundOf');
    
    
   tile.tilePosition.x -=6;
     var n=this.rnd.between(2,3);
   
     var Y;
  
  
      
    //enemy plane part
    
    
    if(this.time.now>enTime)
        {
            // Every time rendom number of planes will visible in the game world 
          
            for(var i=0;i<=n;i++){
                
            enm= enemyS.getFirstExists(false);
            
           
            
           if(enm){
                     var t=i+1;
               if(i==0){
                enm.reset(this.rnd.between(840+(t*80),1190),this.rnd.between(80,199));}
                
               
               else{
                   
                    enm.reset(this.rnd.between(840+(t*80),1190),Y+40);
                   
               }
               
               enm.scale.set(0.4,0.4);
                enm.body.velocity.x=-100;
             
                enm.body.velocity.y=this.rnd.between(-20,17);
                 
            
                
                 Y=enm.y;
    
                  }
            
          }
            
            
    enTime=this.time.now+Phaser.Timer.SECOND*this.rnd.between(6,10);
            
        }
    
    
   
    
    //for every enemy
    
    enemyS.forEach(function(enm){
        
        if(enm.alive && enm.body.x<-88)
            enm.kill();
  
        
        
        if(enm.alive && enm.y>player.y+30 && enm.x<player.x+580 && enm.x!=player.x){
            enm.body.velocity.y=-25;
         
            
        }
        
        else if(enm.alive && enm.y<player.y-20 && enm.x<player.x+580){
            enm.body.velocity.y=35;
        }
          
            else if(enm.alive && enm.y<player.y+30 && enm.y>player.y-20){
           enm.body.velocity.x=- 188;
                
         
               
            }
            
         
        
    
       
    }); 
    
    
    //player plane damage animation part
    
    Explosions2.forEachAlive(function(item){
        
        item.x=player.x-20;
        item.y=player.y-47;
        
        
        
        
    });
   
    
    
 
    
    //Enemy Fire part
    
    
      
               if(this.time.now>enmBtime && enemyS.countLiving()>0 && player.alive){
                 
                   //Every Time check how many Enemy Plane are visible in the game world
                   // & every visible enemy plane push in gf array variable
                   //& every time set one bullet on all visible enemy plane using loop
                   
                   
                    var gf=[];
                   gf.length=0;
             enemyS.forEachAlive(function(item)
                                
                                {
                 gf.push(item);
                 
             });
             
           
                   
            for(var j=0;j<enemyS.countLiving();j++){
                
                  var e=gf[j];
                
              
                if(e.x>player.x+120 && e.y<player.y+55 && e.y>player.y-30){
                
                enmB=enmBullet.getFirstExists(false);
                   
              
        
             if(enmB && e){
                 
                 
                 enmB.reset(e.x-40,e.y+10);
                 enmB.scale.set(0.13,0.13);
                 enmB.body.velocity.x=-470;
                 
               
                 }   
           
                            }
            
            }
                   
                  
           enmBtime=this.time.now+300;  
             
         }
    
    
    
  
           
    
    
    
    
    //Tanks Bullet part
    
               if(this.time.now>TankGT && Tanks.countLiving()>0 && player.alive){
                 
                   //Every Time check how many Enemy tanks are visible in the game world
                   // & every visible tanks push in tf array variable
                   //& every time set one bullet on all visible tanks using loop
                   
                   
                    var tf=[];
                   tf.length=0;
             Tanks.forEachAlive(function(item)
                                
                                {
                 tf.push(item);
                 
                
                 
             });
             
           
                   
            for(var j=0;j<Tanks.countLiving();j++){
                
                  var Tb=tf[j];
                
              
                if(Tb.x>player.x+120 && Tb.x<player.x+370) {
               
                    TankBu=TankBuG.getFirstExists(false);
                   
              
        
             if(TankBu && Tb){
                 
                
                 TankBu.reset(Tb.x-49,Tb.y-49);
                 TankBu.scale.set(0.13,0.13);
                 TankBu.rotation=-0.5;
                
                  TankBu.body.velocity.set(-100,-90);
                 
               
                 }   
           
                            }
            
            }
                   
                  
           TankGT=this.time.now+800;  
             
         }
  
    
    
    
      //Rocket part
    
    if(this.time.now>RocketT && player.alive && Rcount>=0 && Rcount<3){
        
      Rc++;
        
         //every time one rocket launcher sprite will visible in the game world
        
        Rocket =Rockets.getFirstExists(false);
        if(Rocket && Rc>2){
           
            Rocket.reset(this.world.width-20,this.rnd.between(30,280));
            Rocket.scale.set(0.45,0.45);
            Rocket.body.velocity.x=-120;
            
            
        }
        
        if(Rc<=15)
        RocketT=this.time.now+Phaser.Timer.SECOND*this.rnd.between(3,13);
        
         else if(Rc>15 && Rc<=25 )
        RocketT=this.time.now+Phaser.Timer.SECOND*this.rnd.between(2.5,9);
        
        
          else if(Rc>25 && Rc<=35 )
        RocketT=this.time.now+Phaser.Timer.SECOND*this.rnd.between(1.7,7);
        
          else if(Rc>35 && Rc<=45 )
        RocketT=this.time.now+Phaser.Timer.SECOND*this.rnd.between(1,5);
        
         else if(Rc>45)
        RocketT=this.time.now+Phaser.Timer.SECOND*this.rnd.between(1,9);
        
    } 
    
    
    
  
    
    //coin  part
    
    if(this.time.now>coinTime && player.alive){
        
        count++;
        
         //every time one coin sprite will visible in the game world
        
        coin = coins.getFirstExists(false);
        if(coin && count>2){
           
            coin.reset(this.world.width-20,this.rnd.between(30,280));
            coin.scale.set(0.18,0.18);
          
            coin.animations.play('CoinP',5,true,this);
            coin.body.velocity.x=-120;
            
            
        }
        
        
        coinTime=this.time.now+Phaser.Timer.SECOND*this.rnd.between(1,19);
        
    }
    
    
  
   //Player life part
    
    
    
    if(this.time.now>lifeTime && CouHP>0 && CouHP<3){
       
       //every time one life sprite will visible in the game world
        
        
       Plife=Plifes.getFirstExists(false);
       
       if(Plife)
       
       {
         Plife.reset(this.world.width-20,this.rnd.between(30,280));
         Plife.scale.set(0.18,0.18);
         Plife.animations.play('Plife',10,true,this); 
         Plife.body.velocity.x=-120;  
       
       }
       
    
        lifeTime=this.time.now+Phaser.Timer.SECOND*this.rnd.between(1,19);
   }
  
 
    
    
    
  
    
     if(this.time.now>ZipT  ){
       
         var S=this.rnd.between(2,5);
         var X;
         
         for(var i=1;i<=S;i++){
         
         
        Zip=Zips.getFirstExists(false);
        
        if(Zip){
            
            if(i==0){
            
            Zip.reset(this.world.width-820,this.world.height-45);
                
            }
            
            else{
                
                Zip.reset(X-120,this.world.height-45);
                
            }
            
            Zip.scale.set(0.52,0.52);
            
            Zip.body.velocity.x=20;
            
            
        }
             X=Zip.x;
        
         }
      ZipT=  this.time.now+Phaser.Timer.SECOND*this.rnd.between(30,42);
        
        
    }
    
    
    
    
    
    
    
    if(this.time.now>TanksT ){
        
      CC++
        if(CC>5){
        Tank=Tanks.getFirstExists(false);
        
        if(Tank){
            
            Tank.reset(this.world.width+20,this.world.height-85);
            Tank.scale.set(0.48,0.48);
            
            Tank.body.velocity.x=-110;
            
         }
        }
        
        
        if(CC<=10)
        
        TanksT=this.time.now+Phaser.Timer.SECOND*this.rnd.between(8,15);
        
        
        else if(CC>10 && CC<=15)
        TanksT=this.time.now+Phaser.Timer.SECOND*this.rnd.between(6,10);
        
        
        
         else if(CC>15 && CC<=20)
        TanksT=this.time.now+Phaser.Timer.SECOND*this.rnd.between(5,7);
        
        
         else if(CC>20 && CC<=26)
        TanksT=this.time.now+Phaser.Timer.SECOND*this.rnd.between(2,3);
        
         else if(CC>26 && CC<=29)
        TanksT=this.time.now+Phaser.Timer.SECOND*this.rnd.between(0.8,1.3);
        
        
         else if(CC>29 && CC<=36)
        TanksT=this.time.now+Phaser.Timer.SECOND*this.rnd.between(4,6);
        
        
         else if(CC>36 && CC<=40)
        TanksT=this.time.now+Phaser.Timer.SECOND*this.rnd.between(1,2.5);
        
        
         else if(CC>40 && CC<=45)
        TanksT=this.time.now+Phaser.Timer.SECOND*this.rnd.between(3,6);
        
        
         else if(CC>45)
        TanksT=this.time.now+Phaser.Timer.SECOND*this.rnd.between(2,5);
        
    }
    
    
    
  //tanks killing part
    
       Tanks.forEachAlive(function(item)
                                
                                {
                 if(item.body.x<-120)
                     item.kill();
                 
                
                 
             });
    
   
    
   //Zips killing part  
    
       Zips.forEachAlive(function(item)
                                
                                {
                 if(item.body.x>850)
                     item.kill();
                 
                
                 
             });
    
    
    
    
    //player Movement part using keyboard key or visual button

    if (player.alive)
    {
       
        player.body.velocity.setTo(0, 0);

        if (cursor.left.isDown )
        {
            player.body.velocity.x = -200;
        }
        else if (cursor.right.isDown )
        {
            player.body.velocity.x = 200;
        }
        
        
        if (cursor.up.isDown )
        {
            player.body.velocity.y = -200;
        }
        else if (cursor.down.isDown )
        {
            player.body.velocity.y = 200;
        }

        
        if (fireButton2.isDown || shoot)
        {
           
           this.Shoot();
           
        }
        
        if(RocketButton.isDown || rocket)
            {
                
               this.FireRocket();
                
                
            }
        
        if(this.joystick.properties.inUse){
        
  player.body.velocity.x = 3 * this.joystick.properties.x;
 player.body.velocity.y = 3 * this.joystick.properties.y;
               
          
        }
        
        //checking collide with one sprite to another sprite using overlap method when collided with one to another then perform a overlap method
        
     this.physics.arcade.overlap(bullets, enemyS, this.collisionHandler, null, this);
        
     this.physics.arcade.overlap(player,enmBullet, this.playerKill, null, this); 
     
    this.physics.arcade.overlap(player,coins, this.UpdateScore, null, this); 
    
    this.physics.arcade.overlap(player,Plifes, this.lifeTouch, null, this); 
    
     this.physics.arcade.overlap(player,TankBuG, this.playerkill2, null, this); 
        
     this.physics.arcade.overlap(player,Rockets, this.UpdateRocket, null, this);  
    
    this.physics.arcade.overlap(Rbullets,Tanks, this.TankKill, null, this);  
         
    }
    
    
    
    

    
  
 
    
},
    
    
//player Bullet part
    
Shoot: function(){
    
   if (this.time.now>bulletTime)
  
    {
  
        //  Collect first bullet from bullets group
 
    var   bullet = bullets.getFirstExists(false);

    
    if (bullet)
   
     {
           
 //  One bullet visible in the game world
       
     bullet.reset(player.body.x+60,player.body.y+18);

            bullet.body.velocity.x =1100;
             
             if(bb.Sound2)
             PGsound.play();
            bullet.scale.set(0.43,0.43);
          bulletTime = this.time.now +200;
     
   
   
          }
    }

},
    

   // rocket firing part
FireRocket: function(){
    
if( this.time.now>RbT && Rcount>=1 && Rcount<=3){
    
    
 Rbullet=Rbullets.getFirstExists(false);
    
  var m=Rshows.getAt(Rcount-1);
    if(m) {
    m.kill();
    }
        
    if(Rbullet){
        
        Rbullet.reset(player.x,player.y);
        
        Rbullet.scale.set(0.17,0.17);
         Rbullet.body.angularVelocity=-90;
         Rbullet.body.velocity.setTo(130,120);
        
        Rcount--;
        
    
    }
    
 RbT=this.time.now +200;    
   

}
    
 

    
}, 
    
    
    //tank Damage part
    
    
    
TankKill: function(Rb,Tankb){
    
 if (player.alive)  {
  Rb.kill();  

if(bb.Sound2)
GaExpS.play();  
   
    ExplosionT=Explosions1.getFirstExists(false);
    
    if(ExplosionT){
        
        ExplosionT.reset(Tankb.x,Tankb.y-10);
        ExplosionT.animations.play('Explosion',100,false,true);
    }  
    
    
    Tankb.kill();
   
 }
    
},
    
    
    
    
//Player Bullet & Enemy Plane Collide part
    
collisionHandler: function(bullet,enm){
    
    bullet.kill();
    enm.kill();
    
    if(bb.Sound2)
    GaExpS.play();
    
    //Enemy plane damage animation play
    
    EnmPbust=EnmPbusts.getFirstExists(false);
    
    if(EnmPbust){
        
        EnmPbust.reset(enm.x,enm.y);
        EnmPbust.scale.set(0.4,0.4  );
        EnmPbust.animations.play('EnemyPbust',10,false,true);
    }
    
    
},
    
    
    
    
    
 //Player & Enemys bullet Collide part   

playerKill: function(player,enmB){
    
    CouHP++;
    
  
    enmB.kill();
    
     enmBullet.callAll('kill');
    
    if(bb.Sound2)
    bulletHitS.play();
    
    //Player damage animation play 
    
    Explosion1=Explosions1.getFirstExists(false);
    
    if(Explosion1){
        
        Explosion1.reset(player.x,player.y-10);
        Explosion1.animations.play('Explosion',100,false,true);
    }
    
    
    //Loaded first Healthbar Texture
    
    if(CouHP==1){
        HP.loadTexture('H1',true);
     
    }
    
    // healthbar Texture Load &  player Plane damage Animation playing part
    
    else if(CouHP==2){
         HP.loadTexture('H2',true);
        
        Explosion2=Explosions2.getFirstExists(false);
        
         if(Explosion1){
        
        Explosion2.reset(player.x,player.y);
         Explosion2.scale.set(0.6,0.4);     
        Explosion2.animations.play('Explosion2',10,true,true);
              }
         
    }
    
    //when Player Killed
    
    else if(CouHP==3){
     HP.loadTexture('H3',true);
    
    if(bb.Sound2)
    GaExpS.play();
        
     player.kill();
     Explosion2.kill();
       
        
     PBustp=PBusts.getFirstExists(false);
        
         if(PBustp){
        
        PBustp.reset(player.x,player.y);
        PBustp.scale.set(0.6,0.4);     
        PBustp.animations.play('PBust',10,false,true);
             
       GameO.visible=true;
       PlayA.visible=true; 
        tile.alpha=0.6; 
        backPg.alpha=0; 
        ScoreT.visible=true;
        ScoreGO.text=Score;
        ScoreGO.visible=true;  
             
             
             
             if(highScore==null){
             
             localStorage.setItem('highscore',Score);
                 
             highScore=localStorage.getItem('highscore');
                  
             }
           
             
             else if(Score>localStorage.getItem('highscore')){
                 
                 localStorage.setItem('highscore',Score);
                 highScore=localStorage.getItem('highscore');
                
             }
         
            

             
              }    
        
    }
    
},
   
    
    
 // player and tanks bullet collide part   
    
playerkill2: function(player,TankB){
        
          CouHP++;
    
  
    TankB.kill();
    
     TankBuG.callAll('kill');
    
    
    if(bb.Sound2)
    bulletHitS.play();
    
    //Player damage animation play 
    
    Explosion1=Explosions1.getFirstExists(false);
    
    if(Explosion1){
        
        Explosion1.reset(player.x,player.y-10);
        Explosion1.animations.play('Explosion',100,false,true);
    }
    
    
    //Loaded first Healthbar Texture
    
    if(CouHP==1){
        HP.loadTexture('H1',true);
     
    }
    
    // healthbar Texture Load &  playerPlane damage Animation playing part
    
    else if(CouHP==2){
         HP.loadTexture('H2',true);
        
        Explosion2=Explosions2.getFirstExists(false);
        
         if(Explosion1){
        
        Explosion2.reset(player.x,player.y);
         Explosion2.scale.set(0.6,0.4);     
        Explosion2.animations.play('Explosion2',10,true,true);
              }
         
    }
    
    //when Player killed
    
    else if(CouHP==3){
     HP.loadTexture('H3',true);
    
    if(bb.Sound2)
    GaExpS.play();
        
     player.kill();
     Explosion2.kill();
       
        
     PBustp=PBusts.getFirstExists(false);
        
         if(PBustp){
        
        PBustp.reset(player.x,player.y);
        PBustp.scale.set(0.6,0.4);     
        PBustp.animations.play('PBust',10,false,true);
             
       GameO.visible=true;
       PlayA.visible=true; 
        tile.alpha=0.6; 
        backPg.alpha=0; 
        ScoreT.visible=true;
        ScoreGO.text=Score;
        ScoreGO.visible=true;     
         
         
              
             if(highScore==null){
             
             localStorage.setItem('highscore',Score);
                 
             highScore=localStorage.getItem('highscore');
                
             }
           
             
             else if(Score>localStorage.getItem('highscore')){
                 
                 localStorage.setItem('highscore',Score);
                 highScore=localStorage.getItem('highscore');
                 
             }
         
             
             
             
              }    
        
    }
    
        
        
        
    },
    
    
    
    //rocket launcher and player collide part
    
    UpdateRocket: function(player,Rocket){
        
        if(Rcount>=0 && Rcount<3){
        Rcount=Rcount+1;
        Rocket.kill();
       
        if(bb.Sound2)
        RockSo.play();
        
        Rshow=Rshows.getFirstExists(false);
        
        if(Rshow){
            
            Rshow.reset(this.world.width/2-(Rcount*30),this.world.height-470);
            Rshow.scale.set(0.2,0.2);
            
            
            
        }
        
    }
        
        
    },
    
    
    
    //Player & life collide part
    
    
lifeTouch: function(player,life){
    
  
    //Healthbar Texture changing part
    
    CouHP--;
    
    if(bb.Sound2)
    LifeSou.play();
    
    life.kill();
    
    if(CouHP==0){
    HP.loadTexture('H0',true); 
        
    }
    
    else if(CouHP==1){
   HP.loadTexture('H1',true);   
    
    Explosion2.kill();
    
    }
    
},    
   
    
    
    
    
// Player & Coin Collide Part   

UpdateScore: function(player,coinP)  {
    
 if(bb.Sound2)  
CoinS.play();    
    
    coinP.kill();
    
    Score=Score+25;
   ScoreTPF.text=Score;
    
    Effect = Effects.getFirstExists(false);
    if(Effect){
        
        Effect.reset(coinP.x,coinP.y);
        Effect.animations.play('EffectS',36,false,true);
    }
    
}
    
    




};

