import { div, h1, p } from './base/index.js'
import Video from './components/Video.js'

async function App() {
    const d = div()
    d.className = "window"
    d.style = 'width: 70%'

    let titleBar = div()
    titleBar.className = "title-bar"
    let title = h1("SINOPSE")
    title.className = "flex justify-center text-black py-4 text-xl title"
    titleBar.append(title)
    d.append(titleBar)

    let separator = div()
    separator.className = "separator"
    d.append(separator)

    let c = div() // content
    c.className = "window-pane"

    let summary = p('\xa0\xa0\xa0\xa0\xa0\xa0\xa0Após ser convidado por uma colega da faculdade para uma festa universitária, Lucas se encontra em um dilema. Com suas poucas habilidades sociais, ele deverá escolher em qual das duas garotas ele deverá investir: a garota popular e divertida que o convidou, ou a garota misteriosa e atraente que ele conheceu na festa. Quem Lucas deverá escolher? E como ele vai agir para conquistar a garota de seus sonhos?')
    summary.className = "flex justify-center text-black"
    c.append(summary)

    let curr = 'initial'
    let { outer, inner } = Video(curr)
    c.append(outer)
    c.append(inner)

    d.append(c)

    return d
}

export default App
