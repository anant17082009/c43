class Game{
    constructor(){
        
    }

    getState(){
        gameStateRef = database.ref("gameState")
        gameState.on("value" , (data)=> {
              gameState = data.val()
        })
    }

    update(state){
        database.ref("/").update({
            gameState : state
        })
    }

    start(){
        player = new player()
        playerCount = player.getCount();

        form = new Form();
        form.display();
    
        car1 = createSprite(width / 2 - 50, height - 100);
        car1.addImage("car1", car1_img);
        car1.scale = 0.07;
        
        
    
        car2 = createSprite(width / 2 + 100, height - 100);
        car2.addImage("car2", car2_img);
        car2.scale = 0.07;
    
 
    
        cars = [car1, car2];
    
     
    
    }

    play(){
        this.handleElements();
        this.handleResetButton();
    
        Player.getPlayersInfo();
       
    
        
    
          //index of the array
          var index = 0;
         
            //add 1 to the index for every loop
            index = index + 1;
    
            //use data form the database to display the cars in x and y direction
           
            if (index === player.index) {
              stroke(10);
              fill("red");
              ellipse(x, y, 60, 60);
            }
          
        }
}

handleCollisionWithBall()

