import { div } from '../base/index.js'

const HomeLogo = () => {
    const d = div()
    d.className = "flex justify-center space-x-4 py-4"
    d.innerHTML = `
        <a href="." class="flex justify-center"><img src="assets/titulo_ncr.png" style="width:50%;" /></a>
    `
    return d
}

export default HomeLogo
