bb.About = function (game){
   
    var AboutBG;
    var AbBackB;
    var Text1;
    var Text2;
    var Text3;
    var Title;
    
};


bb.About.prototype={
     
 
  
    
  create: function() {
    
      this.physics.startSystem(Phaser.Physics.ARCADE);
      
      AboutBG= this.add.sprite(0,0,'AboutBG');
      AboutBG.scale.set(0.6,0.6);
      
     
      
      
     Title=this.add.sprite(this.world.width/2,-10,'ATitle');
      Title.anchor.set(0.5,0.5);
      Title.scale.set(0.8,0.8);
       this.physics.arcade.enable(Title);
      
      
      
      
      
      
      Text1=this.add.sprite(this.world.width/2,550,'AText1');
      
       Text1.anchor.set(0.5,0.5);
      Text1.scale.set(1,1);
       this.physics.arcade.enable(Text1);
      
      
      
      
      
      Text2=this.add.sprite(this.world.width/2,620,'AText2');
      
       Text2.anchor.set(0.5,0.5);
      Text2.scale.set(0.8,0.8);
       this.physics.arcade.enable(Text2); 
      
      
      
      
      
      
      
      Text3=this.add.sprite(this.world.width/2,690,'AText3');
      
         Text3.anchor.set(0.5,0.5);
      Text3.scale.set(0.8,0.8);
       this.physics.arcade.enable(Text3); 
      
      
      
      
      
      
      
           AbBackB=this.add.button(55,430, 'OptionBB', actionOnBack2, this,0,0,0);
         
       
        
        AbBackB.scale.set(0.033,0.033);
        AbBackB.anchor.set(0.5,0.5);
        
        
        
        function actionOnBack2(){
            
            BUsound.play();
            this.state.start('Menu');
        }
        
      
     
        
      
      
   
  },
    
    
    
    update: function(){
        if(Title.body.y<60)
        Title.body.velocity.y=35;
        
        else
      Title.body.velocity.y=0;
        
        
        
        
          if(Text1.body.y>120)
        Text1.body.velocity.y=-50;
        
        else
      Text1.body.velocity.y=0;
        
        
        
            if(Text2.body.y>190)
        Text2.body.velocity.y=-50;
        
        else
      Text2.body.velocity.y=0;
        
        
        
            if(Text3.body.y>260)
        Text3.body.velocity.y=-50;
        
        else
      Text3.body.velocity.y=0;
  
    }
    
    
}