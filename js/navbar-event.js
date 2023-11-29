const homeLink = document.getElementById('home-link')
const aboutLink = document.getElementById('about-link')
const charsLink = document.getElementById('characters-link')
const videosLink = document.getElementById('videos-link')

if (location.pathname.endsWith('/') || location.pathname.endsWith('/index.html')) {
    homeLink.classList.add('is-primary')
} else if (location.pathname.endsWith('/sobre.html')) {
    aboutLink.classList.add('is-primary')
} else if (location.pathname.endsWith('/personagens.html')) {
    charsLink.classList.add('is-primary')
} else if (location.pathname.endsWith('/videos.html')) {
    videosLink.classList.add('is-primary')
}
