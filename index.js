import { map, compose, equals, prop, head, pick } from './web_modules/ramda.js'
import { createStore, combineReducers } from './web_modules/redux.js'
import init from './init.js'
import appReducer from './reducers/app.js'
import foodReducer from './reducers/food.js'
import snakeReducer from './reducers/snake.js'
import scoreReducer from './reducers/score.js'
import directionReducer from './reducers/direction.js'
import keyevents from './keyevents.js'

import render from './render.js'

const store = createStore(
  combineReducers({ 
    app: appReducer, 
    food: foodReducer,
    snake: snakeReducer,
    score: scoreReducer,
    direction: directionReducer
  }))

store.subscribe(function () {
  const state = store.getState()
  const { app, food, snake, direction } = state
  const xEq = compose(equals, prop('x'), head)(snake)
  const yEq = compose(equals, prop('y'), head)(snake)

  if (xEq(-1) || yEq(-1) || xEq(app.w / app.size) || yEq(app.h / app.size)) {
    if (app.running) {
      store.dispatch({ type: 'STOP'})
    }
    return
  }
   
  if (app.running) { 
    render(state)
  }
})

init(store)
keyevents(store.dispatch)
window.store = store

tick(true)

function tick(start=false) {
  const { app, food, snake, direction } = store.getState()
  if (app.running && eatFood(food, head(snake))) {
    store.dispatch({type: 'EAT', payload: createFood(app) })
  } else if (start || app.running) {
    store.dispatch({type: 'MOVE', payload: direction})
  }
  setTimeout(tick, 60)
}

function randomInt(min, max) {
  return Math.round(Math.random() * (max - min) / min)
}

function createFood({h, w, size}) {
  
  const food = { 
    x: randomInt(size, w), 
    y: randomInt(size, h), 
    color: 'red' 
  }
  return food
}

function eatFood(food, snakeHead) {
  const keys = ['x', 'y']
  const loc = pick(keys)
  return equals(loc(food), loc(snakeHead))

}
