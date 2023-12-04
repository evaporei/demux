const YTPlayer = videoId => {
    const player = document.createElement('iframe')
    player.id = 'ytplayer'
    player.setAttribute('type', 'text/html')
    player.width = 1280
    player.height = 720
    player.src = `https://www.youtube.com/embed/${videoId}?autoplay=0&origin=${location.hostname}`
    player.frameBorder = '0'
    player.allowFullscreen = true
    player.allow = 'fullscreen'
    player.setAttribute('allow', 'fullscreen')

    return player
}

export default YTPlayer
