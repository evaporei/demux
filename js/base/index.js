import button from './button.js'
import h1 from './h1.js'
import img from './img.js'
import p from './p.js'

const createElement = tag => document.createElement(tag)

const div = () => createElement('div')
const nav = () => createElement('nav')

export { button, h1, img, div, nav, p }
