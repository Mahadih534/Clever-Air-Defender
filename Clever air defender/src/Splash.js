

bb.Splash = function (game){
    
    var BG;
    var Time;
    var Cs;
};


bb.Splash.prototype={
     
    
    
  create: function() {
    
   Time=0;
      Cs=0;
      
BG=this.add.image(0,0,'BG');
BG.scale.set(1.33,1.42);
BG.alpha=2;     
      
      
      
  }, 
    
    
    
update: function() {
    
   
 
    
if(this.time.now>Time){
    
    
    
    
   Cs++; 
  Time=this.time.now+Phaser.Timer.SECOND;  
 
    
}
      
   if(Cs==5)
this.state.start('Menu');
      
      
  } 
    
 
    
};