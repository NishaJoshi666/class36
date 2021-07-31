class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
  play(){
    form.hide();
    textSize(30);
    text("game over",120,70);
    Player.getPlayerinfo();
    if(allplayers!==undefined){
      var display = 130;
      for(var plr in allplayers){
        if(plr === "player"+player.index){
          fill("red");

        }
        else{
          fill("black");
        }
        display = display+20
        //display+=20
        textSize(15);
        text(allplayers[plr].name+":"+allplayers[plr].distance,120,display);
      }
    }
    if(keyDown(UP_ARROW)&&player.index!==null){
      player.distance+= 30;
      player.update();
    }
  }
}
