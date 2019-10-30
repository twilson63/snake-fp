import { equals, always, cond } from '../web_modules/ramda.js'

export default function (state='RIGHT', { type, payload }) {
  if (type === 'CHANGE') {
    return cond([
     [equals(37), always('LEFT')],
     [equals(38), always('UP')],
     [equals(39), always('RIGHT')],
     [equals(40), always('DOWN')]
    ])(payload)

  }

  return state

}
