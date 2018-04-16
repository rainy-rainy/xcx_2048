import './js/libs/weapp-adapter'

var context = canvas.getContext('2d')
context.fillStyle = 'red'
context.fillRect(0, 0, 100, 100)

var offScreenCanvas = wx.createCanvas()
var offContext = offScreenCanvas.getContext('2d')
offContext.fillStyle = 'green'
offContext.fillRect(0, 0, 100, 100)

var screenContext = canvas.getContext('2d')
screenContext.drawImage(offScreenCanvas, 100, 100)

var funOnTouchMoveCB = function(e){
  console.log(e.touches[0].screenX, e.touches[0].screenY)
}
wx.onTouchMove(funOnTouchMoveCB)