import { div } from './base/index.js'
import Image from './components/Image.js'

async function App() {
    const d = div()
    d.append(Image('initial', 'ruby01', 'emerald01'))
    return d
}

export default App;
