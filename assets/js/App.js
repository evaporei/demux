import { div } from './base/index.js'
import Image from './components/Image.js'

async function App() {
    const d = div()
    d.style = 'text-align: center'
    let curr = 'initial'
    d.append(Image(curr))
    return d
}

export default App
