import { Player } from "./player.js"
import { Enemy } from "./enemy.js"
import { Fruit } from "./fruit.js"


var player1 = new Player()
player1.insertPlayer()
function newEnemy(){
    var enemy1 = new Enemy(player1)
    enemy1.insertEnemy()
}
function newFruit() {
    var fruit1 = new Fruit(player1)
    fruit1.insertFruit()
}


window.addEventListener('keydown', function (e) {
    console.log(e.key)
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
    console.log(e.key)
    player1.direction = 0
})

function start (){
    var timerIdPlayer = setInterval(player1.move, 10)
    var timerIdEnemy = setInterval(newEnemy, 500)
    var timerIdEnemy = setInterval(newFruit, 10000)
}
start()

