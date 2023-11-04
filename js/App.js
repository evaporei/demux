import Header from './components/Header.js'
import Cat from './components/Cat.js'

async function App() {
  const template = document.createElement('template')
  template.innerHTML = `
    <div class="container">
      ${Header()}
      ${await Cat()}
    </div>
  `
  // Return a new node from template
  return template.content.cloneNode(true)
}

export default App;
