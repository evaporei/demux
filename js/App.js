import { div } from './base/index.js'
import Video from './components/Video.js'

async function App() {
    const d = div()
    // d.style = 'text-align: center'
    let curr = 'initial'
    let { outer, inner } = Video(curr)
    d.append(outer)
    d.append(inner)
    return d
}

export default App
