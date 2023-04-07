const resultTit = document.getElementById('result');
const resultSub = document.getElementById('subResult');

const reStartBtn = document.getElementById('reStart');

let firstQues = []
let secQues = []
let thirdQues = []
let forthQues =[]
let fifthQues = []

for(let i = 1 ; i < 6; i++){
  firstQues.push(localStorage.getItem('1_'+i))
  secQues.push(localStorage.getItem('2_'+i))
  forthQues.push(localStorage.getItem('4_'+i))
}

for(let j = 1; j < 7 ; j++){
  thirdQues.push(localStorage.getItem('3_'+j))
}

for(let k = 1; k < 3; k++){
  fifthQues.push(localStorage.getItem('5_'+ k))
}

let allQues = [...firstQues,...secQues,...thirdQues,...forthQues,...fifthQues]

const firstYes = firstQues.filter(first => first === 'YES')
const secondYes = secQues.filter(sec => sec === 'YES')
const thirdYes = thirdQues.filter(third => third === 'YES')
const forthYes = forthQues.filter(forth => forth === 'YES')
const fifthYes = fifthQues.filter(fifth => fifth === 'YES')
const allYes = allQues.filter(all => all === 'YES')

if(allYes.length < 6){
  resultTit.innerText = '좋은 주인입니다!'
}else if(allYes.length < 14){
  resultTit.innerText = '노력이 필요한 주인입니다!'
}else{
  resultTit.innerText = '교육이 필요합니다. 노력하세요...'
}

resultSub.innerHTML = `
<p>반려견에게 대하는 나의 태도!(내가 공격성 있는 주인인가?) YES : ${firstYes.length} 개</p>
<p>나의 평소행동에서 잘못된 행동 체크! YES : ${secondYes.length} 개</p>
<p>강아지 배변 훈련 할때 놓칠 수 있는 부분! YES : ${thirdYes.length} 개</p>
<p>나의 반려견이 변을 먹는 행동을 보는 나는?! YES : ${forthYes.length} 개</p>
<p>나의 반려견의 식습관은?! YES : ${fifthYes.length} 개</p>
`

reStartBtn.addEventListener('click', () => {
  window.localStorage.clear()
})