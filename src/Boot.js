var bb ={
 Sound: true,
 Bsound: null,
 Sound2: true
};





bb.Boot = function (game){};


bb.Boot.prototype={
     
 
  preload: function(){
      
      this.load.image('Background','Assets/LoadingBk2.png');
      this.load.image('LoadingBar','Assets/LoadingBar.png');
      
      
      
  },  
    
    
    
  create: function() {
    
   
    /* for responsive screen*/
      
   this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
      
    
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true; 
      
      
    this.game.state.start('Preloader'); 
      
      
      
      
      
  } 
    
 
    
};