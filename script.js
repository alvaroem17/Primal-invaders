import { Player } from "./player.js"
import { Enemy } from "./enemy.js"
import { Fruit } from "./fruit.js"


var player1 = new Player()
player1.insertPlayer()
function newEnemy() {
    var enemy1 = new Enemy(player1)
    enemy1.insertEnemy()
}
function newFruit() {
    var fruit1 = new Fruit(player1)
    fruit1.insertFruit()
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

function start() {
    var timerIdPlayer = setInterval(playerMovement, 10)
    var timerIdEnemy = setInterval(newEnemy, 500)
    var timerIdFruit = setInterval(newFruit, 10000)
}


function playerMovement() {
    if (player1.life === 0) {
        /*alert("Sa acabao")*/
    }
    else {
        player1.move()
    }
}
function empezar(){
    var landing = document.getElementById('start')
    landing.hidden = true
    var game = document.getElementById('main')
    game.hidden = false
    start()
}
 var button = document.getElementById('btn')
button.addEventListener('click', function(){
    empezar()
})