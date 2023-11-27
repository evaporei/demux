import { button, p } from '../base/index.js'
import srcTree from '../src-tree.js'
import YTPlayer from './YTPlayer.js'

const Video = initialSrc => {
    const outer = document.createElement('div')
    outer.className = 'flex justify-center py-4'

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

        player.src = `https://www.youtube.com/embed/${srcTree[newSrc].url}?autoplay=0&origin=${location.hostname}`

        if (srcTree[newSrc].next) {
            const [nextA, nextB] = srcTree[newSrc].next
            btnA.innerText = srcTree[nextA].title
            btnB.innerText = srcTree[nextB].title
        } else {
            if (inner.hasChildNodes()) {
                inner.removeChild(btnA)
                inner.removeChild(btnB)
                let finalTxt = p('Obrigado por jogar!')
                finalTxt.className = 'flex justify-center'
                outer.after(finalTxt)
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
    inner.className = 'flex justify-center'
    inner.append(btnA)
    inner.append(btnB)

    return { outer, inner }
}

export default Video
