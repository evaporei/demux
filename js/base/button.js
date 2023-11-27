const button = txt => {
    const btn = document.createElement('button')
    btn.innerText = txt
    // btn.className = 'nes-btn is-primary'
    btn.className = 'btn'
    return btn
}

export default button
