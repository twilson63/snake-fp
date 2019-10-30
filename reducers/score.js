import { inc } from '../web_modules/ramda.js'

export default function (state=0, { type, payload}) {
  if (type === 'CLEAR') {
    return 0
  }

  if (type === 'EAT') {
    return inc(state)
  }

  return state
}
