import button from './button.js'
import h1 from './h1.js'
import img from './img.js'

const createElement = tag => document.createElement(tag)

const div = () => createElement('div')

export { button, h1, img, div }
