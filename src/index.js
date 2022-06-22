const win = window
const doc = document
const $ = q => doc.querySelector(q)
const $$ = q => doc.querySelectorAll(q)
const domReady = f => doc.readyState[7] ? f() : setTimeout(domReady, 9, f)

domReady(() => {
  console.log($('input').value)
})
