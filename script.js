import { Player } from "./player.js"
import { Enemy } from "./enemy.js"
import { Fruit } from "./fruit.js"

//Variable declarations
var timerIdPlayer
var timerIdEnemy
var timerIdFruit
var speedTimer
var landing = document.getElementById('start')
var game = document.getElementById('main')
var mainboard = document.getElementById("main-board")
var out = document.getElementById('over')
var header = document.getElementById('score')


//Create Mainboard elements
var player1 = new Player()
player1.insertPlayer()
speedTimer = setInterval(player1.speedUp, 10000)

function newEnemy() {
    var enemy1 = new Enemy(player1)
    enemy1.insertEnemy()
}
function newFruit() {
    var fruit1 = new Fruit(player1)
    fruit1.insertFruit()
}

// Events listeners
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

var button = document.getElementById('btn')
button.addEventListener('click', function () {
    showMainboard()
})

var restart = document.getElementById('restart')
restart.addEventListener('click', function () {
    out.hidden = true
    showMainboard()
})

//Running game loop
function start() {
    timerIdPlayer = setInterval(playerMovement, 10)
    timerIdEnemy = setInterval(newEnemy, 500)
    timerIdFruit = setInterval(newFruit, 10000)
    initialLives()
    music.play()

    player1.x = 10
    player1.y = 295
    player1.life = 3
    player1.enemySpeed = 1
}

// Check if player has life
function playerMovement() {
    if (player1.life === 0) {
        finish(timerIdPlayer, timerIdEnemy, timerIdFruit)
    }
    else {
        player1.move()
    }
}

// Modify DOM to show main board
function showMainboard() {
    landing.hidden = true
    game.hidden = false
    start()
}

function finish(a, b, c) {
    game.hidden = true
    out.hidden = false
    clearInterval(a)
    clearInterval(b)
    clearInterval(c)
    music.pause()
    music.currentTime = 0
    deadsound.play()
    var child = document.querySelectorAll("#main-board div:not(#player)")
    for (let i = 0; i < child.length; i++ ) {
        mainboard.removeChild(child[i])
    }
}

function initialLives() {
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

var music = new Audio("./Primitive_mountain.mp3")
var deadsound = new Audio("./Villager_killed.mp3")