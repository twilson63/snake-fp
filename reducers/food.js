import { merge } from '../web_modules/ramda.js'

export default function (
  state = { x: 10, y: 10, color: 'red' }, 
  { type, payload }) {
  if (type === 'EAT') {
    return merge(state, payload)
  }

  if (type === 'SET_FOOD') {
    return merge(state, payload)
  }

  return state

}
