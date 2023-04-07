class Card extends HTMLElement{
  connectedCallback(){
    this.classList = 'card'
    let qusTit = this.getAttribute('qusTit')
    let qusSub = this.getAttribute('qusSub')
    let qusPara = this.getAttribute('qusPara')
    let num = this.getAttribute('num')

    let nextBtnHref = this.getAttribute('nextBtnHref')
    let nextBtnTxt = this.getAttribute('nextBtnTxt') 

    let imgSrc = this.getAttribute('imgSrc')
    let imgAlt = this.getAttribute('imgAlt')

    let radioIds = this.getAttribute('radioIds')
    let radioNames = this.getAttribute('radioNames')
    let radioLabelFors = this.getAttribute('radioLabelFors')
    let radioInputValues = this.getAttribute('radioInputValues')

    let progressValue = this.getAttribute('progressValue')
    let proTotal = this.getAttribute('proToTal')

    this.innerHTML = `
      <img-section imgInfo=${imgSrc} imgDes=${imgAlt}></img-section>
      <section>
        ${qusTit === "null" ? `<progress-bar proVal=${progressValue} totalValue=${proTotal}></progress-bar>` : ''}
        <question-section titleInfo=${qusTit} subTitleInfo=${qusSub} paraInfo=${qusPara} qusNum=${num}></question-section>
       
        ${radioIds === null ? `<next-btn address=${nextBtnHref} text=${nextBtnTxt}></next-btn>`
                              : `<radio-btn 
                                      ids=${radioIds} 
                                      names=${radioNames} 
                                      values=${radioInputValues}
                                      fors=${radioLabelFors}
                                  ></radio-btn>
                                  <next-btn address=${nextBtnHref} text=${nextBtnTxt} style='display:none'></next-btn>
                                `
                                  
          } 
                                
       
      </section>
    ` 
  }
}


customElements.define('card-layout',Card)


// export class resultValue extends Card{
  
// }