var mainBoard = document.getElementById('main-board')
function Fruit(player) {
    var self = this
    this.x = 1320
    this.y = Math.ceil(Math.random() * 630)
    this.width = 25
    this.height = 25
    this.direction = 0
    this.sprite = document.createElement('div')

    this.insertFruit = function () {
        this.sprite.setAttribute('id', 'fruit')
        this.sprite.style.top = this.y + 'px'
        this.sprite.style.left = this.x + 'px'
        mainBoard.appendChild(this.sprite)
    }
    this.move = function () {
        self.checkcollision()
        if (self.x > -150) {
            self.x -= 5
            self.sprite.style.left = self.x + "px"
        } else {
            self.removeFruit()
        }


    }
    this.removeFruit = function () {
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
            this.removeFruit()
            player.life++
        }
    }
    this.timerId = setInterval(this.move, 20)
}
export { Fruit }
