
class RadioButton extends HTMLElement{
  connectedCallback(){
    this.classList = 'radio_box'

    let id = this.getAttribute('ids').split(',')
    let name = this.getAttribute('names').split(',')
    let labelFor = this.getAttribute('fors').split(',')
    let inputValue = this.getAttribute('values').split(',')

    const nextBtnEl = document.querySelector('.btn')

    const radioBtn1 = document.querySelector(`input[name=${name[0]}]`)
    const radioBtn2 = document.querySelector(`input[name=${name[1]}]`)
    
    for(let i =0 ; i < id.length; i++){
      this.innerHTML += `<input type="radio" id=${id[i]} name=${name[i]} value=${inputValue[i]} />
      <label for=${labelFor[i]} class="radio_btn">${inputValue[i]}</label>`

      const radioBtn1 = document.querySelector(`input[name=${name[0]}]`)
      const radioBtn2 = document.querySelector(`input[name=${name[1]}]`)


      radioBtn1.addEventListener('click',function(){
        console.log(radioBtn1.value)
      })

      radioBtn2.addEventListener('click',function(){
        console.log(radioBtn2.value)
      })
    }

   
  }
}
customElements.define('radio-btn',RadioButton)
