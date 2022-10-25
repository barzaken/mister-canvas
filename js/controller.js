'use strict'


let gElCanvas
let gCtx
let gCanvasTouch
function init() {
    gElCanvas = document.getElementById('my-canvas')
    gCtx = gElCanvas.getContext('2d')
    gCanvasTouch = new Hammer(gElCanvas)
    resizeCanvas()
    onTouch()
    window.addEventListener('resize', resizeCanvas)
}

function downloadImg(elLink) {
    const imgContent = gElCanvas.toDataURL('image/jpeg')// image/jpeg the default format
    elLink.href = imgContent
}

function onTouch() {
    gCanvasTouch.on('swipe', (ev) => {
        ev.preventDefault()
        gIsDrawing = true
        draw(null, ev.center.x, ev.center.y)
    })
}

function resizeCanvas() {
    const elContainer = document.querySelector('.canvas-container')
    gElCanvas.width = elContainer.offsetWidth
    gElCanvas.height = elContainer.offsetHeight
}

function onClearCanvas() {
    gCtx.clearRect(0, 0, gElCanvas.width, gElCanvas.height);
}

function onChangeColor(color) {
    setColor(color)
}

function onChangeShape(shape) {
    setShape(shape)
}

