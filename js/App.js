import { div } from './base/index.js'
import Image from './components/Image.js'

async function App() {
    const d = div()
    d.append(Image('initial', 'Ruby', 'Emerald'))
    return d
}

export default App;
