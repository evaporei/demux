const img = src => {
    const img = document.createElement('img')
    img.src = src
    img.style = 'max-width: 450px; max-height: 300px'
    return img
}

export default img
