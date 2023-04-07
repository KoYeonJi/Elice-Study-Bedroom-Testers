class QuestionSection extends HTMLElement{
  connectedCallback(){
    this.style.display = 'block';

    let titleInfo = this.getAttribute('titleInfo')
    let subTitleInfo = this.getAttribute('subTitleInfo')
    let paraInfo = this.getAttribute('paraInfo')
    let qusNum = this.getAttribute('qusNum')
  
    if(titleInfo === "null"){
      const subTitleValue = subTitleInfo.split(',')
      this.innerHTML = `
          <h2 style="font-size:2.2rem;">${subTitleValue[0].split('_').join(' ')}</h2>
          <h3>${subTitleValue[1].split('_').join(' ')}</h3>
          <p class="question">Q${qusNum}.${paraInfo.split('_').join(' ')}</p>
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