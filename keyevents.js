import { indexOf } from './web_modules/ramda.js'

export default function (dispatch) {
  document.addEventListener('keydown', function (e) {
    if (indexOf(e.keyCode, [ 37, 38, 39, 40 ]) > -1) {
      dispatch({type: 'CHANGE', payload: e.keyCode})
    }
  })
}
