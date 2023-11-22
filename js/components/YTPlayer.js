const YTPlayer = videoId => {
    const player = document.createElement('iframe')
    player.id = 'ytplayer'
    player.setAttribute('type', 'text/html')
    player.width = 640
    player.height = 360
    player.src = `https://www.youtube.com/embed/${videoId}?autoplay=0&origin=${location.hostname}`
    player.frameBorder = '0'

    return player
}

export default YTPlayer
