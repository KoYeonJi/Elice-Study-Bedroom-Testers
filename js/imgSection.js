class imgSection extends HTMLElement{
  connectedCallback(){
    const imgEl = document.createElement('img')
    let srcInfo = this.getAttribute('imgInfo')
    let imgDes = this.getAttribute('imgDes')
    
    this.style.display = 'block'
    this.appendChild(imgEl)
    imgEl.setAttribute('src', srcInfo)
    imgEl.setAttribute('alt', imgDes)
  }
}

customElements.define('img-section',imgSection)