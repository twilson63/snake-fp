import { merge } from '../web_modules/ramda.js'

const initialState = {
  h: 400,
  w: 400,
  size: 10,
  running: false,
  ctx: null
}

export default function (
  state=initialState, 
  { type, payload }) {
  
  if (type === 'SETUP') {
    return merge(state, { 
      ctx: payload,
      running: true 
    })
  }

  if (type === 'STOP') {
    return merge(state, { running: false })
  }

  return state


}

