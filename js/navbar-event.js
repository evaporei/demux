const aboutLink = document.getElementById('about-link')
const charsLink = document.getElementById('characters-link')
const videosLink = document.getElementById('videos-link')
const extraLink = document.getElementById('extra-link')

if (location.pathname.endsWith('/sobre.html')) {
    aboutLink.classList.add('is-primary')
}

if (location.pathname.endsWith('/personagens.html')) {
    charsLink.classList.add('is-primary')
}

if (location.pathname.endsWith('/videos.html')) {
    videosLink.classList.add('is-primary')
}

if (location.pathname.endsWith('/extra.html')) {
    extraLink.classList.add('is-primary')
}
