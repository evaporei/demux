import { div } from './base/index.js'
import Video from './components/Video.js'

async function App() {
    const d = div()
    d.style = 'text-align: center'
    let curr = 'initial'
    d.append(Video(curr))
    return d
}

export default App
