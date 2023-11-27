import { div, h1, p } from './base/index.js'
import Video from './components/Video.js'

async function App() {
    const d = div()

    let title = h1("Título")
    title.className = "flex justify-center text-white py-4 text-xl"
    d.append(title)

    let summary1 = p('Lorem ipsum dolor sit amet, consectetur adipiscing elit.')
    summary1.className = "flex justify-center text-white"
    d.append(summary1)
    let summary2 = p('Etiam a dignissim mauris.')
    summary2.className = "flex justify-center text-white"
    d.append(summary2)
    let summary3 = p('Donec in elit vel erat pharetra aliquam vel eget ex.')
    summary3.className = "flex justify-center text-white"
    d.append(summary3)
    let summary4 = p('Interdum et malesuada fames ac ante ipsum primis in faucibus.')
    summary4.className = "flex justify-center text-white"
    d.append(summary4)
    let exemplo = p('Lorem ipsum dolor sit amet, consectetur adipiscing elit.')
    exemplo.className = "flex justify-center"
    d.append(exemplo)

    let curr = 'initial'
    let { outer, inner } = Video(curr)
    d.append(outer)
    d.append(inner)

    return d
}

export default App
