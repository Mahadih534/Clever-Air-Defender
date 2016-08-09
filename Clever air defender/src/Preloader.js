


bb.Preloader = function (game) {
    
};

bb.Preloader.prototype = {
    
    
  preload: function(){
      
      	this.preloadBg = this.add.sprite(0,0, 'Background');
       this.preloadBg.scale.set(0.45,0.46);
		this.preloadBar = this.add.sprite(this.world.width/2-143,this.world.height/2-15, 'LoadingBar');
        
		this.load.setPreloadSprite(this.preloadBar);

      
        this.load.image('BackG', 'Assets/MainMenu/BackG.png');
      this.load.image('OptionB','Assets/Option/OptionB.jpg');
      this.load.image('OptionT','Assets/Option/OptionT.png');
      this.load.image('OptionBB','Assets/Option/BackBu.png');
      this.load.image('MusicT','Assets/Option/MusicT.png');
      this.load.image('AboutBG','Assets/About/AboutBG.png');
      this.load.image('ATitle','Assets/About/Title.png');
      this.load.image('AText1','Assets/About/Text1.png');
      this.load.image('AText2','Assets/About/Text2.png');
      this.load.image('AText3','Assets/About/Text3.png');
       this.load.image('BG','Assets/splash.png');
      this.load.spritesheet('PlayNow','Assets/MainMenu/PlayNow.png',262,88); 
      this.load.spritesheet('Options','Assets/MainMenu/Options.png',262,88); 
      this.load.spritesheet('About','Assets/MainMenu/About.png',262,88);
      this.load.spritesheet('Exit','Assets/MainMenu/Exit.png',262,88);
      this.load.spritesheet('Highscore','Assets/MainMenu/High.png',262,88);
      this.load.image('MainM','Assets/MainMenu/MainM.png');
      this.load.image('Window1','Assets/MainMenu/Window.png');
      this.load.image('BlankA','Assets/MainMenu/BlankA.png');
      this.load.image('HighSp','Assets/MainMenu/HighScore.png');
      this.load.image('WindowAb','Assets/MainMenu/WindowAb.png');    
      this.load.image('Close','Assets/MainMenu/CloseB.png');  
      this.load.image('SoundT','Assets/MainMenu/SoundT.png');  
      this.load.image('SoundB','Assets/MainMenu/SoundB.png',64,57,2);     
      this.load.spritesheet('MenuP','Assets/MainMenu/MenuP.png',280,200,12);  
     this.load.image('SoundOf','Assets/MainMenu/SoundOf.png');  
       this.load.spritesheet('gamepad', 
            'Assets/gamepad_spritesheet.png', 100, 100);
       
      
    this.load.audio('Bsound',['Assets/MainMenu/Bsound.mp3','Assets/MainMenu/Bsound.ogg']); 
    this.load.audio('BUsound',['Assets/MainMenu/BUsound.mp3','Assets/MainMenu/BUsound.ogg']);
    this.load.audio('BCsound',['Assets/MainMenu/BCsound.mp3','Assets/MainMenu/BCsound.ogg']); 
      
       this.load.audio('GamSo',['Assets/GamSo.mp3','Assets/GamSo.ogg']);
    this.load.audio('RockSo',['Assets/RockSo.mp3','Assets/RockSo.ogg']); 
        
      
      
      
        this.load.image('phaser1', 'Assets/phaser2.png');
         this.load.image('bullet', 'Assets/Bullet.png');
         this.load.image('PlayerP','Assets/PlayerP.png');
         this.load.image('EnemyP1','Assets/EnemyP1.png');
        this.load.image('EnemyB','Assets/EnemyPbullet.png'); 
        this.load.spritesheet('CoinP','Assets/Coin.png',260,257,4);
         this.load.spritesheet('lifeP','Assets/life.png',260,257,4);
         this.load.spritesheet('EffectS','Assets/Effect.png',125,124,15);
         this.load.spritesheet('EnemyPbust','Assets/EnemyBust.png',270,233,4);
          this.load.image('H0', 'Assets/H0.png');
          this.load.image('H1', 'Assets/H1.png');
          this.load.image('H2', 'Assets/H2.png');
          this.load.image('H3', 'Assets/H3.png');
        this.load.spritesheet('Explosion','Assets/Explosion.png',124,127,16);
         this.load.spritesheet('Explosion2','Assets/Explosion2.png',128,255,32);
        this.load.spritesheet('PBust','Assets/pBust.png',248,240,4);
         this.load.spritesheet('Plife','Assets/life.png',260,257,4);
         this.load.image('Tank', 'Assets/Tanks.png');
          this.load.image('Zip', 'Assets/Zip.png');
      
        this.load.image('B1back','Assets/Bback.png');
         this.load.image('B2options','Assets/Boptions.png');
          this.load.image('GameO', 'Assets/GameO.png');
         this.load.image('Score', 'Assets/Score.png');
         this.load.image('Yscore','Assets/Yscore.png');
         this.load.image('PlayA','Assets/PlayA.png');
        this.load.image('Paused','Assets/Paused.png');
        this.load.spritesheet('B3playPuse','Assets/BplayPuse.png',108,102,2);
        
        
          this.load.image('left', 'Assets/left.png');
        this.load.image('right', 'Assets/right.png');
        this.load.image('up', 'Assets/up.png');
        this.load.image('down', 'Assets/down.png');
        this.load.image('bulletB', 'Assets/bulletB.png');
        this.load.image('rocketB', 'Assets/rocketB.png');
         this.load.image('TankBu', 'Assets/TankBu.png');
        this.load.image('Rocket', 'Assets/Rocket.png');
        this.load.image('Rocket2', 'Assets/Rocket2.png');
        this.load.image('Rbullet', 'Assets/Rbullet.png');
        
        
         this.load.audio('CoinS',['Assets/CoinS.mp3','Assets/CoinS.ogg']);
        this.load.audio('PBs',['Assets/PBs.mp3','Assets/PBs.ogg']); 
        this.load.audio('PGsound',['Assets/PGsound.mp3','Assets/PGsound.ogg']);
         this.load.audio('GaExpS',['Assets/GaExpS.mp3','Assets/GaExpS.ogg']);
        this.load.audio('LifeSou',['Assets/LifeSou.mp3','Assets/LifeSou.ogg']);
         this.load.audio('bulletHitS',['Assets/bulletHitS.mp3','Assets/bulletHitS.ogg']);
           
       
      
  },  
    
    
 create: function(){
     
     
           bb.Bsound=this.add.audio('Bsound');
          bb.Bsound.play();
          bb.Bsound.loopFull();
          bb.Bsound.volume=3.2;
    this.game.state.start('Splash');
  
     
     
 }   
    
    
    
 
    
    
    
    
};