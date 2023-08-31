import { Player } from "./player.js"
import { Enemy } from "./enemy.js"


var player1 = new Player()
player1.insertPlayer()
function newEnemy(){
 var enemy1 = new Enemy(player1)
enemy1.insertEnemy()
}


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
    var timerIdEnemy = setInterval(newEnemy, 500)
}
start()

