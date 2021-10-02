class Player{
    constructor(){
        this.name=null;
        this.index=null;
        this.distance=0;
    }

    update(){
       var playerindex="players/player"+this.index
       database.ref(playerindex).set({name:this.name,distance:this.distance}) 

    }
    updateCount(count){
        database.ref('/').update({playerCount:count})
    }
    getCount(){
        database.ref("playerCount").on("value",(data)=>{
            playerCount=data.val()
        })
    }
    static getPlayerInfo(){
        database.ref("players").on("value",(data)=>{
            allPlayers=data.val();
        })
    }
}