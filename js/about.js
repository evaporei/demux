import Navbar from './components/Navbar.js'
import HomeLogo from './components/HomeLogo.js'

const app = () => {
    document.body.append(HomeLogo())
    document.body.append(Navbar())
}

app()
