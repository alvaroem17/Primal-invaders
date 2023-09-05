var mainBoard = document.getElementById('main-board')
function Player() {
    var self = this
    this.x = 10
    this.y = 295
    this.width = 100
    this.height = 100
    this.directionY = 0 
    this.directionX = 0
    this.life = 3
    this.sprite = document.createElement('div')
    this.enemySpeed = 1
    this.speedUp = function(){
        self.enemySpeed *= 1.2
    }

    this.insertPlayer = function () {
        this.sprite.setAttribute('id', 'player')
        this.sprite.style.top = this.y + 'px'
        this.sprite.style.left = this.x + 'px'
        mainBoard.appendChild(this.sprite)
    }
    this.move = function () {
        var nextX = self.x + 5 * self.directionX
        var nextY = self.y + 5 * self.directionY
        if(nextX >= 0 && nextX <= 1220) {
            self.x = nextX
        }
        if(nextY >= 0 && nextY <= 540){
            self.y = nextY
        }
        self.sprite.style.left = self.x + 'px'
        self.sprite.style.top = self.y + 'px'
    }

}

export { Player }