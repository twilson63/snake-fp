import { compose, map, curry } from './web_modules/ramda.js'

export default compose(
  paintScore,
  paintSnake,
  paintFood,
  paintBoard
)

const paintCell = curry(function(ctx, size, cell) {
  ctx.fillStyle = cell.color
  ctx.fillRect(cell.x * size, cell.y * size, size, size)
  ctx.strokeStyle = 'white'
  ctx.strokeRect(cell.x * size, cell.y * size, size, size)
})

function paintFood(state) {
  const { food, app } = state
  paintCell(app.ctx, app.size, food)
  return state
}

function paintScore(state) {
  const { score, app } = state
  app.ctx.fillStyle = 'white'
  app.ctx.fillText('Score: ' + score, 5, app.h - 5)
  return state
}

function paintSnake(state) {
  const { app, snake } = state
  map(paintCell(app.ctx, app.size), snake)
  return state
}

function paintBoard(state) {
  const { ctx } = state.app

  ctx.fillStyle = 'black'
  ctx.fillRect(0,0,400, 400)
  ctx.strokeStyle = 'white'
  ctx.strokeRect(0,0,400,400)

  return state
}
