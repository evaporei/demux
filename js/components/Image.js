const Image = async (src, optionA, optionB) => `
    <div class="card">
        <h1>${src}</h1>
      <img src="../../assets/${src}.jpg" style="max-width: 450px; max-height: 300px" />
      <div>
        <button>${optionA}</button>
        <button>${optionB}</button>
      </div>
    </div>`

export default Image;
