class Player{
    constructor(){
        this.name = null
        this.index = null
        this.positionX = null
        this.positionY = null
        this.winner = null
    }

    addPlayer(){
        var playerIndex = database.ref("players/player") + this.index

        if(this.index === 1){
            this.positionX = 200
            this.positionY = 200
        }
        else{
            this.positionX = 400
            this.positionY = 200
        }
        database.ref(playerIndex).set({
            name : this.name,
            index : this.index,
            positionX : this.positionX,
            positionY : this.positionY,
            winner : this.winner
        })
    }

    getCount(){
        var playerCountRef = database.ref(playerCount)
        playerCount.on("value" , (data)=>{
            playerCount = data.val()
        })
    }

    updateCount(count){
        database.ref("/").update({
            playerCount : count
        })
    }

    update() {
        var playerIndex = "players/player" + this.index;
        database.ref(playerIndex).update({
          positionX: this.positionX,
          positionY: this.positionY,
          winner : this.winner
        });
      }

      static getPlayersInfo() {
        var playerInfoRef = database.ref("players");
        playerInfoRef.on("value", data => {
          allPlayers = data.val();
        });
      }
}