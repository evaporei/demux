import { button, h1, img } from '../base/index.js'

const onClick = who => _event => console.log('onclick', who)

const Image = (src, optionA, optionB) => {
    const outer = document.createElement('div')
    outer.append(h1(src))
    outer.append(img(`../assets/${src}.jpg`))

    const inner = document.createElement('div')
    inner.append(button(optionA, onClick(optionA)))
    inner.append(button(optionB, onClick(optionB)))

    outer.append(inner)
    return outer
}

export default Image;
