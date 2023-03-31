class LoadingPage extends HTMLElement{
  connectedCallback(){
    this.id = 'loadingPage'

    this.innerHTML= `
    <div id="loadingImgBox">
      <img src="../etc/imgs/loading.gif" alt="강아지 움직이는 사진"/>
      <p>로딩중...</p>
    </div>
    `
  }
}


customElements.define('loading-page',LoadingPage)