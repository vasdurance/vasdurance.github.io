// Calculate translate x distance
const viewportWidth = document.documentElement.clientWidth
const headerContainer = document.querySelector('header .container')
const headerContainerComputedStyle = window.getComputedStyle(headerContainer, null)
let headerContainerWidth = headerContainer.clientWidth
headerContainerWidth -= parseFloat(headerContainerComputedStyle.paddingLeft) + parseFloat(headerContainerComputedStyle.paddingRight)
const card = document.querySelector('.card')
const cardWidth = card.offsetWidth
const x = ((viewportWidth - headerContainerWidth) / 2) + cardWidth
card.style.transform = `translateX(${x}px)`
// Append slide in animation keyframes
const styleElement = document.createElement('style')
const keyFrames = `\
@keyframes slide-in {\
  0% {\
    transform: translateX(${x}px);\
  }\
  100% {\
    transform: translateX(0);\
  }\
}`
styleElement.innerHTML = keyFrames
document.getElementsByTagName('head')[0].appendChild(styleElement)
