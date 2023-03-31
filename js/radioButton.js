
class RadioButton extends HTMLElement{
  connectedCallback(){
    this.classList = 'radio_box'

    let id = this.getAttribute('ids').split(',')
    let name = this.getAttribute('names').split(',')
    let labelFor = this.getAttribute('fors').split(',')
    let inputValue = this.getAttribute('values').split(',')

    for(let i =0 ; i < id.length; i++){
      this.innerHTML += `<input type="radio" id=${id[i]} name=${name[i]} value=${inputValue[i]} />
      <label for=${labelFor[i]} class="radio_btn">${inputValue[i]}</label>`
    }
  }
}
customElements.define('radio-btn',RadioButton)
