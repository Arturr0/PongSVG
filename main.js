var width = 450, height = 300
var draw = SVG('pong').size(width, height)
var background = draw.rect(width, height).fill('lightgray')
var line = draw.line(width/2, 0, width/2, height)
line.stroke({width: 5, color: 'Cyan', dasharray: '5,5'})

var paddleWidth = 20, paddleHeight = 100
var paddleLeft = draw.rect(paddleWidth, paddleHeight)
paddleLeft.x(0).cy(height/2).fill('DarkOrange')
var paddleRight = paddleLeft.clone()
paddleRight.x(width - paddleWidth).fill('LimeGreen')

var ballSize = 20;
var ball = draw.circle(ballSize)
ball.center(width/2, height/2).fill('Yellow')

var playerLeft = playerRight = 0
var scoreLeft = draw.text(playerLeft + '').font({
    size: 32,
    family: 'Menlo, sans-serif',
    anchor: 'end',
    fill: '#fff'
}).move(width/2 - 10, 10)

var scoreRight = scoreLeft.clone()
    .text(playerRight + '')
    .font('anchor', 'start')
    .x(width/2 + 10)

