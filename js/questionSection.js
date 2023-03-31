class QuestionSection extends HTMLElement{
  connectedCallback(){
    this.style.display = 'block';

    let titleInfo = this.getAttribute('titleInfo')
    let subTitleInfo = this.getAttribute('subTitleInfo')
    let paraInfo = this.getAttribute('paraInfo')
  
    if(titleInfo === "null"){
      this.innerHTML = `
          <h2>${subTitleInfo}</h2>
          <p>${paraInfo}</p>
      `
    }else if(paraInfo === "null" ){
      this.innerHTML = `
        <h1>
            안녕하세요.<br/>
            <strong>'PuppyTest'</strong>오신걸<br/>
            환영합니다!
        </h1>
        <h2>나의 강아지와 나는 과연?!</h2>
      `
    }
  }
}

customElements.define('question-section',QuestionSection)