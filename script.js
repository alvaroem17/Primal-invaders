import { Player } from "./player.js"
import { Enemy } from "./enemy.js"
import { Fruit } from "./fruit.js"

//Variable declarations
var timerIdPlayer
var timerIdEnemy
var timerIdFruit
var timer
var speedTimer
var timerInterval
var landing = document.getElementById('start')
var game = document.getElementById('main')
var mainboard = document.getElementById("main-board")
var out = document.getElementById('over')
var header = document.getElementById('score')
var timeResult
var lifes = document.getElementById("lifes")
var music = new Audio("./assets/sound/Primitive_mountain.mp3")
var deadsound = new Audio("./assets/sound/Villager_killed.mp3")
var endMusic = new Audio('./assets/sound/deathSound.mp3')
endMusic.volume = 0.1;
// Timer
var timer = document.createElement('div')
timer.setAttribute('id','timer')
header.appendChild(timer)
var now, elapsed, m, s, ms, format

var frameSet = ["./assets/Idle\(1\).png","./assets/Walk\(1\).png",
"./assets/Walk\(2\).png","./assets/Walk\(3\).png","./assets/Walk\(4\).png",
"./assets/Walk\(5\).png","./assets/Walk\(6\).png","./assets/Walk\(7\).png",
"./assets/Walk\(8\).png","./assets/Walk\(9\).png","./assets/Walk\(10\).png"]

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
    changeFrame()
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
    player1.sprite.style.backgroundImage = `url("${frameSet[0]}")`
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
    var start = new Date().getTime();
    timerInterval = setInterval(function() {
    now = new Date().getTime()
    elapsed = now - start
    m = Math.floor(elapsed % 3600000 / 60000)
    s = Math.floor(elapsed % 60000 / 1000)
    ms= Math.floor(elapsed % 1000)
    format =("0" + m).slice(-2) + ":" + ("0" + s).slice(-2) + "." + ("00" + ms).slice(-3)
    timer.innerHTML = format
    timeResult = format
    }, 1)

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
    endMusic.play()
    clearInterval(a)
    clearInterval(b)
    clearInterval(c)
    clearInterval(timerInterval)
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
    lifes.appendChild(addLife1)
    lifes.appendChild(addLife2)
    lifes.appendChild(addLife3)

}  
var i = 1
function changeFrame() {
    if(i > 10) {i = 1}
    player1.sprite.style.backgroundImage = `url("${frameSet[i]}")`
    i++
}