class QuestionSection extends HTMLElement{
  connectedCallback(){
    this.style.display = 'block';

    let titleInfo = this.getAttribute('titleInfo')
    let subTitleInfo = this.getAttribute('subTitleInfo').split(',')
    let paraInfo = this.getAttribute('paraInfo')
    let qusNum = this.getAttribute('qusNum')
  
    if(titleInfo === "null"){
      this.innerHTML = `
          <h2>${subTitleInfo[0].split('_').join(' ')}</h2>
          <h3>${subTitleInfo[1].split('_').join(' ')}</h3>
          <p class="question"><span class="number">Q${qusNum}.</span> ${paraInfo.split('_').join(' ')}</p>
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