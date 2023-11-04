import { button, h1, img } from '../base/index.js'
import srcTree from '../src-tree.js'

console.log('srcTree', srcTree)

const Image = (src, outerOnClick) => {
    const outer = document.createElement('div')
    outer.append(h1(src))

    const image = img(`../assets/${src}.jpg`)
    outer.append(image)

    let btnA, btnB

    const onClick = newSrc => function onClick (_event) {
        const [nextA, nextB] = srcTree[newSrc].next
        btnA.innerText = srcTree[nextA].title
        btnB.innerText = srcTree[nextB].title

        image.src = `../assets/${newSrc}.jpg`
    }

    const [optionA, optionB] = srcTree[src].next

    btnA = button(srcTree[optionA].title)
    btnB = button(srcTree[optionB].title)

    const inner = document.createElement('div')
    inner.append(btnA)
    inner.append(btnB)

    btnA.onclick = onClick(optionA)
    btnB.onclick = onClick(optionB)

    outer.append(inner)
    return outer
}

export default Image
