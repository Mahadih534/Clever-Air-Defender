


bb.Menu = function (game) {
   
 
    var BackG;
    var PlayNow;
    var HighSc;
    var Options;
    var About;
    var Exit;
    var MainM;
    var MenuP;
    var window;
    var windowAb;
    var Close;
    var SoundT;
    var SoundB;
    var Con;
    var highScore;
    var HighSp;
    var BlankA;
    var HighText;
    
   // var Bsound;
    var BUsound;
    var BCsound;
    
    var LoopTime;
    
    
};

bb.Menu.prototype = {
    
    
    create: function(){
        
        Con=false;
        
        /*this code used for save high score in local storage*/
        highScore=localStorage.getItem('highscore');;
        
            this.physics.startSystem(Phaser.Physics.ARCADE);
        
      
        if(bb.Sound && bb.Bsound.paused)
            bb.Bsound.resume();
   
       
      
       
      
        
    BUsound=this.add.audio('BUsound');    
    BUsound.volume=3.8; 
        
     BCsound=this.add.audio('BCsound');    
     BCsound.volume=3.8;     
        
     BackG=this.add.sprite(0,0,'BackG'); 
     BackG.scale.set(0.35,0.31);  
     BackG.alpha=0.9;  
    
   
        
        var w=this.world.width;
        var h=this.world.hight;
        
        
        MainM=this.add.sprite(this.world.width/2+30,55,'MainM');
        MainM.anchor.set(0.5,0.5);
        MainM.scale.set(0.8,0.6);
        
        MenuP=this.add.sprite(this.world.width-150,200,'MenuP');
        MenuP.anchor.set(0.5,0.5);
         this.physics.arcade.enable(MenuP);
       var SA= MenuP.animations.add('MenuP');
    //   SA.play(5,true,this);   
        
      
        
        /*play now button part */
        
          PlayNow=this.add.button(w/2,150, 'PlayNow', actionOnB1, this,0,0,1);
         
       
        
        PlayNow.scale.set(0.62,0.62);
        PlayNow.anchor.set(0.5,0.5);
        
        
        
        function actionOnB1(){
            
            BUsound.play();
            bb.Bsound.pause();
            this.state.start('Practise');
        }
        
        
        
        
           /*Highscore button part */
          HighSc=this.add.button(w/2,200, 'Highscore', actionOnBB, this,0,0,1);
         
       
        
        HighSc.scale.set(0.62,0.62);
        HighSc.anchor.set(0.5,0.5);
        
        
        
        function actionOnBB(){
            
            BUsound.play();
            
              Window.visible=true;
            Close.visible=true;
           
            
            PlayNow.visible=false;
            Options.visible=false;
            About.visible=false;
            Exit.visible=false;
            
            if (highScore==null)
                BlankA.visible=true;
            
            
            else{
                HighText.visible=true;
                HighSp.visible=true
            
            }
            
            
        }
        
        
        
        /*Option button part */
        
           Options=this.add.button(w/2,250, 'Options', actionOnB2, this,0,0,1);
        Options.scale.set(0.62,0.62);
        Options.anchor.set(0.5,0.5);
        
        
        function actionOnB2(){
            
            BUsound.play();
            
        
            
            this.state.start('Option');  
            
        }
        
       /*About button part */
        
           About =this.add.button(w/2,300, 'About', actionOnB3, this,0,0,1);
        About.scale.set(0.62,0.62);
         About.anchor.set(0.5,0.5);
      
        function actionOnB3()
        {
        BUsound.play();
  
            
            this.state.start('About');
            
            
        }
        
        
        /*Exit button part */
        
         Exit=this.add.button(w/2,350, 'Exit', actionOnB8, this,0,0,1);
        Exit.scale.set(0.62,0.62);
        Exit.anchor.set(0.5,0.5);
        function actionOnB8()
        {
          
         
         BUsound.play();
          
       navigator.app.exitApp();
    
            
        }
        
        
        
          Window=this.add.sprite(this.world.width/2,this.world.height/2,'Window1');
        Window.anchor.set(0.5,0.5);
        Window.scale.set(0.6,0.6);
        
       Window.visible=false;
        
           
       
     
        
     
        
        
        Close =this.add.button(this.world.width/2+100,this.world.height/2-70,'Close',ActionOnBC,this);
        Close.anchor.set(0.5,0.5);
        Close.scale.set(0.6,0.6);
        Close.visible=false;
        
        function ActionOnBC(){
            BCsound.play();
            
            Close.visible=false;
            Window.visible=false;
            HighText.visible=false;
            HighSp.visible=false;
            BlankA.visible=false;
            
               
            PlayNow.visible=true;
            Options.visible=true;
            About.visible=true;
            Exit.visible=true;
            
            
            
        }
            
            
     BlankA= this.add.sprite(this.world.width/2,this.world.height/2+18,'BlankA'); 
        
     BlankA.anchor.set(0.5,0.5);
    BlankA.scale.set(0.4,0.4);
   BlankA.visible=false;  
        
        
        
 HighSp= this.add.sprite(this.world.width/2,this.world.height/2-15,'HighSp'); 
        
      HighSp.anchor.set(0.5,0.5);
     HighSp.scale.set(0.377,0.377);
     HighSp.visible=false;          
            
      
        
HighText=this.add.text(this.world.width/2,this.world.height/2+13,highScore, { font: '40px Arial', fill: '#fff' });
HighText.visible=false;
        
        
        
    },




update: function(){
    
  MenuP.rotation +=0.015;
  
  
    
}
    
    
    
    
 
 
};