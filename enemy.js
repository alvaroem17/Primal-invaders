var mainBoard = document.getElementById('main-board')
function Enemy(player) {
    var self = this
    this.x = 1320
    this.y = Math.ceil(Math.random() * 630)
    this.width = 150
    this.height = 10
    this.direction = 0
    this.sprite = document.createElement('div')

    this.insertEnemy = function () {
        this.sprite.setAttribute('id', 'enemy')
        this.sprite.style.top = this.y + 'px'
        this.sprite.style.left = this.x + 'px'
        mainBoard.appendChild(this.sprite)
    }
    this.move = function () {
        self.checkcollision()
        if (self.x > -150) {
            self.x -= 10
            self.sprite.style.left = self.x + "px"
        } else {
            self.removeEnemy()
        }


    }
    this.removeEnemy = function () {
        mainBoard.removeChild(this.sprite)
        clearInterval(this.timerId)

    }
    this.checkcollision = function () {
        if (
            this.x + this.width >= player.x &&
            this.x <= player.x + player.width
            &&
            this.y + this.height >= player.y &&
            this.y <= player.y + player.height
        ) {
            this.removeEnemy()
            player.life = player.life - 1
            var life  = document.getElementsByClassName("life")
            var header  = document.getElementById("score")
            header.removeChild(life[life.length-1])
            console.log(life[life.length-1])
            console.log(header)
            
        }
    }
    this.timerId = setInterval(this.move, 30)
}
export { Enemy }
