import { times, equals, merge, 
  clone, head,  inc, dec, prepend, dropLast } from '../web_modules/ramda.js'

const initialState = times(function (i) {
  return { x: i, y: 0, color: 'pink'}
}, 5)

export default function (
  state=initialState, 
  { type, payload }) {
  // get head
  let h = clone(head(state))
  const directionEq = equals(payload)

  if (type === 'EAT' || type === 'MOVE') {
    if (directionEq('RIGHT')) {
      h = merge(h, { x: inc(h.x) })
    } else if (directionEq('LEFT')) {
      h = merge(h, { x: dec(h.x) })
    } else if (directionEq('UP')) {
      h = merge(h, { y: dec(h.y)})
    } else if (directionEq('DOWN')) {
      h = merge(h, { y: inc(h.y)})
    } 
  }

  if (type === 'EAT') {
    return prepend(h, state)
  } else if (type === 'MOVE') {
    return dropLast(1, prepend(h, state))
  }

  return state
    
}
