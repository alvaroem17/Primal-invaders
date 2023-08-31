var mainBoard = document.getElementById('main-board')
function Enemy() {
    var self = this
    this.x = 1320
    this.y = Math.ceil(Math.random() * 630)
    this.direction = 0
    this.sprite = document.createElement('div')

    this.insertEnemy = function () {
        this.sprite.setAttribute('id', 'enemy')
        this.sprite.style.top = this.y + 'px'
        this.sprite.style.left = this.x + 'px'
        mainBoard.appendChild(this.sprite)
    }
    this.move = function(){
        if (self.x > -150){
            self.x -= 10
            self.sprite.style.left = self.x + "px"
        }else{
            //self.remove()
        }
    }
    this.timerId = setInterval(this.move, 30)
}
export { Enemy }
