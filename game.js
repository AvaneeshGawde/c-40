class Game{
    constructor(){
        
    }
    getState(){
        database.ref("gameState").on("value",function(data){gameState=data.val()})
    }
    update(state){
        database.ref("/").update({gameState:state})
    }
    async start(){
        if(gameState==0){

            player= new Player()

            var playerCountRef=await database.ref('playerCount').once("value")
            if(playerCountRef .exists()){
                playerCount=playerCountRef.val()
                player.getCount();
            }
           
            form= new Form()
            form.display();

        }
        car1=createSprite(100,200)
        car1.addImage(car1img)
        car2=createSprite(300,200)
        car2.addImage(car2img)
        car3=createSprite(500,200)
        car3.addImage(car3img)
        car4=createSprite(700,200)
        car4.addImage(car4img)
        cars=[car1,car2,car3,car4]
    }
    play(){
        form.hide()
       
        Player.getPlayerInfo();
        
        if(allPlayers !== undefined){
            background(rgb(198,135,103))
            image(track,0,-displayHeight*4,displayWidth,displayHeight*5)
            var index = 0;
            var x =150
            var y ;

            for (var plr in allPlayers){
                index=index+1;
                x = x+200
                y=displayHeight-allPlayers[plr].distance
                cars[index-1].x=x
                cars[index-1].y=y
                console.log(index)
                console.log(player.index)
                if(index===player.index){
                   cars[index-1].shapeColor = "red"

                   camera.position.x=displayWidth/2
                   camera.position.y=cars[index-1].y
                   fill("yellow")
                   textSize(25)
                   text (player.name, cars[index-1].x-20, cars[index-1].y+100)
                   ellipseMode(RADIUS)
                   ellipse(x,y,30,30)
                }
                


            }

        }
        if(keyIsDown(UP_ARROW ) && player.index !== null){
            player.distance+=50
            player.update()
        }
        if (player.distance>4150){
            gameState = 2;
        }
        


            drawSprites();
    }
}