
class RadioButton extends HTMLElement{
  connectedCallback(){
    this.classList = 'radio_box'

    let id = this.getAttribute('ids').split(',')
    let name = this.getAttribute('names').split(',')
    let labelFor = this.getAttribute('fors').split(',')
    let inputValue = this.getAttribute('values').split(',')

    for(let i =0 ; i < id.length; i++){
      this.innerHTML += `<input type="radio" id=${id[i]} name=${name[i]} value=${inputValue[i]} >
      <label for=${labelFor[i]} class="radio_btn">${inputValue[i]}</label>`
    }

    const inputFirst = this.childNodes[0]
    const inputSecond = this.childNodes[3]
   
    const nextBtnEl = document.querySelector('next-btn')
    
    inputFirst.addEventListener('click',(e) => {
      nextBtnEl.removeAttribute('style')
      nextBtnEl.classList = 'on'      
      this.style.marginBottom = 80+'px'
    })
    inputSecond.addEventListener('click',(e) => {
      nextBtnEl.removeAttribute('style')
      nextBtnEl.classList = 'on'
      this.style.marginBottom = 80+'px'
    })
  }
}
customElements.define('radio-btn',RadioButton)
