// code your solution here
function superbowlWin(games){
    let result = games.find(game => game.result === "W")
       if (result){
        return result.year
       } else{
        return undefined
       }
    
   
    
}