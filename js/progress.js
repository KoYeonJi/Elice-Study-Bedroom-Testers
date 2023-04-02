class ProgressBar extends HTMLElement{
  connectedCallback(){
    
    let proVal = this.getAttribute('proVal')
    let totalValue = this.getAttribute('totalValue')

    this.innerHTML = `
     <div>
      <progress value=${proVal} max=${totalValue}></progress>
      <p><span>${proVal}</span> / ${totalValue}</p>
     </div>
    
    `
  }
}

customElements.define('progress-bar',ProgressBar)