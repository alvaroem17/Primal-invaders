import { Player } from "./player.js"



var player1 = new Player()
player1.insertPlayer()

window.addEventListener('keydown', function (e) {
    switch (e.key) {
        case "a":
            player1.direction = "left"
            break;
        case "d":
            player1.direction = "right"
            break;
        case "w":
            player1.direction = "up"
            break;
        case "s":
            player1.direction = "down"
            break;
    }
})
window.addEventListener('keyup', function (e) {
    player1.direction = 0
})

function start (){
    var timerIdPlayer = setInterval(player1.move, 10, player1.direction)
}
start()