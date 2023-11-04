import { button, h1, img } from '../base/index.js'

const Image = (src, optionA, optionB) => {
    const outer = document.createElement('div')
    outer.append(h1(src))

    const image = img(`../assets/${src}.jpg`)
    outer.append(image)

    const onClick = newSrc => _event => {
        console.log('onclick', newSrc)
        image.src = `../assets/${newSrc}.jpg`
    }

    const inner = document.createElement('div')
    inner.append(button(optionA, onClick(optionA)))
    inner.append(button(optionB, onClick(optionB)))

    outer.append(inner)
    return outer
}

export default Image;
