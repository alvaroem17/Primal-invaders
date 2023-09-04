var mainBoard = document.getElementById('main-board')
function Player() {
    var self = this
    this.x = 10
    this.y = 295
    this.width = 50
    this.height = 50
    //this.direction = 0
    this.directionY = 0 
    this.directionX = 0
    this.life = 3
    this.sprite = document.createElement('div')

    this.insertPlayer = function () {
        this.sprite.setAttribute('id', 'player')
        this.sprite.style.top = this.y + 'px'
        this.sprite.style.left = this.x + 'px'
        mainBoard.appendChild(this.sprite)
    }
    this.move = function () {
        /*switch (self.direction) {
            case "up":
                if (self.y > 0) {
                    self.y = self.y - 5
                    self.sprite.style.top = self.y + 'px'
                }
                break;
            case "down":
                if (self.y < 590) {
                    self.y = self.y + 5
                    self.sprite.style.top = self.y + 'px'
                }
                break;
            case "left":
                if (self.x > 0) {
                    self.x = self.x - 5
                    self.sprite.style.left = self.x + 'px'
                }
                break;
            case "right":
                if (self.x < 1270) {
                    self.x = self.x + 5
                    self.sprite.style.left = self.x + 'px'
                }
                break;
        }*/
        /*if(keypressed.a) {
            self.directionX = -1
        }else if(keypressed.d){
            self.directionX = 1
        }
        if(keypressed.w) {
            self.directionY = -1
        }else if(keypressed.s){
            self.directionY = 1
        }*/

        self.x = self.x + 5 * self.directionX 
        self.y = self.y + 5 * self.directionY

        self.sprite.style.left = self.x + 'px'
        self.sprite.style.top = self.y + 'px'
    }

}

export { Player }