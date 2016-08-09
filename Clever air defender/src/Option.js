bb.Option = function (game){
    
    var OptionB;
    var OptionT;
    var  BackB;
    var MusicT;
    var MusicB;
    var CoM;
    var SoundB;
    var SoundT;
};


bb.Option.prototype={
     
 
  
    
  create: function() {
    
      CoM=false;
      
      OptionB= this.add.image(0,0,'OptionB');
      OptionB.scale.set(1.8,1.4);
      
      
      OptionT=this.add.image(this.world.width/2,35,'OptionT')
       OptionT.anchor.set(0.5,0.5);
      OptionT.scale.set(0.7,0.7);
      
      
      
           BackB=this.add.button(55,430, 'OptionBB', actionOnBack, this,0,0,0);
         
       
        
        BackB.scale.set(0.033,0.033);
        BackB.anchor.set(0.5,0.5);
        
        
        
        function actionOnBack(){
            
            BUsound.play();
            this.state.start('Menu');
        }
        
      
      MusicT=this.add.image(this.world.width/2-30,this.world.height/2,'MusicT');
      MusicT.anchor.set(0.5,0.5);
      MusicT.scale.set(0.4,0.4);
      
      
           MusicB=this.add.button(this.world.width/2+80,this.world.height/2,'SoundB',ActionOnBM);
        
        MusicB.anchor.set(0.5,0.5);
        MusicB.scale.set(0.7,0.7);
        
        
        
        function ActionOnBM(){
            
            
            if(bb.Bsound.isPlaying){
                
                bb.Bsound.pause();
                
                bb.Sound=false;
                MusicB.loadTexture('SoundOf');
            }
            else {
                bb.Bsound.resume();
                bb.Sound=true;
                 MusicB.loadTexture('SoundB');    
                
            }
            
         
         
            
        }
      
      
      SoundT=this.add.image(this.world.width/2-30,this.world.height/2+50,'SoundT');
       SoundT.anchor.set(0.5,0.5);
        SoundT.scale.set(0.4,0.4);
      
      
      
      
           SoundB=this.add.button(this.world.width/2+80,this.world.height/2+50,'SoundB',ActionOnBM2);
        
        SoundB.anchor.set(0.5,0.5);
        SoundB.scale.set(0.7,0.7);
        
        
        
        function ActionOnBM2(){
            
            
            if(bb.Sound2){
                
                
                bb.Sound2=false;
                SoundB.loadTexture('SoundOf');
            }
            else {
              
                bb.Sound2=true;
                 SoundB.loadTexture('SoundB');    
                
            }
            
         
         
            
        }
        
      
      
   
  },
    
    
    
    update: function(){
        
        
        if(bb.Sound)
            MusicB.loadTexture('SoundB'); 
           
           

        
        else
          MusicB.loadTexture('SoundOf');
            
        
        
        if(bb.Sound2)
             SoundB.loadTexture('SoundB');
        
        else
             SoundB.loadTexture('SoundOf');
        
        
    }
    
    
}