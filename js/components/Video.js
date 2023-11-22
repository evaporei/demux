import { button, h1, p } from '../base/index.js'
import srcTree from '../src-tree.js'
import YTPlayer from './YTPlayer.js'

const Video = initialSrc => {
    const outer = document.createElement('div')
    const title = h1(initialSrc)
    title.className = 'title'
    outer.append(title)
    outer.className = 'nes-container with-title is-centered'

    let currSrc = initialSrc
    let currUrl = srcTree[currSrc].url
    const player = YTPlayer(currUrl)
    outer.append(player)

    let inner, btnA, btnB

    const onClick = function onClick (_event) {
        const [optionA, optionB] = srcTree[currSrc].next
        let newSrc
        if (this.id == 'btnA') {
            newSrc = optionA
        } else if (this.id == 'btnB') {
            newSrc = optionB
        }

        currSrc = newSrc

        title.innerText = srcTree[newSrc].title
        player.src = `https://www.youtube.com/embed/${srcTree[newSrc].url}?autoplay=0&origin=${location.hostname}`

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

export default Video
