import { Player } from "./player.js"
import { Enemy } from "./enemy.js"
import { Fruit } from "./fruit.js"

var endMusic = new Audio('./assets/sound/deathSound.mp3')
endMusic.volume = 0.1;
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
            player1.directionX = Math.max(player1.directionX, 0)
            break;
        case "d":
            player1.directionX = Math.min(player1.directionX, 0)
            break;
        case "w":
            player1.directionY = Math.max(player1.directionY, 0)
            break;
        case "s":
            player1.directionY = Math.min(player1.directionY, 0)
            break;
    }
})
var timerIdPlayer
var timerIdEnemy
var timerIdFruit

function start() {
    timerIdPlayer = setInterval(playerMovement, 10)
    timerIdEnemy = setInterval(newEnemy, 500)
    timerIdFruit = setInterval(newFruit, 10000)
    initialLives()
    player1.x = 10
    player1.y = 295
    player1.life = 3
}


function playerMovement() {
    if (player1.life === 0) {
        /*alert("Se acabó")*/
        terminar(timerIdPlayer, timerIdEnemy, timerIdFruit)
    }
    else {
        player1.move()
    }
}
function empezar() {
    var landing = document.getElementById('start')
    landing.hidden = true
    var game = document.getElementById('main')
    game.hidden = false
    start()
}
var button = document.getElementById('btn')
button.addEventListener('click', function () {
    empezar()
})

var restart = document.getElementById('restart')
restart.addEventListener('click', function () {
    var out = document.getElementById('over')
    out.hidden = true
    empezar()
})

function terminar(a, b, c) {
    var game = document.getElementById('main')
    game.hidden = true
    var out = document.getElementById('over')
    out.hidden = false
    endMusic.play()
    clearInterval(a)
    clearInterval(b)
    clearInterval(c)
    var child = document.querySelectorAll("#main-board div:not(#player)")
    var mainboard = document.getElementById("main-board")
    for (let i = 0; i < child.length; i++ ) {
        mainboard.removeChild(child[i])
    }
}

function initialLives() {
    var header = document.getElementById('score')
    var addLife1 = document.createElement('div')
    addLife1.classList.add('life')
    var addLife2 = document.createElement('div')
    addLife2.classList.add('life')
    var addLife3 = document.createElement('div')
    addLife3.classList.add('life')

    header.appendChild(addLife1)
    header.appendChild(addLife2)
    header.appendChild(addLife3)
}