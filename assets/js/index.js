import App from './App.js';

const app = async () => {
  document.getElementById('app').appendChild(await App());
};

app();
