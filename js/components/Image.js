import { button, h1, img, p } from '../base/index.js'
import srcTree from '../src-tree.js'

// I hate you Jekyll, once again...
const buildImgPath = src =>
    location.hostname == 'evaporei.github.io'
        ? `../demux/assets/${src}.jpg`
        : `../assets/${src}.jpg`

const Image = initialSrc => {
    const outer = document.createElement('div')
    const title = h1(initialSrc)
    title.className = 'title'
    outer.append(title)
    outer.className = 'nes-container with-title is-centered'

    const image = img(buildImgPath(initialSrc))
    outer.append(image)

    let inner, btnA, btnB

    const onClick = function onClick (_event) {
        const url = new URL(image.src)
        const pathname = url.pathname
        const imgName = pathname // '/assets/initial.jpg'
            .split('/') // ['', 'images', 'initial.jpg']
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

        title.innerText = srcTree[newSrc].title
        image.src = buildImgPath(newSrc)

        if (srcTree[newSrc].next) {
            const [nextA, nextB] = srcTree[newSrc].next
            btnA.innerText = srcTree[nextA].title
            btnB.innerText = srcTree[nextB].title
        } else {
            if (inner.hasChildNodes()) {
                inner.removeChild(btnA)
                inner.removeChild(btnB)
                outer.removeChild(inner)
                outer.append(p('acabou a história! Aperte F5 para comecar novamente ;)'))
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
