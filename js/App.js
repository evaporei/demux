import Image from './components/Image.js'

async function App() {
  const template = document.createElement('template')
  template.innerHTML = `
    <div class="container">
      ${await Image('initial', 'Ruby', 'Emerald')}
    </div>
  `
  // Return a new node from template
  return template.content.cloneNode(true)
}

export default App;
