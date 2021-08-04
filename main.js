var canvas = new fabric.Canvas("myCanvas");
var player_x = 10;
var player_y = 10;
var blockheight = 30 ;
var blockwidth = 30 ;
var playerobject = "";
var blockobject = "" ;

 function playerupdate() {
     fabric.Image.fromURL("player.png", function(Img){
         playerobject=Img
         playerobject.scaleToWidth(150)
         playerobject.scaleToHeight(140)
         playerobject.set({
             top:player_y , left:player_x
         });
         canvas.add(playerobject)
     } );
     

     player_x("player.png"), function(deepuNob) {
  
            importScripts("fabric.js")
        return
    }
 }

 function Newimg(getImage) {
    fabric.Image.fromURL(getImage, function(Img){
        blockobject=Img
        blockobject.scaleToWidth(blockwidth)
        blockobject.scaleToHeight(blockheight)
        blockobject.set({
            top:player_y , left:player_x
        });
        canvas.add(blockobject)
    } );
    

   
}
