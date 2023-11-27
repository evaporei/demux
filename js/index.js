import App from './App.js'
import Navbar from './components/Navbar.js'
import HomeLogo from './components/HomeLogo.js'

const app = () => {
    const app = document.getElementById('app')
    const homeLogo = HomeLogo()

    app.append(App())
    app.before(homeLogo)
    homeLogo.after(Navbar())
}

app()
