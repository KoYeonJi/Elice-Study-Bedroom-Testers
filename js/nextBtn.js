class NextBtn extends  HTMLElement{
  connectedCallback(){
    const nextBtn = document.createElement('a');
    let btnTxt = this.getAttribute('text');
    let address = this.getAttribute('address');

    this.appendChild(nextBtn);
    nextBtn.classList = 'btn';
    nextBtn.setAttribute('href', address);
    nextBtn.innerText = btnTxt;
  }
}
customElements.define('next-btn',NextBtn)