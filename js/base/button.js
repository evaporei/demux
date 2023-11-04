const button = (txt, onclick) => {
    const btn = document.createElement('button')
    btn.innerText = txt
    btn.onclick = onclick
    return btn
}

export default button
