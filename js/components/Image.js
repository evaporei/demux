import { button, h1, img, p } from '../base/index.js'
import srcTree from '../src-tree.js'

const Image = initialSrc => {
    const outer = document.createElement('div')
    outer.append(h1(initialSrc))

    const image = img(`../assets/${initialSrc}.jpg`)
    outer.append(image)

    let inner, btnA, btnB

    const onClick = function onClick (_event) {
        const url = new URL(image.src)
        const pathname = url.pathname
        const imgName = pathname // '/assets/initial.jpg'
            .split('/') // ['', 'assets', 'initial.jpg']
            .pop() // initial.jpg
            .split('.') // ['initial', 'jpg']
            .shift() // 'initial'

        const [optionA, optionB] = srcTree[imgName].next
        let newSrc
        if (this.id == 'btnA') {
            newSrc = optionA
        } else if (this.id == 'btnB') {
            newSrc = optionB
        }

        image.src = `../assets/${newSrc}.jpg`

        if (srcTree[newSrc].next) {
            const [nextA, nextB] = srcTree[newSrc].next
            btnA.innerText = srcTree[nextA].title
            btnB.innerText = srcTree[nextB].title
        } else {
            if (inner.hasChildNodes()) {
                inner.removeChild(btnA)
                inner.removeChild(btnB)
                outer.removeChild(inner)
                outer.append(p('acabou a história!'))
            }
        }
    }

    const [optionA, optionB] = srcTree[initialSrc].next

    btnA = button(srcTree[optionA].title)
    btnA.id = 'btnA'
    btnA.onclick = onClick

    btnB = button(srcTree[optionB].title)
    btnB.id = 'btnB'
    btnB.onclick = onClick

    inner = document.createElement('div')
    inner.append(btnA)
    inner.append(btnB)

    outer.append(inner)
    return outer
}

export default Image
