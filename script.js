var mainBoard = document.getElementById('main-board')
function Player(){
    this.x =10
    this.y = 295
    this.sprite = document.createElement('div')

    this.insertPlayer = function (){
        this.sprite.setAttribute('id', 'player')
        this.sprite.style.top = this.y + 'px'
        this.sprite.style.left = this.x + 'px'
    mainBoard.appendChild(this.sprite)
    }    
}