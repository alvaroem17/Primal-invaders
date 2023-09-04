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
            player1.directionX = -1
            break;
        case "d":
            player1.directionX = 1
            break;
        case "w":
            player1.directionY = -1
            break;
        case "s":
            player1.directionY = 1
            break;
    }
})
window.addEventListener('keyup', function (e) {
    switch (e.key) {
        case "a":
            player1.directionX = 0
            break;
        case "d":
            player1.directionX = 0
            break;
        case "w":
            player1.directionY = 0
            break;
        case "s":
            player1.directionY = 0
            break;
    }
    //player1.directionX = 0
    //player1.directionY = 0
})

function start() {
    var timerIdPlayer = setInterval(playerMovement, 10)
    var timerIdEnemy = setInterval(newEnemy, 500)
    var timerIdFruit = setInterval(newFruit, 10000)
}


function playerMovement() {
    if (player1.life === 0) {
        /*alert("Sa acabao")*/
        terminar()
    }
    else {
        //player1.directionX = 
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

var restart = document.getElementById('restart')
restart.addEventListener('click', function(){

})

function terminar(){
    var game = document.getElementById('main')
    game.hidden = true
    var out = document.getElementById('over')
    out.hidden = false
}