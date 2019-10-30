export default function (store) {
  var container = document.body
  var canvas = document.createElement('canvas')
  const { w, h } = store.getState().app

  canvas.setAttribute('height', h)
  canvas.setAttribute('width', w)

  var ctx = canvas.getContext('2d')

  document.body.appendChild(canvas)

  store.dispatch({ type: 'SETUP', payload: ctx})

}
