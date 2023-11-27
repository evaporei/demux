import { nav } from '../base/index.js'

const Navbar = () => {
    const n = nav()
    n.className = "flex justify-center space-x-4 py-4"
    n.innerHTML = `
        <!-- change css class (success?) if page is active-->
        <a href="./sobre.html" class="px-4 py-2 nes-btn">SOBRE</a>
        <a href="." class="px-4 py-2 nes-btn">PERSONAGENS</a>
        <a href="." class="px-4 py-2 nes-btn">VÍDEOS</a>
        <a href="." class="px-4 py-2 nes-btn">EXTRA</a>
    `
    return n
}

export default Navbar
