import { div, h1, p } from './base/index.js'
import Video from './components/Video.js'

function App() {
    const d = div()

    let summaryWindow = div()
    summaryWindow.className = "window"
    summaryWindow.style = 'width: 60%'

    let titleBar = div()
    titleBar.className = "title-bar"
    let title = h1("SINOPSE")
    title.className = "flex justify-center text-black py-4 text-xl title"
    titleBar.append(title)
    summaryWindow.append(titleBar)

    let separator = div()
    separator.className = "separator"
    summaryWindow.append(separator)

    let c = div() // content
    c.className = "window-pane"

    let summary = p('\xa0\xa0\xa0\xa0\xa0\xa0\xa0Após ser convidado por uma colega da faculdade para uma festa universitária, Lucas se encontra em um dilema. Com suas poucas habilidades sociais, ele deverá escolher em qual das duas garotas ele deverá investir: a garota popular e divertida que o convidou, ou a garota misteriosa e atraente que ele conheceu na festa. Quem Lucas deverá escolher? E como ele vai agir para conquistar a garota de seus sonhos?')
    summary.className = "flex justify-center text-black"
    c.append(summary)

    summaryWindow.append(c)
    let foo = div()
    foo.className = "flex justify-center"
    foo.append(summaryWindow)
    d.append(foo)

    let videoDiv = div()
    videoDiv.className = "window"
    videoDiv.style = "width: 60%"

    let videoTitle = div()
    videoTitle.className = "title-bar"
    let tH1 = h1("VÍDEO")
    tH1.className = "flex justify-center text-black py-4 text-xl title"
    videoTitle.append(tH1)
    videoDiv.append(videoTitle)

    let separator2 = div()
    separator2.className = "separator"
    videoDiv.append(separator)

    let videoContent = div()
    videoContent.className = "window-pane"
    let curr = 'initial'
    let { outer, inner } = Video(curr)
    videoContent.append(outer)
    videoContent.append(inner)

    videoDiv.append(videoContent)

    let bar = div()
    bar.className = "flex justify-center"
    bar.append(videoDiv)
    d.append(bar)

    return d
}

export default App
