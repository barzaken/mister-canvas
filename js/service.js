'use strict'

let gCurrShape = 'line'
let gCurrColor
let gIsDrawing = false

function onStartDraw(ev){
    gIsDrawing = true
    gCtx.beginPath()
    gCtx.moveTo(ev.offsetX, ev.offsetY)
}

function onEndDraw(){
    gIsDrawing = false
}

function draw(ev,x,y) {
    if(!gIsDrawing) return
    
    const offsetX = ev.offsetX || x
    const offsetY = ev.offsetY || y
    switch (gCurrShape) {
        case 'triangle':
            drawTriangle(offsetX, offsetY)
            break
        case 'square':
            drawSquare(offsetX, offsetY)
            break
        case 'circle':
            drawCircle(offsetX, offsetY)
            break
        case 'line':
            drawLine(offsetX, offsetY)
            break
    }
}

function drawLine(x, y, xEnd = 100, yEnd = 100) {
    gCtx.lineWidth = 2
    gCtx.lineTo(x, y)
    gCtx.strokeStyle = `${gCurrColor}`
    gCtx.stroke()
}

function drawTriangle(x, y) {
    gCtx.lineWidth = 2
    gCtx.moveTo(x, y)
    gCtx.lineTo(x, y+200)
    gCtx.lineTo(x+200, y)
    gCtx.closePath()

    gCtx.strokeStyle = `${gCurrColor}`
    gCtx.stroke()
}

function drawSquare(x, y) {
    gCtx.strokeStyle = `${gCurrColor}`
    gCtx.strokeRect(x, y, 150, 300)
}

function drawCircle(x, y) {
    gCtx.lineWidth = 6
    gCtx.arc(x, y, 100, 0, 2 * Math.PI) // Used to create a circle 
    gCtx.strokeStyle = `${gCurrColor}`
    gCtx.stroke()
  }

function setShape(shape) {
    gCurrShape = shape
}

function setColor(color) {
    gCurrColor = color
}
