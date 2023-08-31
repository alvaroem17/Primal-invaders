var mainBoard = document.getElementById('main-board')
function Player() {
    this.x = 10
    this.y = 295
    this.sprite = document.createElement('div')

    this.insertPlayer = function () {
        this.sprite.setAttribute('id', 'player')
        this.sprite.style.top = this.y + 'px'
        this.sprite.style.left = this.x + 'px'
        mainBoard.appendChild(this.sprite)
    }
    this.move = function (dir) {
        switch (dir) {
            case "up":
                this.y = this.y - 10
                this.sprite.style.top = this.y + 'px'
                break;
            case "down":
                this.y = this.y + 10
                this.sprite.style.top = this.y + 'px'
                break;
            case "left":
                this.x = this.x - 10
                this.sprite.style.left = this.x + 'px'
                break;
            case "right":
                this.x = this.x + 10
                this.sprite.style.left = this.x + 'px'
                break;
        }

    }

}

var player1 = new Player()
player1.insertPlayer()

window.addEventListener('keydown', function (e) {
    switch (e.key) {
        case "a":
            player1.move("left")
            break;
        case "d":
            player1.move("right")
            break;
        case "w":
            player1.move("up")
            break;
        case "s":
            player1.move("down")
            break;
    }
})
