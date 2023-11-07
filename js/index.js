import App from './App.js';

const app = async () => {
    const app = document.getElementById('app')

    // OMG I hate jekyll
    app.innerHTML = ''

    app.appendChild(await App());
};

app();
