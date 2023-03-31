class Card extends HTMLElement{
  connectedCallback(){
    this.classList = 'card'
    let qusTit = this.getAttribute('qusTit')
    let qusSub = this.getAttribute('qusSub')
    let qusPara = this.getAttribute('qusPara')

    let nextBtnHref = this.getAttribute('nextBtnHref')
    let nextBtnTxt = this.getAttribute('nextBtnTxt') 

    let imgSrc = this.getAttribute('imgSrc')
    let imgAlt = this.getAttribute('imgAlt')

    let radioIds = this.getAttribute('radioIds')
    let radioNames = this.getAttribute('radioNames')
    let radioLabelFors = this.getAttribute('radioLabelFors')
    let radioInputValues = this.getAttribute('radioInputValues')

    this.innerHTML = `
      <img-section imgInfo=${imgSrc} imgDes=${imgAlt}></img-section>
      <section>
        <question-section titleInfo=${qusTit} subTitleInfo=${qusSub} paraInfo=${qusPara}></question-section>
        ${radioIds === null ? '' : `<radio-btn 
                                      ids=${radioIds} 
                                      names=${radioNames} 
                                      values=${radioInputValues}
                                      fors=${radioLabelFors}`} 
        <next-btn address=${nextBtnHref} text=${nextBtnTxt}></next-btn>
      </section>
    ` 
  }
}


customElements.define('card-layout',Card)